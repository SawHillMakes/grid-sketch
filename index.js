const gridContainer = document.querySelector(".gridContainer");

let userInput = prompt("Enter a number from 1-100");

while(userInput > 100 || userInput < 1)
{
    userInput = prompt("Incorrect input! Enter a number from 1-100");

}

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
        smallDiv.classList = "smallDiv";
        columnContainer.appendChild(smallDiv);
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



const resizeBtn = document.createElement("button");
resizeBtn.textContent = "Resize Grid";
document.body.appendChild(resizeBtn);

resizeBtn.addEventListener("click", () =>
{
    let userInput = prompt("Enter a number from 1-100");
    while(userInput > 100 || userInput < 1)
        {
            userInput = prompt("Incorrect input! Enter a number from 1-100");
        
        }
    gridContainer.innerHTML = "";
    createGrid(userInput);
}
)

