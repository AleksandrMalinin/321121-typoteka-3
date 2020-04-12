const express = require(`express`);
const {Router} = require(`express`);
const postsRoute = new Router();
const chalk = require(`chalk`);
const fs = require(`fs`).promises;
const {HttpCode} = require(`../../constants`);

const DEFAULT_PORT = 8000;
const FILENAME = `mocks.json`;

const app = express();
// передача middleware,
// явное обозначение формата передаваемых данных
app.use(express.json());

// Определение маршрута,
// чтение файла и получение данных.
// При отсутствии файла возвращаем пустой массив.
postsRoute.get(`/posts`, async(req, res) => {
  try {
    const fileContent = await fs.readFile(FILENAME);
    const mocks = JSON.parse(fileContent);
    res.json(mocks);
  } catch (err) {
    res.json([]);
    console.log(err);
  }
});

// Регистрирация маршрута.
app.use(`/`, postsRoute);

module.exports = {
  name: `--server`,
  run(args) {
    const [customPort] = args;
    const port = Number.parseInt(customPort, 10) || DEFAULT_PORT;

    app.listen(port, (err) => {
      if (err) {
        return console.error(chalk.red(`Ошибка при создании сервера`, err));
      }

      return console.info(chalk.green(`Ожидаю соединений на ${port}`));
    });
  }
}
