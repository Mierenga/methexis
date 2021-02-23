// You can access and modify the document of the page you are extending
(() => {
  const heading = document.getElementsByTagName('h1')[0];
  heading.innerText = 'This Heading Was Changed By A Browser Extension When You Clicked It\'s Icon';
})();