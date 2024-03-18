<template>
  <div class="wp-list-post-related">
    <div class="container">
      <div class="title-related-posts">
        <h2>Related posts</h2>
      </div>

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
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {

  async asyncData({ store }) {
    const params = {
      "pageSize": 6,
      "pageIndex": 1,
      "status": 0,
      "keyWord": null
    }
    await store.dispatch('getBlogs', params)
    return { params }
  },
  data() {
    return {
      params: {
        pageSize: 6,
        pageIndex: 1,
        status: 0,
        keyWord: null,
      },
    };
  },
  created() {
    // this.getBlogs(this.params)
  },
  computed: {
    ...mapGetters(['Blogs'])
  },

  methods: {
    ...mapActions(['getBlogs']),
    getDetail(id) {
      this.$router.push(`/BaiViet/${id}`)
    }
  },
};
</script>

<style></style>