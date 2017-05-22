const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')

const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev
})
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = new Koa()
    const router = new Router()

    router.get('/p/:id', async ctx => {
      const actualPage = (ctx.params.id === 'Todo') ? '/Todo' : '/post';
      const {
        req,
        res
      } = ctx;
      const queryParams = {
        title: ctx.params.id
      }
      app.render(req, res, actualPage, queryParams)
      ctx.respond = false
    })

    router.get('*', async ctx => {
      const {
        req,
        res
      } = ctx;
      await handle(req, res);
      // 为了避免使用 Koa 的内置响应处理功能，您可以直接赋值 this.repond = false;。
      // 如果您不想让 Koa 来帮助您处理 reponse，而是直接操作原生 res 对象，那么请使用这种方法。
      ctx.respond = false
    })

    server.use(async(ctx, next) => {
      ctx.res.statusCode = 200
      await next()
    })

    server.use(router.routes())
    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })