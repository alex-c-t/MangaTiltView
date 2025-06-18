// Use the browser API for Firefox
browser.browserAction.onClicked.addListener((tab) => {
  // Fallback to tabs.executeScript for Firefox
  browser.tabs.executeScript(tab.id, { file: 'rotate.js' });
  browser.tabs.executeScript(tab.id, { file: 'revert.js' });
});