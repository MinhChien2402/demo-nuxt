<template>
  <div>
    <div class="wp-main-page">

      <div class="wp-detail-blog">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-10 col-xl-8 m-auto">
              <div class="title-detail-blog-page">
                <div class="title-layout-left">
                  <h3>{{ dataBlog.title }}</h3>
                  <div class="category-datetime">
                    <p class="category-blog">{{ dataBlog.authorName }}</p>
                    <p class="date-blog">{{ dataBlog.createdDate }}</p>
                  </div>
                </div>
                <div class="intro-title-blog-detail">
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                    looking at its layout.</p>
                </div>
              </div>
              <div v-html="dataBlog.description"></div>
            </div>
          </div>
        </div>
      </div>

      <BaiViet-RelatedPost />

      <div class="border-page">
        <div class="container">
          <div class="border-bt-page"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import { mapGetters, mapActions } from 'vuex'
export default {
  async asyncData({ route }) {
    const id = route.params.id
    return axios.get(`http://192.168.1.127/api/Blog/id?id=${id}`).then((res) => {
      return { dataBlog: res.data }
    })

  },
  data() {
    return {
    };
  },
  // created() {
  //   // this.id = parseInt(this.$route.params.id)
  //   // this.getDataBlog(this.id)
  // },
  // computed: {
  //   ...mapGetters(['dataBlog'])
  // },
  // methods: {
  //   ...mapActions(['getDataBlog'])
  // }
};
</script>

<style ></style>