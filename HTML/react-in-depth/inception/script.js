
/* <div id="parent">
     <div id="child">
<h1>I am an h1 tag</h1>
<h2>I am an h2 tag</h2>
     </div>
</div> */


// the above code will be written in core react this way:
const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("h1", {id:"child"}, [
    React.createElement("h1", {id:"child"},("i am an h1 tag")),
    React.createElement("h1", {id:"child"},("i am an h2 tag")),
  ])
]
);
console.log(parent);
// const heading = React.createElement("h1", {}, "Hello World from React!");
// console.log(heading);
const root = ReactDom.createRoot(document.getElementById("root"));   //this method creates/assign root
root.render(parent);   //it will render parent inside root
// ReactElement(creates JS object) ==> HTML (Browser understands)
