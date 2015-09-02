# redux-convention

[![Travis build status](http://img.shields.io/travis/gajus/redux-convention/master.svg?style=flat-square)](https://travis-ci.org/gajus/redux-convention)
[![NPM version](http://img.shields.io/npm/v/redux-convention.svg?style=flat-square)](https://www.npmjs.org/package/redux-convention)

## Usage

```js
import {
    createStore,
    applyMiddleware
} from 'redux';

import {
    middleware as convention
} from 'redux-convention';

import {
     combineReducers
} from 'redux-immutable';

import * as reducers from './reducers';

import Immutable from 'immutable';

let reducer,
    state,
    store;

reducer = combineReducers(reducers);

state = Immutable.Map({});

state = reducer(state, {
    name: `CONSTRUCT`
});

store = applyMiddleware(
    // Middleware that uses CCA.
    convention.fromCCAtoFSA,
    // Middleware that uses FSA.
    convention.fromFSAtoCCA,
    // Middleware that uses CCA.
)(createStore)(reducer, state);

export default store;
```
