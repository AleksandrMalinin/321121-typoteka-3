'use strict';

// Инициализация экземпляра Router
const {Router} = require(`express`);
const mainRouter = new Router();

// Определение `GET` маршрутов
mainRouter.get(`/`, (req, res) => res.send(`/`));
mainRouter.get(`/register`, (req, res) => res.render(`sign-up`));
mainRouter.get(`/login`, (req, res) => res.render(`login`));
mainRouter.get(`/search`, (req, res) => res.send(`/search`));
mainRouter.get(`/my`, (req, res) => res.send(`/my`));
mainRouter.get(`/categories`, (req, res) => res.send(`/categories`));

module.exports = mainRouter;
