/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AKAI Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia!
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/


  var firstName = document.getElementById('first-name');
  var lastName = document.getElementById('last-name');
  var mail = document.getElementById('email');
  var submit = document.getElementById('my-submit');

  /* Zapisuje domyślne style obramowań */
  var defaultStyle = document.getElementById('first-name').style;
  var defaultStyle2 = document.getElementById('last-name').style;

  /* Deklaracja zmiennych sprawdzających, czy wpisano imię/nazwisko/email */
  var isFirstNameCorrect = false;
  var isLastNameCorrect = false;
  var isEmailCorrect = false;

  /* Sprawdzanie pola 'imię' */
  firstName.addEventListener("blur", function() {
      if (firstName.value == '') {
          firstName.style.borderColor = "rgb(233,32,32)";
          firstName.style.borderStyle = "solid";
          firstName.style.borderWidth = '1px';
          isFirstNameCorrect = false;
      }
      else {
          firstName.style = defaultStyle;
          isFirstNameCorrect = true;
      }
  });

  /* Sprawdzanie pola 'nazwisko' */
  lastName.addEventListener("blur", function() {
      if (lastName.value == '') {
          lastName.style.borderColor = "rgb(233,32,32)";
          lastName.style.borderStyle = "solid";
          lastName.style.borderWidth = '1px';
          isLastNameCorrect = false;
      }
      else {
          lastName.style = defaultStyle2;
          isLastNameCorrect = true;
      }
  });

  /* Sprawdzanie pola 'e-mail' */
  mail.addEventListener("blur", function() {
    isEmailCorrect = (mail.value != '') ? true : false;
    /* tak poza tym to e-mail jakoś domyślnie sprawdzany jest przez przeglądarkę,
       dzięki input type=email, stąd się nie rozwijam z tematem. */
  });

  /* Sprawdzanie formularza przy przyciśnięciu "Prześlij" */
  submit.addEventListener("click", function() {
      (!isFirstNameCorrect || !isLastNameCorrect || !isEmailCorrect) ? (alert('Prosze uzupełnić wszystkie pola')) : null ;
  });
