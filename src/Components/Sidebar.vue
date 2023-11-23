<template>
    <div class="sidebar">
        <div class="sidebar-top">
            <h3>Pharmacy Management</h3>
        </div>
        <div class="sidebar-bottom">
            <div class="sidebar-nav">
                <router-link to="/dashboard/overview">Overview</router-link>
                <router-link to="/dashboard/drugs">Drugs</router-link>
                <router-link to="/dashboard/vendors">Vendors</router-link>
                <router-link to="/dashboard/selling">Selling History</router-link>
                <router-link to="/dashboard/other">Other</router-link>
                <router-link to="/dashboard/setting">Setting</router-link>
            </div>
        </div>
    </div>
</template>


<script>
    export default{
        name:'com-sidebar'
    }
</script>


<style scoped>
    .sidebar{
    }
    .sidebar-top h3{
        text-align: center;
        padding-top: 15px;
        text-shadow: 0 1px #040404;
        color: #e9d0d0;
        word-spacing: 2px;
    }
    .sidebar-nav{
        display: flex;
        flex-direction: column;
        margin-top: 60px;
        /* padding: 20px; */
    }
    .sidebar-nav a,.sidebar-nav router-link{
        display: block;
        margin: 7px 0;
        text-decoration: none;
        padding: 8px 0;
        cursor: pointer;
        color: #aca3a3;
        font-weight: 600;
        transition: all .1s linear;
        padding-left: 18px;
    }
    
    
    
    .sidebar-nav a:hover{
        background-color: #533737;
        border-left: 4px solid red;
    }
</style>