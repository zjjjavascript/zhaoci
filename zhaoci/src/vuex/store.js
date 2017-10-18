import Vue from 'vue';
import Vuex from 'vuex';

import main from './modules/common';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        main
    }
});

export default store;