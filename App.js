 import React from "react";
 import ReactDOM from "react-dom/client";
 


 const parent = React.createElement("div", {id:"parent"},[
    React.createElement("div",{id:"child", key:"child"},[
        React.createElement("h1",{}, "This is Namaste React"),
        React.createElement("h2",{}, "Hello From first child h2 tag"),
    ]),
     React.createElement("div",{id:"child2", key:"child2"},[
        React.createElement("h1",{}, "Hello From second child h1 tag"),
        React.createElement("h2",{}, "Hello From second child h2 tag"),
    ]) 
 ])

const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(parent);