let age = 23;
const cond = ()=>{
    if(age > 18){
        console.log("A");
        return (
                <p> این فرد بالای هجده سال است</p>
         );
    }
}
const lists = ["philadelpia","LA","maine"];
const listItems = lists.map(function(list){
    return(
    <li>
        {list}
    </li>
    );
})
const template = (
    <div>
        <h1>
            hello world
        </h1>
        {cond()}
        {age > 18 ? <p>هجده به بالا</p>:<p>زیر هجده سال</p>}
        <ul>
            {listItems}
        </ul>
    </div>
   
);





let app = document.getElementById("app");
ReactDOM.render(template,app);