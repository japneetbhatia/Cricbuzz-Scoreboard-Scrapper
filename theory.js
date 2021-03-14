// async example function
// setTimeout(function(){
//     console.log("hello after 5sec");
// },5000);
// setTimeout(function(){
//     console.log("hello after 2sec");
// },2000);
// console.log("I'm first");

//our own async function
// async function temp(){
//     setTimeout(function(){
//         console.log("hello after 2sec");
//         },2000);
// }
// temp();
// console.log("hello");

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