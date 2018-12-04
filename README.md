# IUILIB
Simple React Component Library

## Getting Started

```
npm install --save @intxlog/iuilib
```

Once installed, you can import components

```js
import { Button } from '@intxlog/iuilib';
```

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