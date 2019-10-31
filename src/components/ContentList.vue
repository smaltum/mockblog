<template>
  <div class="content_list">
    <i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;博文列表</i>
    <div class="content_item_wrapper" v-for="(item,index) in blogList">
      <div class="content_item">
        <img class="content_item_img" :src="item.intro_img">
        <div class="content_item_content">
          <a :href="item.lable_link">
            <label class="content_item_content_category">{{item.lable}}</label>
          </a>
          <a :href="item.lable_link">
            <h1>{{item.title}}</h1>
          </a>
          <p>{{item.intro}}</p>
          <div class="content_item_content_tail">
            <i class="i_submit_time">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发布时间:{{item.ptime}}</i>
            <a :href="item.lable_link">
              <i class="i_submit_browser">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.browse_times}}</i>
            </a>
            <a :href="item.lable_link">
              <i class="i_submit_mark">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.mark_times}}</i>
            </a>
            <a :href="item.lable_link">
              <i class="i_submit_like">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.mark_times}}</i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="content_item_load_more">
      <i>查阅更多</i>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ContentList",
        data() {
            return {
                blogList: [
                    {
                        id: 1,
                        ptime: "2019-10-22",
                        category: "golang",
                        lable: "python使用入门",
                        lable_link: "www.baidu.com",
                        title: "使用 python 执行 shell 命令的几种常用方式",
                        intro: "在使用 Python 编写自动化脚本的时候，难免会需要执行一些基本的 shell 命令，而 Python 执行 shell 命令的方式有好几种，如果根据需要选择最适合的方式显得非常重要，这篇文章就来总结和对比一下几种常见的 Python 运行 shell 命令",
                        intro_img: "https://tendcode.com/cdn/article/180913/study-Linux913.jpg",
                        browse_times: 541,
                        mark_times: 30
                    },
                    {
                        id: 1,
                        ptime: "2019-10-22",
                        category: "golang",
                        lable: "python使用入门",
                        lable_link: "www.baidu.com",
                        title: "使用 python 执行 shell 命令的几种常用方式",
                        intro: "在使用 Python 编写自动化脚本的时候，难免会需要执行一些基本的 shell 命令，而 Python 执行 shell 命令的方式有好几种，如果根据需要选择最适合的方式显得非常重要，这篇文章就来总结和对比一下几种常见的 Python 运行 shell 命令",
                        intro_img: "https://tendcode.com/cdn/article/180913/study-Linux913.jpg",
                        browse_times: 541,
                        mark_times: 30
                    },
                    {
                        id: 1,
                        ptime: "2019-10-22",
                        category: "golang",
                        lable: "python使用入门",
                        lable_link: "www.baidu.com",
                        title: "使用 python 执行 shell 命令的几种常用方式",
                        intro: "在使用 Python 编写自动化脚本的时候，难免会需要执行一些基本的 shell 命令，而 Python 执行 shell 命令的方式有好几种，如果根据需要选择最适合的方式显得非常重要，这篇文章就来总结和对比一下几种常见的 Python 运行 shell 命令",
                        intro_img: "https://tendcode.com/cdn/article/180913/study-Linux913.jpg",
                        browse_times: 541,
                        mark_times: 30
                    },
                    {
                        id: 1,
                        ptime: "2019-10-22",
                        category: "golang",
                        lable: "python使用入门",
                        lable_link: "www.baidu.com",
                        title: "使用 python 执行 shell 命令的几种常用方式",
                        intro: "在使用 Python 编写自动化脚本的时候，难免会需要执行一些基本的 shell 命令，而 Python 执行 shell 命令的方式有好几种，如果根据需要选择最适合的方式显得非常重要，这篇文章就来总结和对比一下几种常见的 Python 运行 shell 命令",
                        intro_img: "https://tendcode.com/cdn/article/180913/study-Linux913.jpg",
                        browse_times: 541,
                        mark_times: 30
                    },
                    {
                        id: 1,
                        ptime: "2019-10-22",
                        category: "golang",
                        lable: "python使用入门",
                        lable_link: "www.baidu.com",
                        title: "使用 python 执行 shell 命令的几种常用方式",
                        intro: "在使用 Python 编写自动化脚本的时候，难免会需要执行一些基本的 shell 命令，而 Python 执行 shell 命令的方式有好几种，如果根据需要选择最适合的方式显得非常重要，这篇文章就来总结和对比一下几种常见的 Python 运行 shell 命令",
                        intro_img: "https://tendcode.com/cdn/article/180913/study-Linux913.jpg",
                        browse_times: 541,
                        mark_times: 30
                    },
                    {
                        id: 1,
                        ptime: "2019-10-22",
                        category: "golang",
                        lable: "python使用入门",
                        lable_link: "www.baidu.com",
                        title: "使用 python 执行 shell 命令的几种常用方式",
                        intro: "在使用 Python 编写自动化脚本的时候，难免会需要执行一些基本的 shell 命令，而 Python 执行 shell 命令的方式有好几种，如果根据需要选择最适合的方式显得非常重要，这篇文章就来总结和对比一下几种常见的 Python 运行 shell 命令",
                        intro_img: "https://tendcode.com/cdn/article/180913/study-Linux913.jpg",
                        browse_times: 541,
                        mark_times: 30
                    }
                ],
                "total_count": 39221
            }
        }
    }
</script>


