var gateway = `ws://${window.location.hostname}/ws`;
var websocket;

function onLoad(event) {
    initWebSocket();
}

function initWebSocket() {
    websocket = new WebSocket(gateway);
    websocket.onopen = onOpen;
    websocket.onclose = onClose;
    websocket.onmessage = onMessage;
}

function onOpen(event) {
    sendCurrentDateTime();
}

function onClose(event) {
    setTimeout(initWebSocket, 2000);
}

function onMessage(event) {
    var dataObj = JSON.parse(event.data);
    Object.keys(dataObj).forEach(function (key) {
        var element = document.getElementById(key);
        if (typeof element !== "undefined") {
            element.value = dataObj[key];
        }
    })
}

function textNumberUpdated(element) {
    const updateObj = { id: element.id, value: element.value };
    websocket.send(JSON.stringify(updateObj));
}

function checkboxUpdated(element) {
    const updateObj = { id: element.id, value: element.checked };
    websocket.send(JSON.stringify(updateObj));
}

function buttonClicked(element) {
    const clickObj = { id: element.id, value: "clicked" };
    websocket.send(JSON.stringify(clickObj));
}

function sendCurrentDateTime() {
    var currentDateTime = new Date();
    const dateTimeObj = { id: "datetime", value: currentDateTime };
    websocket.send(JSON.stringify(dateTimeObj));
}

window.addEventListener('load', onLoad);