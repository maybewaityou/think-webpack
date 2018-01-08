/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

console.log('======');
export function render() {
  return renderToString( <App /> );
}
