

var websocket;
var webSocketURL = "ws://localhost:9763/outputwebsocket/proxyLogWebSocketOutputAdaptor/proxyloginfo";

var waitTime = 1000;
function waitForSocketConnection(socket, callback){
    setTimeout(
        function () {
            if (socket.readyState === 1) {
                initializeWebSocket();
                waitTime = 1000;
                console.log("Connection is made");
                if(callback != null){
                    callback();
                }
                return;

            } else {
                websocket = new WebSocket(webSocketURL);
                waitTime += 400;
                $.UIkit.notify({
                    message: "wait for connection "+waitTime/1000+" Seconds...",
                    status: 'warning',
                    timeout: waitTime,
                    pos: 'top-center'
                });
                waitForSocketConnection(websocket, callback);
            }

        }, waitTime); // wait 5 milisecond for the connection...
}

var webSocketOnOpen = function () {
    $.UIkit.notify({
        message: 'You Are Connected to Server!!',
        status: 'success',
        timeout: 5000,
        pos: 'top-center'
    });
    console.log("websocket on open");
};

var webSocketOnError = function (e) {
    $.UIkit.notify({
        message: 'Something went wrong when trying to connect to <b>'+webSocketURL+'<b/>',
        status: 'danger',
        timeout: 5000,
        pos: 'top-center'
    });
//    waitForSocketConnection(websocket);

    console.log("websocket on error");
};

var webSocketOnClose =function (e) {
    $.UIkit.notify({
        message: 'Connection lost with server!!',
        status: 'danger',
        timeout: 5000,
        pos: 'top-center'
    });

    console.log("websocket on close");
    waitForSocketConnection(websocket);
};

var webSocketOnMessage = function processMessage(message) {

    console.log("websocket on message");
    var info = $.parseJSON(message.data);

    console.log(message);
    LocalStorageInfo(info.webSiteUrl,info.date_time,info.fullUrl,info.size);


    //refresh the page to load new content
   // location.reload();
    drowChart();
};

function initializeWebSocket(){
    websocket = new WebSocket(webSocketURL);
    websocket.onmessage = webSocketOnMessage;
    websocket.onclose = webSocketOnClose;
    websocket.onerror = webSocketOnError;
    websocket.onopen = webSocketOnOpen;
}

initializeWebSocket();





function LocalStorageInfo(webSiteUrl,date_time,fullUrl,size)
{

    console.log("insert into session storage");
    console.log("insertt" +webSiteUrl+date_time+fullUrl+size);


    if (typeof (sessionStorage) === 'undefined') {
        // Sorry! No Web Storage support..
        return ['speed']; // TODO: fetch this array from backend DB rather than keeping as in-memory array
    }


    var DELIMITER = ','; // Private variable delimiter



    var currentStorageValue = sessionStorage.getItem(webSiteUrl);
    var updatedStorageValue;
    if (currentStorageValue === null) {
        updatedStorageValue = date_time+" "+fullUrl+" "+size;
    } else {
        updatedStorageValue = currentStorageValue + DELIMITER + date_time+" "+fullUrl+" "+size;
    }
    sessionStorage.setItem(webSiteUrl, updatedStorageValue);



}











/*
 function LocalStorageArray(id) {
 if (typeof (sessionStorage) === 'undefined') {
 // Sorry! No Web Storage support..
 return ['speed']; // TODO: fetch this array from backend DB rather than keeping as in-memory array
 }
 if (id === undefined) {
 throw 'Should provide an id to create a local storage!';
 }
 var DELIMITER = ','; // Private variable delimiter
 this.storageId = id;
 sessionStorage.setItem(id, 'speed'); // TODO: <note> even tho we use `sessionStorage` because of this line previous it get overwritten in each page refresh
 this.getArray = function () {
 return sessionStorage.getItem(this.storageId).split(DELIMITER);
 };

 this.length = this.getArray().length;

 this.push = function (value) {
 var currentStorageValue = sessionStorage.getItem(this.storageId);
 var updatedStorageValue;
 if (currentStorageValue === null) {
 updatedStorageValue = value;
 } else {
 updatedStorageValue = currentStorageValue + DELIMITER + value;
 }
 sessionStorage.setItem(this.storageId, updatedStorageValue);
 this.length +=1;
 };
 this.isEmpty = function () {
 return (this.getArray().length === 0);
 };
 this.splice = function (index, howmany) {
 var currentArray = this.getArray();
 currentArray.splice(index, howmany);
 var updatedStorageValue = currentArray.toString();
 sessionStorage.setItem(this.storageId, updatedStorageValue);
 this.length -= howmany;
 // TODO: should return spliced section as array
 };
 }
 */