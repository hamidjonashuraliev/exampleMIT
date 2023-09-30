//External Module
//moment  hozirgi  vaqtni ko'rsatadi
// const moment = require("moment");
// const time = moment().format();
// console.log(time);

// const moment = require("moment");

// setInterval(() => {
// const time = moment().format();
// console.log(`hozirgi vaqt:  ${time}`);
// }, 5000);

//inquirer bu ter-l bn bogliq turli javoblardi tanlash,
//yoki user input kiritish  ba boshqa  un ish-di

// const inquirer = require("inquirer");
// inquirer
// .prompt([{ type: "input",  name: "raqam", message: "raqamni kiriting?"}])
// .then((answer) => {
//     console.log("man kiritgan raqam qiymati: ", answer.raqam);
// })
// .catch((err) => console.log(err));

//validator malumotni validaat qilb beradi
// const validator = require("validator");
// const test = validator.isEmail('foo@bar.com');
// console.log("test:",  test);

// isInt// bu stringda raqamni tekshiradi
// const validator = require("validator");
// const test = validator.isInt('100');
// console.log("test:", test);

//isIP// ipni tekshiradi
// const validator = require("validator");
// const test = validator.isIP('117.123.74.245');
// console.log("test:", test);

//uuid// random qiladi raqam va harflardi

// const { v4: uuid4 } = require("uuid");
// const random = uuid4();
// console.log("random:", random);


//chalk//
// const { v4: uuid4 } = require("uuid");
// const random = uuid4();
// console.log("random:", random);

// const chalk = require("chalk");
// const log = console.log;

// log(chalk.blue("hello john") + random + chalk.red("!"));
