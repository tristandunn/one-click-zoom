setInterval(function() {
  if (window.location.hash === "#success") {
    chrome.runtime.sendMessage({});
  }
}, 250);
