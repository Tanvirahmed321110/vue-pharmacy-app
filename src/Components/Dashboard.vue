<template>
    <div class="dashboard">
        <div class="dashboard-wraper">
            <div class="dashboard-left">
                <div class="dashboard-left-wraper">
                    <ComSidebar></ComSidebar>
                </div>
            </div>
            <div class="dashboard-right">
                <div class="dashboard-tops">  
                    <div class="dashboard-top">
                        <ComHeader></ComHeader>  
                    </div>
                </div>
                <div class="dashboard-right-main">
                    <router-view></router-view> <br>
                    <h2>Main container</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quas unde delectus voluptates iure perspiciatis explicabo nihil, labore saepe, dolore, iusto error? Reiciendis numquam explicabo rerum impedit corporis iure dolore harum error!</p> 
                </div>
            </div>
        </div>        
    </div>
</template>




<script>
    import ComSidebar from './Sidebar.vue'
    import ComHeader from './Dashboard-head.vue'
    
    export default {
        name:'comDashboard',
        
        components:{
            ComSidebar,
            ComHeader
        }
    }
</script>




<style scoped>
    .dashboard-wraper{
        position: relative;
        width: 100%;
        display: flex;
        height: 100vh;
    }
    
    .dashboard-left{
        width: 315px;
    }
    .dashboard-left-wraper{
        width: 275px;
        box-shadow: 0 0 13px 5px rgb(0 0 0 /10%);
        position: fixed;
        /* left: 0;
        top: 0;
        bottom: 0; */
        height: 100vh;
        z-index: 3;
        background: darkmagenta;
    }
    .dashboard-right{
        /* z-index: 5; */
        width:91.5%;
    }
    .dashboard-top{
        position: relative;
    }
    .dashboard-top{
        box-shadow: 0 0 13px 5px rgb(0 0 0 /5%);
        height: 75px;
        background: white;
        position: fixed;
        width: 100%;
        z-index: 2;
    }
    .dashboard-right-main{
        position: relative;
        overflow-y: auto;
        background: #d3c1c1;
        height: 100%;
        padding-top: 200px;
        width:100%;
        padding: 28px;
        z-index: 1;
        top:75px;
    }
</style>