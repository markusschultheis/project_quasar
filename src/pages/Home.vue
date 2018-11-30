<template>
  <q-page padding class="docs-tab-pane justify-center">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" icon="home"/>
    </q-breadcrumbs>
    <div style="width: 400px; max-width: 90vw;"></div>
    <p class="caption">Tab Panes below </p>
  <q-tabs class="shadow" v-model="selectedTab">

    <!-- Tabs - notice slot="title" -->
    <q-tab default slot="title" v-bind:label=titleTab1 name="tab-1" icon="message" />
    <q-tab default slot="title" v-bind:label=titleTab2 name="tab-2" icon="search" />
    <q-tab default slot="title" v-bind:label=titleTab2 name="tab-2" icon="home" />
    <!-- Targets -->
    <q-route-tab name="tab-1">{{ msgTab1 }}</q-route-tab>
    <q-route-tab name="tab-2">{{ msgTab2 }}</q-route-tab>
    <q-route-tab name="tab-2">{{ msgTab3 }}</q-route-tab>
  </q-tabs>
  </q-page>
</template>

<script>
    export default {
        name: "Home",
      data () {
          return {
            titleTab1: 'Startseite',
            titleTab2: 'Adressen',
            selectedTab: 'tab-1',
            msgTab1: 'Adressen',
            msgTab2: 'Telefonbuch',
            msgTab3: 'Tab 3'
          }
      }
    }
</script>

<style lang="stylus" scoped>
 .docs-tab-pane
  .q-tab-pane
    display flex
    align-items center
    justify-content center
    height 65px
    border solid black 1px
</style>
