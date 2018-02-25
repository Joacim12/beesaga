let button1 = document.getElementById('update');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./sw.js')
        .then(function (registration) {
            button1.onclick = function () {
                registration.update();
            };
            console.log('Service Worker Registered');
        });
}
let button = document.getElementById('testknap');

window.addEventListener("beforeinstallprompt", ev => {
    // Stop Chrome from asking _now_
    ev.preventDefault();
    // Create your custom "add to home screen" button here if needed.
    // Keep in mind that this event may be called multiple times,
    // so avoid creating multiple buttons!
    button.onclick = () => {
        console.log("hej");
        // console.log(ev.prompt);
        ev.prompt();
    }
});