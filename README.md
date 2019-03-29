# IUILIB
Simple React Component Library

 [![Build Status](https://travis-ci.org/intxlog/react-ui-library.svg?branch=master)](https://travis-ci.org/intxlog/react-ui-library) [![Coverage Status](https://coveralls.io/repos/github/intxlog/react-ui-library/badge.svg?branch=master)](https://coveralls.io/github/intxlog/react-ui-library?branch=master) [![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/intxlog/react-ui-library/blob/master/LICENSE)

Demo the components [here](https://intxlog.github.io/react-ui-library) using [Storybook](https://storybook.js.org/) 

## Getting Started
Before you start, please understand that this project is still in early development. PRs and feature requests are welcome.

```
npm install --save @intxlog/iuilib
```

Once installed, you can import components

```js
import { Button } from '@intxlog/iuilib';
```

## Development
Components can be developed using storybook. Using `npm run start` will run storybook in your local development environment and you can view/develop components real time. 

### Linking
To view components in another project you can use [npm link](https://docs.npmjs.com/cli/link.html).
1. Use `npm run start-linked` in the _react-ui-library app_ command line. 
> This will create a symlink in the global folder `{prefix}/lib/node_modules/<package>` that links to the package where the npm link command was executed and create a production build of the react-ui-library everytime a file is changed. This will allow you to develop components in other projects in real-time assuming your project is equipped to handle HMR.
2.  In the project you want to use the react-ui-library in,  run `npm link @intxlog/iuilib` .

## Testing
[Jest](https://jestjs.io/en/) is used to test the components. There are several commands that can be run to help you test.

`npm run test` - watches files and only run tests on the files that have been changed since the last commit  
`npm run test-all` - watches files and tests on ALL files  
`npm run test-all-coverage` - watches files and tests on ALL files along with generating a coverage report  
`npm run test-cover` - Generates a coverage report  

## Theming

Components can be themed by including the folliwing snippet in your CSS. Then it is just a matter of changing the values to the desired values. The values displayed are the default values. 
```css
:root {
  --colorPrimaryBase: #073451;
  --colorPrimaryLight: #214E6B;
  --colorPrimaryDark: #001B38;
  --colorPrimaryFaded: #628397;
  --colorPrimaryTrans: rgba(7, 51, 80, 0.5);
  --colorSecondaryBase: #e3761c;
  --colorSecondaryLight: #FD9036;
  --colorSecondaryDark: #CA5D03;
  --colorSecondaryTrans: rgba(227, 118, 28, 0.5);
  --colorFormInputPlaceholder: rgba(44, 44, 44, .5);
  --colorFormInputFontColor: #474747;
}
```

## Components

### Modal

The [Modal](https://intxlog.github.io/react-ui-library/?selectedKind=Modal&selectedStory=default&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel) component can be included in a project by placing the component once somewhere in your React app, preferably in the root of your app. The component is designed to be used with redux/state so that close function that can be passed in modifies the isOpen prop outside of the component itself. 

## Thank You:
Thank you to BrowserStack for letting us use their awesome tools when testing this Library.

[![BrowserStack](/assets/browserstackLogo.png)](https://www.browserstack.com/)