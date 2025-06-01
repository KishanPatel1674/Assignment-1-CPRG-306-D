function showPage(pageId) {
  var pages = document.querySelectorAll('.page');
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.remove('active');
  }
  document.getElementById(pageId).classList.add('active');
}

function handleConvert(event, type) {
  event.preventDefault();

  var fromUnit, toUnit, inputValue, resultId;

  switch (type) {
    case 'weight':
      fromUnit = document.getElementById('fromWeight').value;
      toUnit = document.getElementById('toWeight').value;
      inputValue = document.getElementById('inputWeight').value;
      resultId = 'resultWeight';
      break;
case 'distance':
      fromUnit = document.getElementById('fromDistance').value;
      toUnit = document.getElementById('toDistance').value;
      inputValue = document.getElementById('inputDistance').value;
      resultId = 'resultDistance';
      break;
  }
  var values = inputValue.split(',');
  var resultText = '';

  for (var i = 0; i < values.length; i++) {
    var val = parseFloat(values[i].trim());
    if (isNaN(val)) {
      resultText += 'Invalid input: ' + values[i] + '<br>';
      continue;
    }

    var converted;
    switch (type) {
      case 'weight':
        if (fromUnit === 'kg' && toUnit === 'lb') {
          converted = val * 2.20462;
        } else if (fromUnit === 'lb' && toUnit === 'kg') {
          converted = val / 2.20462;
        } else {
          converted = val;
        }
        break;
 case 'distance':
        if (fromUnit === 'km' && toUnit === 'mi') {
          converted = val * 0.621371;
        } else if (fromUnit === 'mi' && toUnit === 'km') {
          converted = val / 0.621371;
        } else {
          converted = val;
        }
        break;       
        
