/* eslint-env mocha */

import {
    expect
} from 'chai';

import mapper from './../src/mapper';

describe(`mapper`, () => {
    it(`fromCCAtoFSA`, () => {
        context(`when mapping a regular action`, () => {
            let CCAction,
                FSAction;

            beforeEach(() => {
                CCAction = {
                    name: `foo`,
                    data: {
                        foo: `bar`
                    },
                    metadata: {
                        baz: `qux`
                    }
                };
                FSAction = mapper.fromCCAtoFSA(CCAction);
            });
            it(`maps name property to type`, () => {
                expect(CCAction.name).to.equal(FSAction.type);
            });
            it(`maps data property to payload`, () => {
                expect(CCAction.data).to.equal(FSAction.payload);
            });
            it(`maps metadata property to meta`, () => {
                expect(CCAction.metadata).to.equal(FSAction.meta);
            });
        });
        context(`when mapping a error action`, () => {
            let CCAction,
                FSAction;

            beforeEach(() => {
                CCAction = {
                    name: `foo`,
                    error: new Error(`bar`)
                };
                FSAction = mapper.fromCCAtoFSA(CCAction);
            });
            it(`maps error property to payload`, () => {
                expect(CCAction.error).to.equal(FSAction.payload);
            });
            it(`sets error property to true`, () => {
                expect(FSAction.error).to.equal(true);
            });
        });
    });
    it(`fromFSAtoCCA`, () => {
        context(`when mapping a regular action`, () => {
            let CCAction,
                FSAction;

            beforeEach(() => {
                FSAction = {
                    type: `foo`,
                    payload: {
                        foo: `bar`
                    },
                    meta: {
                        baz: `qux`
                    }
                };
                CCAction = mapper.fromFSAtoCCA(FSAction);
            });
            it(`maps type property to name`, () => {
                expect(FSAction.type).to.equal(CCAction.name);
            });
            it(`maps payload property to data`, () => {
                expect(FSAction.payload).to.equal(CCAction.data);
            });
            it(`maps meta property to metadata`, () => {
                expect(FSAction.meta).to.equal(CCAction.metadata);
            });
        });
        context(`when mapping a error action`, () => {
            let CCAction,
                FSAction;

            beforeEach(() => {
                FSAction = {
                    name: `foo`,
                    error: new Error(`bar`)
                };
                CCAction = mapper.fromFSAtoCCA(FSAction);
            });
            it(`maps payload property to error`, () => {
                expect(FSAction.payload).to.equal(CCAction.error);
            });
        });
    });
});
