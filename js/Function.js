// function calculate(){
//     return[
//         function(a,b){
//             return a+b
//         },
//         function(a,b){
//             return a-b
//         },
//         function(a,b){
//             return a*b
//         },
//         function(a,b){
//             return a/b
//         },
//         function(a,b){
//             return a%b
//         },
//     ]
// }
// console.log(calculate()[0](10,20))
// console.log(calculate()[3](10,20))



// function calculate(){
//     return[
//         function(a,b){
//             return a+b
//         },
//         function(a,b){
//             return a-b
//         },
//         function(a,b){
//             return a*b
//         },
//         function(a,b){
//             return a/b
//         },
//         function(a,b){
//             return a%b
//         },
//     ]
// }
// length = calculate().length
// const a = 10;
// const b = 20;
// for(let i= 0; i< length; i++){
//     console.log(calculate()[i](a,b));
// }



// function add(a,b){
//     return a + b
// }
// console.log(add(10,20));


// function greet(name){
//     console.log(`hello bro ,${name}`)
// }
// greet('Hon')
// greet('Daro')
// greet('maty')



// function render(){
//     return("Hello JavaScript")
// }
// console.log(render())


// function cal(promt){
//     return eval(promt)
// }
// const p = prompt("Enter a promt:")
// const result = cal()
// document.write(`${p} = ${result}`)


const input = document.getElementById('input');
const btn = document.getElementById('btn')
const display = document.getElementByI('display')

btn.addEventListener('Click', function(){
    const value = input.value;
    display.innerText = value
})


