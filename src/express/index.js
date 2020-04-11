'use strict';

const express = require(`express`);

// маршруты приложения
const articlesRoutes = require(`./routes/articles-routes`);
const myRoutes = require(`./routes/my-routes`);
const mainRoutes = require(`./routes/main-routes`);

// порт для сервера
const DEFAULT_PORT = 8080;

const app = express();

// Подключение маршрутов
app.use(`/articles`, articlesRoutes);
app.use(`/my`, myRoutes);
app.use(`/`, mainRoutes);

// Запуск сервера
app.listen(DEFAULT_PORT);
