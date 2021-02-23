chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        // Actions below are allowed when these conditions are met
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: 'example.com' },
        }),
      ],
      actions: [
        // Allow the extension icon button in the Chrome toolbar to show popup/popup.html when clicked
        new chrome.declarativeContent.ShowPageAction(),
      ],
    }]);
  });
});