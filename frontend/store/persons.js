export const state = () => ({
  created_date: '',
  search: '',
  person_id: '',
})

export const mutations = {
  setCreatedDate(state, data) {
    state.created_date = data
  },
  setSearch(state, data) {
    state.search = data
  },
  setPersonId(state, data) {
    state.person_id = data
  },
}
