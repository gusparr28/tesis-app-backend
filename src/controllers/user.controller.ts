import { Request, Response } from 'express';

import User from '../models/User';

export const signUp = async (req: Request, res: Response): Promise<Response> => {
    const { name } = req.body;
    try {
        if (!name) return res.status(422).json({ status: 422, error: 'Please enter your name' });
        const savedUser = await User.findOne({ name });
        if (savedUser) return res.status(422).json({ status: 422, error: 'User already exists' });
        const newUser = new User({
            name
        });
        await newUser.save();
        return res.status(200).json({ status: 200, message: 'User sucessfully signed up' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    };
};
