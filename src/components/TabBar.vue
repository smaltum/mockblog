<template>
  <!--  导航栏-->
  <div class="tabbar_body">
    <div class="tabbar_lable">
      MockBlog
    </div>
    <div>
      <ul class="tabbar_ul">
        <li>关于</li>
        <li>Github</li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "tab_bar"
    }
</script>

<style scoped>
  .tabbar_body {
    width: 100%;
    height: 56px;
    line-height: 50px;
    background-color: white;
    box-shadow: 0 2px 5px -1px #999999;
  }

  .tabbar_lable {
    float: left;
    width: 15%;
    line-height: 56px;
    font-size: 22px;
  }

  .tabbar_body ul {
    height: 100%;
    height: 56px;
    margin-left: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .tabbar_body ul > li {
    width: 80px;
    align-self: center;
    font-size: 16px;
  }

  .tabbar_body ul > li:hover {
    background-color: #42b983;
    color: white;
    align-self: center;
  }


</style>
