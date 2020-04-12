'use strict';

// Инициализация экземпляра Router
const {Router} = require(`express`);
const mainRouter = new Router();

// Определение `GET` маршрутов
mainRouter.get(`/`, (req, res) => res.render(`main`));
mainRouter.get(`/register`, (req, res) => res.render(`sign-up`));
mainRouter.get(`/login`, (req, res) => res.render(`login`));
mainRouter.get(`/search`, (req, res) => res.render(`search`));
mainRouter.get(`/my`, (req, res) => res.render(`my`));
mainRouter.get(`/categories`, (req, res) => res.render(`all-categories`));

module.exports = mainRouter;
