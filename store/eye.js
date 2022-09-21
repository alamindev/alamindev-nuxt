export const state = () => ({
  eye:null,
  eyes:null,
});
export const mutations = {
  SET_EYE_DOM: (state, el) => (state.eye = el),
  SET_EYES_DOM: (state, el) => (state.eyes = el),
};
export const actions = {
  getEye({ commit }, el) {
    commit("SET_EYE_DOM", el)
  },
  getEyes({ commit }, el) {
    commit("SET_EYES_DOM", el)
   }
};
