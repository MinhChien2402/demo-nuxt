<template>
    <div class="wrap">
        <div class="wp-main-page">

            <!-- SECTION blog -->
            <div class="wp-blog-page">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-6 ">
                            <div class="layout-left-blog-new">
                                <div class="item-blog-new">
                                    <a href="" class="picture-blog-item">
                                        <img :src="dataBlog.image" alt="">
                                    </a>
                                    <div class="main-item-blog-new">
                                        <h3 class="title-blog-item">
                                            <a @click="getDetail(dataBlog.id)">{{ dataBlog.title }}</a>
                                        </h3>
                                        <p class="txt-content-blog">{{ dataBlog.demoDescription }}</p>
                                        <a href="" class="category-blog">Photography</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 ">
                            <div class="layout-right-blog-new">
                                <div class="item-blog-new" v-for="data in  Blogg.data " :key="data.id">
                                    <a href="" class="picture-blog-item">
                                        <img :src="data.image" alt="">
                                    </a>
                                    <div class="main-item-blog-new">
                                        <h3 class="title-blog-item">
                                            <a @click="getDetail(data.id)">{{ data.title }}</a>
                                        </h3>
                                        <a a href="" class=" category-blog">{{ data.authorName }}</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <BaiViet-List-blog />

        <div class="border-page">
            <div class="container">
                <div class="border-bt-page"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'XfotoClIndex',
    async asyncData({ store }) {
        const params = {
            "pageSize": 3,
            "pageIndex": 1,
            "status": 0,
            "keyWord": null
        }
        await store.dispatch('getDataBlog1', params)
        return { params }
    },
    data() {
        return {
            params: {
                "pageSize": 3,
                "pageIndex": 1,
                "status": 0,
                "keyWord": null
            }
        };
    },
    created() {
        // this.getDataBlog1(this.params)
        this.getDataBlog(1)
    },
    computed: {
        ...mapGetters(['dataBlog', 'Blogg'])
    },
    methods: {
        ...mapActions(['getDataBlog', 'getDataBlog1']),
        getDetail(id) {
            this.$router.push(`/BaiViet/${id}`)
        }
    }


};
</script>

<style></style>