// const heading = document.getElementById("heading1")
// console.log(heading);

// console.log(heading.innerText);
// heading.innerText = "Welcome to js world"
// heading.style.color = "blue"

// const paragraph =  document.getElementsByClassName("paragraph1")
// console.log(paragraph);

// console.log(paragraph[0]);

//----------------------------------------------------------------------------------------

// const add = (num1,num2,newFunction) => {
//     newFunction();
//     return num1+num2;
// }

// const greet = ()=>{
//     console.log("hello");
// }

// const hi = () =>{
//     console.log("Welcome")
// }

// console.log(add(4,6,greet))

// console.log(add(2,3,hi))

//----------------------------------------------------------------------------------------

const button = document.getElementById("btn1");

const fnOnClick =() =>{
    console.log('button clicked');
}
button.addEventListener('click',fnOnClick)

button.addEventListener('mouseover',()=>{
    console.log("button click arrow function")
})
