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

const { log } = require("neo-async");

// const { option } = require("commander");
// const { findLastIndex } = require("lodash");
// const { log } = require("neo-async");





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
//       <div className={details}> some details
//         <ul>
//             {app.options}
//         </ul>


//       </div>
//     </div>
//   );
//   ReactDOM.render(template, approut);
// };
// render();


/*------------------------------------------------
|
|
|                 CLASS
|
|
|------------------------------------------------*/
// class Mathematic  {
//     plus(...items)
//     {       
//         i = 0    
//         items.forEach(function(item){
//             i += item;        
//         })
//         return i;
//     }
// }
// let sum = new Mathematic;
// const y = sum.plus(12,14,16,18);
// const approut = document.getElementById("app");
// const render = () => {
//   const template = (
//     <div>
//       {y}
//     </div>
//   );
//   ReactDOM.render(template, approut);
// };
// render();



/*------------------------------------------------
|
|
|                 CLASS 2 
|
|
|------------------------------------------------*/
// class Person{
//     constructor(name='Anonymous',age = 0){
//         this.name   = name;
//         this.age    = age;
//     }
//     getGretting(){
//         return `Hi . I am ${this.name}`;
//     }
//     getDescription(){
//         return `${this.name} is ${this.age} years old.`;
//     }
// }
// class Student extends Person{
//     constructor(name,age,magor){
//         super(name,age);
//         this.magor = magor;
//     }
// }
// const me = new Student("test tester",26,"fishery");
// const other = new Student("other guy",40,"farming");
// console.log("me");
// console.log(me.name);

// const approut = document.getElementById("app");
// const render = () => {
//   const template = (
//     <div>
//       {me.name}
//       <br />
//       {other.name}
//     </div>
//   );
//   ReactDOM.render(template, approut);
// };
// render();


// REACT COMPONENT
// class Header extends React.Component {
//   render() {
//     return (
//       <header>
//         <nav>
//           <ul>
//             <li>
//             <a href="#">منو</a>
//             </li>
//             <li>
//             <a href="#">منو</a>
//             </li>
//           </ul>
//         </nav>
//       </header>
//     );
//   }
// }
// const approut = document.getElementById("app");
// const render = () => {
//   const template = (
//     <div>
//     <Header />
//       <p>
//         تست
//       </p>
//     </div>
//   );
//   ReactDOM.render(template, approut);
// };
// render();



/*------------------------------------
|
|
|           Counter App                
|         State Component             
|
|-------------------------------------*/
//  v







/*------------------------------------
|
|               Indecision App
|           Nesting Component
|
|-------------------------------------*/
// const createListItem = () => {

// }

// class Header extends React.Component {
//     render() {
//         return (
//             <header>
//                 <h1 className="text-center">
//                     {this.props.title}
//                 </h1>
//             </header>
//         );
//     }
// }

// class Actions extends React.Component {
//     constructor(props){
//         super(props);
//         this.removeAll = this.removeAll.bind(this);
//     }
//     random = (length) => {
//         return Math.random() * length;
//     }
//     removeAll = ()=>{
//         console.log("Aaa");
//         console.log(this.props.lists);

//         lists = []; 

//     }
//     render() {
//         return (
//             <div className="d-flex gap-2">
//                 <button onClick={this.random(4)} className="btn btn-outline-success">
//                     {this.props.makeDecision}
//                 </button>
//                 <button onClick={this.removeAll} className="btn btn-outline-success">
//                     {this.props.removeAllTxt}
//                 </button>
//             </div>
//         );
//     }
// }

// class Options extends React.Component {
//     render() {
//         return (
//             <div className="bg-danger-subtle p-3 text-dark my-3">
//                 <h1 className="h5">
//                     {this.props.subtitle}
//                 </h1>
//                 <h2 className="h6">
//                     {this.props.desc}
//                 </h2>
//                 <ul>
//                     {
//                     this.props.lists.map(list =><Option key={list}  listText={list} />)
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }



// class Option extends React.Component{
//     render() {
//         return (
//             <li key={this.props.listText}>
//                 {this.props.listText}
//             </li>
//         );
//     }
// }




// class AddOptions extends React.Component {

//     addToList = e => {
//         e.preventDefault();
//         const option = e.target.elements.option.value.trim().toLowerCase();
//         if (option) {
//             if (!this.props.lists.includes(option)) {
//                 this.props.lists.push(option);
//                 console.log(this.props.lists);
//                 e.target.elements.option.value = "";
//                 final();
//             } else {
//                 alert("your option already in the list");
//                 final();
//             }
//         }
//         console.log("Aaaa");
//     }  
//     render() {
//         return (
//             <form onSubmit={this.addToList} className="text-start">
//                 <label for="option" className="form-label">
//                     Add items One by One:
//                 </label>
//                 <div className="d-flex gap-1">
//                     <input name="option" type="text" className="form-control" />
//                     <button className="btn btn-outline-success">Send</button>
//                 </div>
//             </form>

//         );
//     }
// }



// class Indecision extends React.Component {
//     render() {
//         const title        = "Indecision App";
//         const subtitle     = "put your desteny in hand of a computer";
//         const desc         = "add some item by the form at bellow";
//         const makeDecision = "Make Decision";
//         const removeAllTxt = "removeAll";
//         let lists = ["test"];
//         return (
//             <div className="col-12 col-md-6 m-auto bg-dark text-light text-center p-3 rounded-3 shadow-lg">
//                 <Header title={title} />
//                 <Actions makeDecision={makeDecision} removeAllTxt={removeAllTxt} lists={lists} />
//                 <Options subtitle={subtitle} desc={desc} lists={lists} />
//                 <AddOptions lists={lists} />
//             </div>
//         );
//     }
// }




