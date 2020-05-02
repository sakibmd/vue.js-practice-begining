<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                    <select v-model="alertAnimation" class="form-control">
                        <option value="fade"> Fade </option>
                        <option value="slide"> Slide </option>
                    </select>
                <hr>
                <br><br>
                <button class="btn btn-primary" @click="show = !show"> Show Alert</button>
                <br><br><br>
                <transition :name="alertAnimation">
                    <div  class="alert alert-info" v-if="show">We Love Bangladesh</div>
                </transition>
                 <transition name="slide" appear type="animation" >
                    <div  class="alert alert-info" v-if="show">We Love Bangladesh</div>
                </transition>
                <transition 
                    appear
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake"
                    type="transition"
                >
                    <div  class="alert alert-info" v-if="show">We Love Bangladesh</div>
                </transition>
                   <transition :name="alertAnimation">
                    <div  class="alert alert-info" v-if="show">We Love Bangladesh Alert Info</div>
                    <div  class="alert alert-warning" v-else>We Love Bangladesh Alert Warning</div>
                </transition>
                <button class="btn btn-primary" @click="load = !load">Load/Remove Element</button>
                <br><br>
               <transition>
                    <div style="height:100px; width:100px; background-color: lightgreen" v-if="load">

                    </div>
                </transition>
                <button class="btn btn-warning" @click="selectedComponent == 'app-alert-danger' ? selectedComponent = 'app-alert-success' : selectedComponent = 'app-alert-danger'">Toggle</button>
                <br>
                <transition mode="out-in">
                   <component :is="selectedComponent"></component>
                </transition>

                <br>
                <button class="btn btn-primary" @click="addItem">Add New Item</button>
               
               <ul class="list-group">
                   <transition-group name="slide">
                        <li class="list-group-item" v-for="(number,index) in numbers" style="cursor:pointer" 
                        @click="removeItem(index)" :key="number">
                            {{ number }}
                        </li>
                   </transition-group>
               </ul>

               <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
               

            </div>
        </div>
    </div>
</template>

<script>
    import AlertDanger from './AlertDanger.vue';
    import AlertSuccess from './AlertSucces.vue';
    export default {
        data() {
            return {
                show: false,
                load: true,
                alertAnimation: 'fade',
                selectedComponent: 'app-alert-danger',
                numbers: [1,2,3,4,5],
            }
        },
        components: {
            'appAlertDanger': AlertDanger,
            'appAlertSuccess': AlertSuccess,
        },
        methods: {
            addItem(){
                const pos = Math.floor(Math.random() * this.numbers.length);
                return this.numbers.splice(pos, 0, this.numbers.length+1);
            },
            removeItem(index){
                return this.numbers.splice(index,1);
            }
        }
    }
</script>

<style>
.fade-enter{
    opacity: 0;
}
.fade-enter-active{
    transition: opacity 2s;
}
.fade-leave{
    opacity: 1;
}
.fade-leave-active{
    transition: opacity 1s;
    opacity: 0;
}


.slide-enter{
    /* transform: translateY(20px) ; */
    opacity: 0;
}
.slide-enter-active{
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
}
.slide-leave{
}
.slide-leave-active{
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    position: absolute;
}
.slide-move{
    transition: transform 1s;
}

@keyframes slide-in {
    from{
        transform: translateY(20px); 
    }
    to{
        transform: translateY(0); 
    }
}

@keyframes slide-out {
    from{
        transform: translateY(0); 
    }
    to{
        transform: translateY(20px); 
    }
}


</style>
