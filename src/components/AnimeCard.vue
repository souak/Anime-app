<template>
  <div class="card-container">
    <b-card
      :title="animeTitle"
      :img-src="mediaItem.coverImage.large"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </b-card-text>

      <b-button :to="`/anime/${mediaItem.id}`" variant="primary">Details</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  props:{
      mediaItem:{
          type: Object,
          required: true
      }
  },
  computed:{
      animeTitle(){
          //check if title isn't null
          return this.mediaItem?.title?.english || "Title not found!"
      }
  }

};
</script>

<style scoped>
    .card-container{
        display: flex;
        justify-content: center;
    }
</style>
