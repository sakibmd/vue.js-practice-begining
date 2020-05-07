<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Taka: {{ $route.query.taka }}</p>

        <div style="height: 700px"></div>
        <p id="data">Hello World</p>
        <button class="btn btn-primary" @click="confirmed = true">Confirmed</button>

    </div>
</template>

<script>
export default {
    data(){
        return{
            confirmed: false,
        };
    },
    beforeRouteLeave(to, from, next){
        if(this.confirmed){
            next();
        }else{
            if(confirm('Are u sure to leave?')){
                next();
            }
            else{
                next(false);
            }
        }
    }
}
</script>>