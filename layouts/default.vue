<template>
  <div @mousemove="move">
    <div
      class="lm-animated-bg"
      style="background-image: url(/images/main_bg.webp)"
    ></div>
    <div class="page">
      <div class="page-content">
        <LayoutHeader />
        <div class="content-area">
          <Nuxt keep-alive />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    eye() {
      return this.$store.state.eye.eye;
    },
    eyes() {
      return this.$store.state.eye.eyes;
    },
  },
  methods: {
    move() {
      if (this.eye !== null && this.eyes !== null) {
        let x = (event.clientX * 100) / window.innerWidth + "%";
        let y = (event.clientY * 100) / window.innerHeight + "%";
        this.eye.style.left = x;
        this.eye.style.top = y;
        this.eye.style.transform = "translate(-" + x + ",-" + y + ")";
        this.eyes.style.left = x;
        this.eyes.style.top = y;
        this.eyes.style.transform = "translate(-" + x + ",-" + y + ")";
      }
    },
  },
};
</script>
