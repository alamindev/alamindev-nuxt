<template>
  <section class="page--section">
    <div class="page-title">
      <h2>Portfolio</h2>
    </div>
    <p v-if="$fetchState.pending" class="loading--state">Looding...</p>
    <div class="section-content portolio" v-else>
      <div class="row g-0">
        <div class="col-xs-12 col-sm-12">
          <!-- Portfolio Content -->
          <div class="portfolio-content">
            <ul class="portfolio-filters">
              <template v-for="category in categories">
                <li
                  @click="filterData(category.id)"
                  :class="category.isActive && 'active'"
                  :key="category.id"
                >
                  <a class="filter btn btn-sm btn-link">{{ category.name }}</a>
                </li>
              </template>
            </ul>
            <perfect-scrollbar>
              <!-- Portfolio Grid -->
              <div class="masonary--grid">
                <div
                  class="portfolio--item"
                  v-for="portfolio in portfolios"
                  :key="portfolio.id"
                >
                  <nuxt-link :to="`/portfolio/d/${portfolio.slug}`">
                    <div class="overlay--area">
                      <img
                        :data-src="portfolio.image"
                        :alt="portfolio.name"
                        v-lazy-load
                      />
                      <div class="overlay">
                        <i class="fas fa-eye"></i>
                      </div>
                    </div>
                  </nuxt-link>
                  <h2>{{ portfolio.name }}</h2>
                </div>
              </div>
            </perfect-scrollbar>
            <div class="d-flex justify-content-center" style="margin-top: 15px">
              <a
                class="btn btn-primary"
                href="https://portfolio-devs.netlify.app/"
                >More Project</a
              >
            </div>
          </div>
          <!-- End of Portfolio Content -->
        </div>
      </div>
    </div>
    <NuxtChild />
  </section>
</template>

<script>
export default {
  computed: {
    portfolios() {
      return this.$store.state.portfolio.portfolios;
    },
    categories() {
      return this.$store.state.portfolio.categories;
    },
  },
  methods: {
    filterData(id) {
      this.$store.dispatch("portfolio/getPortfolios", id);
    },
  },
  fetch() {
    this.$store.dispatch("portfolio/getPortfolios");
  },
  head: {
    title: "All of my Portfolio ",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "In the portfolio section you can check all of  my previous work. ",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "portfolio, website, build website, php, laravel, vuejs, nodejs",
      },
    ],
  },
};
</script>

<style>
</style>
