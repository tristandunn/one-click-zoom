window.addEventListener("load", function() {
  if (window.location.search != "?status=success") {
    return;
  }

  chrome.runtime.sendMessage({});
});
