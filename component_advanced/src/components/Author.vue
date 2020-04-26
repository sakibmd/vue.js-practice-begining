<template>
  <div>
     <h3>This is Author Page</h3>
     <button @click="counter++">Increase</button>
     {{ counter }}
  </div>
</template>

<script>
    export default {
        data: function(){
            return {
                counter: 0,
            };
        },
        destroyed(){
            console.log('Distroyed!');
        },
        activated(){
            console.log('Activated');
        },
        deactivated(){
            console.log('Deactivated');
        },
    }
</script>

<style > 
</style>
