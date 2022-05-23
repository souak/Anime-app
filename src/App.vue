<template>
  <div id="app">
    <Layout>
        <router-view/>
    </Layout>
    
  </div>
</template>

<script>
import Layout from './layout/Layout.vue'
import gql from 'graphql-tag'

export default {

components:{
    Layout
  }
}
</script>

<style lang="scss">
</style>
