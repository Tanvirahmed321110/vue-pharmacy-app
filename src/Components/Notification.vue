<template>
    <div class="notification" v-if="isCloseNotification">
        <div 
            class="notification-wraper" 
            v-for="notification in notifications" 
            :key="notification"
        >
            <div class="notification-header" :class="{'error': notification.type=== 'Error'}">
                <span>{{notification.type}}</span>
                <span class="close-notification-btn" @click="closeF">X</span>
            </div>
            <div class="notification-body">
                <div>
                    {{notification.sms}}
                </div>
            </div>
        </div>    
    </div>
</template>
    


<script>
export default {
    name:'app-notification',
    props:{
        isCloseNotification:{
            type:Boolean
        },
    },
    data(){
        return{
            notifications:[
                // {type: 'Success', sms: 'Done Successfully'},
                // {type: 'Error', sms: 'Sorry Something went Wrong'}
            ]
        }
    },
    methods:{
        closeF(){
            this.$emit('update:isCloseNotification',false)
        },
        autoCloseF(){
            setTimeout(() => {
                this.notifications.shift();
            }, 2222);
        }
    },
    mounted(){
        this.$eventBus.on('notification', data=>{
            this.notifications.push(data)
            this.autoCloseF()
        })
    }
}
</script>




<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease; 
  wevwetvksetkwvrck
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
    .notification{
        background-color: white;
        box-shadow: 0px 9px 4px #dfdfdf;
        width: 250px;
        min-width: 145px;
    }
    .notification-header{
        padding: 12px;
        display: flex;
        justify-content: space-between;
        background-color: rgba(155, 243, 167, 0.863);
        color: var(--sucess-color);
        font-weight: 500;
        font-size: 18px;
    }
    .notification-body{
        padding: 12px;
    }
    
    .close-notification-btn{
        cursor: pointer;
        user-select: none;
    }
    .close-notification-btn:hover{
        color: rgb(255, 4, 4);
    }
    .error{
        color: red;
        letter-spacing: .5px;
        background-color: burlywood;
    }
</style>