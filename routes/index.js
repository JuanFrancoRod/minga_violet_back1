//const express = require('express');
import express from 'express'
import userRouter from './users.js'
import authorRouter from './authors.js'
import categoryRouter from './categories.js'
import chapterRouter from "./chapters.js";
import companyRouter from './companies.js'
import mangasRouter from './mangas.js'

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Vaca',
    subtitle: 'Perro'
  });
});
router.use('/auth', userRouter)
router.use('/authors', authorRouter)
router.use('/categories', categoryRouter)
router.use("/chapters", chapterRouter);
router.use('/companies', companyRouter)
router.use('/mangas', mangasRouter)

export default router
