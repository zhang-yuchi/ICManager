module.exports = {
  changeFunModule(state, payload) {
    state.funModule = payload.module
  },
  setRole(state, payload) {
    state.role = payload
  }
}