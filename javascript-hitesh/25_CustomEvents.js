// Create your own event listeners:

// accept two argument : event name and optional object
const button = document.getElementById('button');
const new_event = new CustomEvent('demo-event', { detail: { name: 'javaScript' } });
button.dispatchEvent(new_event);

// Listening for custom event
button.addEventListener('demo-event', (event) => {
    console.log(event.detail); // { name : "javascript" }
});

// Removing Event Listeners
function handleEvent(event) {
    console.log(event.detail); // { name : "javascript" }
}
button.addEventListener('demo-event', handleEvent);
button.removeEventListener('demo-event', handleEvent);