<style scoped>

  /*整体*/
  .content_list {
    position: relative;
    overflow: hidden;
    width: 80%;
    max-width: 750px;
    padding-bottom: 30px;
    margin: 100px auto;
    z-index: -1;
  }

  /*头部标签*/
  .content_list > i {
    width: 100%;
    text-align: left;
    background: url("../assets/list.png") no-repeat left;
    display: inline-block;
    color: #333333;
    font-size: 20px;
  }

  /*列项最外层包裹*/
  .content_item_wrapper {
    width: 100%;
    height: 190px;
    padding: 1%;
    margin-top: 10px;
    background-color: white;
  }

  /*列项内层包裹*/
  .content_item {
    width: 98%;
    height: 190px;
    display: flex;
    flex-direction: row;
  }

  /*图片*/
  .content_item_img {
    align-self: center;
    padding: 10px;
    width: 25%;
    height: 60%;
  }

  /*右边内容*/
  .content_item_content {
    height: 94%;
    width: 96%;
    margin: auto;
    align-self: center;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: space-around;
  }

  .content_item_content > a {
    text-decoration: none;

  }

  .content_item_content > a:hover {
    text-decoration: none;
    color: #17A2B8;
  }

  /*顶部标签*/
  .content_item_content_category {
    color: #333333;
  }

  /*标题*/
  .content_item_content h1 {
    color: #17A2B8;
    font-size: 19px;
    font-weight: bold;
  }

  /*内容简介*/
  .content_item_content > p {
    color: #212529;
    font-size: 15px;
    line-height: 20px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    word-break: break-all;
  }

  /*尾部辅助信息*/
  .content_item_content_tail {
    display: flex;
    flex-direction: row;
  }

  /*提交时间*/
  .i_submit_time {
    background: url("../assets/time.png") no-repeat left;
    display: inline-block;
    color: #666666;
    font-size: 14px;
  }

  /*流量量*/
  .i_submit_browser {
    margin-left: 16px;
    background: url("../assets/browser.png") no-repeat left;
    display: inline-block;
    color: #666666;
    font-size: 14px;
  }

  /*评论数*/
  .i_submit_mark {
    margin-left: 16px;
    background: url("../assets/mark.png") no-repeat left;
    display: inline-block;
    color: #666666;
    font-size: 14px;
  }

  /*喜欢数*/
  .i_submit_like {
    margin-left: 16px;
    background: url("../assets/like.png") no-repeat left;
    display: inline-block;
    color: #F78585;
    font-size: 14px;
  }

  /*查询更多*/
  .content_item_load_more {
    margin-top: 20px;
    background-color: #17A2B8;
    height: 40px;
    line-height: 40px;
    color: #eeeeef;
    width: 100%;
    font-size: 17px;
    border-radius: 40px;
  }

  @media (min-width: 720px) and (max-width: 1200px) {
    /*整体*/
    .content_list {
      position: relative;
      overflow: hidden;
      width: 96%;
      padding-bottom: 30px;
      margin: 100px auto;
    }

    /*右边内容*/
    .content_item_content {
      height: 94%;
      width: 96%;
      margin: auto;
      align-self: center;
      display: flex;
      flex-direction: column;
      text-align: left;
      justify-content: space-around;
    }

    .content_item_content > a {
      text-decoration: none;
    }

    .content_item_content > a:hover {
      text-decoration: none;
      color: #17A2B8;
    }

    /*顶部标签*/
    .content_item_content_category {
      display: none;
    }

    /*标题*/
    .content_item_content h1 {
      color: #17A2B8;
      font-size: 17px;
      font-weight: bold;
    }

    /*内容简介*/
    .content_item_content > p {
      color: #212529;
      font-size: 15px;
      line-height: 20px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-box-orient: vertical;
      word-wrap: break-word;
      word-break: break-all;
    }

  }

  @media (max-width: 719px) {
    /*整体*/
    .content_list {
      position: relative;
      overflow: hidden;
      width: 96%;
      padding-bottom: 30px;
      margin: 60px auto;
    }

    /*头部标签*/
    .content_list > i {
      display: none;
    }

    /*右边内容*/
    .content_item_content {
      height: 94%;
      width: 96%;
      margin: auto;
      align-self: center;
      display: flex;
      flex-direction: column;
      text-align: left;
      justify-content: space-around;
    }

    /*列项最外层包裹*/
    .content_item_wrapper {
      width: 100%;
      height: 140px;
      padding: 1%;
      margin-top: 7px;
      background-color: white;
    }

    /*列项内层包裹*/
    .content_item {
      width: 98%;
      height: 140px;
      display: flex;
      flex-direction: row;
    }

    .content_item_content > a {
      text-decoration: none;
    }

    .content_item_content > a:hover {
      text-decoration: none;
      color: #17A2B8;
    }

    /*顶部标签*/
    .content_item_content_category {
      display: none;
    }

    /*标题*/
    .content_item_content h1 {
      color: #17A2B8;
      font-size: 15px;
      font-weight: bold;
    }

    /*内容简介*/
    .content_item_content > p {
      color: #212529;
      font-size: 12px;
      line-height: 20px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-box-orient: vertical;
      word-wrap: break-word;
      word-break: break-all;
    }

    /*尾部辅助信息*/
    .content_item_content_tail {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }

    /*提交时间*/
    .i_submit_time {
      background: url("../assets/time.png") no-repeat left;
      display: inline-block;
      color: #666666;
      font-size: 12px;
    }

    /*流量量*/
    .i_submit_browser {
      display: none;
    }

    /*评论数*/
    .i_submit_mark {
      display: none;
    }

    /*喜欢数*/
    .i_submit_like {
      display: none;
    }

    /*查询更多*/
    .content_item_load_more {
      margin-top: 20px;
      background-color: #17A2B8;
      height: 40px;
      line-height: 40px;
      color: #eeeeef;
      width: 100%;
      font-size: 17px;
      border-radius: 40px;
    }
  }

</style>
