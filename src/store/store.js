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
            console.log(e.target.id)
            const {name, id} = e.target;
            if (name){
                state.toggle[name] = !state.toggle[name]
            }else{
                state.toggle[id] = !state.toggle[id]
            }
        }
    },
    actions: {},
    modules: {},
});
