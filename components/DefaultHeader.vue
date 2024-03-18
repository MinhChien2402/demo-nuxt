<template>
  <div>
    <div class="wp-menu-page" :class="{ scroll }">
      <div class="container">
        <div class="topbar-menu">
          <div class="block-info-contact">
            <div class="item-topbar-menu-home phone-item">
              <a href="tel:19001068" class="name-item-topbar">
                <span class="name">Hotline:</span>
                <span class="txt-main">+84911171102</span>
              </a>
            </div>
            <div class="item-topbar-menu-home mail-item">
              <a href="mailto:contact@jobhome.vn" class="name-item-topbar">
                <span class="name">Email:</span>
                <span class="txt-main">info@xfoto.com</span>
              </a>
            </div>
          </div>
          <div class="list-mxh-topbar">
            <a href="javascript:;"><i class="fab fa-facebook-f"></i></a>
            <a href="javascript:;"><i class="fab fa-google"></i></a>
            <a href="javascript:;"><i class="fab fa-twitter"></i></a>
            <a href="javascript:;"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
        <div class="menu-desktop-page">
          <div class="layout-menu-desktop">
            <a href="javascript:;" class="menu-left-desktop">
              <img src="~/assets/img-fix/logo-web.svg" alt="" />
            </a>
            <div class="list-menu-desktop">
              <div class="item-menu-desktop ">
                <nuxt-link to="/" class="txt-menu-dk">Home</nuxt-link>
              </div>
              <div class="item-menu-desktop">
                <nuxt-link to="/DuAn" class="txt-menu-dk">Ablout us</nuxt-link>
              </div>
              <div class="item-menu-desktop">
                <nuxt-link to="/OurService" href="javascript:;" class="txt-menu-dk">Our Service</nuxt-link>
              </div>
              <div class="item-menu-desktop">
                <nuxt-link to="/SanPham" href="javascript:;" class="txt-menu-dk">Feature Job </nuxt-link>
              </div>
              <div class="item-menu-desktop">
                <nuxt-link to="/BaiViet" href="javascript:;" class="txt-menu-dk">Blog</nuxt-link>
              </div>
              <div class="item-menu-desktop">
                <nuxt-link to="/LienHe" href="javascript:;" class="txt-menu-dk">Contact</nuxt-link>
              </div>
            </div>
            <div class="menu-mobile">
              <div class="nav-btn-show">
                <a href="#menu" class="icon-menu active" id="menu-rotate">
                  <div class="menu-line">
                    <div class="lines">
                      <div class="line diagonal part-1"></div>
                      <div class="line horizontal"></div>
                      <div class="line diagonal part-2"></div>
                    </div>
                  </div>
                </a>
                <nav id="menu">
                  <ul class="menu-mb">
                    <li class="active-menu"><a href="javascript:;">Home</a></li>
                    <li><a href="javascript:;">About us</a></li>
                    <li><a href="javascript:;">Our service</a></li>
                    <li><a href="javascript:;">Feature job</a></li>
                    <li><a href="javascript:;">Blog</a></li>
                    <li><a href="javascript:;">Contact</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XfotoClDefaultHeader',

  data() {
    return {
      scroll: false,
      activOnOff: true,
    };
  },
  methods: {
    handleScroll() {
      this.handleScroll = window.scrollY;
      if (this.handleScroll <= 50) {
        this.scroll = false;
        console.log(">50");
      } else {
        this.scroll = true;
      }
    },
    active(id) {
      this.activOnOff = false;
      if (id) {
        this.activOnOff = true;
      }
    }

  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
};
</script>

<style >
a.nuxt-link-active {
  font-weight: bold;
}

/* exact link will show the primary color for only the exact matching link  */
a.nuxt-link-exact-active {
  background: linear-gradient(90deg, #099ff8 0%, #046cea 100%);
}
</style>