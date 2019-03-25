<template>
    <div class="home-page-wrap">
        <div class="home-page">
            <div class="user-info-wrap">
                <div class="left">
                    <div class="header">
                        个人信息
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
            }
        }
    }
}
</style>