<template>
    <HeaderTop />
    <CategoryMenu v-show="this.$store.state.toggle.menu" />
    <UserMenu v-show="this.$store.state.toggle.user" />
</template>

<script>
import HeaderTop from "../components/header/HeaderTop.vue";
import CategoryMenu from "../components/category/CategoryMenu.vue";
import UserMenu from "../components/category/UserMenu.vue";

export default {
    components: {
        HeaderTop,
        CategoryMenu,
        UserMenu,
    },
};
</script>

<style lang="scss" scoped></style>
