import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require('express');
const router = express.Router();
import useRegression from '../MachineLearning/controller.js'
const multer = require('multer');


var featurespath="";
var targetspath="";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, './MachineLearning/data')
  },
  filename: (req, file, cb) => {
      const{body :{modelname}}=req;
      const{body :{model}}=req;
      const filename=model+'-'+file.fieldname+'-'+modelname +/* Date.now() + */'-' + file.originalname;
      if(file.fieldname=='features'){
        featurespath=__dirname+"\\..\\MachineLearning\\data\\"+filename;
      }
      else{targetspath=__dirname+"\\..\\MachineLearning\\data\\"+filename}
      cb(null, filename)
  }
});

const cupload = multer({storage:storage}).fields([
  { name: 'features', maxCount: 1 },
  { name: 'targets', maxCount: 1 },
]);

router.post('/buildmodel',cupload, function(req, res){
  console.log(req.body)
   
    return res.status(200).send('ok')
  });




export default router;