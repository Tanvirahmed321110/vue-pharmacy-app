<template>
    <div class="head">
        <div class="head-wraper">
            <div class="search">
                <input class="search-input"  type="text" placeholder="Search..." >
            </div>
            <div class="profile">
                <div class="profile-wraper">
                    <div>T</div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'app-dashboard-head',
}
</script>



<style scoped>
    .head{
        height: 100%;
    }
    .head-wraper{
        width:81.5%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 55px ;
    }
    .search{
        width:70%;
        display: flex;
        align-items: center;
    }
    .search input{
        width: 100%;
        padding: 12px 19px;
        border-radius: 3px;
        border: 1px solid rgb(223, 211, 211) ;
        transition: all .2s linear;
    }
    .search input:focus {
        border: 1px solid rgb(114, 114, 235) ;
    }
    
    .profile-wraper{
        display: flex;
        justify-content: center;
        align-items: center;
        background: black;
        width:41px;
        height:41px;
        border-radius: 50%;
    }
    .profile-wraper div{
        font-size: 18px;
        color: white;
        font-weight: 500;
    }
</style>