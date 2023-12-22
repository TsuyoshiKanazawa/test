<template>
    <div>
        <div @click="loginWithFreee" style="cursor: pointer;">aaaa</div>
        
    </div>
</template>

<script>
export default {
    auth: false,
    methods: {
        loginWithFreee() {
            this.$auth.loginWith('freee');
        }
    },
    async mounted() {
        if (this.$auth.loggedIn) {
            const userInfo = await this.$auth.fetchUser();
            console.log('UserInfo:', userInfo);
        } else {
            console.log(this.$auth.loggedIn);
        }
    }
};
</script>

<style scoped></style>
