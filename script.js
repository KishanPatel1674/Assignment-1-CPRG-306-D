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
