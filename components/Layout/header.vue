<template>
  <div>
    <header class="header" :class="!open ? ' mobile-menu-hide' : ''">
      <div class="header-content">
        <div class="header-photo">
          <Photo src="/images/avatar.png" alt="alamin dev" />
        </div>
        <div class="header-titles">
          <h2>Al-amin</h2>
          <div class="typed">
            <vue-typed-js
              :loop="true"
              :typeSpeed="150"
              :showCursor="false"
              :strings="[
                'Web designer',
                'Web developer',
                'Full-stack web developer',
                'PHP Laravel developer',
                'MERN stack developer',
              ]"
            >
              <h4 class="typing"></h4>
            </vue-typed-js>
          </div>
        </div>
      </div>

      <LayoutSidebar></LayoutSidebar>

      <div class="social-links">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/md-alamin-12b103134/"
              target="_blank"
              ><i class="fab fa-linkedin-in"></i
            ></a>
          </li>
          <li>
            <a href="https://www.facebook.com/alamindevbd/" target="_blank"
              ><i class="fab fa-facebook-f"></i
            ></a>
          </li>
          <li>
            <a href="https://twitter.com/alamindev" target="_blank"
              ><i class="fab fa-twitter"></i
            ></a>
          </li>
        </ul>
      </div>

      <div class="header-buttons">
        <a
          href="/resume.pdf"
          target="_blank"
          class="btn btn-primary"
          download=""
          >Download CV</a
        >
      </div>

      <div class="copyrights">© 2022 All rights reserved.</div>
    </header>

    <!-- Mobile Navigation -->
    <div class="menu-toggle" @click="mobileMenu" :class="open ? 'open' : ''">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <!-- End Mobile Navigation -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  watch: {
    $route() {
      this.open = false;
    },
  },
  methods: {
    mobileMenu() {
      this.open = !this.open;
    },
  },
};
</script>

<style>
</style>
