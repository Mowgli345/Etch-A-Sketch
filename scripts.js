const container = document.getElementById("container");

const gridButton = document.querySelector(".grid-change-btn");
const colorButton = document.querySelector(".color-change-btn");

gridButton.addEventListener("click",changeGrid);

drawGrid();

//DRAW ORIGINAL GRID, THEN RUN COLOR GRID FUNCTION
function drawGrid(col) {
    const myRow = new DocumentFragment();
    if (col==null) {
        col=12;
    }
    const row = col;

    for (i=0; i<col; i++) {
        const myRow = document.createElement("div");
        myRow.className="grid-row";    
    
            for (j=0; j<row; j++) {
                const mySquare = document.createElement("div");
                mySquare.className="grid-square";
                myRow.append(mySquare); 
                    }                
            container.appendChild(myRow);
            }    
colorGrid();
}

function changeGrid () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    const regExp = "[0-9]";
    col = prompt("How many squares?");
    if (col==null) {
        changeGrid();
    }
    else {
        if (col.match(regExp) && col<50) {
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            drawGrid(col);
        }
        else if (col=null) {
            changeGrid();
        }
        else {
            changeGrid();
        }
    }   }

colorButton.addEventListener("click",e =>{
    if (
        colorButton.innerHTML=="Grayscale") {
        colorButton.innerHTML="Random Color";
    }
    else {  
        colorButton.innerHTML="Grayscale";
    }  
    colorGrid()
});



function setColorMode(square) {
    let colorSquare = square.target;
    let colorMode = colorButton.innerHTML;
    if (colorMode=="Random Color") {
        let colorSquareGray = square.target;
        let myColorGray = window.getComputedStyle(colorSquareGray).backgroundColor;
        
        var rgb = myColorGray.match(/[0-9]+/);
        if (rgb>50) {
            myColorGray=`rgb(${rgb-40}, ${rgb-40}, ${rgb-40})`;       
            colorSquareGray.style.backgroundColor=myColorGray; 
            }
        else {
            rgb=0;
            myColorGray=`rgb(${rgb}, ${rgb}, ${rgb})`;
            colorSquareGray.style.backgroundColor=myColorGray; 
            } 
                }
    else {
        let colorSquareRandom = square.target;  
            let r = Math.floor(Math.random()*255);
            let g = Math.floor(Math.random()*255);
            let b = Math.floor(Math.random()*255);

            let myColorRandom=`rgb(${r}, ${g}, ${b})`;  
            colorSquareRandom.style.backgroundColor=myColorRandom; 
            console.log(`Second myColorGray`);  
            }
        }

function colorGrid (){
    const gridSquare = document.querySelectorAll(".grid-square");
    gridSquare.forEach((square)=> {
    square.addEventListener("mouseover", setColorMode);         
    })};