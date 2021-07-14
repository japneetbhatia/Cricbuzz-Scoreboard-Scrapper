//await
require("chromedriver");
const wd = require("selenium-webdriver");
const browser = new wd.Builder().forBrowser('chrome').build(); 

async function main(){
    await browser.get("https://www.youtube.com/");
    console.log("hello after");
}
main();
console.log("hello before");