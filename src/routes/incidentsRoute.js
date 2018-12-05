import express from 'express';
import IncidentsController from '../controllers/incidentsController';
import ValidatePost from '../middlewares/validatePost';

const router = express.Router();

router.get('/red-flags', IncidentsController.getAllRedFlags);

router.get('/red-flags/:id', IncidentsController.getRedFlag);

router.post('/red-flags', ValidatePost.validatePost, IncidentsController.postRedFlag);

export default router;
