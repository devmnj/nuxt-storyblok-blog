<template>
  <div>
<!-- {{story}} -->
    <section class="">
      <Article :blok="story" />
    </section>
  </div>
</template>

<script>
import Article from '~/components/storyblock/Article.vue'

export default {
  components: {
     Article
  },
  data () {
    return {
      story:{content:{}}
    }
  },
  mounted () {
    // Use the input event for instant update of content
    this.$storybridge.on('input', (event) => {
      if (event.story.id === this.story.id) {
        this.story.content = event.story.content
      }
    })
    // Use the bridge to listen the events
    this.$storybridge.on(['published', 'change'], (event) => {
      // window.location.reload()
      this.$nuxt.$router.go({
        path: this.$nuxt.$router.currentRoute,
        force: true,
      })
    })
  },
  asyncData (context) {
    //  Load the JSON from the API
     let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

     return context.app.$storyapi.get(`cdn/stories/blog/${context.params.slug}`, {
       version: version
     }).then((res) => {
       return res.data
 }).catch((res) => {
   if (!res.response) {
         console.error(res)
         context.error({ statusCode: 404, message: 'Failed to receive content form api' })
       } else {
         console.error(res.response.data)
         context.error({ statusCode: res.response.status, message: res.response.data })
   }
    })
  }
};
</script>
