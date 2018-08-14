window.storageService = {};
storageService.marked = [5, 7, 100, 101, 200];

storageService.getClickedAmounts = function () {
    return new Promise(function (resolve) {
        getFromCloudInternal().then(function (data) {
            storageService.marked = data;
            resolve(storageService.marked);
        });
    });
};

storageService.markAmount = function (amount) {
    storageService.marked.push(amount);
    console.log('marked amount ' + amount + ', all marked: ' + storageService.marked);
    saveToCloudInternal();
};

storageService.unmarkAmount = function (amount) {
    var index = storageService.marked.indexOf(amount);
    if (index > -1) {
        storageService.marked.splice(index, 1);
    }
    console.log('unmarked amount ' + amount + ', remaining marked: ' + storageService.marked);
    saveToCloudInternal();
};

/////////////// change this part if you want to use a different cloud service //////////////////////

function initCloud() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBLsYrDhXKe7UH41rT5i7z2Lz1EMYq0WOU",
        authDomain: "donation-buttons-2291a.firebaseapp.com",
        databaseURL: "https://donation-buttons-2291a.firebaseio.com",
        projectId: "donation-buttons-2291a",
        storageBucket: "donation-buttons-2291a.appspot.com",
        messagingSenderId: "58751055932"
    };
    firebase.initializeApp(config);
}
initCloud();

function saveToCloudInternal() {
    firebase.database().ref(getStorageRef()).set(JSON.stringify(storageService.marked));
}

function getFromCloudInternal() {
    return new Promise(function (resolve) {
        firebase.database().ref(getStorageRef()).once('value').then(function (snapshot) {
            resolve(JSON.parse(snapshot.val()));
        });
    });
}

function getStorageRef() {
    return '/data/' + C.projectId;
}

////////////////////////////////////////////////////////////////////////////////////////////////////
