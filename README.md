# redux-convention

[![Travis build status](http://img.shields.io/travis/gajus/redux-convention/master.svg?style=flat-square)](https://travis-ci.org/gajus/redux-convention)
[![NPM version](http://img.shields.io/npm/v/redux-convention.svg?style=flat-square)](https://www.npmjs.org/package/redux-convention)

Facilitates conversion of Flux Standard Action (FSA) to Canonical Composition Action (CCA) and vice-versa.

* [Usage](#usage)
    * [Function](#function)
    * [Middleware](#middleware)

## Usage

### Function

`redux-convention` exposes `mapper` object that in turn defines two functions: `fromCCAtoFSA` and `fromFSAtoCCA`. Input is a plan object. Output is a shallow copy of the input with mapped properties.

```js
import {
    mapper
} from 'redux-convention';

let CCAction,
    FSAction;

CCAction = {
    name: 'foo',
    data: {
        foo: 'bar'
    },
    metadata: {
        baz: 'qux'
    }
};

FSAction = mapper.fromCCAtoFSA(CCAction);
CCAction = mapper.fromFSAtoCCA(FSAction);
```

### Middleware

`redux-convention` exposes `middleware` object that in turn defines two functions: `fromCCAtoFSA` and `fromFSAtoCCA`. These functions are designed to work with [Redux middleware](https://rackt.github.io/redux/docs/advanced/Middleware.html), specifically, the [`applyMiddleware`](https://rackt.github.io/redux/docs/api/applyMiddleware.html) function.

Middleware can be used multiple times to convert FSA to CCA.

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
