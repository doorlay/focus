import Timer from "./timer";

new Timer();

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getBlocklist") {
    browser.storage.local.get("blockedWebsites").then(data => {
      sendResponse({ blockedWebsites: data.blockedWebsites || [] });
    });
    // This return true is required for async sendResponse
    return true;
  }
});
