<template>
    <div class="top">
        <div>
            <button name="menu" v-on:click="setToggle"><v-icon name="fa-bars"></v-icon></button>
        </div>
        <div class="shopping">Shopping</div>
        <div>
            <button name="user" v-on:click="setToggle">
                <v-icon name="fa-regular-user-circle"></v-icon>
            </button>
        </div>
    </div>
</template>

<script>
import { OhVueIcon } from "oh-vue-icons";
import { mapMutations } from "vuex";

export default {
    components: {
        "v-icon": OhVueIcon,
    },
    data() {},
    methods: {
        ...mapMutations({
            setToggle: "setToggle",
        }),
    },
};
</script>

<style>
.shopping {
    font-size: 20px;
    cursor: pointer;
}
.top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding: 15px 0px;
}
button {
    background-color: rgba(0, 0, 0, 0);
    border: none;
}
svg {
    pointer-events: none;
}
</style>
