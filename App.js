

// const parent=React.createElement("div",
// {id:"parent"},
// React.createElement("div",{id:"child"},
// React.createElement("h1",{},"I am h1 in div tag")
// )
// );

const parent=React.createElement("div",
{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"I am h1 in div tag"),React.createElement("h2",{},"I am second tag")]
)
);

console.log(parent)
const heading=React.createElement("h1",{id:"heading"},"Hello World from React");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// root.render(heading);
