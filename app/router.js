'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const _jwt = middleware.jwtErr(app.config.jwt.secret);
  router.get('/', controller.home.index);
  router.get('/user', controller.home.user);
  router.post('/add', controller.home.add);
  router.post('/add_user', controller.home.addUser);
  router.post('/edit_user', controller.home.editUser);
  router.post('/delete_user', controller.home.deleteUser);

  // 真是项目接口
  router.post('/api/user/register', controller.user.register);
  router.post('/api/user/login', controller.user.login);
  router.post('/api/user/test', _jwt, controller.user.test);
  router.post('/api/user/get_userinfo', _jwt, controller.user.getUserInfo);
  router.post('/api/user/edit_userinfo', _jwt, controller.user.editUserInfo);
  router.get('/api/user/modify_pass', _jwt, controller.user.modifyPass); // 重置密码
  router.post('/api/upload', _jwt, controller.upload.upload); // 上传图片
  router.post('/api/bill/add', _jwt, controller.bill.add); // 添加账单
  router.get('/api/bill/list', _jwt, controller.bill.list); // 添加账单列表
  router.get('/api/bill/detail', _jwt, controller.bill.detail); // 获取详情
  router.post('/api/bill/update', _jwt, controller.bill.update); // 修改账单
  router.post('/api/bill/delete', _jwt, controller.bill.delete); // 修改账单
  router.get('/api/bill/data', _jwt, controller.bill.data); // 获取数据
  router.get('/api/type/list', _jwt, controller.type.list); // 获取收入支出类型
};
