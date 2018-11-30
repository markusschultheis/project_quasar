<template>
    <div id="searchbar" class="search">
      <div class="search_field">
        <q-search
          v-model="searchModel"
          :debounce="600"
          placeholder="Suche"
          icon="search"
          float-label="enter here..."
        />
      </div>
    </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      searchModel: '',
    }
  }
}
</script>

<style scoped>

  .search_field {
    display: block;
    position: center;
  }
 .search {
   animation: ease;
 }
</style>
