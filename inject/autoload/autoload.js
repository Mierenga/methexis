// You can access and modify the document of the page you are extending
(() => {
  const hostDiv = document.getElementsByTagName('div')[0]
  const extensionDiv = document.createElement('div');
  extensionDiv.id = 'extension-container';
  extensionDiv.innerText = 'This box was added by a browser extension automatically when you visited this site.'
  hostDiv.appendChild(extensionDiv);
})();