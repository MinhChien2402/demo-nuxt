<template>
  <div class="wp-main-page">
    <!-- SECTION BANNER -->
    <div class="wp-slide-banner">
      <div class="swiper-container" v-swiper:mySwiper="SwiperBanner" id="slide-banner-home">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="item-slide-home-page">
              <a href="javascript:;"><img src="~/assets/img-change/banner-1.jpg" alt="" /></a>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="item-slide-home-page">
              <a href="javascript:;"><img src="~/assets/img-change/banner-2.jpg" alt="" /></a>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="item-slide-home-page">
              <a href="javascript:;"><img src="~/assets/img-change/banner-3.jpg" alt="" /></a>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="item-slide-home-page">
              <a href="javascript:;"><img src="~/assets/img-change/banner-4.jpg" alt="" /></a>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="item-slide-home-page">
              <a href="javascript:;"><img src="~/assets/img-change/banner-1.jpg" alt="" /></a>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="item-slide-home-page">
              <a href="javascript:;"><img src="~/assets/img-change/banner-2.jpg" alt="" /></a>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="item-slide-home-page">
              <a href="javascript:;"><img src="~/assets/img-change/banner-3.jpg" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="control-slide-review">
        <div class="item-btn-banner-slide btn-prev-banner" id="prev-slide-banner">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="30" viewBox="0 0 15 30" fill="none">
            <path
              d="M0.173064 14.1844L13.9236 0.187527C14.1628 -0.053747 14.5583 -0.0644729 14.8074 0.168529C15.0564 0.400903 15.065 0.786007 14.8269 1.02905L1.49024 14.6051L14.8269 28.1812C15.065 28.4243 15.0565 28.8094 14.8074 29.0418C14.6865 29.1547 14.5303 29.2105 14.3753 29.2105C14.2104 29.2105 14.0469 29.1475 13.9236 29.0227L0.173064 15.0259C-0.0576878 14.7905 -0.0576878 14.4197 0.173064 14.1844Z"
              fill="#2E2E2E" />
          </svg>
        </div>
        <div class="item-btn-banner-slide btn-next-banner" id="next-slide-banner">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="30" viewBox="0 0 15 30" fill="none">
            <path
              d="M14.8269 14.1844L1.07644 0.187527C0.837189 -0.053747 0.441665 -0.0644729 0.192632 0.168529C-0.0564011 0.400903 -0.0649557 0.786007 0.17312 1.02905L13.5098 14.6051L0.173061 28.1812C-0.0650148 28.4243 -0.0564593 28.8094 0.192574 29.0418C0.313458 29.1547 0.469675 29.2105 0.62472 29.2105C0.78955 29.2105 0.953092 29.1475 1.07638 29.0227L14.8269 15.0259C15.0577 14.7905 15.0577 14.4197 14.8269 14.1844Z"
              fill="#2E2E2E" />
          </svg>
        </div>
      </div>
    </div>
    <!-- END SECTION BANNER -->

    <!-- SECTION Our service -->
    <div class="wp-our-service pb-block">
      <div class="container">
        <div class="title-home-page">
          <h1>Our service</h1>
          <p>WE PROVIDE THE BEST SERVICE</p>
        </div>
        <div class="layout-our-service">
          <div class="block-quote-service">
            <span class="icon-quote">
              <img src="~/assets/img-fix/icon-quote.png" alt="" />
            </span>
            <p class="txt-quote">
              “We are a group of professional editors with a wealth of
              experience in photo editing”
            </p>
          </div>
          <div class="slide-list-our-service">
            <div class="swiper-container" v-swiper:mySwiperProduct="SwiperService" id="slide-service-home">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="item-slide-service-page">
                    <a href="javascript:;" class="picture-item-service">
                      <img src="~/assets/img-change/service-1.jpg" alt="" class="img-before" />
                      <img src="~/assets/img-change/service-2.jpg" alt="" class="img-after" />
                    </a>
                    <a href="javascript:;" class="name-our-service">Editing</a>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="item-slide-service-page">
                    <a href="javascript:;" class="picture-item-service">
                      <img src="~/assets/img-change/service-2.jpg" alt="" class="img-before" />
                      <img src="~/assets/img-change/service-1.jpg" alt="" class="img-after" />
                    </a>
                    <a href="javascript:;" class="name-our-service">Virtual Dusk</a>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="item-slide-service-page">
                    <a href="javascript:;" class="picture-item-service">
                      <img src="~/assets/img-change/service-3.jpg" alt="" class="img-before" />
                      <img src="~/assets/img-change/service-2.jpg" alt="" class="img-after" />
                    </a>
                    <a href="javascript:;" class="name-our-service">Retouching</a>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="item-slide-service-page">
                    <a href="javascript:;" class="picture-item-service">
                      <img src="~/assets/img-change/service-1.jpg" alt="" class="img-before" />
                      <img src="~/assets/img-change/service-2.jpg" alt="" class="img-after" />
                    </a>
                    <a href="javascript:;" class="name-our-service">Editing</a>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="item-slide-service-page">
                    <a href="javascript:;" class="picture-item-service">
                      <img src="~/assets/img-change/service-2.jpg" alt="" class="img-before" />
                      <img src="~/assets/img-change/service-1.jpg" alt="" class="img-after" />
                    </a>
                    <a href="javascript:;" class="name-our-service">Virtual Dusk</a>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="item-slide-service-page">
                    <a href="javascript:;" class="picture-item-service">
                      <img src="~/assets/img-change/service-3.jpg" alt="" class="img-before" />
                      <img src="~/assets/img-change/service-2.jpg" alt="" class="img-after" />
                    </a>
                    <a href="javascript:;" class="name-our-service">Retouching</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="control-slide-review">
              <div class="item-btn-banner-slide btn-prev-banner" id="prev-slide-service">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="30" viewBox="0 0 15 30" fill="none">
                  <path
                    d="M0.173064 14.1844L13.9236 0.187527C14.1628 -0.053747 14.5583 -0.0644729 14.8074 0.168529C15.0564 0.400903 15.065 0.786007 14.8269 1.02905L1.49024 14.6051L14.8269 28.1812C15.065 28.4243 15.0565 28.8094 14.8074 29.0418C14.6865 29.1547 14.5303 29.2105 14.3753 29.2105C14.2104 29.2105 14.0469 29.1475 13.9236 29.0227L0.173064 15.0259C-0.0576878 14.7905 -0.0576878 14.4197 0.173064 14.1844Z"
                    fill="#2E2E2E" />
                </svg>
              </div>
              <div class="item-btn-banner-slide btn-next-banner" id="next-slide-service">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="30" viewBox="0 0 15 30" fill="none">
                  <path
                    d="M14.8269 14.1844L1.07644 0.187527C0.837189 -0.053747 0.441665 -0.0644729 0.192632 0.168529C-0.0564011 0.400903 -0.0649557 0.786007 0.17312 1.02905L13.5098 14.6051L0.173061 28.1812C-0.0650148 28.4243 -0.0564593 28.8094 0.192574 29.0418C0.313458 29.1547 0.469675 29.2105 0.62472 29.2105C0.78955 29.2105 0.953092 29.1475 1.07638 29.0227L14.8269 15.0259C15.0577 14.7905 15.0577 14.4197 14.8269 14.1844Z"
                    fill="#2E2E2E" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-text-service">
        <img src="~/assets/img-fix/Xfoto.png" alt="" />
      </div>
    </div>
    <!-- END SECTION Our service -->

    <!-- SECTION Our pricing -->
    <div class="wp-our-pricing pb-block">
      <div class="container">
        <div class="title-home-page">
          <h1>Our pricing</h1>
          <p>MINIMUM OF COST</p>
        </div>
        <div class="layout-our-pricing">
          <div class="content-our-pricing-dk">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">
                    <p class="name-price">Photo Editing</p>
                    <p class="dv-price">
                      <span class="price">0,65</span>
                      <span class="unit-money">$</span>
                    </p>
                  </th>
                  <th scope="col">
                    <p class="name-price">Retouching</p>
                    <p class="dv-price">
                      <span class="price">0,95</span>
                      <span class="unit-money">$</span>
                    </p>
                  </th>
                  <th scope="col">
                    <p class="name-price">Day to dusk conversion</p>
                    <p class="dv-price">
                      <span class="price">2,00</span>
                      <span class="unit-money">$</span>
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Free test</th>
                  <td>
                    <span class="icon-check"><i class="fas fa-check"></i></span>
                  </td>
                  <td>
                    <span class="icon-check"><i class="fas fa-check"></i></span>
                  </td>
                  <td>
                    <span class="icon-check"><i class="fas fa-check"></i></span>
                  </td>
                </tr>
                <tr>
                  <th>Noise reduction</th>
                  <td>
                    <span class="icon-check"><i class="fas fa-check"></i></span>
                  </td>
                  <td>
                    <span class="icon-check"><i class="fas fa-check"></i></span>
                  </td>
                  <td>
                    <span class="icon-check"><i class="fas fa-check"></i></span>
                  </td>
                </tr>

                <tr>
                  <th>
                    White balance, contrast, exposure, lens correction, color
                    adjustments.
                  </th>
                  <td>
                    <span class="icon-check"><i class="fas fa-check"></i></span>
                  </td>
                  <td>
                    <span class="icon-check"><i class="fas fa-check"></i></span>
                  </td>
                  <td>
                    <span class="icon-check"><i class="fas fa-check"></i></span>
                  </td>
                </tr>
                <tr>
                  <th>Removal of Camera Flashes</th>
                  <td>
                    <span class="icon-check"><i class="fas fa-check"></i></span>
                  </td>
                  <td>
                    <span class="icon-check"><i class="fas fa-check"></i></span>
                  </td>
                  <td>
                    <span class="icon-check"><i class="fas fa-check"></i></span>
                  </td>
                </tr>

                <tr>
                  <th>Removal of Minor Reflections</th>
                  <td>
                    <span class="icon-close"><i class="fas fa-times"></i></span>
                  </td>
                  <td>
                    <span class="icon-check"><i class="fas fa-check"></i></span>
                  </td>
                  <td>
                    <span class="icon-check"><i class="fas fa-check"></i></span>
                  </td>
                </tr>

                <tr>
                  <th>Resizing, cropping and removing background.</th>
                  <td>
                    <span class="icon-close"><i class="fas fa-times"></i></span>
                  </td>
                  <td>
                    <span class="icon-close"><i class="fas fa-times"></i></span>
                  </td>
                  <td>
                    <span class="icon-check"><i class="fas fa-check"></i></span>
                  </td>
                </tr>

                <tr>
                  <th>Up to 12-24hrs Image Delivery</th>
                  <td>
                    <span class="icon-close"><i class="fas fa-times"></i></span>
                  </td>
                  <td>
                    <span class="icon-close"><i class="fas fa-times"></i></span>
                  </td>
                  <td>
                    <span class="icon-check"><i class="fas fa-check"></i></span>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <td>
                    <a href="javascript:;" class="btn-order">order now</a>
                  </td>
                  <td>
                    <a href="javascript:;" class="btn-order btn-btn-grd-blue">order now</a>
                  </td>
                  <td>
                    <a href="javascript:;" class="btn-order">order now</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="content-our-pricing-moblie">
            <div class="item-our-pricing-moblie">
              <div class="title-item-mb">
                <h2>Photo Editing</h2>
                <p class="dv-price">
                  <span class="txt-form">From</span>
                  <span class="price">0,65</span>
                  <span class="unit-money">$</span>
                </p>
              </div>
              <div class="main-item-pricing-mb">
                <p class="item-content-endow">Free test</p>
                <p class="item-content-endow">Noise reduction</p>
                <p class="item-content-endow">
                  White balance, contrast, exposure, lens correction, color
                  adjustments.
                </p>
                <p class="item-content-endow">Removal of Camera Flashes</p>
                <p class="item-content-endow">Removal of Minor Reflections</p>
                <p class="item-content-endow">
                  Resizing, cropping and removing background.
                </p>
                <p class="item-content-endow">
                  Up to 12-24hrs Image Delivery
                </p>
              </div>
              <div class="btn-order-item">
                <a href="">order now</a>
              </div>
            </div>
            <div class="item-our-pricing-moblie">
              <div class="title-item-mb">
                <h2>Retouching</h2>
                <p class="dv-price">
                  <span class="txt-form">From</span>
                  <span class="price">0,95</span>
                  <span class="unit-money">$</span>
                </p>
              </div>
              <div class="main-item-pricing-mb">
                <p class="item-content-endow">Color correction.</p>
                <p class="item-content-endow">
                  Brightest/Contract Adjustment.
                </p>
                <p class="item-content-endow">
                  Remove small spots, camera flashes, dust, glare, reflection…
                </p>
                <p class="item-content-endow">
                  Add green grass, trees, and small objects like lamp, chair
                  or table...
                </p>
                <p class="item-content-endow">
                  Complete details for unfinished property.
                </p>
                <p class="item-content-endow">
                  Up to 12-24hrs Image Delivery
                </p>
              </div>
              <div class="btn-order-item">
                <a href="" class="btn-btn-grd-blue">order now</a>
              </div>
            </div>
            <div class="item-our-pricing-moblie">
              <div class="title-item-mb">
                <h2>Day to dusk conversion</h2>
                <p class="dv-price">
                  <span class="txt-form">From</span>
                  <span class="price">2,00</span>
                  <span class="unit-money">$</span>
                </p>
              </div>
              <div class="main-item-pricing-mb">
                <p class="item-content-endow">Color correction.</p>
                <p class="item-content-endow">
                  Brightest/Contract Adjustment.
                </p>
                <p class="item-content-endow">
                  Remove small spots, camera flashes, dust, glare, reflection…
                </p>
                <p class="item-content-endow">
                  Add green grass, trees, and small objects like lamp, chair
                  or table...
                </p>
                <p class="item-content-endow">
                  Complete details for unfinished property.
                </p>
              </div>
              <div class="btn-order-item">
                <a href="">order now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-text-pricing">
        <img src="~/assets/img-fix/texture-pricing.png" alt="" />
      </div>
      <div class="bg-text-pricing-bt">
        <img src="~/assets/img-fix/texture-pricing-bt.png" alt="" />
      </div>
      <div class="bg-texture-working-process">
        <img src="~/assets/img-fix/text-wp-working-process.png" alt="" />
      </div>
    </div>
    <!-- END SECTION Our pricing -->

    <!-- SECTION Working Process -->
    <div class="wp-working-process pb-block">
      <div class="container">
        <div class="title-home-page">
          <h1>Working Process</h1>
          <p>PROCESSING STAGES</p>
        </div>
        <div class="layout-working-process">
          <div class="item-working-process">
            <div class="icon-item-working-process bg-icon-1">
              <i class="far fa-user"></i>
            </div>
            <div class="content-item-working-process">
              <h3 class="name-step">Register Account</h3>
              <span class="number-step">Step 1</span>
            </div>
          </div>
          <div class="item-working-process">
            <div class="icon-item-working-process bg-icon-2">
              <i class="fas fa-tasks"></i>
            </div>
            <div class="content-item-working-process">
              <h3 class="name-step">Create a task</h3>
              <span class="number-step">Step 2</span>
            </div>
          </div>
          <div class="item-working-process">
            <div class="icon-item-working-process bg-icon-3">
              <i class="fas fa-file-upload"></i>
            </div>
            <div class="content-item-working-process">
              <h3 class="name-step">Upload original files</h3>
              <span class="number-step">Step 3</span>
            </div>
          </div>
          <div class="item-working-process">
            <div class="icon-item-working-process bg-icon-4">
              <i class="fas fa-share-square"></i>
            </div>
            <div class="content-item-working-process">
              <h3 class="name-step">Request task</h3>
              <span class="number-step">Step 4</span>
            </div>
          </div>
          <div class="item-working-process">
            <div class="icon-item-working-process bg-icon-5">
              <i class="fas fa-file-download"></i>
            </div>
            <div class="content-item-working-process">
              <h3 class="name-step">Get task done</h3>
              <span class="number-step">Step 5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END SECTION Working Process -->

    <!-- SECTION why-choose-us -->
    <div class="wp-why-choose-us pb-block">
      <div class="container">
        <div class="title-home-page">
          <h1>Why choose us</h1>
          <p>MINIMUM OF COST</p>
        </div>
        <div class="layout-why-choose-us">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-6 col-xl-8">
              <div class="block-picture">
                <div class="picture-why-choose-us">
                  <img src="~/assets/img-change/choose-us.jpg" alt="" />
                </div>
                <div class="texture-square">
                  <img src="~/assets/img-fix/texture-choose-us.png" alt="" />
                </div>
                <div class="text-xfoto">
                  <img src="~/assets/img-fix/text-xfoto.png" alt="" />
                </div>
                <div class="texture-line">
                  <img src="~/assets/img-fix/line-choose-us.png" alt="" />
                </div>
                <div class="bg-texture-choose">
                  <img src="~/assets/img-fix/bg-texture-choose.png" alt="" />
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-xl-4">
              <div class="list-why-choose-us">
                <div class="item-why-choose-us active">
                  <p class="number-item">01</p>
                  <div class="content-item">
                    <p class="txt-main">We work 24/7</p>
                    <p class="txt-side">
                      We are always prepared to answer your questions
                    </p>
                  </div>
                </div>
                <div class="item-why-choose-us">
                  <p class="number-item">02</p>
                  <div class="content-item">
                    <p class="txt-main">Fast turnaround</p>
                    <p class="txt-side">We provide 24 hour turnaround time</p>
                  </div>
                </div>
                <div class="item-why-choose-us">
                  <p class="number-item">03</p>
                  <div class="content-item">
                    <p class="txt-main">High quality deliver</p>
                    <p class="txt-side">
                      We make sure the final product is of the highest quality
                    </p>
                  </div>
                </div>
                <div class="item-why-choose-us">
                  <p class="number-item">04</p>
                  <div class="content-item">
                    <p class="txt-main">Unbeatable pricing</p>
                    <p class="txt-side">
                      We have the best price-performance ratio on the market
                    </p>
                  </div>
                </div>
                <div class="item-why-choose-us">
                  <p class="number-item">05</p>
                  <div class="content-item">
                    <p class="txt-main">Worldwide services</p>
                    <p class="txt-side">
                      We accept and work with all types of photos from
                      customers all over the world
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END SECTION why-choose-us -->

    <!-- SECTION BLOG -->
    <div class="wp-our-blog">
      <div class="container">
        <div class="title-home-page">
          <h1>Our Blog</h1>
          <p>FEATURED ARTICLE</p>
        </div>
        <div class="layout-our-blog">
          <div class="wp-slide-blog">
            <div class="swiper-container" id="slide-blog" v-swiper:mySwiperBlog="SwiperBlog">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="item-slide-blog">
                    <a href="javascript:;" class="picture-blog">
                      <img src="~/assets/img-change/picture-blog-1.jpg" alt="" />
                    </a>
                    <div class="content-item-blog">
                      <a href="javascript:;" class="title-blog">What Should a Photographer Wear To a Wedding (Outfit
                        Ideas)</a>
                      <div class="category-and-btn">
                        <p class="category">Photo Editing</p>
                        <div class="btn-detail-blog">
                          <a href="javascript:;">Detail</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="item-slide-blog">
                    <a href="javascript:;" class="picture-blog">
                      <img src="~/assets/img-change/picture-blog-2.jpg" alt="" />
                    </a>
                    <div class="content-item-blog">
                      <a href="javascript:;" class="title-blog">7 Tips On How To Take Aesthetic Pictures That Stand
                        Out</a>
                      <div class="category-and-btn">
                        <p class="category">Photo Editing</p>
                        <div class="btn-detail-blog">
                          <a href="javascript:;">Detail</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="item-slide-blog">
                    <a href="javascript:;" class="picture-blog">
                      <img src="~/assets/img-change/picture-blog-3.jpg" alt="" />
                    </a>
                    <div class="content-item-blog">
                      <a href="javascript:;" class="title-blog">Footwear Photography: How To Photograph Shoes The
                        Right Way</a>
                      <div class="category-and-btn">
                        <p class="category">Photography</p>
                        <div class="btn-detail-blog">
                          <a href="javascript:;">Detail</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="item-slide-blog">
                    <a href="javascript:;" class="picture-blog">
                      <img src="~/assets/img-change/picture-blog-4.jpg" alt="" />
                    </a>
                    <div class="content-item-blog">
                      <a href="javascript:;" class="title-blog">9 Best Passport Photo Apps In 2020 To DIY And Save
                        Money</a>
                      <div class="category-and-btn">
                        <p class="category">Photography</p>
                        <div class="btn-detail-blog">
                          <a href="javascript:;">Detail</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="item-slide-blog">
                    <a href="javascript:;" class="picture-blog">
                      <img src="~/assets/img-change/picture-blog-1.jpg" alt="" />
                    </a>
                    <div class="content-item-blog">
                      <a href="javascript:;" class="title-blog">What Should a Photographer Wear To a Wedding (Outfit
                        Ideas)</a>
                      <div class="category-and-btn">
                        <p class="category">Photo Editing</p>
                        <div class="btn-detail-blog">
                          <a href="javascript:;">Detail</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="item-slide-blog">
                    <a href="javascript:;" class="picture-blog">
                      <img src="~/assets/img-change/picture-blog-2.jpg" alt="" />
                    </a>
                    <div class="content-item-blog">
                      <a href="javascript:;" class="title-blog">7 Tips On How To Take Aesthetic Pictures That Stand
                        Out</a>
                      <div class="category-and-btn">
                        <p class="category">Photo Editing</p>
                        <div class="btn-detail-blog">
                          <a href="javascript:;">Detail</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="control-slide-review">
              <div class="item-btn-blog-slide btn-prev-blog" id="prev-slide-blog">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="30" viewBox="0 0 15 30" fill="none">
                  <path
                    d="M0.173064 14.1844L13.9236 0.187527C14.1628 -0.053747 14.5583 -0.0644729 14.8074 0.168529C15.0564 0.400903 15.065 0.786007 14.8269 1.02905L1.49024 14.6051L14.8269 28.1812C15.065 28.4243 15.0565 28.8094 14.8074 29.0418C14.6865 29.1547 14.5303 29.2105 14.3753 29.2105C14.2104 29.2105 14.0469 29.1475 13.9236 29.0227L0.173064 15.0259C-0.0576878 14.7905 -0.0576878 14.4197 0.173064 14.1844Z"
                    fill="#2E2E2E" />
                </svg>
              </div>
              <div class="item-btn-blog-slide btn-next-blog" id="next-slide-blog">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="30" viewBox="0 0 15 30" fill="none">
                  <path
                    d="M14.8269 14.1844L1.07644 0.187527C0.837189 -0.053747 0.441665 -0.0644729 0.192632 0.168529C-0.0564011 0.400903 -0.0649557 0.786007 0.17312 1.02905L13.5098 14.6051L0.173061 28.1812C-0.0650148 28.4243 -0.0564593 28.8094 0.192574 29.0418C0.313458 29.1547 0.469675 29.2105 0.62472 29.2105C0.78955 29.2105 0.953092 29.1475 1.07638 29.0227L14.8269 15.0259C15.0577 14.7905 15.0577 14.4197 14.8269 14.1844Z"
                    fill="#2E2E2E" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="texture-our-blog">
        <img src="~/assets/img-fix/texture-blog.png" />
      </div>
    </div>
    <!-- END SECTION BLOG -->
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      SwiperBanner: {
        slidesPerView: '4',
        speed: 700,
        loop: true,
        pagination: {
          el: "#pagination-slide-banner",
          clickable: true,
        },
        navigation: {
          nextEl: "#next-slide-banner",
          prevEl: "#prev-slide-banner",
        },
        autoHeight: true,
        breakpoints: {
          575: {
            slidesPerView: 1,
          },
          767: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }
      },
      SwiperBlog: {
        slidesPerView: '3',
        spaceBetween: 30,
        speed: 700,
        navigation: {
          nextEl: "#next-slide-blog",
          prevEl: "#prev-slide-blog",
        },
        breakpoints: {
          575: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1600: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }
      },
      SwiperService: {
        slidesPerView: '3',
        spaceBetween: 30,
        speed: 700,
        navigation: {
          nextEl: "#next-slide-service",
          prevEl: "#prev-slide-service",
        },
        autoHeight: true,
        breakpoints: {
          575: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20
          },
        }
      },
    }
  },

}
</script>
