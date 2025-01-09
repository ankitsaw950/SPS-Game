import {Router} from 'express';
import { githubCallback, googleCallback } from '../controllers/auth.controllers.js'

const router = Router();

router.route('/login-with-google').get()
router.route('/login-with-google/callback').get(googleCallback)




router.route('/login-with-github').get()
router.route('/login-with-github/callback').get(githubCallback)


router.route('/login-with-google/failed').get();
router.route('/login-with-github/failed').get();

export default router