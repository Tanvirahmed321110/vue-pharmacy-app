<template>
    <router-view></router-view>
    <div class="login-page">
        <div class="login-wraper">
            <div class="spinner-container">
                        <div class="spinner"></div>
                    </div>
            <div class="login-head">
                <img src="https://rb.gy/14a1in" alt="Lock Image">
                <h3 class="text-center mt-4">User Login</h3>
            </div>
            
            <form action="" @submit.prevent="handelLoginSubmitF">
                <div class="label-container">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter Email*"
                        v-model="userLoginData.email"
                    >
                    <div class="error" v-if="false"> Please Valid PassWord Or Email</div>
                </div>
                <div class="label-container">
                    <label>Password</label>
                    <input
                     type="password" placeholder="Enter Password*"
                     v-model="userLoginData.password"
                     required
                     >
                     <div class="error" v-if="isError">Please Valid PassWord Or Email</div>
                </div>
                
                
                <div class="label-container">
                    <div class="spinner-container" v-if="isSppiner">
                        <div class="spinner"></div>
                    </div>
                    <button v-else class="login-btn">Login</button>
                </div>
                
                <div class="login-footer">
                <label>
                    <input type="checkbox" 
                        v-model="userLoginData.rememberPassword"                        
                    >
                    Remember Me
                </label>
                <div class="forget-password">
                    <a href="#">Forget Password?</a>
                </div>
            </div> <!--Login footer end -->
            </form>
        </div>        
    </div>
</template>




<script>
    import axios from 'axios'
    
    export default{
        name: 'app-login',
        data(){
            return{
                isSppiner: false,
                isError: false,
                userLoginData:{
                    email: '',
                    password: '',
                    rememberPassword: false
                }
            }
        },
        
        methods:{
            handelLoginSubmitF(){
                if(this.userLoginData.email===''){
                    this.isError = true
                    return  alert('Please Fill The Mail')
                }
                if(this.userLoginData.password.length<6){
                    this.isError = true
                    // return  alert('At List 6 character must be a pass');
                    this.$eventBus.emit('notification',{
                        type: 'Error',
                        sms: 'At List 6 character must be a pass'
                    })
                    return
                }
                this.isError = false
                this.isSppiner = true
                
                // api call
                axios.post('https://jsonplaceholder.typicode.com/posts',this.userLoginData)
                .then((res)=>{
                    console.log(res.data)
                    this.$eventBus.emit('notification',{
                        type: "Sucsess",
                        sms: 'sucessfully login.👍👍'
                    })
                    this.$router.push('/dashboard')
                })
                .catch((error)=>{
                    console.log(error);
                    this.$eventBus.emit('notification',{
                        type : 'Error',
                        sms : 'Something went Wrong👎'
                    })
                })
                .finally(()=>{
                    this.isSppiner = false
                })
            }
        }
    }
</script>





<style scoped>
    
    .spinner-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 105px;
    }

    .spinner {
      border: 8px solid #d8d2d2;
      border-top: 8px solid #50db34;
      border-bottom: 8px solid blue;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .login-page{
        background-color: rgb(235, 235,235);
        /* position: fixed; */
        /* top: 0; */
        /* bottom: 0;
        left: 0;
        right: 0; */
        padding-top: 55px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .login-wraper{
        max-width: 400px;
        width: 80%;
        margin: 0 auto;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0px 9px 4px #dfdfdf;
        min-height: 200px;
        padding:40px 25px;
        transition: .6s all linear;
        padding-bottom: 16px;
    }

    .login-head img{
        display: block;
        margin: 0 auto;
        width:75px;
        border-radius: 45px;
    }
    .login-head h3{
        font-size: 26px;
    }
    .label-container{
        margin: 0 auto;
        width: 96%;
        margin-top: 15px;
        text-align: center;
    }
    .label-container input{
        width: 100%;
        margin: 0 auto;
    }
    .login-btn{
        display: block !important;
        width: 100% !important;
        padding: 12px;
        font-size: 15px;
    }
    
    .login-footer{
        display: flex;
        justify-content: space-between;
        padding: 20px 8px;
    }
    .error{
        font-size: 14px;
        color: red;
        text-align: left;
        font-weight: 500;
        padding-top: 5px;
    }
</style>