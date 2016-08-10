<template>
    <vheader></vheader>
    <router-view></router-view>
    <vfooter></vfooter>
</template>

<script>
    import Vheader from './component/Vheader.vue'
    import Vfooter from './component/Vfooter.vue'

    export default {
        components: {
            Vheader,
            Vfooter
        }
    }
</script>