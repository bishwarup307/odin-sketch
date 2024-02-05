const canvas = document.querySelector(".canvas");

const N_ROW = 32;

function getGridPixelDimension(canvas, numGrid) {
  return parseInt(canvas.offsetWidth / numGrid);
}

function createGrids(canvas, numGrid) {
  const placeHolder = document.createDocumentFragment();
  gridDimension = getGridPixelDimension(canvas, N_ROW);

  for (let i = 0; i < numGrid ** 2; i++) {
    grid = document.createElement("div");
    grid.setAttribute(
      "style",
      `
        background-color: #e4e4e4;
        border: 0.3px solid white;
        width: ${gridDimension}px;
        height: ${gridDimension}px
        `
    );
    placeHolder.appendChild(grid);
  }

  canvas.appendChild(placeHolder);
}

createGrids(canvas, N_ROW);

canvas.addEventListener("mouseover", (event) => {
  if (event.buttons === 2) event.target.style.backgroundColor = "";

  event.target.style.backgroundColor = "black";
});
