# redux-convention

[![Travis build status](http://img.shields.io/travis/gajus/redux-convention/master.svg?style=flat-square)](https://travis-ci.org/gajus/redux-convention)
[![NPM version](http://img.shields.io/npm/v/redux-convention.svg?style=flat-square)](https://www.npmjs.org/package/redux-convention)

Facilitates conversion of [Flux Standard Action](https://github.com/acdlite/flux-standard-action) (FSA) to [Canonical Composition Action](https://github.com/gajus/canonical-reducer-composition/#action) (CCA) and vice-versa.

* [Use Case](#use-case)
* [Usage](#usage)
    * [Function](#function)
    * [Middleware](#middleware)

## Use Case

`redux-convention` is used to convert between two competing standards: [Flux Standard Action](https://github.com/acdlite/flux-standard-action) and [Canonical Composition Action](https://github.com/gajus/canonical-reducer-composition). The two standards can be used together in the same project, e.g. the main project might use CCA, but it can rely on middleware that is designed for FSA. `redux-convention` is used to convert actions between the two standards.

FSA is the more popular standard. There is a number of [libraries that implement FSA](https://github.com/acdlite/flux-standard-action#libraries) and a lot more that unofficially implement FSA in full or in part.

CCA is part of a broader standard called [Canonical Reducer Composition](https://github.com/gajus/canonical-reducer-composition/) (CRC). The aim of CRC is to standardize [Redux](https://github.com/rackt/redux) application composition. CCA is a variation of FSA using different semantics. [redux-immutable](https://github.com/gajus/redux-immutable) is an example of a library that implements CCA standard.

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
