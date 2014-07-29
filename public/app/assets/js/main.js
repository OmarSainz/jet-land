var main = function () {
    window.client = io.connect(window.location.href);
    client.on('tweet', function (data) {        
        console.log("Llegó un twit: " + data.name + " " + data.text + " " + data.image);
        $('.tweets').append('<img src=' + data.image + '/>' + '<span>' + data.text + '</span>');
    });
}

$(document).on('ready', main);