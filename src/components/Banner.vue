<template>
  <div id="carousel" @mouseover="stopAuto" @mouseout="autoPlay">
    <div :style="{width:allCount,'-webkit-transition':transitionConfig,'-webkit-transform':slateX}"
         ref="carousel">
      <div class="carousel-item" v-for="(item,index)  in imgList" :style="{'-webkit-transform':getImgLateX(index)}">
        <img :src="item.img"/>
      </div>
    </div>
    <span class="carousel-left" @click="toLeft">&#8249;</span>
    <span class="carousel-right" @click="toRight">&#8250;</span>
    <div class="carousel-dots" v-if="dots">
      <button v-for="(item,index) in imgList.length" :key="index" :class="{active:index==dotsIndex}"
              @click="toDots(index)">
      </button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Banner",
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
                //屏幕宽度
                scWidth: 0,
                // 图片宽
                imgWidth: 750,
                // 指示器
                dots: true,
                arrow: true,
                // 初始播放位置
                initIndex: 0,
                // 是否循环
                loop: true,
                // 持续时间
                duration: 1.5,
                // 自动播放
                auto: false,
                // 自动播放时间间隔
                autoTime: 2000,
                imgIndex: 0,
                durationTime: 1,
                dotsIndex: 0,
                autoer: null,
            }
        },
        computed: {
            allCount() {
                return (this.imgList.length * this.imgWidth) + 'px';
            },
            slateX() {
                // console.log('translate3d(' + (-this.imgIndex * this.imgWidth) + 'px,0,0)')
                if (this.imgIndex == 0)
                    this.imgIndex = 1;
                return 'translate3d(' + (-this.imgIndex * this.imgWidth) + 'px,0,0)'
            },
            transitionConfig() {
                return 'all ' + this.durationTime + 's';
            },
            imgLateX() {
                let width = -this.imgWidth
                // console.log(width)
                return 'translate3d(' + (width) + 'px,0,0)'
            },
            //   getImgLateX(i){
            //         console.log(i)
            //     let width = this.imgWidth*i
            //     return 'translate3d('+(width)+'px,0,0)'
            //   },
            endImgLateX() {
                let width = this.imgList.length
                // console.log(width)
                return 'translate3d(' + (width) + 'px,0,0)'
            }
        },
        created() {
            this.imgIndex = this.dotsIndex = this.initIndex;
            this.durationTime = this.duration;
            if (this.auto) this.autoPlay();
        },
        methods: {
            getImgLateX(i) {
                let width = this.imgWidth * (i + 1)
                // console.log(i, width)
                return 'translate3d(' + (width) + 'px,0,0)'
            },
            toLeft() {
                if (this.loop) {
                    this.imgIndex--;
                    this.dotsIndex--;
                    if (this.dotsIndex <= -1) this.dotsIndex = this.imgList.length - 1;
                    if (this.imgIndex <= -2) this.loopFn('left');
                } else {
                    if (this.imgIndex == 0) return this.dotsIndex = this.imgIndex = this.imgList.length - 1;
                    this.imgIndex--;
                    this.dotsIndex--;
                }
            },
            toRight() {
                if (this.loop) {
                    // alert(this.loop)
                    this.imgIndex++;
                    this.dotsIndex++;
                    if (this.dotsIndex == this.imgList.length)
                        this.dotsIndex = 0;
                    if (this.imgIndex == this.imgList.length + 1)
                        this.loopFn('right');
                } else {
                    this.imgIndex++;
                    this.dotsIndex++;
                    if (this.imgIndex > this.imgList.length - 1) return this.dotsIndex = this.imgIndex = 0;
                }
            },
            loopFn(type) {
                const dur = this.durationTime;
                this.durationTime = 0;
                this.imgIndex = type == 'right' ? 0 : this.imgList.length - 1;
                setTimeout(() => {
                    this.$nextTick(function () {
                        this.durationTime = dur;

                        if (type == 'right') this.imgIndex++;
                        else this.imgIndex--;
                    })
                }, 30)
            },
            toDots(index) {
                this.dotsIndex = this.imgIndex = index;
            },
            autoPlay() {
                if (this.auto) {
                    clearInterval(this.autoer);
                    this.autoer = setInterval(() => {
                        this.toRight();
                    }, this.autoTime)
                }
            },
            stopAuto() {
                if (this.auto) return clearInterval(this.autoer);
            }
        },
        mounted() {
            const me = this;
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth;
                    me.scWidth = window.screenWidth;
                })()
            }
        }
    }

</script>

<style scoped>

  #carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 400px;
    max-width: 750px;
    max-height: 400px;
    margin-left: auto;
    margin-right: auto;
    top: 90px;
    z-index: -1;
  }

  .carousel-left, .carousel-right {
    position: absolute;
    top: 50%;
    display: inline-block;
    transform: translateY(-50%);
    color: #fff;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
    font-size: 60px;
    border-radius: 50%;
    transition: all .5s;
  }

  .carousel-left {
    left: 0;
  }

  .carousel-right {
    right: 0;
  }

  .carousel-left:hover, .carousel-right:hover {
    color: black;
  }

  .carousel-dots {
    position: absolute;
    bottom: 20px;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
  }

  .carousel-dots button {
    width: 12px;
    height: 12px;
    background: rgba(127, 124, 124, 0.5);
    display: inline-block;
    margin: 0 5px;
    border-radius: 100%;
    color: #000;
    border: none;
    outline: none;
    transition: all .2s;
    cursor: pointer;
  }

  .carousel-dots button:hover, .carousel-dots button.active {
    background: rgba(51, 122, 183, 0.8);
    color: #fff;
  }

  .carousel-item {
    width: 100%;
    height: 400px;
    max-width: 750px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .carousel-item img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 720px) and (max-width: 1200px) {
    #carousel {
      position: relative;
      overflow: hidden;
      width: 94%;
      height: 300px;
      margin-left: auto;
      margin-right: auto;
      top: 90px;
      z-index: -1;
    }

    .carousel-item {
      width: 100%;
      height: 300px;
      max-width: 750px;
    }

    .carousel-item img {
      width: 100%;
      height: auto;
      max-width: 100%;
      max-height: 100%;
    }
  }

  @media (max-width: 719px) {
    #carousel {
      position: relative;
      overflow: hidden;
      width: 96%;
      height: 240px;
      margin-left: auto;
      margin-right: auto;
      top: 60px;
      z-index: -1;
    }

    .carousel-item {
      position: static;
      width: 100%;
      height: 240px;
      position: absolute;
    }

    .carousel-item img {
      height: auto;
      max-width: 100%;
    }
  }

</style>
