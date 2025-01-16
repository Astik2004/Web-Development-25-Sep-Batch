// // console.log("hello JavaScript")
// // console.log("Namaste developer")
// var user="Ram";
// console.log(`Good Morning ${user}`)


/*console.log("start");
var a=1;
let b=2;
const c=3;
{
    var d=40;
    d=20;
    const c=30;
    e=40;
    console.log("inside a scope");
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
}
console.log("Outside a scope");
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log("end");*/

/*var user="Thinku";
{
    console.log("Inside Loacal Scope");
    function details(age,city)
    {
        var pin=110006;
        console.log(age);
        console.log(city);
        return `GM ${user}`;
    }
}
let x=details(21,'noida');
console.log(x);

//Case-2 Function is declared inside another function

console.log("Start");
var user="Tinku";
function outer(age,city)
{
    console.log("Inside Outer Function");
    var pin=100006;
    console.log(`User Name:${user}`);
    function inner(m,n)
    {
        console.log("Inner Fun");
        console.log(m);
        console.log(n);
    }
    inner(age,city);
}
outer(21,"noida");

function details(user)
{
    if(user.trim()!=="" && user.length!==0)
    {
        console.log`Username :${user.trim()}`;
    }
    else
    {
        console.log("Invalid username");
    }
}
let username=prompt("Enter the number");
details(username);*/


/*
    !Argumants
*/

/*function memes()
{
    console.log(`${arguments[0]+" or "+arguments[1]} Bulati hai mager jana nahi`);
}
memes("paras","abhisek");*/

/*\\const add=(function(){
    let count=1;
    return(function(){
        return count+1;
    })
})()
console.log(add());
console.log(add());
console.log(add());*/

// function aa(){
//     var a=878;
// }
// console.log(a)
    
// var a=909;
// console.log(a)

// var a=997;
// console.log(a)

// var a=0
// console.log(a)

// debugger;
// var a='hey';
// first();
// function first()
// {
//     var b="hello";
//     second();
//     function second()
//     {
//         var c=0;
//         console.log(a+b+c);
//     }
// }
//debugger;
// fun();
// function fun()
// {
//     console.log("Astik")
// }
// function great(fname)
// {
//     return`hello ${fname}`
// }
// const task=(a)=>great(a);
// let x=task(1234 )
// console.log(x);

// const task1=function(){
//     let count=1;
//     return(function(){
//         return ++count;
//     })
// }
// const fun=()=>task1();
// let x=fun();
// console.log(x);
// console.log(x());
// console.log(x());
//Explicite Return Type

// const power=(b,e)=>
// {
//     let pow=b**e;
//     console.log(`${b}^${e}=${pow}`);
//     return pow;
// }
// console.log(power(10,3));
// arguments.calle();

// const msg=(fname,age)=>(
//     console.log(fname+" "+age)
// )
// msg("aba","ab");
