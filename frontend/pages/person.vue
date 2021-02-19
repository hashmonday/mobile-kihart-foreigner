<template>
  <div>
    <div v-for="item in personalTemplates" :key="item.id">
      {{ item.id }} {{ item.template_name }}
    </div>
    <button @click="create">test</button>
    <button @click="update">test2</button>
  </div>
</template>

<script>
import { personalTemplatesQuery } from '~/graphql/query'
import { createPersonMutation, updatePersonMutation } from '~/graphql/mutation'
export default {
  data() {
    return {
      personalTemplates: [],

      first_name: '',
      last_name: '',
      date_of_birth: '',
      address: '',
      telephone_number: '',
      passport_number: '',
      note: '',
    }
  },
  apollo: {
    personalTemplates: {
      prefectch: true,
      query: personalTemplatesQuery,
    },
  },
  methods: {
    getData() {},
    create() {
      this.$apollo
        .mutate({
          mutation: createPersonMutation,
          variables: {
            first_name: 'Suwicha2',

            date_of_birth: '2021-12-02',
            address: '245',
            telephone_number: '0802106332',
            passport_number: 'nb22344',
            node: 'ok',
          },
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err.data))
    },
    update() {
      this.$apollo
        .mutate({
          mutation: updatePersonMutation,
          variables: {
            id: '',
            first_name: 'Suwicha2',
            last_name: 'Khaosamlee2',
            date_of_birth: '2021-12-02',
            address: '245',
            telephone_number: '0802106332',
            passport_number: 'nb22344',
            node: 'ok',
          },
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    },
  },
}
</script>
