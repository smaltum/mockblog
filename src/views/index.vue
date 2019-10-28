<template>
  <div>
    <tab_bar>
    </tab_bar>
    <right_bar>
    </right_bar>

    <banner class="banner_location">
    </banner>
  </div>
</template>

<script>
    import tab_bar from '@/components/TabBar'
    import right_bar from '@/components/RightTab'
    import banner from '@/components/Banner'

    export default {
        name: "index",
        components: {
            tab_bar,
            right_bar,
            banner
        }
    }
</script>

<style scoped>

  .banner_location {
    margin-top: 30px;
  }

</style>
