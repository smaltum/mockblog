<template>
  <!--  导航栏-->
  <div class="tabbar_body">
    <div class="tabbar_lable">
      MockBlog
    </div>
    <div class="tabbar_right_mid">
      <ul class="tabbar_ul">
        <li>关于</li>
        <li>Github</li>
      </ul>
      <i class="tabbar_right_min_i">&nbsp;</i>
    </div>

    <div class="tabbar_right_min_i_dropmenu">

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
    line-height: 50px;
    background-color: white;
    box-shadow: 0 2px 5px -1px #999999;
    z-index: 1;
  }

  .tabbar_lable {
    float: left;
    width: 15%;
    line-height: 56px;
    font-size: 22px;
  }

  .tabbar_right_mid {
    height: 56px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .tabbar_ul {
    height: 100%;
    height: 56px;
    margin-right: 3%;
    display: flex;
    flex-direction: row;
  }

  .tabbar_ul > li {
    width: 80px;
    align-self: center;
    font-size: 16px;
  }

  .tabbar_right_mid ul > li:hover {
    background-color: #42b983;
    color: white;
    align-self: center;
  }

  .tabbar_right_min_i {
    display: none;
  }

  .tabbar_right_min_i_dropmenu {
    z-index: 999;
    width: 100%;
    height: 140px;
    background-color: #17A2B8;
  }

  @media (min-width: 720px) and (max-width: 1200px) {

  }

  @media (max-width: 719px) {
    .tabbar_right_mid {
      /*background-color: #42b983;*/
      height: 44px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }

    .tabbar_lable {
      float: left;
      width: 15%;
      line-height: 44px;
      font-size: 20px;
      margin-left: 2%;
    }

    .tabbar_ul {
      display: none;
    }

    .tabbar_right_min_i {
      margin-right: 3%;
      display: inline-block;
      width: 30px;
      background: url("../assets/list.png") no-repeat center;
    }
  }

</style>
