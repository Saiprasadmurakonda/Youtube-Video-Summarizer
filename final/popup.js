  // popup.js
  alert("Hello")
document.getElementById('summarize').addEventListener('click',function(){

  document.getElementById('summarize').innerHTML="Summarizing";
});
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


$(document).ready(function () {
  $('#summarize').click(function () {
      // Assuming you have the YouTube video URL in the 'url' variable
      var url = request.url;
      $.ajax({
          type: 'POST',
          url: 'http://127.0.0.1:5000/receive_url',
          // mode: 'cors',
          contentType: 'application/json;charset=UTF-8',
          data: JSON.stringify({ 'url': url }),
          success: function (data) {
              $('#videoUrl').text(data.message);
          },
          error: function (error) {
              console.error('Error:', error);
          }
      });
  });
});
