<template>
  <div>
    <div class="wp-main-page">
      <!-- {{ DuAnDetails }} -->
      <!-- SECTION Project -->
      <div class="wp-detail-project-page">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-5 col-xl-4">
              <div class="project-detail-page__left">
                <div class="category-project">
                  <p>MY SERVICE</p>
                </div>
                <h3 class="tilte-item-project">{{ res.name }}</h3>
                <div class="content-item-project">
                  {{ res.description }}
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-7 col-xl-8">
              <div class="project-detail-page__right">
                <div class="list-picture-detail-project">
                  <div class="card-columns card-feature">
                    <div class="card display-card" v-for="data in res" :key="data.id">
                      <div class="item-picture-detail-page">
                        <a href="javascript:;" class="picture-item-project">
                          <img :src="res.image" alt="" class="img-before">
                          <img :src="res.imageB" alt="" class="img-after">
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="border-page">
      <div class="container">
        <div class="border-bt-page"></div>
      </div>
    </div>
    <!-- END SECTION Project -->
  </div>
</template>

<script>
import axios from 'axios'
// import { mapGetters, mapActions } from 'vuex'
export default {

  async asyncData({ route }) {
    const id = route.params.id
    return axios.get(`http://192.168.1.127/api/DuAn/id?id=${id}`)
      .then((res) => {
        return { res: res.data }
      })

  },

  data() {
    return {
    }
  },
  created() {
    // this.id = parseInt(this.$route.params.id)
    //   console.log(this.id)
    // this.getDuAnDetail(this.id)
  },

};
</script>

<style ></style>