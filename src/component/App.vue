<template>
    <div>
        <router-view>
        </router-view>
        <p>{{ha}}</p>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            ha: 'helloworld'
        }
    }
}
</script>

<style lang="sass">
    a {
        color: green;
    }
</style>