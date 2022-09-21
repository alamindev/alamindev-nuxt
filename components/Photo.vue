<template>
  <div class="card-image" ref="card" @mousemove="move" @mouseleave="leave">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script>
export default {
  props: ["src", "alt"],
  mounted() {},
  data: () => ({
    debounce: null,
  }),
  methods: {
    leave() {
      const card = this.$refs.card;
      card.style.transform = `perspective(500px) scale(1)`;
    },
    move() {
      const card = this.$refs.card;

      const relX = (event.offsetX + 1) / card.offsetWidth;
      const relY = (event.offsetY + 1) / card.offsetHeight;
      const rotY = `rotateY(${(relX - 0.5) * 60}deg)`;
      const rotX = `rotateX(${(relY - 0.5) * -60}deg)`;
      card.style.transform = `perspective(500px) scale(1.5) ${rotY} ${rotX}`;
    },
    scale: (val, inMin, inMax, outMin, outMax) =>
      outMin + ((val - inMin) * (outMax - outMin)) / (inMax - inMin),
  },
};
</script>
<style scoped>
.card-image {
  width: 150px;
  height: 150px;
  transition: all 0.1s ease;
  border-radius: 3px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  cursor: pointer;
}
.card-image:hover {
  transform: scale(2);
  z-index: 2;
}
.card-image:hover img {
  filter: grayscale(0);
}
.card-image img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  transition: all 0.3s ease;
}
</style>
