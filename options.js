chrome.storage.sync.set({ key: 10 }, function () {
  console.log('Value is set to ' + 10);
});

chrome.storage.sync.get(['key'], function (result) {
  console.log('Value currently is ' + result.key);
});

chrome.storage.local.set({ key: 'Hello' }, function () {
  console.log('Value is set to ' + value);
});

chrome.storage.local.get(['key'], function (result) {
  console.log('Value currently is ' + result.key);
});
