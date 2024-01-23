chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "get_url") {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var url = tabs[0].url;
        chrome.runtime.sendMessage({ message: "url_received", url: url });
      });
    }
  });
