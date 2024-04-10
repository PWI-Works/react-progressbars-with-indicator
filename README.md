# react-semicircle-progressbar-with-indicator

A semicircle progress bar with an indicator for React applications.
Originally forked from [react-semicircle-progressbar](https://github.com/4emcos/react-semicircle-progressbar)

![alt text](/assets/example.png)

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install react-semicircle-progressbar-with-indicator.

```bash
npm install [insert name here]
```

## Usage

### Semicircle Progress Bar

```javascript
import React from 'react';
import SemiCircleProgressWithIndicator from '[insert name here]';

function App() {
  return (
      <div>
        <SemiCircleProgressWithIndicator
            percentage={80}
            indicatorPercentage={50}
            size={{
              width: 300,
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

### HorizontalProgressWithIndicator

```javascript
import React from 'react';
import HorizontalProgressWithIndicator from '[insert name here]';

function App() {
  return (
      <div>
        <HorizontalProgressWithIndicator
            percentage={80}
            indicatorPercentage={50}
            size={{
              width: 300,
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

### Indicator

```javascript
import React from 'react';
import SemiCircleProgressWithIndicator from '[insert name here]';

function App() {
  return (
      <div>
        <Indicator
            width={100}
            color={'f00'}
            style={'equilateral'}
            cornerRadius={20}
        />
      </div>
  );
}

export default App;
```

## Props

### SemiCircleProgressWithIndicator

| Property              | Type                                                                       | Description                                                                       |
|-----------------------|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| strokeWidth           | number                                                                     | The width of the progress bar line in pixels                                      |
| strokeLinecap         | "butt" &#124; "round" &#124; "square"                                      | The type of end cap for the progress bar line ("butt", "round", or "square")      |
| percentage            | number                                                                     | The percentage of the progress bar filled                                         |
| indicatorPercentage   | number                                                                     | The position of the indicator along the progress bar (null value hides indicator) |
| percentageSeparator   | string                                                                     | The separator to use between the percentage and label text (default is "of")      |
| size                  | { width: number, height: number }                                          | The size of the progress bar in pixels                                            |
| strokeColor           | string                                                                     | The color of the progress bar line in hex                                         |
| indicatorColor        | string                                                                     | The color of the indicator in hex                                                 |
| indicatorRelativeSize | number                                                                     | The size of the indicator relative to the stroke width of the progress bar line   |
| includeText           | boolean                                                                    | The text indicating percentage complete of the progress bar                       |
| fontStyle             | { fontSize: string, fontFamily: string, fontWeight: string, fill: string } | The style of the label text                                                       |
| hasBackground         | boolean                                                                    | The background of the progress bar                                                |
| bgStrokeColor         | string                                                                     | The color of the progress bar background line in CSS                              |

### HorizontalProgressWithIndicator

| Property              | Type                                                     | Description                                                                       |
|-----------------------|----------------------------------------------------------|-----------------------------------------------------------------------------------|
| strokeWidth           | number                                                   | The width of the progress bar line in pixels                                      |
| strokeLinecap         | "butt" &#124; "round" &#124; "square"                    | The type of end cap for the progress bar line ("butt", "round", or "square")      |
| percentage            | number                                                   | The percentage of the progress bar filled                                         |
| indicatorPercentage   | number                                                   | The position of the indicator along the progress bar (null value hides indicator) |
| width                 | number                                                   | The width of the progress bar in pixels                                           |
| strokeColor           | string                                                   | The color of the progress bar line in hex                                         |
| indicatorColor        | string                                                   | The color of the indicator in hex                                                 |
| indicatorRelativeSize | number                                                   | The size of the indicator relative to the stroke width of the progress bar line   |
| customText            | string                                                   | Custom text that is displayed inside the progress bar                             |
| textPosition          | 'start' &#124; 'end' &#124; 'middle'                     | The position of the custom text inside the progress bar                           |
| fontStyle             | { fontFamily: string, fontWeight: string, fill: string } | The style of the label text                                                       |
| hasBackground         | boolean                                                  | The background of the progress bar                                                |
| bgStrokeColor         | string                                                   | The color of the progress bar background line in CSS                              |

### Indicator

| Property     | Type                               | Description                                                                                                                                              |
|--------------|------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| width        | number                             | The width of the indicator in pixels                                                                                                                     |
| color        | string                             | The color of the indicator in hex                                                                                                                        |
| style        | "equilateral" &#124; "fill-square" | The style of the indicator - equilateral produces an equilateral triangle; fill-square produces an isosceles triangle where the height matches the width |
| cornerRadius | number                             | The corner radius of the indicator                                                                                                                       |

## Testing (development only)

This project has [Storybook](https://storybook.js.org/) installed for testing purposes. To run the storybook, use the
following command:

```bash
npm run storybook
```

Note that storybook only works in this repository - it is not available in the npm package.

## License

[MIT](https://choosealicense.com/licenses/mit/)