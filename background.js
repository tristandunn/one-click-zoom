chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  chrome.tabs.remove(sender.tab.id);
});
