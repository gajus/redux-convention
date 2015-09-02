let fromCCAtoFSA,
    fromFSAtoCCA;

fromCCAtoFSA = (action) => {
    return {
        type: action.name,
        payload: action.data
    };
};

fromFSAtoCCA = (action) => {
    return {
        name: action.type,
        data: action.payload
    };
}

export default {
    fromCCAtoFSA,
    fromFSAtoCCA
};
