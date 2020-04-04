'use strict';

const fs = require(`fs`).promises;
const chalk = require(`chalk`);
const {getRandomInt, shuffle} = require(`../../utils`);
const {ExitCode} = require(`../../constants`);

const DEFAULT_COUNT = 1;
const MAX_COUNT = 100;
const FILE_NAME = `mocks.json`;
const FILE_TEXTS_PATH = `./data/texts.txt`;
const FILE_TITLES_PATH = `./data/titles.txt`;
const FILE_CATEGORIES_PATH = `./data/categories.txt`;

const generateOffers = (count, titles, categories, texts) => {
  return Array(count).fill({}).map(() => ({
    title: titles[getRandomInt(0, titles.length - 1)],
    announce: shuffle(texts).slice(1, 5).join(` `),
    fullText: shuffle(texts).slice(1, getRandomInt(0, texts.length - 1)).join(` `),
    сategory: shuffle(categories).slice(1, getRandomInt(0, categories.length - 1))
  }))
};

const readContent = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, `utf8`);
    return content.split(`\n`);
  } catch (err) {
    console.error(chalk.red(err));
    return [];
  }
};

module.exports = {
  name: `--generate`,
  async run(args) {
    if (Number.parseInt(args, 10) >= MAX_COUNT) {
      console.log(chalk.gray(`Не больше 1000 публикаций`));
      process.exit(ExitCode.success);
    }

    const texts = await readContent(FILE_TEXTS_PATH);
    const titles = await readContent(FILE_TITLES_PATH);
    const categories = await readContent(FILE_CATEGORIES_PATH);

    const [count] = args;
    const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;
    const content = JSON.stringify(generateOffers(countOffer, titles, categories, texts));

    try {
      await fs.writeFile(FILE_NAME, content);
      console.log(chalk.green(`Operation success. File created.`));
    } catch (err) {
      console.error(chalk.red(`Can't write data to file...`));
    }
  }
}
