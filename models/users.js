/**
 * Created by Eric on 2018/4/1.
 */
//用户信息
const User = require('../lib/mongo').User

module.exports = {
  //注册一个用户
  create: function create (user) {
    return User.create(user).exec()
  },
  //通过用户名获取用户信息
  getUserByName: function getUserByName (name) {
    return User
      .findOne({ name: name })
      .addCreatedAt() //自定义的插件
      .exec()
  }
}

