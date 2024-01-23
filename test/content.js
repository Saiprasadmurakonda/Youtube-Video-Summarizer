// content.js
// chrome.runtime.sendMessage({ message: "video_url_ready" });
document.addEventListener("DOMContentLoaded", function() {
    chrome.runtime.sendMessage({ message: "video_url_ready" });
  });
  