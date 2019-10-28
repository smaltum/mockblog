<template>
  <div class="right_bar_body">
    <!-- qq群广告来一波 -->
    <div class="right_bar_item_1 right_bar_item_title">
      <span>学习交流</span>
      <div class="right_bar_column_line"></div>
      <a href="http://www.baidu.com"><img src="http://s3.pstatp.com/toutiao/static/img/icon_qq_pc.de846d6.png"></a>
      <a><img src="https://tendcode.com/static/blog/img/github.png"></a>
    </div>

    <div class="right_bar_item_2 ">
      <div class=" right_bar_item_1 right_bar_item_title">
        <span>分类查看</span>
        <div class="right_bar_column_line"></div>
      </div>
      <div class="right_bar_item_2_categorya_item" v-for="(item,index) in item">
        <div class="right_bar_item_2_categorya_item_inner">
          <div class="right_bar_item_2_categorya_item_inner_left">
            <div class="right_bar_item_2_span_triangle"></div>
            <span>{{item.itemName}}</span>
          </div>
          <div class="right_bar_item_2_span_style">{{item.ItemCnt}}</div>
        </div>
        <div class="right_bar_row_line"></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "right_bar",
        data() {
            return {
                item: [
                    {
                        itemName: "golang",
                        ItemCnt: 1
                    },
                    {
                        itemName: "golang",
                        ItemCnt: 2
                    }, {
                        itemName: "golang",
                        ItemCnt: 31
                    }, {
                        itemName: "golang",
                        ItemCnt: 4
                    },
                    {
                        itemName: "golang",
                        ItemCnt: 5
                    }, {
                        itemName: "golang",
                        ItemCnt: 6
                    }
                ]
            }
        }
    }
</script>

<style scoped>
  .right_bar_body {
    width: 270px;
    float: right;
    margin-right: 6%;
    padding: 30px 5px 0px 5px;
    display: flex;
    flex-direction: column;
  }

  .right_bar_item_title > span {
    text-align: left;
    margin-left: 5px;
    font-size: 17px;
    font-weight: bold;
  }

  .right_bar_item_1 {
    height: 40px;
    line-height: 40px;
    padding: 10px 0px 10px 0px;
    display: flex;
    flex-direction: row;
    background-color: white;
  }

  .right_bar_column_line {
    height: 20px;
    width: 5px;
    background-color: #999999;
    margin-top: 10px;
    margin-left: 10px;
  }

  .right_bar_item_1 img {
    margin-left: 10px;
    height: 40px;
    width: 40px;
  }

  .right_bar_item_2 {
    background-color: white;
    margin-top: 20px;
    padding: 10px 0px 10px 0px;
    display: flex;
    flex-direction: column;
  }

  .right_bar_item_2_categorya_item {
    padding: 0px 5px 0px 0px;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .right_bar_item_2_categorya_item_inner {
    padding: 10px 0px 0px 15px;
    font-size: 18px;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .right_bar_item_2_categorya_item_inner_left {
    font-size: 18px;
    height: 30px;
    display: flex;
    flex-direction: row;
  }

  .right_bar_item_2_span_triangle {
    width: 0;
    height: 0;
    border: 5px solid;
    margin-top: 5px;
    border-color: transparent transparent transparent #42b983;
  }

  .right_bar_item_2_span_style {
    align-items: flex-end;
    width: 40px;
    height: 18px;
    border-radius: 3px;
    color: white;
    background-color: #42b983;
    padding-top: 2px;
  }

  .right_bar_row_line {
    height: 2px;
    background-color: #eeeeef;
    margin-left: 10px;
  }

</style>
