<template>
  <ul class="main-menu">
    <li class="active">
      <nuxt-link to="/" class="nav-anim">
        <span class="menu-icon lnr lnr-home"></span>
        <span class="link-text">Home</span>
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/about" class="nav-anim">
        <span class="menu-icon lnr lnr-user"></span>
        <span class="link-text">About Me</span>
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/resume" class="nav-anim">
        <span class="menu-icon lnr lnr-graduation-hat"></span>
        <span class="link-text">Resume</span>
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/portfolio" class="nav-anim">
        <span class="menu-icon lnr lnr-briefcase"></span>
        <span class="link-text">Portfolio</span>
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/contact" class="nav-anim">
        <span class="menu-icon lnr lnr-envelope"></span>
        <span class="link-text">Contact</span>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style  scoped>
.nuxt-link-exact-active {
  color: #ffe240;
}
</style>
