const canvas = document.querySelector(".canvas");
const createGridBtn = document.querySelector("#btn-create-grid");

// const N_ROW = 32;

function getGridPixelDimension(canvas, numGrid) {
  return parseInt(canvas.offsetWidth / numGrid);
}

function createGrids(canvas, numGrid) {
  const placeHolder = document.createDocumentFragment();
  gridDimension = getGridPixelDimension(canvas, numGrid);

  for (let i = 0; i < numGrid ** 2; i++) {
    grid = document.createElement("div");
    grid.setAttribute(
      "style",
      `
        background-color: #fff;
        border: 0.3px solid #e4e4e4;
        width: ${gridDimension}px;
        height: ${gridDimension}px
        `
    );
    placeHolder.appendChild(grid);
  }

  canvas.appendChild(placeHolder);
}

createGridBtn.addEventListener("click", () => {
  nGrid = parseInt(prompt("How many grids you want to create per row/column?"));

  if (nGrid > 100 || nGrid < 4) {
    alert("Please select a number between 4 and 100.");
    return;
  }

  createGrids(canvas, nGrid);
});

canvas.addEventListener("mouseover", (event) => {
  // if (event.buttons === 2) event.target.style.backgroundColor = "";

  event.target.style.backgroundColor = "black";
});
