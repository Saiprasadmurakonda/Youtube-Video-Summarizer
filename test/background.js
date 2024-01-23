chrome.runtime.onMessage.addListener(
  async function (request, sender, sendResponse) {
    if (request.message === "video_url_ready") {
      async function getCurrentTab() {
        let queryOptions = { active: true, lastFocusedWindow: true };
        let [tab] = await chrome.tabs.query(queryOptions);
        chrome.runtime.sendMessage({ message: "video_url", url: tab.url });
      }
      getCurrentTab();
    }
  }
);

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.message === "video_url") {
//     var videoUrl = request.url;

//     // Send the URL to the Flask server
//     fetch('http://127.0.0.1:5000/receive_url', {
//       method: 'POST',

//       // changes accept and mode into single quotes. before its not there
//       headers: {        
//         'Content-Type': 'application/json',
//         'accept': 'application/json',
//         'mode': 'cors',
//         'User-agent': 'learning app',
//       },
//       body: JSON.stringify({ url: videoUrl, message: "Background.js" }),
//     })
//       .then(response => response.text())
//       .then(data => {
//         // Handle the response from the Flask server if needed
//         console.log('Server response:', data);
//         console.log("Server responded");

//         // Notify the content script about the server response
//         chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//           chrome.tabs.sendMessage(tabs[0].id, { message: "server_response", response: data });
//         });
//       });
//   }
// });



// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if (request.message === "video_url_ready") {

// async function getCurrentTab() {
// let queryOptions = { active: true, lastFocusedWindow: true };
// // `tab` will either be a `tabs.Tab` instance or `undefined`.
// let [tab] = await chrome.tabs.query(queryOptions);
// chrome.runtime.sendMessage({ message: "video_url", url: tab.url });

// }
// getCurrentTab();
//     }
//   }
// )