export const state = () => ({
  siteconfigs: [],
  loaded: '0',
})

export const mutations = {
  setConfigs(state, entries) {
    state.siteconfigs = entries
  },
  setLoaded(state, loaded) {
    state.loaded = loaded
  }
}
