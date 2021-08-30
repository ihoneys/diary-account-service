'use strict';
const fs = require('fs');
const moment = require('moment');
const mkdirp = require('mkdirp');
const path = require('path');

const Controller = require('egg').Controller;

class UploadController extends Controller {
  async upload() {
    const { ctx } = this;

    const file = ctx.request.files[0];
    // 声明存放资源的路径
    let uploadDir = '';
    try {
      const f = fs.readFileSync(file.filepath);
      // 获取当前日期
      const day = moment(new Date()).format('YYYYMMDD');
      // 2.创建图片保存的路径
      const dir = path.join(this.config.uploadDir, day);
      const date = Date.now();
      await mkdirp(dir);
      // 返回图片保存路径
      uploadDir = path.join(dir, date + path.extname(file.filename));
      // 写入文件夹
      fs.writeFileSync(uploadDir, f);
    } finally {
      // 清除临时文件夹；
      ctx.cleanupRequestFiles();
    }
    ctx.body = {
      code: 200,
      msg: '上传成功',
      data: uploadDir.replace(/app/g, ''),
    };
  }
}
module.exports = UploadController;
