<template>
  <div class="banner">
    <a :href="imgData[currentIndex].linkUrl"><img class="banner_img" :src="imgData[currentIndex].imgUrl"></a>
    <ul class="banner_ul">
      <li v-for="(item,index) in imgData"></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "RotationCharts",
        data() {
            return {
                imgData: [
                    {
                        imgUrl: 'https://tendcode.com/cdn/article/180418/bsblog.png',
                        linkUrl: 'https://tendcode.com/'
                    },
                    {
                        imgUrl: 'https://tendcode.com/cdn/article/180418/bsblog.png',
                        linkUrl: 'https://tendcode.com/'
                    },
                    {
                        imgUrl: 'https://tendcode.com/cdn/article/180418/bsblog.png',
                        linkUrl: 'https://tendcode.com/'
                    },
                    {
                        imgUrl: 'https://tendcode.com/cdn/article/180418/bsblog.png',
                        linkUrl: 'https://tendcode.com/'
                    }
                ],
                currentIndex: 0, //滚动下标
                timer: null//定时器
            }
        }
    }
</script>

<style scoped>

  .banner {

  }

  .banner_img {
    max-width: 700px;
    max-height: 630px;
  }

  .banner_ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .banner_ul > li {
    margin: -30px 5px 0px 5px;
    list-style: none;
    width: 12px;
    height: 12px;
    background-color: #efefef;
    border-radius: 6px;
  }
</style>
