'use strict';

chrome.omnibox.onInputEntered.addListener((text, disposition) => {
  const url = 'https://www.stackage.org/lts/hoogle?q=' + encodeURIComponent(text);

  switch (disposition) {
    case 'currentTab':
      chrome.tabs.update({url: url});
      break;
    case 'newForegroundTab':
      chrome.tabs.create({url: url, active: true});
      break;
    case 'newBackgroundTab':
      chrome.tabs.create({url: url, active: false});
      break;
  }
});