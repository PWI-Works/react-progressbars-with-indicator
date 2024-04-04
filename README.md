# react-semicircle-progressbar-with-indicator

A semicircle progress bar for React applications.
Forked from [react-semicircle-progressbar](https://github.com/4emcos/react-semicircle-progressbar)

![alt text](https://raw.githubusercontent.com/4emcos/react-semicircle-progressbar/main/assets/example.jpg)

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install react-semicircle-progressbar-with-indicator.

```bash
npm install react-semicircle-progressbar-with-indicator
```

## Usage

```javascript
import React from 'react';
import SemiCircleProgressWithIndicator from 'react-semicircle-progressbar-with-indicator';

function App() {
  return (
    <div>
      <SemiCircleProgressWithIndicator
        percentage={80}
        indicatorPercentage={50}
        size={{
          width: 200,
          height: 200,
        }}
        strokeWidth={10}
        strokeColor="#f00"
        indicatorColor="#f00"
      />
    </div>
  );
}

export default App;
```


## Props

| Property            | Type                                                                       | Description                                                                       |
|---------------------|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| strokeWidth         | number                                                                     | The width of the progress bar line in pixels                                      |
| strokeLinecap       | "butt" &#124; "round" &#124; "square"                                      | The type of end cap for the progress bar line ("butt", "round", or "square")      |
| percentage          | number                                                                     | The percentage of the progress bar filled                                         |
| indicatorPercentage | number                                                                     | The position of the indicator along the progress bar (null value hides indicator) |
| percentageSeparator | string                                                                     | The separator to use between the percentage and label text (default is "of")      |
| size                | { width: number, height: number }                                          | The size of the progress bar in pixels                                            |
| strokeColor         | string                                                                     | The color of the progress bar line in CSS                                         |
| indicatorColor      | string                                                                     | The color of the indicator in CSS                                                 |
| includeText         | boolean                                                                    | The text indicating percentage complete of the progress bar                       |
| fontStyle           | { fontSize: string, fontFamily: string, fontWeight: string, fill: string } | The style of the label text                                                       |
| hasBackground       | boolean                                                                    | The background of the progress bar                                                |
| bgStrokeColor       | string                                                                     | The color of the progress bar background line in CSS                              |


## Testing (development only)
Storybook has been added to this project for testing purposes. To run the storybook, use the following command:
```bash
npm run storybook
```
Note that this only works in this repository - it is not available in the npm package.


## License
[MIT](https://choosealicense.com/licenses/mit/)