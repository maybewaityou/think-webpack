/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * @flow
 *
 * description:
 *
 */
import * as React from 'react';
import { render } from 'react-dom';

class Title extends React.Component {
  render() {
    return <h1>Hello, Webpack</h1>
  }
}

render(<Title />, window.document.getElementById('app'));
