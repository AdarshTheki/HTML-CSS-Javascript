# Networking:
`Networking` in JavaScript refers to the ability to communicate with remote servers and resources over the internet. JavaScript provides several built-in APIs and libraries for making HTTP requests, working with web sockets, and more. Here are some of the ways you can perform networking tasks in JavaScript:

1. **XMLHttpRequest (XHR):**
  This is a built-in API for making HTTP requests in JavaScript. You can use it to retrieve data from a server, submit data to a server, and more.
```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data');
xhr.onload = () => {
  console.log(xhr.responseText);
};
```
In this example, we create a new XMLHttpRequest object and use it to make a GET request to the URL https://api.example.com/data. When the response is received, we log the response text to the console.

2. **Fetch API:** 
  This is a newer, more modern API for making HTTP requests in JavaScript. It provides a simpler, more flexible interface than XHR.
```js
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
```
In this example, we use the `fetch()` function to make a GET request to the URL https://api.example.com/data. When the response is received, we use the `.json()` method to parse the response as JSON and log it to the console.
  
3. **Web Sockets:**
  Web Sockets provide a two-way communication channel between a client and a server over a single TCP connection. You can use the built-in WebSocket API in JavaScript to open a WebSocket connection and send and receive data.
```js
const socket = new WebSocket('wss://api.example.com/socket');
socket.onopen = () => {
  socket.send('Hello, server!');
};
socket.onmessage = event => {
  console.log(event.data);
};
```
In this example, we create a new WebSocket object and use it to open a connection to the URL wss://api.example.com/socket. When the connection is opened, we send the message "Hello, server!" to the server. When the server sends a message back, we log the message data to the console.