<template>
  <div>
    <tab_bar></tab_bar>
    <container>
    </container>
  </div>
</template>

<script>
    import tab_bar from '@/components/TabBar'
    import container from '@/components/Container'

    export default {
        name: "index",
        components: {
            tab_bar,
            container
        }
    }
</script>

<style scoped>

</style>
