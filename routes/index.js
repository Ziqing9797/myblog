/**
 * Created by Eric on 2018/3/31.
 */
module.exports = function (app) {
  app.get('/', function (req, res) {
    res.redirect('/posts')
  })
  app.use('/signup',  require('./signup'))  //注册
  app.use('/signin',  require('./signin'))  //登录
  app.use('/signout', require('./signout')) //登出
  app.use('/posts',   require('./posts'))   //发表
  app.use('/comments',require('./comments'))//评论

}
