<template>
  <div class="home--page">
    <section class="index--page">
      <Particles
        id="tsparticles"
        :particlesLoaded="particlesLoaded"
        :options="options"
      />
      <div class="face">
        <div class="eye-wrap">
          <div class="face__eye">
            <div class="face__eye-ball" ref="eye"></div>
          </div>
          <div class="face__nose"></div>
          <div class="face__eye">
            <div class="face__eye-ball" ref="eyes"></div>
          </div>
        </div>
        <div class="face__mouth"></div>
      </div>
      <div class="title-block">
        <h2>Al-amin</h2>
        <div class="typed">
          <vue-typed-js
            :loop="true"
            :typeSpeed="100"
            :backSpeed="50"
            :smartBackspace="false"
            :showCursor="false"
            :strings="['Web designer', 'Web developer', 'Vue js developer']"
          >
            <h1 class="typing"></h1>
          </vue-typed-js>
        </div>
      </div>
    </section>
    <div class="bottom--mobile">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      options: {
        fpsLimit: 60,
        particles: {
          number: {
            value: 0,
          },
          color: {
            value: "#f00",
          },
          shape: {
            type: ["circle", "square", "polygon"],
            options: {
              polygon: {
                sides: 6,
              },
            },
          },
          opacity: {
            value: { min: 0, max: 1 },
            animation: {
              enable: true,
              speed: 1,
              startValue: "max",
              destroy: "min",
            },
          },
          size: {
            value: { min: 3, max: 7 },
          },
          life: {
            duration: {
              sync: true,
              value: 7,
            },
            count: 1,
          },
          move: {
            enable: true,
            gravity: {
              enable: true,
            },
            drift: {
              min: -2,
              max: 2,
            },
            speed: { min: 10, max: 30 },
            decay: 0.1,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "destroy",
              top: "none",
            },
          },
          rotate: {
            value: {
              min: 0,
              max: 360,
            },
            direction: "random",
            move: true,
            animation: {
              enable: true,
              speed: 60,
            },
          },
          tilt: {
            direction: "random",
            enable: true,
            move: true,
            value: {
              min: 0,
              max: 360,
            },
            animation: {
              enable: true,
              speed: 60,
            },
          },
          roll: {
            darken: {
              enable: true,
              value: 25,
            },
            enable: true,
            speed: {
              min: 15,
              max: 25,
            },
          },
          wobble: {
            distance: 30,
            enable: true,
            move: true,
            speed: {
              min: -15,
              max: 15,
            },
          },
        },
        detectRetina: true,
        emitters: {
          direction: "none",
          spawnColor: {
            value: "#ff0000",
            animation: {
              h: {
                enable: true,
                offset: {
                  min: -1.4,
                  max: 1.4,
                },
                speed: 0.1,
                sync: false,
              },
              l: {
                enable: true,
                offset: {
                  min: 20,
                  max: 80,
                },
                speed: 0,
                sync: false,
              },
            },
          },
          life: {
            count: 0,
            duration: 0.8,
            delay: 1.2,
          },
          rate: {
            delay: 0.8,
            quantity: 150,
          },
          size: {
            width: 0,
            height: 0,
          },
        },
      },
      particles: null,
      width: null,
    };
  },
  watch: {
    width(newVal, oldVal) {
      if (newVal < 600) {
        setTimeout(() => this.particles.destroy(), 20000);
      }
    },
  },
  methods: {
    particlesLoaded(e) {
      this.particles = e;
    },
    onResize() {
      this.width = window.innerWidth;
    },
  },
  mounted() {
    this.$store.dispatch("eye/getEye", this.$refs.eye);
    this.$store.dispatch("eye/getEyes", this.$refs.eyes);
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
    this.width = window.innerWidth;
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>
