import express, { Router } from 'express';

const router = Router();

import { signUp } from '../controllers/user.controller';

router.post('/', signUp);

export default router;