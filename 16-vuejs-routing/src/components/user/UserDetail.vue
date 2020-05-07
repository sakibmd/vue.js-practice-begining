<template>
    <div>
        <h3>Some User Details</h3>
        <p>Id: {{ $route.params.id }}</p>
        <router-link tag="button" :to="link"  class="btn btn-primary">Edit User</router-link>
        <br><br>
    </div>
</template>

<script>
export default {
    data(){
        return {
            link: {
                name: 'userEdit',
                params: {
                    id: this.$route.params.id,
                },
                query: {
                    locale: 'en',
                    taka: 100,
                },
                hash: '#data',
            }
        };
    },
    beforeRouteEnter(to, from, next){
        if(true){
            next();
        }
        else{
            next(false);
        }
    }
}
</script>>