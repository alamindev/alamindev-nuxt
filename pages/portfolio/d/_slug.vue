<template>
  <div class="main--overlay">
    <div class="overlay--porfolio" :class="isSlug && 'actived'">
      <div class="cross--icon" @click="dismissRoute">
        <i class="fas fa-times"></i>
      </div>
      <div class="porfolio--details">
        <h1 class="title">{{ portfolio.name }}</h1>
        <div class="scroll--area">
          <perfect-scrollbar>
            <div class="slider--area">
              <swiper ref="swiper" class="swiper" :options="options">
                <swiper-slide v-for="img in portfolio.images" :key="img">
                  <div class="portfolio--image">
                    <img :src="img" :alt="portfolio.name" />
                  </div>
                </swiper-slide>
                <br />
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
            <div class="">
              <a :href="portfolio.link" class="gotolive" target="_blank"
                >Go to Live</a
              >
            </div>
            <div class="skill--area">
              <h3>Skills</h3>
              <ul class="knowledges">
                <li v-for="skill in portfolio.skills" :key="skill">
                  {{ skill }}
                </li>
              </ul>
            </div>
            <div class="details--area">
              <h3>Project description</h3>
              <p>
                {{ portfolio.details }}
              </p>
            </div>
          </perfect-scrollbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSlug: false,
      options: {
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      },
    };
  },
  methods: {
    dismissRoute() {
      return this.$router.back();
    },
    onSwiperClickSlidePrev() {
      this.$refs.swiper.$swiper.slidePrev();
    },
    onSwiperClickSlideNext() {
      this.$refs.swiper.$swiper.slideNext();
    },
  },
  computed: {
    portfolio() {
      return this.$store.state.portfolio.portfolio;
    },
  },
  head() {
    return {
      title: `Portfolio- ${this.portfolio.name}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.portfolio.details,
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            this.portfolio.skills > 0 && this.portfolio.skills.toString(),
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      if (this.$route.params.slug) {
        this.isSlug = true;
      }
    }, 0.1);
  },
  fetch() {
    if (this.$route.params.slug) {
      this.$store
        .dispatch("portfolio/getPortfolioBySlug", this.$route.params.slug)
        .then((res) => {
          if (res === false)
            this.$nuxt.context.error({
              status: 404,
            });
        });
    }
  },
};
</script>

<style>
</style>
