<template>
  <b-container class="my-5">
    <b-row class="row">
      <b-col lg="4" md="6" sm="12" class="py-3" v-for="(mediaItem, index) in this.mediaList" :key="index">
        <anime-card :mediaItem="mediaList[index]"></anime-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import gql from "graphql-tag";
import AnimeCard from './AnimeCard.vue'

export default {
  name: 'Home',
  components:{
    AnimeCard
  },
  apollo:{
    mediaList:{
      query: gql`
      {
        Page(perPage: 20){
          media{
            id
            title{
              english
            }
            coverImage{
              large
              color
            }
          }
        }
      }
      `,
      update(data){
        return data.Page.media
      }
    }
  },
  data() {
    return {
      mediaList: [],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
