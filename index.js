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



//2025/07/29
//----------------------------------------------------------------------------------------

// console.log("Hello");

// //acyncronous function(time consuming)
// setTimeout(()=>{
//     console.log("inside timeout")
// },3000);                // (3000 ms = 3 seconds).

// console.log("Ending")

//----------------------------------------------------------------------------------------

// const number = 10;

// const result = new Promise((resolve,reject)=>{
//     if(number == 10){
//         resolve("Success");
//     }
//     else{
//         reject("number is not 10");
//     }
// });

// console.log(result);

// result.then((data)=>{
//     console.log(data)
// }).catch((error1)=>{
//     console.log(error1)
// });

// //  //promises

// //  # pending,fulfilled,reject states
// //  # .then() and .catch methods
// //  # Promise.all() and promice.racr()
// //  # creating custom promises

// //----------------------------------------------------------------------------------------
// //type 1
// const response = fetch("http://universities.hipolabs.com/search?name=jaffna").then(data =>
//     console.log(data)
// ).catch(error=>console.log(error));

// console.log(response);

// //type 2
// const response = fetch("http://universities.hipolabs.com/search?name=jaffna").then(data =>{
//     const result = data.json()
//     return result;
// }).then(result=>console.log(result)).catch(error=> console.log(error));

// console.log("Hallo");
//----------------------------------------------------------------------------------------

const getUniversityData =async()=>{
   const result = await fetch("http://universities.hipolabs.com/search?name=jaffna")
   const convertJson = await result.json();
   console.log(convertJson);
}
getUniversityData()