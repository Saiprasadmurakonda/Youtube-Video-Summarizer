document.getElementById("summarizeButton").addEventListener("click", function() {
    chrome.runtime.sendMessage({ message: "summarize_video" });
  });