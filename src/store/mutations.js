module.exports = {
  changeFunModule(state, payload) {
    state.funModule = payload.module
  },
  setRole(state, payload) {
    payload.sort((a, b) => a - b)
    state.role = payload
  }
}