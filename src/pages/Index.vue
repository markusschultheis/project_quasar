<template>
  <q-page>
    <div class="email">
    </div>
    <div v-if="visible">
      <Search />
    </div>
    <Home />
    <div class="flex felx-center">
     <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    </div>
  </q-page>
</template>

<style>

  .flex {
    display: grid;
  }
  .email {
  background-color: black;
  }
</style>

<script>
import Emailcheck from 'components/email.vue'
import Search from "../components/searchbar"

export default {
  name: 'PageIndex',
  data () {
    return {
      visible: false
    }
  },
  components: {
    Search,
    Emailcheck
  }
}
</script>
