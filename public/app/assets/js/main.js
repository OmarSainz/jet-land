var main = function () {
    window.client = io.connect(window.location.href);
    client.on('tweet', function (data) {        
        console.log("Llegó un twit: ");
        console.log("Usuario: " + data.name);
        console.log("Lo que dice el tuit: " + data.text);
        console.log("Avatar del usuario: " + data.image);
        console.log("Fecha: " + data.date);
        console.log("Url: " + data.url);
    });
}

$(document).on('ready', main);