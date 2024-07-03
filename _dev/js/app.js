// let age = 23;
// const cond = ()=>{
//     if(age > 18){
//         console.log("A");
//         return (
//                 <p> این فرد بالای هجده سال است</p>
//          );
//     }
// }
// const lists = ["philadelpia","LA","maine"];
// const listItems = lists.map(function(list){
//     return(
//     <li>
//         {list}
//     </li>
//     );
// })
// const template = (
//     <div>
//         <h1>
//             hello world
//         </h1>
//         {cond()}
//         {age > 18 ? <p>هجده به بالا</p>:<p>زیر هجده سال</p>}
//         <ul>
//             {listItems}
//         </ul>
//     </div>
// );





// let app = document.getElementById("app");
// ReactDOM.render(template,app);

/*----------------------------------------------
|
|
|           indecision App
|
|
|------------------------------------------------*/

// const lists = ["ONE","TOW"];
// const listItems = lists.map(function(list){
//     return(
//     <li>
//         {list.toLowerCase()}
//     </li>
//     );
// });
// let app = {
//     title    : "Indecision App",
//     subtitle : "Put your life in hand of computer",
//     options  :  listItems,
// }
// const template =(
//     <div>
//         <h1>
//             {app.title}
//         </h1>
//         <p>
//             {app.subtitle}
//         </p>
//         <p>
//             {app.options == null ? 'Here are the options':'no option'}
//         </p>
//         <ul>
//             {app.options}
//         </ul>
//     </div>
// );

// const appRoot= document.getElementById("app");
// ReactDOM.render(template,appRoot);
/*----------------------------------------------
|
|
|           Event handller
|
|
|------------------------------------------------*/

// import React, { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client'

// let count = 0;
// const myid = 'myId';
// const plusOne = ()=>{
//     count++;
//     console.log(count); 
// }
// const minusOne = ()=>{
//     console.log("bye"); 
// }
// const resetBtn = ()=>{
//     console.log("reset"); 
// }
// let Template= ()=>{
//     return (
//     <div>
//         <h1>
//             Count : {count}
//         </h1>
//         <button id={myid} className='btn btn-success' onClick={plusOne}>+1</button>
//         <button id={myid} className='btn btn-danger' onClick={minusOne}>-1</button>
//         <button id={myid} className='btn btn-primary' onClick={resetBtn}>reset</button>
//     </div>
//     );
// }
// const appRoot= document.getElementById("app");
// const root   = ReactDOM.createRoot(appRoot);
// root.render(
//     <React.StrictMode>
//       <Template />
//     </React.StrictMode>
//   );
// ReactDOM.render(template,appRoot);





/*----------------------------------------------
|
|
|           root.render
|
|
|------------------------------------------------*/
// import React, { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client'
// function MyButton() {
//     return (
//       <button>
//         root.render
//       </button>
//     );
//   }

//   let App = function MyApp() {
//     return (
//       <div>
//         <h1>Welcome to my app</h1>
//         <MyButton />
//       </div>
//     );
//   }


// const root = createRoot(document.getElementById('app'));
// root.render(
//     <StrictMode>
//       <App />
//     </StrictMode>
// );


/*----------------------------------------------
|
|
|           Event handller RENDER 
|
|
|------------------------------------------------*/
// let count = 0;
// const myid = "myid";
// const plusOne = () => {
//   count++;
//   rerender();
// }
// const minusOne = () => {
//   count--;
//   rerender();
// }
// const reset = () => {
//   count = 0;
//   rerender();
// }


// const appRoot = document.getElementById("app");
// const rerender = () => {
//   const template = (
//     <div>
//       <h1>
//         Count : {count}
//       </h1>
//       <button id={myid} className='btn btn-success' onClick={plusOne}>+1</button>
//       <button id={myid} className='btn btn-success' onClick={minusOne}>-1</button>
//       <button id={myid} className='btn btn-success' onClick={reset}>reset</button>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// }
// rerender();

/*------------------------------------------------
|
|
|                 FORM AND INPUT
|
|
|------------------------------------------------*/
// let lists = [];
// const removeAll = () =>{
//   lists = [];
//   render();
// }


// const addToCart = e => {
//   e.preventDefault();
//   const option = e.target.elements.option.value;
//   if(option){
//     if(!lists.includes(option)){
//     lists.push(option);
//     console.log(lists);
//     e.target.elements.option.value = "";
//     render();
//     }else{
//       alert("your option already in the list");
//       render();
//     }
//   }

// }

// const onMakeDecision= ()=>{
//   let random = Math.floor(Math.random()*lists.length);
//   console.log(random);
//   alert(lists[random]);
// };
// const approut = document.getElementById("app");
// const render = () => {
//   const listItems = lists.map(list => {
//     return (
//       <li key = {list}>
//         {list.toLowerCase()}
//       </li>
//     );

//   });
//   let app = {
//     title: "Indecision App",
//     subtitle: "Put your life in hand of computer",
//     options: listItems,
//   }



//   const template = (
//     <div>
//       <h1>
//         {app.title}
//       </h1>
//       <button onClick={removeAll}>remove All</button>
//       <button onClick={onMakeDecision} disabled = {app.options.length === 0}>
//         on make decision
//       </button>
//       <p>{app.options.length > 0 ? 'Here are your options' : 'no options'}</p>
//       <ul>
//         {app.options}
//       </ul>
//       <form onSubmit={addToCart}>
//         <input name="option" type="text" />
//         <button>Send</button>
//       </form>

//     </div>
//   );
//   ReactDOM.render(template, approut);
// }
// render();


/*------------------------------------------------
|
|
|                 visibility Options
|
|
|------------------------------------------------*/
// let lists = ["one", "two"];
// const listItems = lists.map(list => {
//   return (
//     <li key={list}>
//       {list.toLowerCase()}
//     </li>
//   );
// });
// let app = {
//   title: "Visibility Toggle",
//   subtitle: "Put your life in hand of computer",
//   options: listItems,
// }
// let showdetails = "show details";
// let  details = "d-none";
// const shoeDetail = ()=>{
//   console.log(details);
//   if(details == 'd-none'){
//     details = "d-block";
//     showdetails = "hide details";
//   }else{
//     details = "d-none";
//     showdetails = "show details";
//   }
//   render();
// };
// const approut = document.getElementById("app");
// const render = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={shoeDetail}>
//         {showdetails}
//       </button>
//       <p className={details}> some details</p>
//     </div>
//   );
//   ReactDOM.render(template, approut);
// };
// render();