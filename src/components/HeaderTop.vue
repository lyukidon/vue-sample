<template>
    <div class="top">
        <div>
            <button name="menu" v-on:click="setToggle">Menu</button>
        </div>
        <div><button>Shopping</button></div>
        <div><button name="user" v-on:click="setToggle">User</button></div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
// import { computed } from 'vue'
 
export default {
    data(){

    },
    methods:{
        ...mapMutations({
            setToggle: 'setToggle'
        })
    }
};
</script>

<style>
.top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>
