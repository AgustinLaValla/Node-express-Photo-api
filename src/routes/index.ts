import { Router } from 'express';
import multer from '../libs/multer';
const router = Router(); //Devuelve un objeto enrutador

import { createPhoto, getPhotos, getPhoto, updatePhoto,deletePhoto } from '../controllers/photo.controller'

router.route('/photos').get(getPhotos)
                       .post(multer.single('image'),createPhoto)

router.route('/photos/:id').get(getPhoto)
                           .put(updatePhoto)
                           .delete(deletePhoto) 

export default router;