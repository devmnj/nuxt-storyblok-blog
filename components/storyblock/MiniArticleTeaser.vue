<template>
  <div class="card">
    <content-holder :link="articleContent.full_slug">
      <template v-slot:thumbnail>
        <nuxt-link :to="articleContent.full_slug"
          ><img
            :src="articleContent.content.imglink[0].link.url"
            alt="articleContent.content.imglink[0].alt"
            class="rounded-lg object-cover object-center"
            style="width: 568px; height: 220px"
        /></nuxt-link>
      </template>

      <template v-slot:title>
        <h2
          class="font-display text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 lg:leading-tight md:text-left"
        >
          {{ articleContent.content.title }}
        </h2>
      </template>
      <template v-slot:subtitle>
        <span
          class="font-bold text-primary-500 text-sm text-center md:text-left uppercase"
          >Awesome Post</span
        >
      </template>
      <template v-slot:content>
        <p class="pb-6 leading-relaxed">
        {{articleContent.content.excerpt}}
        </p>
      </template>
      <template v-slot:link>
        <nuxt-link
         :to="articleContent.full_slug"
class="inline-block mt-8 md:mt-8 px-8 py-3 shadow font-bold text-white bg-green-500 rounded-full hover:bg-green-400 "
        >
          Read More
        </nuxt-link>
      </template>
    </content-holder>
  </div>
</template>

<script>
export default {
  props: {
    articleContent: {
      type: Object,
      required: true,
    },
    articleLink: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.article-teaser:hover {
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
}
</style>
