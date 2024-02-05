const canvas = document.querySelector(".canvas");
const createGridBtn = document.querySelector("#btn-create-grid");

// const N_ROW = 32;

function getRandomColorChannel() {
  return Math.floor(Math.random() * 256);
}

function getRGBColor(r = null, g = null, b = null, opacity = null) {
  const red = r || getRandomColorChannel();
  const green = g || getRandomColorChannel();
  const blue = b || getRandomColorChannel();
  const alpha = opacity || 0.1;
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function getGridPixelDimension(canvas, numGrid) {
  return parseInt(canvas.offsetWidth / numGrid);
}

function createGrids(canvas, numGrid) {
  // remove previous grids, if any
  existingGrids = [...canvas.children];
  existingGrids.forEach((grid) => {
    canvas.removeChild(grid);
  });

  const placeHolder = document.createDocumentFragment();
  gridDimension = getGridPixelDimension(canvas, numGrid);

  for (let i = 0; i < numGrid ** 2; i++) {
    grid = document.createElement("div");
    grid.classList.add("grid-cell");
    grid.setAttribute(
      "style",
      `
        border: 0.3px solid #f4f4f4;
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
  // assignedColor will be null when a cell is hovered for the first time
  // as there's no inline CSS declarations
  const assignedColor = event.target.style.backgroundColor;
  let bgColor;

  if (assignedColor) {
    // credit : https://stackoverflow.com/questions/3751877/how-to-extract-r-g-b-a-values-from-css-color
    let rgba = assignedColor.match(/[.?\d]+/g).map(parseFloat);
    rgba[3] += 0.1; // increase opacity 10% every time
    bgColor = getRGBColor(...rgba);
  } else bgColor = getRGBColor();

  if (event.target.classList.contains("grid-cell"))
    event.target.style.backgroundColor = bgColor;
});
