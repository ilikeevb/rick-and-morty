import { createStore, createLogger } from 'vuex';

import characters from './modules/characters';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
    modules: {
        characters,
    },
    strict: debug,
    plugins: debug ? [createLogger()] : [],
});
