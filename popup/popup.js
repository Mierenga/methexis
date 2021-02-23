/**
 * Open the active tab in the current Chrome window (using the permission established in the manifest.json)
 * and inject a list of .css and .js files asynchronously, resolving when all files are injected (order unknown)
 * @param {{ js: string[], css: string[] }} files
 * @return Promise
 */
async function injectFiles(files) {
  const [ tab ] = await new Promise(resolve => chrome.tabs.query({active: true, currentWindow: true}, resolve));
  files.css && await Promise.all(files.css.map(file => new Promise(resolve => chrome.tabs.insertCSS(tab.id, { file: file }, resolve))));
  files.js && await Promise.all(files.js.map(file => new Promise(resolve => chrome.tabs.executeScript(tab.id, {file: file }, resolve))));
}

(async () => {
  // Load any dependencies first
  await injectFiles({
    js: [
			// Add any scripts/libraries you want to inject into the extension environment (to be called from the main injected script).
			// Inside these scripts, you can store items for later using by setting them as a property somewhere on the window object,
      // as is common with many front-end JavaScript libraries.
		],
		css: [
			// Add stylesheets that will be applied to the shared DOM for current and future elements
			'inject/action/action.css',
		],
	});
	// Run your injection action scripts' main entry point
	await injectFiles({
		js: [ 'inject/action/action.js' ],
	});
})();
