import mongoose from 'mongoose';
import { config as dotenv } from 'dotenv';
dotenv();

mongoose.connect(process.env.MONGO_URI as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => console.log('Successfully connected to MongoDB'))
    .catch(err => console.log(err));