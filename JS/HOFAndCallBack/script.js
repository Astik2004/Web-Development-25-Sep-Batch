// // function genric(fn)//type-1 ----------->HOF
// // {
// //     console.log("Hof type -1 when function pass inside another function ")
// //     fn();
// //     fn();
// // }
// // genric(function(){console.log("Callback function")});
// // //here in this example genric is HOF and the function passed inside the genric during 
// // //the function call is callback;

// // function genrateCode()//Type-2 ---->HOF
// // {
// //     return(
// //         function()
// //         {
// //             console.log("HOF type 2 when function return any function");
// //         }
// //     )
// // }
// // const x=genrateCode()
// // console.log(x);
// const sum=(a,b)=>a+b;
// const sub=(a,b)=>a-b;
// const prod=(a,b)=>a*b;
// const div=(a,b)=>a/b;
// function calce(a,b,task)
// {
//     console.log(task(a,b));
// }
// const a=+prompt("Enter the First Number : ");
// const b=+prompt("Enter the second Number : ")
// const op=prompt("Enter the Operation");
// switch(op){
//     case '+':
//         calce(a,b,sum);
//         break;
//     case '-':
//         calce(a,b,sub);
//         break;
//     case '*':
//         calce(a,b,prod);
//         break;
//     case '/':
//         calce(a,b,div);
//         break;
//     default:
//         console.log("invalid");
//       alert("Invalid opration");
// }

//Array higherorder function

let arr=[12,13,56,23,21,4,5,3,1,101,95,34,445,343];
arr.sort((a,b)=>{return a-b});
console.log(arr)
let newarray=new Array();
arr.forEach((e)=>{
    newarray.push(e*20041207 );
})
console.log(newarray);
arr.forEach((e,i,array)=>{
     array[i]=e*10;
})
console.log(arr);
 