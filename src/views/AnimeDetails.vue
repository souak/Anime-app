<template>
  <b-container class="my-5">
    <b-row class="row">
      <b-col>
        <b-img :src="media.Media.bannerImage" fluid alt=""></b-img>
      </b-col>
    </b-row>
    <b-row class="row py-4">
      <b-col lg="3" sm="4" xs="12" align-self="center">
        <div class="coverImg-container">
          <b-img
            class="coverImg"
            :src="media.Media.coverImage.large"
            alt=""
          ></b-img>
        </div>
      </b-col>
      <b-col lg="9" sm="8" sx="12" align-self="center">
        <div class="title-description">
          <div class="title">
            <h2>{{ media.Media.title.english }}</h2>
          </div>
          <div class="description">
            <p>{{ media.Media.description }}</p>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row class="row text-center mt-5">
      <b-col lg="3" sm="6">
          <div class="data-box" :style="{backgroundColor:media.Media.coverImage.color}">
            <h4>Popularity</h4>
            <span>{{media.Media.popularity}}</span>
          </div>
      </b-col>
      <b-col lg="3" sm="6">
          <div class="data-box" :style="{backgroundColor:media.Media.coverImage.color}">
                <h4>Favourites</h4>
                <span>{{media.Media.favourites}}</span>
          </div>
      </b-col>
      <b-col lg="3" sm="6">
          <div class="data-box" :style="{backgroundColor:media.Media.coverImage.color}">
              <h4>Episodes</h4>
              <span>{{animeEpiesod}}</span>
          </div>
      </b-col>
      <b-col lg="3" sm="6">
          <div class="data-box" :style="{backgroundColor:media.Media.coverImage.color}">
                <h4>Average score</h4>
                <span>{{media.Media.averageScore}}</span>
          </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import gql from "graphql-tag";

export default {
  apollo: {
    media: {
      query: gql`
        query fetchMedia($id: Int) {
          Media(id: $id) {
            title {
              english
            }
            description
            format
            status
            episodes
            bannerImage
            coverImage {
              large
              color
            }
            popularity
            averageScore
            favourites
          }
        }
      `,
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
      update(data) {
        return data;
      },
    },
  },
  data() {
    return {
      media: null,
    };
  },
  computed:{
      animeEpiesod(){
          return this.media?.Media?.episodes || 'N/A'
      }
  }
};
</script>

<style scoped>
.coverImg {
  width: 100%;
  object-fit: cover;
  height: auto;
}
.description {
  padding-top: 1rem;
}
.data-box{
    display: flex;
    padding: 1;
    /* background-color: aqua; */
    width: 90%;
    justify-content: center;
    flex-direction: column;
    color: white;
}
@media (max-width: 576px) {
  .title {
    margin-top: 2rem;
  }
  .coverImg {
      object-position: bottom;
}
}
@media (max-width: 768px) {
  .title {
    margin-top: 2rem;
  }
  .coverImg{
      height: 70vh;
      width: 100%;
  }
}
</style>
