// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
  function (text) {
    // Encode user input for special characters , / ? : @ & = + $ #
    var newURL = 'https://gatry.com/promocoes?q=' + encodeURIComponent(text);
    chrome.tabs.create({
      url: newURL
    });
  });