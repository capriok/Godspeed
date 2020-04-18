<p align="center">
  <a href="https://material-ui.com/" rel="noopener" target="_blank"><img width="150" src="https://i.imgur.com/xXLjICz.png" alt="Material-UI logo"></a>
</p>

<h1 align="center">Godspeed</h1>

[React](https://www.npmjs.com/package/godspeed) Component Library using [Styled-Components](https://styled-components.com/), desiged to make your life easier.

# Installation

Godspeed is available as an [npm package](https://www.npmjs.com/package/godspeed)

```sh
// npm
npm install godspeed
```
 Installation via yarn coming with the release of version 2

## Usage
```js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'godspeed/build/Modal';

function App() {
  const [modal, openModal] = useState(false)

  return (
    <Modal onClick={() => openModal(!modal)} open={modal}>
      Hello from a Godspeed modal
    </Modal>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

```
[![Edit Button](https://svgshare.com/i/KAx.svg)](https://codesandbox.io/s/godspeed-3zimc)


## Documentation
Check out our [Documentation website](https://godspeed.netlify.app/)

## Patch notes
A log of recent updates and notes can be found [here](https://godspeed.netlify.app/patchnotes)

## Roadmap
The future plans and enhancements will be laid out with the release of version 2

## License
This project is licensed under the terms of the [MIT license](/LICENSE)