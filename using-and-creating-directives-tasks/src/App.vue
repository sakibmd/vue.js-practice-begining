<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button class="btn btn-primary" v-custom-on:click="clicked">Click Me</button>
                <div style="height: 250px; width:250px; background-color:cyan"
                        v-customOn:mouseenter="MouseEnter"
                        v-customOn:mouseleave="MouseLeave"
                ></div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {

            'customOn': {
                bind(el, binding, vnode){
                    const type = binding.arg;
                    const fn = binding.value;
                    el.addEventListener(type, fn);
                }
            }
        },
        methods: {
            clicked(){
                alert('I was clicked');
            },
            MouseEnter(){
                console.log('Enter');
            },
            MouseLeave(){
                console.log('Leave');
            }
        },
        
    }
</script>

<style>
</style>
