<template>
    <transition name="slide-fade">
        <div class="container">
            <div class="userMenu">
                <div>
                    <button name="user" v-on:click="setToggle">
                        <v-icon name="bi-x-lg" scale="1.5"></v-icon>
                    </button>
                </div>
                <div>Username</div>
                <div>Icon</div>
                <div>Nickname</div>
                <div>Logout</div>
                <div>Edit Profile</div>
            </div>
            <div class="space"></div>
        </div>
    </transition>
</template>

<script>
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
        return {};
    },
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: row-reverse;
    position: absolute;
    top: 0;
    right: 0;
}
.userMenu {
    width: 270px;
    height: calc(100vh - 100px);
    border: 1px solid black;
    padding: 50px;
    background-color: rgba(255, 255, 255, 1);
    overflow-y: auto;
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
    transform: translateX(20px);
    opacity: 0;
}
</style>
