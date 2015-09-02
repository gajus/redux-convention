import mapper from './mapper';

let fromCCAtoFSA,
    fromFSAtoCCA;

fromCCAtoFSA = (store) => (next) => (action) => {
    next(mapper.fromCCAtoFSA(action));
};

fromFSAtoCCA = (store) => (next) => (action) => {
    next(mapper.fromFSAtoCCA(action);
};

export default {
    fromCCAtoFSA,
    fromFSAtoCCA
};
