import mapper from './mapper';

let fromCCAtoFSA,
    fromFSAtoCCA;

fromCCAtoFSA = () => (next) => (action) => {
    next(mapper.fromCCAtoFSA(action));
};

fromFSAtoCCA = () => (next) => (action) => {
    next(mapper.fromFSAtoCCA(action));
};

export default {
    fromCCAtoFSA,
    fromFSAtoCCA
};
