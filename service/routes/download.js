
var express = require('express');
var router = express.Router();
var multipart = require('connect-multiparty');

var multipartMiddleware = multipart();

router.get('/', multipartMiddleware, function (req, res) {  
    if (req.query.filename=='stuInfoTemplate') {  
      //相对路径  
      res.download('public/downloads/留学生信息模板.xlsx'); 
    }else if(req.query.filename=='agencyTemplate'){
      res.download('public/downloads/中介模板.xlsx'); 
    }else{  
        res.json({code:2,message:'找不到请求文件'});
    }  
  });  
  
module.exports = router;