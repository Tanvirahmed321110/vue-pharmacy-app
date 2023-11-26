<template>
    <div class="vendors">
        <div class="vendors-wraper" v-if="isLoading">
            <div class="vendors-head">
                <h2>All Vendors</h2>
                <button @click="addModal=true">Add More</button>
            </div>
            <div class="vendors-body">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Driscription</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="vendor in allVendors" :key="vendor.id">
                            <td>{{vendor.id}}. {{vendor.title.slice(0,12).toUpperCase()}}</td>
                            <td>{{vendor.body.slice(0,40)}}</td>
                            <td class="action-container">
                                <i  @click="updateVendor=true; selectVendorF(vendor) " class="fa-solid fa-pen-to-square"></i>
                                <i  @click="deleteModal=true ; selectVendorF(vendor)" class="fa-solid fa-trash-can"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <h3 v-else  class="text-center p-4"> Loading...</h3>
    </div>
    
    <Modals 
        v-model="addModal"
        heading="Add New Vendor"
     >
        <h4>Enter modal Data:</h4>
        <form action="#" @submit.prevent="AddNewF">
            <label for="#">Name</label>
            <input class="w-100" type="text" v-model="newVendor.title">
            <label for="#">Driscription</label>
            <input class="w-100" type="text" v-model="newVendor.body"> 
            <button class="w-100 p-4">Add New</button>
        </form>
     </Modals>
     
     
     <!-- delete modal -->
     <Modals 
        v-model="deleteModal"
        heading="Are you Sure ?"
     > 
        <h3>Delete Data List = <strong>{{selectedVendor.id}}</strong></h3>
        <div class="deleteAnd">
            <button @click="deleteVendorF">Yes</button>
            <button @click="deleteModal=false">No</button>
        </div>
     </Modals>
     
     
     <!-- updaete vendor -->
     <Modals 
        v-model="updateVendor"
        heading="Update Vendor"
     >
        <h4>Enter modal Data:</h4>
        <form action="#" @submit.prevent="updateVendorF">
            <label for="#">Name</label>
            <input class="w-100" type="text" v-model="selectedVendor.title">
            <label for="#">Driscription</label>
            <input class="w-100" type="text" v-model="selectedVendor.body"> 
            <button class="w-100 p-4">Save</button>
        </form>
     </Modals>
</template>



<script>
    import Modals from '@/Components/Modal.vue';
    import axios from 'axios';
    
    export default{
        data(){
            return{
                addModal : false,
                deleteModal: false,
                updateVendor: false,
                selectedVendor : {},
                isLoading:false,
                
                newVendor:{
                    title: '',
                    body: '',
                    id:101
                },
                allVendors:[]
            }
        },
        mounted(){
            this.getVendors()
        },
        methods:{
            resetForm(){
                this.newVendor = {title:'',body:''}
            },
            selectVendorF(vendor) {
                this.selectedVendor = vendor;
            },
            
            
            // post vendors
            AddNewF(){
                axios.post('https://jsonplaceholder.typicode.com/posts',this.newVendor)
                .then((res)=>{
                    console.log(res.data)
                    this.allVendors.push(this.newVendor)
                    
                    if(this.newVendor.title=='' || this.newVendor.body==''){
                        this.$eventBus.emit('notification',{
                            type: 'Empty Data',
                            sms : 'Please name and discriopn Fill'
                        })
                        return;
                    }
                    
                    this.$eventBus.emit('notification',{
                        type: "Added",
                        sms : 'Thanks for Add a new item'
                    })
                    
                    this.resetForm()
                    this.addModal = false
                })
                .catch((error)=>{
                    console.log(error);
                    this.$eventBus.emit('notification',{
                        type: 'Faild',
                        sms : 'Sorry something worng'
                    })
                })
            },
            
            
            
            // gets vendors
            getVendors(){
                this.isloading = false
                axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((res)=>{
                    this.allVendors = res.data
                    console.log(res.data)
                    this.isLoading = true
                })
                .catch((error)=>{
                    console.log(error)
                })
                .finally(()=>{
                    this.isloading = true
                })
            },
            
            
            // delete vendor 
            
            deleteVendorF(vendor) {
                axios.delete(`https://jsonplaceholder.typicode.com/posts/${vendor.id}`)
                .then((res) => {
                    // Assuming successful deletion, update UI
                    const index = this.allVendors.findIndex(v => v.id === v.id);
                    if (index !== -1) {
                        this.allVendors.splice(vendor.id, 1);
                    }
                    console.log(res.data)
                })
                .catch((error)=>{
                    console.log(error)
                })      
            
                .finally(() => {
                    this.deleteModal = false;
                    console.log(this.selectedVendor)
                });
            },
            
            
            // upadate vendor
            updateVendorF(vendor){
                this.updateVendor = true
                axios.put(`https://jsonplaceholder.typicode.com/posts/${vendor.id}`,
                this.selectedVendor)
                .then((res)=>{
                    console.log(res.data.id)
                    this.updateVendor = true;
                })
                .catch((error)=>{
                    console.log(error)
                })
                .finally(()=>{
                    this.updateVendor = false
                })
            }
        },
        
        components:{
            Modals
        }
    }

</script>

<style scoped>

    .vendors-wraper{
        margin-right: 4px ;
        margin-left: 26px ;
        /* background: red; */
    }
    .vendors-head{
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
    }
    .vendors-head button{
        display: inline-block;
        padding:9px 2px;
        width:100px;
        font-size: 14px;
    }
    .vendors-head button:hover{
        width:100px !important;
        font-size: 14px !important;
    }
    .vendors-head button:active{
        border: 1px solid yellow;
    }
    
    
    table{
        /* display: flex;
        justify-content: space-around; */
        border-collapse: collapse;
        width:100%;
    }
    th{
        background-color: rgb(16, 173, 173);
    }
    th,td{
        text-align: left;
        padding:16px;
    }
    tr{box-shadow: 0 0 2px 3px rgb(0 0 0 /6%); font-weight: 500;}
    
    /* action button */
    .action-container{
        display: flex;
        gap: 16px;
    }
    .action-container i{
        padding: 0 4px;
        cursor: pointer;
        transition: .2s;
        font-size: 18px;
    }
    .action-container i:hover{
        color:blue
        
    }
    
    tr:nth-child(odd){
        background: rgb(214, 212, 212);
    }
    tbody tr:hover{
        background: rgb(243, 204, 131);
    }
    
    .w-100{
        margin-top: 25px;
    }
    
    
    /* deleteAnd */
    .deleteAnd button{
        margin-top: 15px;
        margin-right: 25px;
        padding:8px 15px;
        border:1px solid blue;
    }
</style>