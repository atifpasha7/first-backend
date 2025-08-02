import multer from 'multer';

const storage=multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './publicfiles'); // specify the directory to save uploaded files
  },
   filename: function(req, file, cb) { 
      cb(null, file.originalname);// append timestamp to the original filename
   }
})

 const upload = multer({
  storage,
}) // 'file' is the name of the file input field in the form

export { upload };