var main = function () {
    window.client = io.connect(window.location.href);
    client.on('tweet', function (data) {        
        console.log("Llegó un twit: " + data.name + " " + data.text + " " + data.image);
    });
}

$(document).on('ready', main);