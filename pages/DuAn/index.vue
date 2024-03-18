<template>
    <div class="wp-main-page">

        <!-- SECTION Project -->
        <div class="wp-project-page">
            <div class="container">
                <div class="project-page__list">
                    <div class="project-page__item" v-for="data in dataDuAn" :key="data.id">
                        <div class="picture-item-left">
                            <div class="beer-slider" data-beer-label="before">
                                <img-comparison-slider tabindex="0" class="rendered">
                                    <img slot="first" width="100%" :src="data.image">
                                    <img slot="second" width="100%" style="height: 528px !important;" :src="data.imageB">
                                </img-comparison-slider>
                            </div>

                        </div>
                        <div class="main-item-right">
                            <div class="category-project">
                                <p>MY SERVICE</p>
                            </div>
                            <h3 class="tilte-item-project">{{ data.name }}</h3>
                            <div class="content-item-project">
                                <p>{{ data.description }}</p>
                            </div>
                            <div class="stt-btn-item-project">
                                <div class="btn-view-item-project">
                                    <button @click="viewMore(data.id)">View More</button>
                                </div>
                                <div class=" stt-item-project">
                                    {{ data.id }}
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
        <!-- END SECTION Project -->x
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'XfotoClIndex',
    async asyncData({ store }) {
        await store.dispatch('getDuAn')
    },
    data() {
        return {

        };
    },
    created() {
        // this.getDuAn()
    },
    computed: {
        ...mapGetters(['dataDuAn'])
    },
    methods: {
        ...mapActions(['getDuAn']),
        viewMore(id) {
            // console.log(id)
            // this.getDuAnDetail(id);
            this.$router.push(`/DuAn/${id}`)
        }

    },

};
</script>

<style ></style>