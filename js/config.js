////// do not change: ///////
window.C = {};
C.translations = {};

////// can be changed: ///////
C.projectId = 'demo-project'; //important: change this ID when copying/forking this project
C.lowerLimit = 1; //the lowest amount that is possible to spend
C.upperLimit = 210; //the highest amount that is possible to spend
C.doneAmounts = [5,6,10,300]; //amounts that are verified to be already done (donation already received)
C.elementsByRow = 15; //number of buttons in one row
C.backgroundImage = 'img/background.jpg'; //path to the background image
C.currency = ''; //symbol for currency to show (use '' for no currency)
C.fontSize = '13px'; //font size of the amounts in the buttons
C.redirectAfterClick = true; //if true user is redirected to an url after clicking on a donation button (see "translations --> redirectURL" below)
C.redirectDelayMs = 1000; //delay in milliseconds, before the redirect is done (so that the user can see the change of the button to semi-transparent)

C.translations['confirmDonate'] = {
    'en' : "Do you want to donate the amount of {0}{1}? Clicking on 'OK' will mark this amount as done and redirect you to a page with payment information.",
    'de' : 'Möchtest du wirklich den Betrag von {0}{1} spenden? Ein Klick auf "OK" wird den Betrag als "gespendet" und dich zu einer Seite mit Zahlungsinformationen weiterleiten.'
};
C.translations['confirmUndo'] = {
    'en' : "Do you really want to unmark the amount {0}{1}? Please only do this if you clicked on this button before and you now decided to not spend the money.",
    'de' : 'Möchtest du wirklich die Markierung des Betrags von {0}{1} rückgängig machen? Bitte tu das nur, wenn du zuvor auf den Button geklickt hast und nun entschieden hast den Betrag doch nicht zu spenden.'
};
C.translations['redirectURL'] = {
    'en' : 'https://www.google.at/',
    'de' : 'https://github.com/dashboard'
};
/////////////////////////////