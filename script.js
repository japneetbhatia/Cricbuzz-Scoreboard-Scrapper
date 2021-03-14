//require("chromedriver");
//const wd = require("selenium-webdriver");
//const browser = new wd.Builder().forBrowser('chrome').build();

//let matchId = 30880;

//open site 

// async function main(){
//     await browser.get("https://www.cricbuzz.com/live-cricket-scores/" + matchId);
//     await buttons[1].click();
// }
// main();

//open scoreboard

// async function main(){
//     await browser.get("https://www.cricbuzz.com/live-cricket-scores/" + matchId);
//     await browser.wait(wd.until.elementLocated(wd.By.css(".cb-nav-bar a")));
//     let buttons = await browser.findElements(wd.By.css(".cb-nav-bar a"));
//     await buttons[1].click();
// }
// main();

//open scoreboard content

// async function main(){
//     await browser.get("https://www.cricbuzz.com/live-cricket-scores/" + matchId);
//     await browser.wait(wd.until.elementLocated(wd.By.css(".cb-nav-bar a")));
//     let buttons = await browser.findElements(wd.By.css(".cb-nav-bar a"));
//     await buttons[1].click();
//     let tables = await browser.findElements(wd.By.css("#innings_" + innings + " .cb-col.cb-col-100.cb-ltst-wgt-hdr"));
//     console.log(tables.length);
// }
// main();

// //open scoreboard each row column content content


// async function main(){
//     await browser.get("https://www.cricbuzz.com/live-cricket-scores/" + matchId);
//     await browser.wait(wd.until.elementLocated(wd.By.css(".cb-nav-bar a")));
//     let buttons = await browser.findElements(wd.By.css(".cb-nav-bar a"));
//     await buttons[1].click();
//     let tables = await browser.findElements(wd.By.css("#innings_" + innings + " .cb-col.cb-col-100.cb-ltst-wgt-hdr"));
//     let innings1BatsmenRows = await tables[0].findElements(wd.By.css(".cb-col.cb-col-100.cb-scrd-itms"));
//     for(let i = 0; i < innings1BatsmenRows.length; i++) {
//         let columns = await innings1BatsmenRows[i].findElements(wd.By.css("div"));
//         console.log(columns.length);
//     }
// }
// main();

//open scoreboard each row column content without unsueful content

// async function main(){
//     await browser.get("https://www.cricbuzz.com/live-cricket-scores/" + matchId);
//     await browser.wait(wd.until.elementLocated(wd.By.css(".cb-nav-bar a")));
//     let buttons = await browser.findElements(wd.By.css(".cb-nav-bar a"));
//     await buttons[1].click();
//     let tables = await browser.findElements(wd.By.css("#innings_" + innings + " .cb-col.cb-col-100.cb-ltst-wgt-hdr"));
//     let innings1BatsmenRows = await tables[0].findElements(wd.By.css(".cb-col.cb-col-100.cb-scrd-itms"));
//     for(let i = 0; i < innings1BatsmenRows.length; i++) {
//         let columns = await innings1BatsmenRows[i].findElements(wd.By.css("div"));
//         for(let j = 0; j < columns.length; j++) {
//             let temp = await columns[j].getAttribute("innerText");
//             console.log(temp);
//         }
//     }
// }
// main();


require("chromedriver");

const wd = require("selenium-webdriver");
// const chrome = require("selenium-webdriver/chrome");
const browser = new wd.Builder().forBrowser('chrome').build();
let matchId = process.argv[2];
let innings = 1; //process.argv[3];
let batsmenScorecard = [];
let batsmenKeys = ["playerName", "out", "runs", "ballsPlayed", "fours", "sixes", "strikeRate"];
async function main () {
    await browser.get("https://www.cricbuzz.com/live-cricket-scores/" + matchId);
    await browser.wait(wd.until.elementLocated(wd.By.css(".cb-nav-bar a")));
    let buttons = await browser.findElements(wd.By.css(".cb-nav-bar a"));
    await buttons[1].click();
    await browser.wait(wd.until.elementLocated(wd.By.css("#innings_" + innings + " .cb-col.cb-col-100.cb-ltst-wgt-hdr")));
    let tables = await browser.findElements(wd.By.css("#innings_" + innings + " .cb-col.cb-col-100.cb-ltst-wgt-hdr"));
    let innings1BatsmenRows = await tables[0].findElements(wd.By.css(".cb-col.cb-col-100.cb-scrd-itms"));
    for(let i = 0; i < innings1BatsmenRows.length; i++) {
        let columns = await innings1BatsmenRows[i].findElements(wd.By.css("div"));
        if(columns.length == 7) {
            let data = {};
            for(let j = 0; j < columns.length; j++) {
                data[batsmenKeys[j]] = await columns[j].getAttribute("innerText");
            }
            batsmenScorecard.push(data);
        }
    }
    console.log(batsmenScorecard);
    await browser.close();
 }

 main();





// async function main(){
//     await browser.get("https://www.youtube.com/");
//     console.log("hello after");
// }
// main();
// console.log("hello before");

// async function main(){
//     browser.get("https://www.youtube.com/");
//     console.log("hello after");
// }
// main();
// console.log("hello before");