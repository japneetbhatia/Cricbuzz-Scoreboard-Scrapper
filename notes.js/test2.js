// 1. how to get hello
let obj = {
    1 : "hello",
}
// ans : obj[1]; or obj["1"]; // -> object always store as string

// 2. op
let arr = [1,2,3,4];
arr["hello"] = "how are you?";
arr[4] = 5;
console.log(arr.length);
// ans : 5

// 3. op -> abc.txt has {hello}
const fs = require("fs");
console.log(fs.readFileSync("abc.txt"));
// ans : buffer

// 4. op
const fs = require("fs");
fs.writeFileSync("abc.txt","hello");
console.log(fs.readFileSync("abc.txt", "utf-8"));
// ans : hello

// 5. op
const fs = require("fs");
fs.readFileSync("abc.txt");
// ans : no op

// 6. op -> abc.txt dont exist
const fs = require("fs");
fs.writeFileSync("abc.txt","hello");
console.log(fs.existsSync("abc.txt"));
// ans : true

// 7. Selenium is used for :
// a. automation
// b. webscrapping
// c. testing
// d. developing website 
// ans : a,b,c

// 8. use of chromedriver
// a. we use it to control the chrome browser
// b. selenium use it to control chrome browser
// ans : b

// (imp) 9. why should we use await before a selenium method call
// a. bcs methods of selenium are async
// b. bcs our next step depends on previous ans selenium methods are async
// c. it will save time by running fn parallaly
// d. it is must to use await with selenium
// ans : b

// 10. which of the selectors are possible to acess "html.cssJavascript" and only "Javascript" from the following HTML?
<nav class = "navbar" link = "google.com" >
    <div id = "tabs" >
        <div>
            <h1> home </h1>
        </div>
        <div>
            <ul>
                <li>
                    html
                </li>
                <li>
                    css
                </li>
                <li type = "coding">
                    Javascript
                </li>
            </ul>
        </div>
    </div>
</nav>
// a. "navbar#tabs ul li"
// b. "li", "type["coding"]"
// c. "ul li", "type['coding']" 
// d. "navbar tabs ul li", "type['coding']"
// ans : c, d

// 11. CODING QUES
// Very important Flatten ques

// 12. Suppose a filename is pass as an argument. count the nos of n in file
// solution1
let filename = process.argv[2];
let fs = require("fs");
let data = fs.readFileSync(filename, "utf-8");
let count = 0;
data = Array.from(data);
for(let i = 0; i < data.length; i++) {
    if(data[i] == "n") {
        count++;
    }
}
console.log(count);
// solution2 -> exact
let filename = process.argv[2];
let fs = require("fs");
let data = fs.readFileSync(filename, "utf-8");
let count = 0;
let lines = data.split("\r\n");
for(let i = 0; i < lines.length; i++) {
    for(let j = 0; j < lines.length; j++) { 
        if(data[i] == "n") {
            count++;
        }
    }
}
console.log(count);
// file is like:
// n

// n
// n


// n


let input = {
    obj1: {
        obj2: {
            two: 2,
            one: 1
        }
    },
    obj4: {
        obj3: {
            three: 3
        }
    }
}

function flatten(obj) {
    let result = {};
    for(let i in obj) {
        if(typeof(obj[i]) == "object") {
            let temp = flatten(obj[i]);
            for(j in temp) {
                result[i + "." + j] = temp[j];
            }
        } else {
            result[i] = obj[i];
        }
    }
    return result;
}

console.log(flatten(input));