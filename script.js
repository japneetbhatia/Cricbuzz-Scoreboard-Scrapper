require("chromedriver");

const wd = require("selenium-webdriver");
// const chrome = require("selenium-webdriver/chrome");  // -> if don't want to see browser
// const browser = new wd.Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless()).build();  // -> if don't want to see browser
const browser = new wd.Builder().forBrowser('chrome').build(); 

let matchId = process.argv[2]; //30880;
let innings = process.argv[3]; // 1;
let batsmenScorecard = [];
let batsmenKeys = ["playerName", "out", "runs", "ballsPlayed", "fours", "sixes", "strikeRate"];
let bowlerScorecard = [];
let bowlerKeys = ["playerName", "overs", "maidenOvers", "runs", "wickets", "noBalls", "wideBalls", "economy"];

async function main(){
    await browser.get("https://www.cricbuzz.com/live-cricket-scores/" + matchId); // -> open site 
    await browser.wait(wd.until.elementLocated(wd.By.css(".cb-nav-bar a"))); // -> wait till element got load (safe when internet slow)
    let buttons = await browser.findElements(wd.By.css(".cb-nav-bar a"));  // -> find kro cb-nav-bar ke andar ke sare a tag and buttons m store karo
    await buttons[1].click();  // -> scoreboard button
    // console.log(buttons.length);
    await browser.wait(wd.until.elementLocated(wd.By.css(" .cb-col.cb-col-100.cb-ltst-wgt-hdr"))); // -> wait till element got load (safe when internet slow)
    let tables = await browser.findElements(wd.By.css("#innings_" + innings + " .cb-col.cb-col-100.cb-ltst-wgt-hdr"));
    // console.log(tables.length);
    let innings1BatsmenRows = await tables[0].findElements(wd.By.css(".cb-col.cb-col-100.cb-scrd-itms")); // -> scorecard ki sari rows aa jayegi of each player
    // console.log(innings1BatsmenRows.length);
    for(let i = 0; i < innings1BatsmenRows.length; i++) {
        let columns = await innings1BatsmenRows[i].findElements(wd.By.css("div")); //-> sare columns le aye of each row
        // console.log(columns.length);
        if(columns.length == 7) { // -> jinki column ki length 7 hai vhi batsman h vhi chye bs (no need of extras etc) 
            let data = {};
            for(let j = 0; j < columns.length; j++) {
                // let temp = await columns[j].getAttribute("innerText");
                // console.log(temp);
                data[batsmenKeys[j]] = await columns[j].getAttribute("innerText");
            }
            batsmenScorecard.push(data); 
        }
    }
    console.log(batsmenScorecard);


    let inningsBowlerRows = await tables[1].findElements(wd.By.css(".cb-col.cb-col-100.cb-scrd-itms"));
    for(let i = 0; i < inningsBowlerRows.length; i++) {
        let columns = await inningsBowlerRows[i].findElements(wd.By.css("div"));
        if(columns.length == 8) {
            let data = {};
            for(let j = 0; j < columns.length; j++) {
                data[bowlerKeys[j]] = await columns[j].getAttribute("innerText");
            }
            bowlerScorecard.push(data);
        }
    }
    console.log(bowlerScorecard);
    await browser.close();
}

main();