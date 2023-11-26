import {createRouter,createWebHistory} from 'vue-router'
import comDashboard from './Components/Dashboard.vue'
import comError from './Components/Error.vue'
import comLogin from './Components/Login.vue'
const childOther = ()=> import ('./Components/views/dashboard/ChildOther.vue')
const childSelling = ()=> import ('./Components/views/dashboard/ChildSelling.vue')
const childSetting = ()=> import ('./Components/views/dashboard/ChildSetting.vue')
const childVedors = ()=> import ('./Components/views/dashboard/ChildVendors.vue')
import childOverview from './Components/views/dashboard/ChildOverview.vue'
import childDrugs from './Components/views/dashboard/ChildDrugs.vue'

const routes = [
    {path : '/' , name: comLogin,  component : comLogin },
    {
        path : '/dashboard' ,  
        component : comDashboard,
        redirect:'/dashboard/overview',
        children:[
            {path:'/dashboard/overview', component: childOverview},
            {path: '/dashboard/drugs', component: childDrugs},
            {path: '/dashboard/other', component: childOther},
            {path: '/dashboard/selling', component: childSelling},
            {path: '/dashboard/setting', component: childSetting},
            {path: '/dashboard/vendors', component: childVedors},
        ]
    },
    {path: '/:catchAll(.*)', component: comError }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})


export default router