<template>
  <div>
    <tab_bar>
    </tab_bar>
    <right_bar>
    </right_bar>

    <rotation_chart class="rcharts_location">
    </rotation_chart>
  </div>
</template>

<script>
    import tab_bar from '@/components/TabBar'
    import right_bar from '@/components/RightTab'
    import rotation_chart from '@/components/RotationCharts'

    export default {
        name: "index",
        components: {
            tab_bar,
            right_bar,
            rotation_chart
        }
    }
</script>

<style scoped>

  .rcharts_location {
    margin-top: 30px;
  }

</style>
