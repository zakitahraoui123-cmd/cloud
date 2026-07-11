import multer from "multer"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'my-uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
  
    cb(null, file.fieldname + '-' + uniqueSuffix+file.originalname+'.webp')
      
  }
})

const upload = multer({ storage: storage })


export default upload;