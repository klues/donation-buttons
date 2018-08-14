window.C = {};

////// can be changed: ///////
C.projectId = 'demo-project'; //important: change this ID when copying/forking this project
C.lowerLimit = 1; //the lowest amount that is possible to spend
C.upperLimit = 210; //the highest amount that is possible to spend
C.doneAmounts = [5,6,10,300]; //amounts that are verified to be already done (donation already received)
C.elementsByRow = 15; //number of buttons in one row
C.backgroundImage = 'img/background.jpg'; //path to the background image
C.currency = ''; //symbol for currency to show (use '' for no currency)
C.fontSize = '13px'; //font size of the amounts in the buttons
C.redirectOnClickURL = 'https://www.google.at/'; //page to redirect, after a button was clicked (use '' if you do not want any redirect)
C.redirectDelayMs = 1000; //delay in milliseconds, before the redirect is done (so that the user can see the change of the button to semi-transparent)
/////////////////////////////