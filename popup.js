document.getElementById('rotate').addEventListener('click', () => {

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ['rotate.js']
    });
  });
});


document.getElementById('revert').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ['revert.js']  // Execute revert.js
    });
  });
});
