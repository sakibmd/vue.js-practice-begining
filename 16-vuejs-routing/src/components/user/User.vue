<template>
 <div>
        <h1>The User Page</h1>
        <hr>
        <router-view></router-view>
        <button class="btn btn-info" @click="navigateToHome">Go To Home</button>
        <button class="btn btn-info" @click="navigateToUser">Go To User</button>
 </div>

</template>


<script>
export default {
    // data(){
    //     return{
    //         id: this.$route.params.id,
    //     }
    // },
    // watch: {
    //     '$route'(to, from){
    //         this.id = to.params.id;
    //     }
    // },
    methods: {
        navigateToHome(){
            this.$router.push({name: 'home'});
        },
        navigateToUser(){
            this.$router.push('/user');
        }
    }
}
</script>>