import { reactive } from 'vue';

let state = reactive({
    input: "",
    Items: ["Build Vue3 App"]
});

let addItem = () => {
    state.Items.push(state.input);
    state.input = "";
};

let removeItem = i => {
    state.Items.splice(i, 1);
};


export default { state, addItem, removeItem }