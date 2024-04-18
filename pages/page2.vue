<template>
    <div>
        <div @click="loginWithFreee" style="cursor: pointer;">freee認証</div>
        <div @click="checkAuthStatus" style="cursor: pointer;">認証チェック</div>
    </div>
</template>

<script>
export default {
    methods: {
        async loginWithFreee() {
            try {
                console.log('ログインプロセス開始');
                await this.$auth.loginWith('freee');
                console.log('ログイン成功');
            } catch (error) {
                console.error('ログインエラー:', error);
            }
        },
        checkAuthStatus() {
            console.log('認証状態:', this.$auth.loggedIn);
        }
    },
    mounted() {
        console.log(this.$route.query.code);
        this.checkAuthStatus();
    }
};
</script>