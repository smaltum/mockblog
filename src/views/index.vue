<template>
  <div>
    <tab_bar></tab_bar>
    <right_bar></right_bar>
    <car_banner></car_banner>
<!--    <content_list></content_list>-->
  </div>
</template>

<script>
    import tab_bar from '@/components/TabBar'
    import right_bar from '@/components/RightTab'
    import banner from '@/components/Banner'
    import car_banner from '@/components/CarouselBanner'
    import content_list from '@/components/ContentList'

    export default {
        name: "index",
        components: {
            tab_bar,
            right_bar,
            banner,
            car_banner,
            content_list
        }
    }
</script>

<style scoped>

</style>
