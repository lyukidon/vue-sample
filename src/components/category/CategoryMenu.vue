<template>
    <transition name="slide-fade">
        <div class="container">
            <div class="categoryMenu">
                <div class="buttonContainer">
                    <button name="menu" v-on:click="setToggle">
                        <v-icon name="bi-x-lg" scale="1.5"></v-icon>
                    </button>
                </div>
                <div v-for="i in category" :key="i">
                    <div class="categoryName">{{ i }}</div>
                    <div class="categoryUrl" v-for="j in categoryUrl" :key="j.title">
                        <a v-bind:href="j.url" v-if="j.category === i">{{ j.title }}</a>
                    </div>
                </div>
            </div>
            <div class="space" id="menu" v-on:click="setToggle"></div>
        </div>
    </transition>
</template>

<script>
import { category } from "../../assets/category";
import { categoryUrl } from "../../assets/categoryUrl";
import { mapMutations } from "vuex";
import { OhVueIcon } from "oh-vue-icons";

export default {
    components: {
        "v-icon": OhVueIcon,
    },
    methods: {
        ...mapMutations({
            setToggle: "setToggle",
        }),
    },
    setup() {
        return {
            category,
            categoryUrl,
        };
    },
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
}
.categoryMenu {
    width: 270px;
    height: calc(100vh - 100px);
    border: 1px solid black;
    padding: 50px;
    background-color: rgba(255, 255, 255, 1);
    overflow-y: auto;
}
.categoryName {
    margin: 15px 0px;
}
.categoryUrl {
    font-size: 13px;
    margin: 5px 0px;
}
a {
    color: rgb(96, 96, 96);
}
.space {
    width: calc(100vw - 372px);
    background-color: rgba(85, 85, 85, 0.5);
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(-20px);
    opacity: 0;
}
</style>
