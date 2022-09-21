<template>
  <section class="page--section">
    <div class="page-title">
      <h2>About <span>Me</span></h2>
    </div>
    <perfect-scrollbar :useBothWheelAxes="false">
      <div class="section-content">
        <!-- Personal Information -->
        <div class="row g-0">
          <div class="col-xs-12 col-sm-7">
            <p>
              I am a highly proficient Web Developer & got excellent skills in
              programming, web development, and designing along with Security
              with 5+ years of tireless involvement in Laravel, ReactJS, VueJs,
              WordPress, JavaScript. I have a long list of skills and Expertise
              in my arsenals for reshaping my customer's requirements to
              next-level design and development.
            </p>
          </div>

          <div class="col-xs-12 col-sm-5">
            <div class="info-list">
              <ul>
                <li>
                  <span class="title">Age</span>
                  <span class="value">25</span>
                </li>

                <li>
                  <span class="title">Residence</span>
                  <span class="value">Bangladesh</span>
                </li>

                <li>
                  <span class="title">Address</span>
                  <span class="value">Mymensingh Sadar, Mymensingh</span>
                </li>

                <li>
                  <span class="title">e-mail</span>
                  <span class="value"
                    ><a
                      href="mailto:mdalamin6554@gmail.com"
                      class="__cf_email__"
                      >mdlamin6554@gmail.com</a
                    ></span
                  >
                </li>

                <li>
                  <span class="title">Phone</span>
                  <span class="value">+001836453705</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- End of Personal Information -->

        <div class="white-space-50"></div>

        <!-- Services -->
        <div class="row g-0">
          <div class="col-xs-12 col-sm-12">
            <div class="block-title">
              <h3>What <span>I Do</span></h3>
            </div>
          </div>
        </div>

        <div class="row g-0">
          <div class="col-xs-12 col-sm-6">
            <div class="col-inner">
              <div class="info-list-w-icon">
                <div class="info-block-w-icon">
                  <div class="ci-icon">
                    <i class="lnr lnr-store"></i>
                  </div>
                  <div class="ci-text">
                    <h4>Ecommerce Development</h4>
                    <p>
                      The term electronic commerce (ecommerce) refers to a
                      business model that allows companies and individuals to
                      buy and sell goods and services over the Internet.
                    </p>
                    <p>
                      I will build fully featured e-commerce website for your
                      business
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6">
            <div class="col-inner">
              <div class="info-list-w-icon">
                <div class="info-block-w-icon">
                  <div class="ci-icon">
                    <i class="lnr lnr-store"></i>
                  </div>
                  <div class="ci-text">
                    <h4>PHP Laravel Development</h4>
                    <p>
                      Laravel is primarily used for building custom web apps
                      using PHP. It’s a web framework that handles many things
                      that are annoying to build yourself, such as routing,
                      templating HTML, and authentication. Laravel is entirely
                      server-side, due to running on PHP, and focuses heavily on
                      data manipulation and sticking to a Model-View-Controller
                      design. A framework like React might put most of its
                      attention on user interaction and shiny features, but
                      Laravel simply presents a solid foundation for you to
                      build off of—and does it right.
                    </p>
                    <p>I will build any kind of website by PHP LARAVEL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End of Services -->

        <div class="white-space-30"></div>

        <!-- Testimonials -->
        <div class="row g-0">
          <div class="col-xs-12 col-sm-12">
            <div class="block-title">
              <h3>Testimonials</h3>
            </div>
          </div>
        </div>

        <div class="row g-0">
          <div class="col-xs-12 col-sm-12">
            <div class="testimonials">
              <swiper ref="swiper" class="swiper" :options="options">
                <swiper-slide
                  v-for="testimonial in testimonials"
                  :key="testimonial.id"
                >
                  <div class="testimonial">
                    <div class="img">
                      <img :src="testimonial.image" :alt="testimonial.name" />
                    </div>
                    <div class="text">
                      <p>
                        {{ testimonial.review }}
                      </p>
                    </div>

                    <div class="author-info">
                      <h4 class="author">{{ testimonial.name }}</h4>
                      <h5 class="company">{{ testimonial.country }}</h5>
                      <div class="icon">
                        <i class="fas fa-quote-right"></i>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
              <div class="slider--nav">
                <button
                  type="button"
                  @click="onSwiperClickSlidePrev"
                  class="button--style"
                >
                  <i class="fas fa-chevron-left"></i>
                </button>
                <button
                  type="button"
                  @click="onSwiperClickSlideNext"
                  class="button--style"
                >
                  <i class="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- End of Testimonials -->

        <div class="white-space-50"></div>

        <!-- Clients -->
        <div class="row g-0">
          <div class="col-xs-12 col-sm-12">
            <div class="block-title">
              <h3>Cilents</h3>
            </div>
          </div>
        </div>

        <div class="row g-0">
          <div class="col-xs-12 col-sm-12">
            <div class="clients">
              <swiper ref="client" class="swiper" :options="optionsClient">
                <swiper-slide
                  v-for="testimonial in testimonials"
                  :key="testimonial.id"
                >
                  <div class="client-block">
                    <a
                      :href="`https://www.fiverr.com/${testimonial.url}`"
                      target="_blank"
                      :title="testimonial.name"
                    >
                      <img :src="testimonial.image" :alt="testimonial.name" />
                    </a>
                  </div>
                </swiper-slide>
                <br />
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
              <div class="slider--nav">
                <button
                  type="button"
                  @click="onSwiperClickSlidePrevClient"
                  class="button--style"
                >
                  <i class="fas fa-chevron-left"></i>
                </button>
                <button
                  type="button"
                  @click="onSwiperClickSlideNextClient"
                  class="button--style"
                >
                  <i class="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- End of Clients -->

        <div class="white-space-50"></div>

        <!-- Pricing -->
        <div class="row g-0">
          <div class="col-xs-12 col-sm-12">
            <div class="block-title">
              <h3>Pricing</h3>
            </div>
          </div>
        </div>

        <div class="row g-0">
          <div class="col-xs-12 col-sm-12">
            <div class="fw-pricing clearfix row">
              <div class="fw-package-wrap col-md-4 highlight-col">
                <div class="fw-package">
                  <div class="fw-heading-row">
                    <span>Basic Package</span>
                  </div>

                  <div class="fw-pricing-row">
                    <span>$20</span>
                    <small>Small Bug fix or Deyploy on the server</small>
                  </div>

                  <div class="fw-button-row">
                    <nuxt-link
                      to="/contact"
                      target="_self"
                      class="btn btn-primary"
                      >Contact me</nuxt-link
                    >
                  </div>

                  <div class="fw-default-row">✔ 1 Page</div>
                  <div class="fw-default-row">✔ Bug fix</div>
                  <div class="fw-default-row">✔ Content Upload</div>
                  <div class="fw-default-row">✔ Responsive Design</div>
                  <div class="fw-default-row">✔ Design Customization</div>
                  <div class="fw-default-row"></div>
                  <div class="fw-default-row"></div>
                </div>
              </div>
              <div class="fw-package-wrap col-md-4">
                <div class="fw-package">
                  <div class="fw-heading-row">
                    <span>Silver plan</span>
                  </div>

                  <div class="fw-pricing-row">
                    <span>$140</span>
                    <small
                      >Add new features of your website or application</small
                    >
                  </div>

                  <div class="fw-button-row">
                    <nuxt-link
                      to="/contact"
                      target="_self"
                      class="btn btn-primary"
                      >Contact me</nuxt-link
                    >
                  </div>

                  <div class="fw-default-row">✔ 2 Page</div>
                  <div class="fw-default-row">✔ Content Upload</div>
                  <div class="fw-default-row">✔ Responsive Design</div>
                  <div class="fw-default-row">✔ Design Customization</div>
                  <div class="fw-default-row">✔ Include Source Code</div>
                </div>
              </div>

              <div class="fw-package-wrap col-md-4 highlight-col">
                <div class="fw-package">
                  <div class="fw-heading-row">
                    <span>Golden package</span>
                  </div>

                  <div class="fw-pricing-row">
                    <span>$700</span>
                    <small
                      >i will develop your new custom php laravel website (10
                      pages ) or eccommerce website.</small
                    >
                  </div>

                  <div class="fw-button-row">
                    <nuxt-link
                      to="/contact"
                      target="_self"
                      class="btn btn-primary"
                      >Contact me</nuxt-link
                    >
                  </div>

                  <div class="fw-default-row">✔ 10 Page</div>
                  <div class="fw-default-row">✔ Content Upload</div>
                  <div class="fw-default-row">✔ Responsive Design</div>
                  <div class="fw-default-row">✔ Design Customization</div>
                  <div class="fw-default-row">✔ Include Source Code</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End of Pricing -->

        <div class="white-space-50"></div>

        <!-- Fun Facts -->
        <div class="row g-0">
          <div class="col-xs-12 col-sm-12">
            <div class="block-title">
              <h3>Fun <span>Facts</span></h3>
            </div>
          </div>
        </div>

        <div class="row g-0">
          <div class="col-xs-12 col-sm-4">
            <div class="fun-fact gray-default">
              <i class="lnr lnr-heart"></i>
              <h4>Happy Clients</h4>
              <span class="fun-fact-block-value">110</span>
              <span class="fun-fact-block-text"></span>
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="fun-fact gray-default">
              <i class="lnr lnr-clock"></i>
              <h4>Working Hours</h4>
              <span class="fun-fact-block-value">5000+</span>
              <span class="fun-fact-block-text"></span>
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="fun-fact gray-default">
              <i class="lnr lnr-star"></i>
              <h4>Reviews</h4>
              <span class="fun-fact-block-value">210</span>
              <span class="fun-fact-block-text"></span>
            </div>
          </div>
        </div>
        <!-- End of Fun Facts -->
      </div>
    </perfect-scrollbar>
  </section>
