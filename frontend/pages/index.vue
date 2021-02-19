<template>
  <div>
    <div class="grid grid-cols-3 gap-2">
      <!-- APPOINTMENT_DATE -->
      <div class="col-span-3 md:col-start-2 md:col-span-1">
        <div class="mt-2 relative rounded-md shadow-sm">
          <div
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
          >
            <!-- Heroicon name: calendar -->
            <svg
              class="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <input
            v-model="appointment_date"
            type="date"
            id="appointment_date"
            class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <!--/ APPOINTMENT_DATE -->

      <!-- SEARCH -->
      <div class="col-span-3 md:col-end-4 md:col-span-1">
        <div class="mt-2 flex rounded-md shadow-sm">
          <div class="relative flex items-stretch flex-grow focus-within:z-10">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <!-- Heroicon name: identification -->
              <svg
                class="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                />
              </svg>
            </div>
            <input
              v-model="search"
              type="text"
              id="search"
              autocomplete="off"
              class="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
              placeholder="ช่องค้นหา"
            />
          </div>
          <button
            class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <!-- Heroicon name: search -->
            <svg
              class="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span>ค้นหา</span>
          </button>
        </div>
      </div>
      <!--/ SEARCH -->
    </div>
    <div class="mt-2 bg-white shadow overflow-hidden sm:rounded-md">
      <ul class="divide-y divide-gray-200">
        <li v-for="item in filterPersons" :key="item.id">
          <div class="block hover:bg-gray-50">
            <div class="px-4 py-4 sm:px-6">
              <div class="flex items-center justify-between">
                <p class="text-md font-medium text-indigo-600 truncate">
                  {{ item.full_name }}
                </p>
                <div class="ml-2 flex-shrink-0 flex">
                  <div v-if="!Boolean(item.check_in)">
                    <button
                      @click="print(item.id)"
                      type="button"
                      class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <!-- Heroicon name: solid/printer -->
                      <svg
                        class="-ml-0.5 mr-2 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Print
                    </button>
                  </div>
                  <div v-else>
                    <button
                      @click="canclePrint(item.id)"
                      type="button"
                      class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <!-- Heroicon name: solid/printer -->
                      <svg
                        class="-ml-0.5 mr-2 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Already
                    </button>
                  </div>
                  <button
                    type="button"
                    class="ml-2 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <!-- Heroicon name: solid/beaker -->
                    <svg
                      class="-ml-0.5 mr-2 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Collected
                  </button>
                </div>
              </div>
              <div class="mt-2 sm:flex sm:justify-between">
                <div class="sm:flex">
                  <p class="flex items-center text-sm text-gray-500">
                    <!-- Heroicon name: identification -->
                    <svg
                      class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                      />
                    </svg>
                    {{ item.pid }}
                  </p>
                  <p
                    class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6"
                  >
                    <!-- Heroicon name: location-marker -->
                    <svg
                      class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {{ item.address }}
                  </p>
                </div>
                <div
                  class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0"
                >
                  <!-- Heroicon name: calendar -->
                  <svg
                    class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p>
                    วันที่
                    <time :datetime="item.appointment_date">
                      {{
                        $dayjs(item.appointment_date).format('DD MMMM YYYY')
                      }}</time
                    >
                  </p>
                </div>

                <div :id="`printMe${item.id}`" v-show="false">
                  <div class="flex h-screenflex h-screen">
                    <div class="m-auto text-center text-xs">
                      <p class="text-xs font-semibold">{{ item.full_name }}</p>
                      <p class="font-semibold">{{ item.pid }}</p>
                      <p>{{ $dayjs().format('DD-MM-YYYY HH:mm') }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <button v-show="false" @click="getJson">getJSON</button>
    <button v-show="false" @click="create">create</button>
  </div>
</template>

<script>
import { personsQuery } from '~/graphql/query'
import {
  createPersonMutation,
  setPrintDate,
  canclePrintDate,
} from '~/graphql/mutation'
import { data } from '~/static/data.js'
export default {
  data({ $dayjs }) {
    return {
      stkFullName: '',
      stkPID: '',
      persons: [],
      json_data: '',
      search: '',
      appointment_date: $dayjs().format('YYYY-MM-DD'),
    }
  },
  apollo: {
    persons: {
      prefectch: true,
      query: personsQuery,
    },
  },
  computed: {
    filterPersons() {
      let filteredLists = this.persons
      if (this.search != '') {
        filteredLists = filteredLists.filter((list) => {
          let a = list.pid.match(this.search)
          let b = list.full_name.toLowerCase().match(this.search.toLowerCase())
          if (/^\d+$/.test(this.search)) {
            return a
          } else {
            return b
          }
        })
      }

      return filteredLists
    },
  },

  methods: {
    print(myId) {
      this.$apollo.mutate({
        mutation: setPrintDate,
        variables: {
          id: myId,
          check_in: `${this.$dayjs().format(
            'YYYY-MM-DD'
          )}T${this.$dayjs().format('HH:mm:ss')}.000Z`,
        },
      })

      this.$htmlToPaper('printMe' + myId)
    },

    canclePrint(myId) {
      this.$apollo.mutate({
        mutation: canclePrintDate,
        variables: {
          id: myId,
        },
      })
    },
    getJson() {
      this.json_data = data
      console.log(this.json_data)
    },
    create() {
      this.json_data.forEach((el) => {
        this.$apollo.mutate({
          mutation: createPersonMutation,
          variables: {
            pid: `${el.pid}`,
            full_name: `${el.full_name}`,
            address: `${el.address}`,
            appointment_date: this.appointment_date,
          },
        })
      })
    },
  },
}
</script>
