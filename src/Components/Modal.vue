<template>
    <teleport to='body'> 
        <transition name="ani">
            <div class="modal" v-show="modelValue">
                <div class="modal-wraper">
                    <div class="modal-head">
                        <h2>{{heading}}</h2>
                        <h2 class="modal-close" @click="closeModalF">X</h2>
                    </div>
                    <div class="modal-body">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script>

    export default{
        name : 'App-modal',
        
        props:{
            heading:{
                type:String,
                default: 'Default Heading'
            },
            modelValue:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return{
                
            }
        },
        methods:{
            closeModalF(){
                this.$emit('update:modelValue',false)
            },
        }
    }
</script>



<style>
    .modal{
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        position: fixed;
        top: 150px;
        right:300px
        
    }
    .modal-wraper{
        width: 500px;
        padding-bottom: 50px;
        border-radius: 6px;
        box-shadow: 0  2px 8px rgba(255, 166, 0, 0.712);
        background: white;
        padding: 10px;
    }
    .modal-head{
        display: flex;
        justify-content: space-between;
        padding: 5px 10px;
    }
    .modal-close:hover{
        cursor: pointer;
        color:rgb(219, 146, 9);
    }
    .modal-body{
        padding: 25px 39px;
    }
</style>