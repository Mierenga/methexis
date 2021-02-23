

# methexis

A sample Chrome browser extension that demonstrates the basic structure and can be used
as a starter.

## See the accompanying [description and guide](https://www.notion.so/Methexis-61d9e20bb3c54aae8d5e716aa0f13f12)

> [methexis](https://en.wiktionary.org/wiki/methexis)  •  **Noun**
• (theater) An originally Ancient Greek form of theatre in which the audience participates and improvises.
• (philosophy) The relation between a particular and a Platonic form.

```sh
.
├── img # images extension needs to access
│   └── logo.png
├── inject # modules of css and js files that can be injected into a page
│   ├── action # module injected by popup.js
│   │   ├── action.css
│   │   └── action.js
│   └── autoload # module injected whenever the user's URL matches the target in manifest.json
│       ├── autoload.css
│       └── autoload.js
├── manifest.json # the main registration of the extension; connects everything together
├── popup # page displayed underneath extension icon when clicked in the Chrome toolbar
│   ├── popup.html
│   └── popup.js
└── rules.js
```