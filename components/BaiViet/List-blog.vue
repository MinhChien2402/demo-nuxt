<template>
  <!-- SECTION List-blog -->
  <div class="wp-list-blog-page">
    <div class="container">
      <div class="list-category-blog">
        <a href="" class="item-category-blog active">All news</a>
        <a href="" class="item-category-blog">Photo Editing</a>
        <a href="" class="item-category-blog">Photography</a>
        <a href="" class="item-category-blog">Presets Download</a>
        <a href="" class="item-category-blog">Virtual dusk</a>

      </div>

      <p class="statistical-count-blog">{{ Blogs.totalRows }} posts</p>
      <div class="main-category-post">
        <div class="item-post-page" v-for="data in Blogs.data" :key="data.id">
          <a href="" class="picture-post-item">
            <img :src="data.image" alt="">
          </a>
          <div class="content-item-post">
            <a @click="getDetail(data.id)" class="title-item-post">{{ data.title }}</a>
            <a href="" class="category-blog">{{ data.authorName }}</a>
          </div>
        </div>

      </div>
      <div class="list-pagination-item">
        <b-pagination v-model="params.pageIndex" :total-rows="Blogs.totalRows" :per-page="params.pageSize"
          aria-controls="my-table" class="bg-white p-2"></b-pagination>
      </div>
      <!-- END SECTION List-blog -->

    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
export default {

  // async asyncData({ store }) {
  //   const params = {
  //     "pageSize": 6,
  //     "pageIndex": 1,
  //     "status": 0,
  //     "keyWord": null
  //   }
  //   await store.dispatch('getBlogs', params)
  //   return { params }
  // },
  async fetch() {
    const vm = this
    await vm.$store.dispatch('getBlogs', vm.params)
  },
  data() {
    return {
      params: {
        "pageSize": 6,
        "pageIndex": 1,
        "status": 0,
        "keyWord": null
      }
    };
  },
  created() {
    // this.getBlogs(this.params)
  },
  computed: {
    ...mapGetters(['Blogs']),
    // rows() {
    //     return this.Blogs.data.length
    // },
  },
  methods: {
    ...mapActions(['getBlogs']),
    getDetail(id) {
      this.$router.push(`/BaiViet/${id}`)
    }
  },
  watch: {
    "params.pageIndex"() {
      this.getBlogs(this.params)
    }
  }

}
</script>