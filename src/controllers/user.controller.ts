import { Request, Response } from 'express';

import User from '../models/User';

export const signUp = async (req: Request, res: Response): Promise<Response> => {
    const { name } = req.body;
    try {
        const newUser = new User({
            name
        });
        await newUser.save();
        return res.status(200).json({ status: 200, message: '¡Te has registrado exitosamente!', data: newUser });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ status: 500, message: 'Error de servidor', error: e });
    };
};
