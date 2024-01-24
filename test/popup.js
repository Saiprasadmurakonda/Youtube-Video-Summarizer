setTimeout(function() {
  document.getElementById('temporaryContent').style.display = 'none';
}, 1000);


setTimeout(function() {
  document.getElementById('delayedContent').style.display = 'block';
}, 9000);
  
  chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
    if (request.message === "video_url") {
      var videoUrl = request.url;
  
      await fetch('http://127.0.0.1:5000/receive_url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'mode': 'cors',
          'User-agent': 'learning app',
        },
        body: JSON.stringify({ url: videoUrl, message: "popup.js" }),
      })
        .then(response => response.json())
        .catch(console.log("Error"));
    }});
  chrome.runtime.sendMessage({'message':'Fine','result': true});