</template>

<script>
export default {
  data() {
    return {
      options: {
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      },
      optionsClient: {
        slidesPerView: 2,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          540: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
        },
      },
      testimonials: [
        {
          id: 1,
          name: "Hometheaterproz",
          review:
            "The developer was very professional, attentive, and has great customer service. His knowledge about PHP development and web development is above any other PHP developer I worked with before. Great job, I will keep him as our future PHP web developer. ",
          country: "Texas, USA",
          image: "images/testimonials/hometheaterproz.webp",
          url: "hometheaterproz",
        },
        {
          id: 2,
          name: "aureliebrebant",
          review:
            "He delivered exactly what was needed in a record time. I recommend working with Alamind dev for any vue.js project ! ",
          country: "France",
          image: "images/testimonials/aureliebrebant.webp",
          url: "aureliebrebant",
        },
        {
          id: 3,
          name: "ckn203",
          review:
            "Alamindev is genius web developer! His responsiveness and profession make the whole progress efficient! Highly recommend him! ",
          country: "Hong Kong",
          image: "images/testimonials/ckn203.webp",
          url: "ckn203",
        },
        {
          id: 4,
          name: "valante",
          review:
            " What a dedicated, patient, and knowledgeable programmer! Absolutely saved my project at the last moment after deployment to the server went wrong. ",
          country: "Israel",
          image: "images/testimonials/valante.webp",
          url: "valante",
        },
        {
          id: 5,
          name: "zolotarevskyi",
          review:
            "I asked to create a home page for the project in irder to check AL-Amin skilles and he delivered it the same day. Thanks for the help and can recommend for everyone! One thing I also like - Al-Amin responces very fast via fiverr. Thanks",
          country: "Ukraine",
          image: "images/testimonials/zolotarevskyi.webp",
          url: "zolotarevskyi",
        },
        {
          id: 6,
          name: "matthew_hendry",
          review:
            "it was a great working experience with Alamin.I'm looking for long term collaboration with alamin. Thanks for your top notch work. All the best.",
          country: "Pakistan",
          image: "images/testimonials/matthew_hendry.webp",
          url: "matthew_hendry",
        },
        {
          id: 7,
          name: "tiffanyarago199",
          review:
            "Alamindev is fast and very good at what he does. He has helped fix and upload two laravel apps on my servers. I will definitely use his services again and again!",
          country: "United States",
          image: "images/testimonials/tiffanyarago199.webp",
          url: "tiffanyarago199",
        },
        {
          id: 8,
          name: "candicearaujo",
          review:
            "Great knowledge of Nuxt.js, good communication, very patient and polite! Highly recommend the freelancer! Thank you!",
          country: "United States",
          image: "images/testimonials/candicearaujo.webp",
          url: "candicearaujo",
        },
        {
          id: 9,
          name: "maxwell_broadus",
          review:
            "He is Awsome and experience guy I ever worked with. He understand the requirements very well.I will definetly recomend this guy to everyone.Looking forward to work with you Alamindev. Thanks for all the hardwork.",
          country: "United States",
          image: "images/testimonials/maxwell_broadus.webp",
          url: "maxwell_broadus",
        },
        {
          id: 10,
          name: "marc_q",
          review:
            "Alamin did a great job. He quickly understood my need and came up shortly after with a solution. I appreciated his sympathetic way to interact, and I will certainly work with him again. Thank you Alamin.",
          country: "Vietnam",
          image: "images/testimonials/marc_q.webp",
          url: "marc_q",
        },
      ],
    };
  },
  methods: {
    onSwiperClickSlidePrev() {
      this.$refs.swiper.$swiper.slidePrev();
    },
    onSwiperClickSlideNext() {
      this.$refs.swiper.$swiper.slideNext();
    },
    onSwiperClickSlidePrevClient() {
      this.$refs.client.$swiper.slidePrev();
    },
    onSwiperClickSlideNextClient() {
      this.$refs.client.$swiper.slideNext();
    },
  },
  head: {
    title: "About me",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "I am a highly proficient Web Developer & got excellent skills in programming, web development, and designing along with Security with 5+ years of tireless involvement in Laravel, ReactJS, VueJs, WordPress, JavaScript. I have a long list of skills and Expertise in my arsenals for reshaping my customer's requirements to next-level design and development.",
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "resume, cv, php, laravel, vuejs, nodejs",
      },
    ],
  },
};
</script>

<style>
</style>
