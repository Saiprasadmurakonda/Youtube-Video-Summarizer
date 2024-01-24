

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
