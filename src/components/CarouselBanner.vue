<template>
  <div class="carousel-body" @mouseover="stopRun()" @mousemove="autoRun()">
    <div class="carousel-item" v-for="(item,index) in imgList"
         :class="currentIndex==index?bannerActive:''">
      <a href="#">
<!--        <img :src="item.img">-->
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CarouselBanner",
        data() {
            return {
                imgList: [
                    {
                        img: 'https://tendcode.com/cdn/article/180418/bsblog.png',
                        link: 'https://tendcode.com/'
                    },
                    {
                        img: 'https://tendcode.com/cdn/article/190122/izone-docker.jpg',
                        link: 'https://tendcode.com/'
                    },
                    {
                        img: 'https://tendcode.com/cdn/article/080414/virtualenv.png',
                        link: 'https://tendcode.com/'
                    },
                    {
                        img: 'https://tendcode.com/cdn/article/180415/jiandan.png',
                        link: 'https://tendcode.com/'
                    }
                ],
                //自动播放
                autoPlay: true,
                //持续时间
                autoTime: 3000,
                //动画时间
                durationTime: 1,
                //定时器
                autoPlayer: null,

                currentIndex: 0,

                ///////////
                //激活显示
                bannerActive: 'active'
            }
        },
        methods: {
            //上一张
            toPred() {

            },
            //下一张
            toNext() {
                this.currentIndex++;
                this.currentIndex = this.currentIndex % this.imgList.length;
            },
            autoRun() {
                if (this.autoPlay) {
                    clearInterval(this.autoPlayer);
                    this.autoPlayer = setInterval(() => {
                        this.toNext();
                    }, this.autoTime)
                }
            },
            disAppear() {
                return 'all ' + 1 + 's';
            },
            stopRun() {
                if (this.autoPlay) return clearInterval(this.autoPlayer);
            }
        },
        created() {
            this.autoRun();
        }
    }
</script>

<style scoped>

  .carousel-body {
    position: relative;
    overflow: hidden;
    padding: 10px;
    width: 67%;
    height: 365px;
    max-width: 756px;
    background-color: #17A2B8;
  }

  .carousel-item {
    background-color: #42b983;
    width: 100%;
    float: left;
    /*display: none;*/
    /*transition:display 2s;*/
    /*-webkit-transition:display 2s;*/
  }

  .carousel-item img {
    vertical-align: center;
    width: 100% !important;
  }

  .active {
    /*display: block;*/
    /*transition: display 2s;*/
    /*-webkit-transition: display 2s;*/
    animation: move-right 5s;
    -webkit-animation: move-right 5s; /* Safari 与 Chrome */
  }

  @keyframes move-right{
    from {background: red;}
    to {background: yellow;}
  }

  @-webkit-keyframes move-right /* Safari 与 Chrome */
  {
    from {background: red;}
    to {background: yellow;}
  }
</style>
