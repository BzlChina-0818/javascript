<template>
    <div>
        <div>
            <router-link to="/my/order">
                <span>我的订单</span>
            </router-link>
            <router-link to="/my/discout">
                <span>我的优惠券</span>
            </router-link>
        </div>
     <div>
         <router-view></router-view>
     </div>
</div>
  
</template>
<script>
export default {
    data(){
        return {

        }
    }
}
</script>
