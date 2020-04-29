<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <h2>Some built-in directives are here: </h2>
                <p v-text="'v-text is a built-in directives'"></p>
                <p v-html="'<strong>v-html is a built-in directives</strong>'"></p>
                <hr>
            </div>
        </div>
         <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <h2>Some Custom directives are here: </h2>
                <p v-highlight>Using El paraemter</p>
                <p v-highlight="'red'">Using Binding parameter</p>
                <p v-highlight="'blue'" >Passing an argument with Custom Directive</p>
                <p v-highlight:background.delayed="'blue'" >Passing an argument with Custom Directive With modifier</p>
                <p v-local-highlites:background.delayed="'blue'" >Passing an argument with Custom Directive Locally with modifier</p>
                <p v-local-highlites:background.delayed.blink="'cyan'" >Passing an argument with Custom Directive Locally with multiple modifier</p>
                <p v-local-highlites:background.delayed.blink="{ mainColor: 'cyan', secondColor: 'pink', delay: 500 }" >Passing an argument with Custom Directive Locally 
                    with multiple modifier and multiple values</p>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'localHighlites': {
                //  bind(el, binding, vnode){
                //     var delay;
                //     if(binding.modifiers['delayed']){
                //     delay = 3000;
                //     }
                //     setTimeout( () => {
                //     if(binding.arg == 'background'){
                //         el.style.backgroundColor = binding.value;
                //     }else{
                //         el.style.color = binding.value;
                //     }
                //     } ,delay);
                // }

                bind(el, binding, vnode){
                    var delay;
                    if(binding.modifiers['delayed']){
                        delay = 3000;
                    }

                    if(binding.modifiers['blink']){
                        var mainColor = binding.value.mainColor;
                        var secondColor = binding.value.secondColor;
                        var currentColor = mainColor;
                        setTimeout(() => {
                            setInterval(() => {
                                currentColor == secondColor ? currentColor=mainColor : currentColor=secondColor;
                                 if(binding.arg == 'background'){
                                    el.style.backgroundColor = currentColor;
                                }else{
                                    el.style.color = currentColor;
                                }
                            }, binding.value.delay);
                        },delay);
                    }else{
                         if(binding.arg == 'background'){
                                    el.style.backgroundColor = binding.value;
                          }else{
                             el.style.color = binding.value;
                         }
                    }
                   
                }
            }
        }
    }
</script>

<style>

</style>
