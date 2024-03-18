// user press "start sketching"
// window pops up asking for amount of grids
// amount of grids appear on page
// as user hovers on grids color appears 
// color is permanent on each grid 


// use arrays and loops for making grids appear
// use mouseover eventlistener for color generator
// store amount of colors in array

// store values 

// parent node
let body =
document.querySelector("body") ;

let container = 
document.querySelector(".container") ;

let sketch =
document.querySelector("#sketch") ;

let reset =
document.querySelector("#reset") ;

let eachdiv =
document.querySelectorAll(".container > div")


// list of colors 
function showColor(){


    
}
let color_view = showColor();

console.log(color_view);

let grids = [
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div")
]

let colors = [
    "#780000",
    "#c1121f",
    "#d90429",
    "#f77f00",
    "#8d99ae",
    "#2b2d42",
    "#edf2f4",
    "#e3d5ca",
    "#669bbc",
    "#dad7cd",
    "#588157",
    "#3a5a40",
    "#344e41",
    "#03045e",
    "#023e8a",
    "#0077b6",
    "#48cae4",
    "#6c757d",
    "#343a40",
    "#ced4da"
    ] ;


// hover over children nodes
sketch.addEventListener("click", function(){

    for (let i = 0; i < grids.length; i++){
        container.appendChild(grids[i]);
        
    }
    body.style.backgroundColor = "#6c757d";
    container.style.backgroundColor = "#f8f9fa";

    grids.forEach((d) => {
        
        d.addEventListener("mouseover", 
        function(){
            let colorValue =
            colors[Math.floor(Math.random() * colors.length)] ;
        
            d.style.backgroundColor = colorValue;
        })
    })
}) ;


reset.addEventListener("click", function(){

    grids.forEach((d) =>{

       d.style.backgroundColor = "white" 
    })
})