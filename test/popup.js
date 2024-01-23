// popup.js

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "video_url") {
      document.getElementById('videoUrl').innerText = 'Video URL: ' + request.url;
    }
  }
);

var videoUrl = document.getElementById('videoUrl').innerText;

// Send the URL to the Flask server
chrome.runtime.sendMessage({ message: "send_url", url: videoUrl }, function(response) {
  console.log(response);
});


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // Handle responses from the Flask server if needed
    if (request.message === "server_response") {
      console.log("Server response:", request.response);
    }
  }
  );


  chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
    if (request.message === "video_url") {
      var videoUrl = request.url;
  
      // Send the URL to the Flask server
      await fetch('http://127.0.0.1:5000/receive_url', {
        method: 'POST',
  
        // changes accept and mode into single quotes. before its not there
        headers: {        
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'mode': 'cors',
          'User-agent': 'learning app',
        },
        body: JSON.stringify({ url: videoUrl, message: "popup.js" }),
      })
        .then(response => response.json())  // assuming the server returns JSON
        .then( async data => {
            console.log('Server response:', data);})

            const url = 'http://127.0.0.1:5000/receive_url';

            fetch(url)
              .then(response => response.json()) // or response.text() depending on your data format
              .then(data => console.log(data))
              .catch(error => console.error('Error:', error));

    }
  });