<template>
  <!--  导航栏-->
  <div class="tabbar-body">
    <div class="tabbar-content">
      <div class="tabbar-icon">
        MockBlog
      </div>
      <div class="tabbar_menu">
        <ul class="tabbar-menu-ul">
          <li>Github</li>
          <li>关于</li>
        </ul>
        <i class="tabbar-menu-btn" @click="menuShow()">&nbsp;</i>
      </div>
    </div>

    <div class="tabbar-dropmenu"
         :style="{'-webkit-transition':duration,'-webkit-transform':slateY}">
      <ul>
        <li>java</li>
        <li>java</li>
        <li>java</li>
        <li>java</li>
        <li>java</li>
      </ul>
    </div>

  </div>
</template>

<script>
    export default {
        name: "tab_bar",
        data() {
            return {
                menuShowFlag: false,
                durationTime: .6,
                menuHeight: -300
            }
        },
        methods: {
            menuShow() {
                if (this.menuShowFlag) {
                    this.menuShowFlag = false;
                    this.menuHeight = -300;
                } else {
                    this.menuShowFlag = true;
                    this.menuHeight = 0;
                }
            }
        },
        computed: {
            slateY() {
                return 'translate3d(0,' + (this.menuHeight) + 'px,0)'
            },
            duration() {
                return 'all ' + this.durationTime + 's';
            }
        }
    }
</script>

<style scoped>
  .tabbar-body {
    position: fixed;
    width: 100%;
    height: 56px;
    background-color: white;
    box-shadow: 0 2px 5px -1px #999999;
  }

  .tabbar-content {
    width: 100%;
    height: 56px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .tabbar-icon {
    width: 15%;
    line-height: 56px;
    font-size: 22px;
  }

  .tabbar_menu {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .tabbar-menu-ul {
    height: 100%;
    height: 56px;
    margin-right: 3%;
    display: flex;
    flex-direction: row;
  }

  .tabbar-menu-ul > li {
    width: 80px;
    align-self: center;
    font-size: 16px;
  }

  .tabbar-menu-ul ul > li:hover {
    background-color: #42b983;
    color: white;
    align-self: center;
  }

  .tabbar-menu-btn {
    display: none;
  }


  @media (max-width: 719px) {
    .tabbar-body {
      position: fixed;
      width: 100%;
      height: 44px;
      background-color: white;
      box-shadow: 0 2px 5px -1px #999999;
    }

    .tabbar-content {
      width: 100%;
      height: 44px;
      background-color: white;
      position: relative;
      z-index: 999;
    }

    .tabbar-icon {
      float: left;
      width: 15%;
      line-height: 44px;
      font-size: 20px;
      margin-left: 2%;
    }

    .tabbar_menu {
      height: 44px;
      float: right;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }

    .tabbar-menu-ul {
      display: none;
    }

    .tabbar-menu-btn {
      padding-right: 15px;
      display: inline-block;
      width: 30px;
      background: url("../assets/list.png") no-repeat center;
    }

    .tabbar-dropmenu {
      background-color: white;
      box-shadow: 0 2px 5px -1px #999999;
      position: relative;
      z-index: -1;
    }

    .tabbar-dropmenu li {
      height: 40px;
    }

  }

</style>
