var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('css/night-mode.css');
(document.head||document.documentElement).appendChild(style);

document.getElementsByClassName('scroll-to-top')[0].children[0].remove();
var image = document.createElement('img');
image.src = chrome.extension.getURL('images/up_dark.png');
document.getElementsByClassName('scroll-to-top')[0].appendChild(image);