
/* zaznaczanie checkboxów za pomocą przycisków */
function checkBox(ID) {
  /* zmienne pomocnicze, przechowuja nazwy: checboxa i przycisku w którym się
     znajduje */
  var title = ID + '-checkbox';
  var title2 = ID + '-button';
  /* przy kliknięciu zaznaczam/odznaczan i zmieniam kolory */
  document.getElementById(title).checked=!document.getElementById(title).checked;
  if (document.getElementById(title).checked) {
    document.getElementById(title2).style.backgroundColor = "orange";
  }
  else {
    document.getElementById(title2).style.backgroundColor = "white";
  }
};
