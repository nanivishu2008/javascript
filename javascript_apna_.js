// let promise =new Promise((resolve,reject)=>{
//     resolve("vishal");
//     reject("error");
// })

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve(dataId);
//             },2000)
//     })
// }
// getData(1)
// .then((res)=>{console.log(res);
//     return getData(2)
// })
// .then((res)=>{console.log(res)
// })
    

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3)
//     })
// })


// let getpromise=()=>{
//     return new Promise((reject)=>{
//         console.log("i am a promise")
//         reject("hi")
//     })
// }
// let promise=getpromise();
// promise.then((value)=>{console.log(value)})
// promise.catch((error)=>{console.log(error)})

// function async1(){
//     return new Promise((resolve)=>{
//     setTimeout(() => {
        
//             console.log("data1")
//             resolve()
//         },4000)
        
//     });
// }
// function async2(){
//     return new Promise((resolve)=>{
//     setTimeout(() => {
//             console.log("data2")
//             resolve("sucess")
//         },4000)
        
//     });

// }
// console.log("fetching data1.....")
// let a1=async1();
// a1.then((res)=>{console.log("fetching data2.....")
// a2=async2();
// a2.then((res)=>{})
// }) 
// function async(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data")
//             resolve("success")
            
//         }, 5000);
//     })
// }
// a=async()
// a.then((res)=>{
//     console.log(res)
// })

// function api(data){
//   return new Promise((resolve)=>{
//     setTimeout(() => {
//         console.log("data",data);
//         resolve("vishal")
        
//     }, 3000);
//   })
// }
// a1=api(1)
// a1.then((res)=>{
//     console.log(res)
//})
// async function GetData(){
//     await api(1);
//     await api(2);
//     await api(3);
// }
// p=document.querySelector("p")
// button=document.querySelector("button")
// const URL="https://meowfacts.herokuapp.com/"
// const getFacts=async()=>{
//     let response=await fetch(URL);
//     let data=await response.json();
//     p.innerText=data.data[0]
// }
// button.addEventListener("click",getFacts)










// class user{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log(this.name)
//         console.log(this.email)
//     }
// }
// class Admin extends user{
//     editData(){
//         console.log("editdata")
//     }
// }
// s1=new user("ram","ram@gmail.com")




//        part   1   asyncronous-intoduction



// console.log("one");
// console.log("two");
// console.log("three")
// setTimeout(()=>{
//     console.log("hello")
// },2000);
// console.log("four")
// console.log("five")
// console.log("six")



//        part  2    call-backs



// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,any){
//     any(a,b);
// }
// calculator(1,2,sum)  // dont use pranthesis(),while passing callbacks


// shorthand of above code.

// function calculator(a,b,any){
//     any(a,b);
// }
// calculator(1,2,(a,b)=>{
//     console.log(a+b);
// })



//          set time out example
 


// const hello=()=>{
//     console.log("hello vishal")
// }
// setTimeout(hello,3000)



// example 2


// function getData(dataId){
//     setTimeout(()=>{
//         console.log("data",dataId)
//     },2000)
// }



////.............<...CALLBACK HELL...>.............// 
//  example 1


// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000)
// }
// getData(1,()=>{      //getData(1,getData(2)); never write like this if write like this it can throw getnextData is not a function.....
//     getData(2);

// })                    
//in the above code ,if "if statement" is not declared then it output is get "data 1 data 2 and getnextdata is not a function error". 


// same code with 4 data

// function getData(dataId,getNextData){
//     setTimeout(()=>{
//       console.log("data",dataId);
//           if(getNextData){
//              getNextData();
//         }
       
//     },2000)
// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4);
//         })
//     })
// });





//.............<...PROMISES...>..................//



// let promise1=new Promise((resolve,reject)=>{
//     console.log("I am a promise 1")
//     resolve("promised is fulfilled")
// })


