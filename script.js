const display = document.getElementById('display');

function press(value) {
  display.value += value;
}

function calculate() {
  try {
    if(!display.value){
        display.value = 0;
    }
    else
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = '';
}
