/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1629375185071_2971';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    uploadDir: 'app/public/upload',
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    // eslint-disable-next-line array-bracket-spacing
    domainWhiteList: ['*'],
  };

  config.view = {
    mapping: { '.html': 'ejs' },
  };

  config.jwt = {
    secret: 'Nick',
  };

  config.multipart = {
    mode: 'file',
  };

  config.cors = {
    origin: '*',
    credentials: true, // 允许 Cookie 跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  exports.mysql = {
    // 单数据库信息配置
    // client: {
    //   // host
    //   host: 'localhost',
    //   // 端口号
    //   port: '3306',
    //   // 用户名
    //   user: 'root',
    //   // 密码
    //   password: '',
    //   // 数据库名
    //   database: 'test',
    // },
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '',
      // 数据库名
      database: 'juejue-cost',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  return {
    ...config,
    ...userConfig,
  };
};
