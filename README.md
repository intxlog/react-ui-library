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

## Components

### Modal

The [Modal](https://intxlog.github.io/react-ui-library/?selectedKind=Modal&selectedStory=default&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel) component can be included in a project by placing the component once somewhere in your React app, preferably in the root of your app. The component is designed to be used with redux/state so that close function that can be passed in modifies the isOpen prop outside of the component itself. 

## Validation

For now, email is the only type of input that is validated. Inputs have a custom onValid event that only returns a value when an input becomes valid. In the future we may add in an onValidChange and onValidBlur event forr performance reasons. For now the onValid event is fired on both. 

You can pass in your own custom validation method by using the this.props.customValidationFunc prop. This function must return an object in the following format:

```js
{
  valid: boolean,
  message: string,
  value: string
}
```