<template>
    <div>
        <div class="wp-main-page">

            <!-- SECTION Background ABout-us -->
            <div class="text-center banner-about-page">
                <div class="wp-content">
                    <div class="title-home-page">
                        <h1>Feature job</h1>
                        <p>WE PROVIDE THE BEST SERVICE</p>
                    </div>
                </div>
            </div>
            <!-- END SECTION Background ABout-us -->

            <!-- SECTION Editing -->
            <div class="wp-editing ">
                <div class="container" v-for="data in dataSanPham" :key="data.id">
                    <div class="title-page-feature-job">
                        <h2 class="txt-big-title">{{ data.name }}</h2>
                        <p class="txt-small-title">{{ data.description }}</p>
                    </div>
                    <div class="wp-slide-editing">
                        <div class="swiper-container" id="slide-editing" v-swiper:[data.id]="SwiperEditing">
                            <div class="swiper-wrapper">

                                <div class="swiper-slide" v-for="child in data.sanPhamImages" :key="child.id">
                                    <div class="item-slide-feature" @click="openPopupGallery(), getSanPhamDetail(child.id)">

                                        <a href=" javascript:;"><img :src="child.imageA" alt=""></a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="control-slide-review">
                            <div class="item-btn-feature-slide btn-prev-feature" id="prev-slide-editing">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="30" viewBox="0 0 15 30"
                                    fill="none">
                                    <path
                                        d="M0.173064 14.1844L13.9236 0.187527C14.1628 -0.053747 14.5583 -0.0644729 14.8074 0.168529C15.0564 0.400903 15.065 0.786007 14.8269 1.02905L1.49024 14.6051L14.8269 28.1812C15.065 28.4243 15.0565 28.8094 14.8074 29.0418C14.6865 29.1547 14.5303 29.2105 14.3753 29.2105C14.2104 29.2105 14.0469 29.1475 13.9236 29.0227L0.173064 15.0259C-0.0576878 14.7905 -0.0576878 14.4197 0.173064 14.1844Z"
                                        fill="#2E2E2E" />
                                </svg>
                            </div>
                            <div class="item-btn-feature-slide btn-next-feature" id="next-slide-editing">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="30" viewBox="0 0 15 30"
                                    fill="none">
                                    <path
                                        d="M14.8269 14.1844L1.07644 0.187527C0.837189 -0.053747 0.441665 -0.0644729 0.192632 0.168529C-0.0564011 0.400903 -0.0649557 0.786007 0.17312 1.02905L13.5098 14.6051L0.173061 28.1812C-0.0650148 28.4243 -0.0564593 28.8094 0.192574 29.0418C0.313458 29.1547 0.469675 29.2105 0.62472 29.2105C0.78955 29.2105 0.953092 29.1475 1.07638 29.0227L14.8269 15.0259C15.0577 14.7905 15.0577 14.4197 14.8269 14.1844Z"
                                        fill="#2E2E2E" />
                                </svg>
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
            <DetailSP v-if="isGalleryPopupOpen" v-show="isGalleryPopupOpen"
                @close-modal="isGalleryPopupOpen = closePopupGallery()" />
        </div>
        <!-- {{ dataSanPham }} -->
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'XfotoClIndex',

    async asyncData({ store }) {
        await store.dispatch('getSanPham')
    },

    data() {
        return {
            // dataSanPham: [],
            // dataChild: [],
            // isActiveItem: false,
            galleryFeature: {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                allowTouchMove: false,
                speed: 1000,
                autoHeight: true,
                navigation: {
                    nextEl: "#btn-album-next",
                    prevEl: "#btn-album-prev",
                },
            },
            SwiperEditing: {
                slidesPerView: 'auto',
                spaceBetween: 20,
                speed: 700,
                navigation: {
                    nextEl: "#next-slide-editing",
                    prevEl: "#prev-slide-editing",
                },
                autoHeight: true,
                breakpoints: {

                }
            },
            SwiperRetouching: {
                slidesPerView: 'auto',
                spaceBetween: 20,
                speed: 700,
                navigation: {
                    nextEl: "#next-slide-retouching",
                    prevEl: "#prev-slide-retouching",
                },
                autoHeight: true,
                breakpoints: {

                }
            },
            SwiperVirtualDusk: {
                slidesPerView: 'auto',
                spaceBetween: 20,
                speed: 700,
                navigation: {
                    nextEl: "#next-slide-virtual-dusk",
                    prevEl: "#prev-slide-virtual-dusk",
                },
                autoHeight: true,
                breakpoints: {

                }
            },
            isGalleryPopupOpen: false,
        };
    },
    // created() {
    //     this.getSanPham()
    // },
    computed: { ...mapGetters(['dataSanPham', 'SanPhamDetail']) },

    methods: {
        ...mapActions(['getSanPham', 'getSanPhamDetail']),

        openPopupGallery() {
            this.isGalleryPopupOpen = true
            document.body.classList.add('open-gallery-popup')
        },
        closePopupGallery() {
            this.isGalleryPopupOpen = false
            document.body.classList.remove('open-gallery-popup')
        },
    },


};
</script>

<style ></style>