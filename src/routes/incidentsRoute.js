import express from 'express';
import IncidentsController from '../controllers/incidentsController';
import Validate from '../middlewares/validatePost';

const router = express.Router();

router.get('/red-flags', IncidentsController.getAllRedFlags);

router.get('/red-flags/:id', Validate.validateId, IncidentsController.getRedFlag);

router.post('/red-flags', Validate.validatePost, IncidentsController.postRedFlag);

router.patch('/red-flags/:id/location', Validate.validateId, Validate.validateLocationUpdate, IncidentsController.updateLocation);

router.patch('/red-flags/:id/comment', Validate.validateId, Validate.validateCommentUpdate, IncidentsController.updateComment);

router.delete('/red-flags/:id', Validate.validateId, IncidentsController.deleteRedFlag);

export default router;
