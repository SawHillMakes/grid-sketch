const gridContainer = document.querySelector(".gridContainer");

function createGrid (sizeOfGrid)
{
    let rowContainer = document.createElement("div");
    rowContainer.classList.add("rowContainer");
    rowContainer.textContent = "";
    gridContainer.appendChild(rowContainer);
    for(let i = 0; i < sizeOfGrid; i++)
    {
        let smallDiv = document.createElement("div");
        smallDiv.textContent = "";
        smallDiv.classList = "smallDiv"
        rowContainer.appendChild(smallDiv);
    }
}



function creatingColumn(numOfColumns)
{
    for(let i = 0; i < numOfColumns; i++)
    {
        createGrid(numOfColumns);
    }
}

creatingColumn(66);