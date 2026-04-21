import './style.css'

const COLOR_PALETTE = {
  '#f7aef8': 'Plum',
  '#b388eb': 'Bright Lavender',
  '#8093f1': 'Wisteria Blue',
  '#72ddf7': 'Sky Blue Light',
  '#f4f4ed': 'Porcelain',
}

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];

    colorPickerSelect.append(option);
  })
}

addOptionsToColorPicker();

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  colorPickerSelect.addEventListener("change", (event) => {

    const newColor = event.target.value; 
  
    document.body.style.backgroundColor = newColor;
    
  });
};

addOptionsToColorPicker();
addEventListenerToColorPicker();

const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}` 
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : "-";