// let promise2=new Promise((res,rej)=>{
//     rej("promise 2 is rejected")
//     console.log("i am a promise 2")
    
// })
// let promise3=new Promise((res,rej)=>{
//     console.log("i am a promise 3")
    
// })


// ......basic promises syntax...........


// function getData(dataId,getNextData){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             res("sucess")
//             if(getNextData){
//                 getNextData();
//             }
//         },5000)
//     });
// }



//....how to use promises..........(.then(),.catch())





// const getPromise=()=>{
//     return new Promise((res,rej)=>{
//         console.log("I am a promise");
//         res("sucess");
//     });
// };
// let promise=getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled",res)
// })
// promise.catch((err)=>{
//     console.log("rejected",err)
// })





// .......<promise chain>>>............// chaining means using then inside then.


// const asyncfunc1=()=>{
//   return new Promise((res,rej)=>{
//     setTimeout(()=>{
//     console.log("data1")
//     res("success")
//     },4000)
//   })
// }
// const asyncfunc2=()=>{
//   return new Promise((res,rej)=>{
//     setTimeout(()=>{
//     console.log("data2")
//     },4000)
//   })
// }
// console.log("fetching data1...")
// let p1=asyncfunc1();
// p1.then((res)=>{
//   console.log("fetching data2....")
//   let p2=asyncfunc2();
//   p2.then((res)=>{
//   })
// })

//   shorthand for above code.....


// let async1=()=>{
//   return new Promise((res,rej)=>{
//     setTimeout(()=>{
//       console.log("data1")
//       res("success")
//     },2000)
//   })
// }
// let async2=()=>{
//   return new Promise((res,rej)=>{
//     setTimeout(()=>{
//       console.log("data2")
//       res("success")
//     },2000)
//   })
// }
// let async3=()=>{
//   return new Promise((res,rej)=>{
//     setTimeout(()=>{
//       console.log("data3")
//       res("success")
//     },2000)
//   })
// }
// console.log("fetching data1 .....")
// async1().then((res)=>{
//  console.log("fetching data2.....")
//  async2().then((res)=>{
//   console.log("fetching data3......")
//   async3().then((res)=>{

//   })
//  })
// })


//above example of call back hell,but now with promises..........


// function getData(dataId){
//   return new Promise((res,rej)=>{
//     setTimeout(()=>{
//       console.log("data",dataId)
//       res("suceess")
//     },3000)
//   })
// }

// getData(1).then((res)=>{
//   getData(2).then((res)=>{
//     getData(3).then((res)=>{
//       getData(4);
//     })
//     })
// })

// simplify the just above code .....
// console.log("fetching data 1....")
// getData(1).then((res)=>{
//   console.log("fetching data 2......")
//   return getData(2)
// })
// .then((res)=>{
//   console.log("fetching data3.....")
//   return getData(3)
// })
// .then((res)=>{
//   console.log("fetching data 4....")
//   return getData(4)
// }).then((res)=>{
//   console.log(res)
// })




// ..........<<<<ASYNC - AWAIT >>>>>.........//


// function getData(dataId){
//   return new Promise((res,rej)=>{
//     setTimeout(()=>{
//       console.log("data",dataId)
//       res("suceess")
//     },3000)
//   })
// }

// async function getalldata(){
//   console.log("fetching data 1.....")
//   await getData(1);
//   console.log("fetching data 2.....")
//   await getData(2);
//   console.log("fetching data 3.....")
//   console.log(await getData(3))
// }

// getalldata()

// here we are calling the fuction getalldata() unnessasary -to overcome this it have another method  called...........
//  <<<<<<< iife ....]]]]]]]]] 
//its stands for immediately invoked function expression
// iife is a function that is called immediately as soon as it is defined



// (async function(){
//   console.log("fetching data 1.....")
//   await getData(1);
//   console.log("fetching data 2.....")
//   await getData(2);
//   console.log("fetching data 3.....")
//   console.log(await getData(3))
// })();