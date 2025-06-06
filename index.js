const gridContainer = document.querySelector(".gridContainer");

let smallDiv = document.createElement("div");

let userInput = 30;
let clearBtnSize = userInput;
function createColumns (numOfColumns)
{
    let columnContainer = document.createElement("div");
    columnContainer.classList.add("columnContainer");
    columnContainer.textContent = "";
    gridContainer.appendChild(columnContainer);

    for(let i = 0; i < numOfColumns; i++)
    {
        let smallDiv = document.createElement("div");
        smallDiv.textContent = "";
        smallDiv.classList.add("smallDiv")
        columnContainer.appendChild(smallDiv);
        smallDiv.addEventListener("mouseenter", ()=>
        {
            smallDiv.style.cssText = "background-color:black;";
        })
    }
}

function createGrid(sizeOfGrid)
{
    for(let i = 0; i < sizeOfGrid; i++)
    {
        createColumns(sizeOfGrid);
    }
}

createGrid(userInput);

const btnContainer = document.createElement("div");
btnContainer.classList.add("btnContainer");
document.body.appendChild(btnContainer);

const resizeBtn = document.createElement("button");
resizeBtn.classList.add("btn");
resizeBtn.textContent = "Resize Grid";
btnContainer.appendChild(resizeBtn);

resizeBtn.addEventListener("click", () =>
{
    let userInput = prompt("Enter a number from 1-100");
    while(userInput > 100 || userInput < 1)
        {
            userInput = prompt("Incorrect input! Enter a number from 1-100");
        
        }
    clearBtnSize = userInput;
    gridContainer.innerHTML = "";
    createGrid(userInput);
}
)


const clearGridBtn = document.createElement("button");
clearGridBtn.classList.add("btn");
btnContainer.appendChild(clearGridBtn);
clearGridBtn.textContent = "Clear Grid";

clearGridBtn.addEventListener("click", ()=>
{
    gridContainer.innerHTML = "";
    createGrid(clearBtnSize);
})

