<template>
    <div class="home-page-wrap">
        <div class="home-page">
            <div class="user-info-wrap">
                <div class="left">
                    <div class="header">
                        你好
                    </div>
                    <div class="avatar"><img src="../../../assets/images/avatar.png" alt=""></div>
                    <div class="welcome">欢迎你,张知洋同学</div>
                    <div class="collage">通信与电子工程学院</div>
                    <div class="logout">
                        <span class="link">注销</span>
                        <span class="link">修改密码</span>
                    </div>
                </div>
                <div class="right">
                    <div class="header">
                        详情
                    </div>
                    <div class="content">
                        <div class="details">
                            <span class="details-item">2019年第一学期</span>
                            <span class="details-item">光电信息科学与工程</span>
                            <span class="details-item">1512601班</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="copyright">
                <div class="copyright-item">
                    <span class='designer'>设计人：张知洋</span>
                    <span>2019.03 - 2019.05</span>
                </div>
                <div class="copyright-item">
                    github: <a href="https://github.com/dark-sheep" target="_blank">dark-sheep</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>

<style lang="less" scoped>
.home-page-wrap {
    .home-page {
        .copyright {
            font-size: 12px;
            text-align: center;
            margin-top: 30px;
            .copyright-item {
                margin-bottom: 5px;
                .designer {
                    padding-right: 10px;
                }
            }
            
        }
        .user-info-wrap {
            display: flex;
            & > div {
                box-shadow: 0 1px 5px #ccc;
                border-radius: 4px;
                .header {
                    background-color: #fcfcfc;
                    border-bottom: 1px solid #ccc;
                    height: 25px;
                    font-size: 12px;
                    padding: 0 10px;
                    text-align: left;
                    line-height: 25px;
                }
            }
            .left {
                width: 150px;
                height: 200px;
                text-align: center;
                margin-right: 20px;
                & > div {
                    margin-bottom: 10px;
                }
                .collage {
                    font-size: 12px;
                }
                .logout {
                    font-size: 12px;
                    color: #409EFF;
                    margin-top: 20px;
                    .link {
                        cursor: pointer;
                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }
            .right {
                flex: 1;
                .content {
                    padding: 20px;
                    .details {
                        .details-item {
                            padding-right: 20px;
                        }
                    }
                }
            }
        }
    }
}
</style>