// const approut = document.getElementById("app");
// const final = () => {
//     const template = (
//         <Indecision />
//     );
//     ReactDOM.render(template, approut);
// };
// final();

/*------------------------------------
|
|           SET STATE  
|
|-------------------------------------*/

// class VisibilityToggle extends React.Component {
//     constructor(props){
//         super(props);
//         this.handelToggleVisibility = this.handelToggleVisibility.bind(this)
//         this.state = {
//             visibility: false,
//         }
//     }

//     handelToggleVisibility(){
//         this.setState(prevstate=>{
//             return {
//                 visibility : !prevstate.visibility
//             }
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <h1>
//                     VisibilityToggle
//                 </h1>
//                 <button onClick={this.handelToggleVisibility}>
//                     {this.state.visibility? 'hiode details':'show details'}
//                 </button>
//                 {this.state.visibility && (
//                     <div>
//                     <p>
//                     Hey . This  are some details you can now see!!
//                     </p>
//                     </div>
//                 )}
//             </div>
//         );
//     }
// }

// const approut = document.getElementById("app");
// const final = () => {
//     ReactDOM.render(<VisibilityToggle />, approut);
// };
// final();



/*------------------------------------
|
|          Indecision App
|            SET STATE
|
|-------------------------------------*/

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1 className="text-center">
                    {this.props.title}
                </h1>
            </header>
        );
    }
}

class Actions extends React.Component {
    constructor(props) {
        super(props);
    }
    random = () => {
        if (this.props.hasOptions) {
            let rand = Math.floor(Math.random() * this.props.hasOptions);
            console.log(rand);
            alert(this.props.lists[rand]);
        }
    }
    render() {
        return (
            <div className="d-flex gap-2">
                <button
                    onClick={this.random}
                    className="btn btn-outline-success"
                    disabled={!this.props.hasOptions}
                >
                    {this.props.makeDecision}
                </button>
                <button
                    onClick={this.props.handelDeleteOptions}
                    className="btn btn-outline-success"
                    disabled={!this.props.hasOptions}
                >
                    {this.props.removeAllTxt}
                </button>
            </div>
        );
    }
}
class Formsy extends React.Component {
    constructor(props) {
        super(props);
       
        
    }
    random = (e) => {
        e.preventDefault();
        // console.log(e.currentTarget.option.value);
        if(e.currentTarget.option.value.trim() !=""){
            const item=e.currentTarget.option.value.trim();
            {this.props.handelAddOptions(item)}
            e.currentTarget.option.value = "";
        }        
    }
    render() {
        return (
            <form onSubmit={this.random} className="text-start" method="POST">
                <label for="option" className="form-label">
                    Add items One by One:
                </label>
                <div className="d-flex gap-1">
                    <input name="option" type="text" className="form-control" />
                    <button className="btn btn-outline-success">Send</button>
                </div>
            </form>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div className="bg-danger-subtle p-3 text-dark my-3">
                <h1 className="h5">
                    {this.props.subtitle}
                </h1>
                <h2 className="h6">
                    {this.props.desc}
                </h2>
                <ul>
                    {
                        this.props.lists.map(list => <Option key={list} listText={list} />)
                    }
                </ul>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <li key={this.props.listText}>
                {this.props.listText}
            </li>
        );
    }
}

class AddOptions extends React.Component {
    constructor(props) {
        super(props);
    }
    random(e) {   
        e.preventDefault();
        console.log(this.props.lists);
        console.log(this.props.lists);
        const option = e.currentTarget.option.value.trim();
        if (option) {
            // this.props.handelAddOptions(option);
            console.log(this.props.lists);
            
        }
      
    }
    render() {
        return (
            <form onSubmit={this.random} className="text-start">
                <label for="option" className="form-label">
                    Add items One by One:
                </label>
                <div className="d-flex gap-1">
                    <input name="option" type="text" className="form-control" />
                    <button className="btn btn-outline-success">Send</button>
                </div>
            </form>
        );
    }
}

class Indecision extends React.Component {
    constructor(props) {
        super(props);
        this.handelDeleteOptions = this.handelDeleteOptions.bind(this);
        this.handelAddOptions    = this.handelAddOptions.bind(this);
        this.state = {
            options: ["تست"],

        }
    }
    handelDeleteOptions() {
        this.setState(() => {
            return {
                options: [],
            }
        })
    }
    handelAddOptions(items) {
        console.log(items);
        this.setState(oldstate => {
            oldstate.options.push(items);
            return {
                option: oldstate.options,
            }
        })
    }

    render() {
        const title = "Indecision App";
        const subtitle = "put your desteny in hand of a computer";
        const desc = "add some item by the form at bellow";
        const makeDecision = "Make Decision";
        const removeAllTxt = "removeAll";
        let lists = ["test"];
        return (
            <div className="col-12 col-md-6 m-auto bg-dark text-light text-center p-3 rounded-3 shadow-lg">
                <Header title={title} />
                <Actions
                    makeDecision={makeDecision}
                    removeAllTxt={removeAllTxt}
                    lists={this.state.options}
                    hasOptions={this.state.options.length}
                    handelDeleteOptions={this.handelDeleteOptions}
                />
                <Options subtitle={subtitle} desc={desc} lists={this.state.options} />
                <Formsy
                    makeDecision={makeDecision}
                    removeAllTxt={removeAllTxt}
                    lists={this.state.options}
                    hasOptions={this.state.options.length}
                    handelDeleteOptions={this.handelDeleteOptions}
                    handelAddOptions={this.handelAddOptions}
                />
            </div>
        );
    }
}
const approut = document.getElementById("app");
const final = () => {
    const template = (
        <Indecision />
    );
    ReactDOM.render(template, approut);
};
final();