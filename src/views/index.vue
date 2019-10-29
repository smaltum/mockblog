<template>
  <div>
    <tab_bar></tab_bar>
    <right_bar></right_bar>
<!--    <banner class="banner-location"></banner>-->
    <content_list class="content-list"></content_list>
  </div>
</template>

<script>
    import tab_bar from '@/components/TabBar'
    import right_bar from '@/components/RightTab'
    import banner from '@/components/Banner'
    import content_list from '@/components/ContentList'

    export default {
        name: "index",
        components: {
            tab_bar,
            right_bar,
            banner,
            content_list
        }
    }
</script>

<style scoped>
  .banner-location {
    margin-top: 30px;
  }

  .content-list {
    top: 10px;
  }

</style>
