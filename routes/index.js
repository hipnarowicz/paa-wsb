const router = require('koa-router')()
const store = require('../store')

router.get('/string', async (ctx, next) => {
  tasks = await store.listTasks()
  await ctx.render('index', { tasks })
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
