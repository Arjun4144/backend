//require ('dotenv').config({path: '../.env'})
// import mongoose, { connect } from 'mongoose';
// import { DB_NAME } from './constants'

import { app } from './app.js';


import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({ path: '../.env' });



connectDB()
    .then(() => {
        app.on('error', (error) => {
            console.log('ERROR:', error)
            throw error
        })

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log('MONGO db connection failed !!', err);
    })









/*
import express from 'express';
const app = express()


(async () => {
    try {
        mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on('error', (error) => {
            console.log('ERROR:', error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log('ERROR:', error)
        throw error
    }
})

*/