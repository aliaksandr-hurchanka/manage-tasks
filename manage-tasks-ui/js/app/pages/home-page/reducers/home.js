import { GET_ARTICLES_REQUEST } from '../actions/home';

const defState = {
    backLinkOpts: null,
    request: {
        status: '',
        errorText: ''
    }
};

export default (state = defState, action) => {

    switch (action.type) {
    default: return state;
    }
}
