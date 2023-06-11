import Vuex from "vuex";

export default new Vuex.Store({
    state: {
        toggle: {
            menu: false,
            user: false,
        },
    },
    getters:{},
    mutations: {
        setToggle: (state, e) => {
            console.log(state.toggle)
            const {name} = e.target;
            state.toggle[name] = !state.toggle[name]
        }
    },
    actions: {},
    modules: {},
});
