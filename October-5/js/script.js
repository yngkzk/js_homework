const check = document.querySelector('#exampleCheck1');

function showData() {
    if (check.checked === true) {
        const val = document.querySelector('#exampleInputEmail1').value;
        alert(`Привет, ${val}! Я тебя запомнил.`)
    } else {
        alert(`Привет! Я тебя не запомнил`)
    }
}

function sendData() {
    alert(`На почту ${document.getElementById('exampleFormControlInput1').value} отправлено письмо с подтверждением`)
}

window.onload = function() {
    var colorForm = document.getElementById("color-form");
    var colorPalette = document.getElementById("color-palette");
    
    colorForm.addEventListener("submit", function(event) {
      event.preventDefault();
      
      var colorInput = document.getElementById("color-input");
      var newColor = colorInput.value;
      
      if (isValidRGB(newColor)) {
        newColor = convertRGBToCSSColor(newColor);
        let newColorDiv = `<div style='background-color: ${newColor}; width: 100px; height: 100px; border: 1px solid black;'></div>`
        
        document.write(newColorDiv);
        
        colorInput.value = "";
      } else {
        alert("Введите цвет в формате RGB (например, 0, 0, 255)");
      }
    });
  };
  
  function isValidRGB(color) {
    var rgbRegex = /^(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})$/;
    return rgbRegex.test(color);
  }
  
  function convertRGBToCSSColor(rgb) {
    var match = rgb.match(/^(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})$/);
    var red = parseInt(match[1]);
    var green = parseInt(match[2]);
    var blue = parseInt(match[3]);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
  }


