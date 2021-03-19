const qrcode = require("qrcode-terminal");
const chalk = require("chalk");
const { sleep } = require("./utils");

const map = new Map();

map.set("chinese", async () => {
  console.log(
    "\n\n你好，我是 随风, 一个来自深圳 的 Web 全栈工程师，我的网站 https://www.qiuzhi99.com\n"
  );
  await sleep(1.5);
  console.log("感谢大佬给我投喂咖啡!!!\n");
  await sleep(1.5);
  console.log(`${chalk.green.bold("微信支付")}👇`);
  qrcode.generate("wxp://f2f0ibLLv5KUXS43zOtZ2kyF3SSaTxpg6egp", {
    small: true,
  });
  await sleep(1.5);
  console.log(`${chalk.blue.bold("支付宝")}👇`);
  qrcode.generate("https://qr.alipay.com/fkx018101otiveyolgpqbd3", {
    small: true,
  });
  await sleep(1.5);
});

map.set("english", async () => {
  console.log(
    "\n\nHi, I am hfpp2012, A Web Full Stack Developer From China, My website is https://www.qiuzhi99.com\n"
  );
  await sleep(1.5);
  console.log("Thank you for your sponsorship!!!\n");
  await sleep(1.5);
  console.log(`${chalk.green.bold("Wechat Pay")}👇`);
  qrcode.generate("wxp://f2f0ibLLv5KUXS43zOtZ2kyF3SSaTxpg6egp", {
    small: true,
  });
  await sleep(1.5);
  console.log(`${chalk.blue.bold("Alipay")}👇`);
  qrcode.generate("https://qr.alipay.com/fkx018101otiveyolgpqbd3", {
    small: true,
  });
  await sleep(1.5);
});

const action = (language) => map.get(language)();

module.exports = action;

