// content.js
document.addEventListener("DOMContentLoaded", function () {
  chrome.runtime.sendMessage({ message: "video_url_ready" });
});

chrome.runtime.onMessage.addListener(function (response) {
  // Handle the response from the background script
  if (response.message === "Fine") {
    console.log('Content Script Received Result:', response.result);

    // Now, fetch the content from the specified location
    fetch('http://127.0.0.1:5000/receive_url', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'mode': 'cors',
        'User-agent': 'learning app',
      },
    })
      .then(response => response.json())
      .then(data => {
        // Log the summary content to the console
        console.log('Summary Content from Server:', data.result);
      })
      .catch(error => {
        console.error('Error fetching summary content:', error);
      });

  } else if (response.error) {
    console.error('Content Script Received Error:', response.error);
    // Handle the error if needed
  }
});
