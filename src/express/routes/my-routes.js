'use strict';

// Подключаем и инициализируем экземпляр Router
const {Router} = require(`express`);
const myRouter = new Router();

// Определение `GET` маршрутов
myRouter.get(`/comments`, (req, res) => res.send(`/my/comments`));

module.exports = myRouter;
