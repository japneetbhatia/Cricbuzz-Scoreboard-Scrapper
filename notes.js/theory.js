// async example function

//1.
setTimeout(function(){
    console.log("hello");
},5000);
console.log("I'm first");
// op :- 
// i m first   // in 1sec
// hello   // after 4sec

//2.
setTimeout(function(){
    console.log("hello after 5 sec");
},5000);
setTimeout(function(){
    console.log("hello after 2sec");
},2000);
console.log("I'm first");
// op :
// i m first // 1sec
// hello after 2 sec // after 1 sec
// hello after 5 sec // after 3sec

//3. our own async function
async function temp(){
    setTimeout(function(){
        console.log("hello after 2sec");
    },2000);
}
temp();
console.log("hello");
// op:
// hello
// hello after 2sec

// ques-1
async function main(){
    console.log(1);
    setTimeout(function(){
        console.log(2);
    },1000);
    console.log(3);
    setTimeout(function(){
        console.log(4);
    },1000);    
}
main();
console.log(5);
// op:
// 1
// 3
// 5
// 2
// 4