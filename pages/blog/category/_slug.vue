<template>
  <div class="flex-grow">
    <div>
      <div>
        <!-- <section class="relative px-8 mb-8">
          <nuxt-link :to="stories[0].full_slug" v-if="stories">
            <featured-post>
              <template v-slot:thumbnail>
                <div class="h-64 sm:h-96 relative">
                  <img
                    :src="stories[0].content.imglink[0].link.url"
                    layout="fullWidth"
                    class="object-cover object-center rounded-t-lg sm:rounded-l-lg sm:rounded-t-none h-full"
                    style="height: 100%; width: 100%"
                  />
                </div>
              </template>
              <template v-slot:category> Special </template>
              <template v-slot:postdate> {{new Date(stories[0].published_at).toDateString()}}} </template>
              <template v-slot:title>
                <nuxt-link :to="stories[0].full_slug">
                  {{ stories[0].content.title }}
                </nuxt-link>
              </template>
              <template v-slot:content>
                {{ stories[0].content.excerpt }}
              </template>
            </featured-post>
          </nuxt-link>
        </section> -->
        <div>
          <div class="relative px-8 mb-12">
            <div class="max-w-screen-xl mx-auto">
              <div class="sm:grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <span v-for="article in cat_stories" :key="article._uid">
                  <post-card v-if="article.content" :article="article"> </post-card>
                  <p v-else class="px-4 py-2 text-white bg-red-700 text-center rounded">
                    This content loads on save.
                    <strong>Save the entry & reload.</strong>
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      stories: [Object],
    };
  },
  computed: {
    cat_stories() {
      // let slug = this.router.params.slug;
      let cat_st = this.stories.filter(f=>f.categories.filter(c=>c.name==='voue-store'))
      console.log(cat_st);
      return cat_st;
    },
  },
  mounted() {
    // // Use the input event for instant update of content
    // this.$storybridge.on("input", (event) => {
    //   if (event.story.id === this.story.id) {
    //     this.story.content = event.story.content;
    //   }
    // });
    // // Use the bridge to listen the events
    // this.$storybridge.on(["published", "change"], (event) => {
    //   // window.location.reload()
    //   this.$nuxt.$router.go({
    //     path: "/blog/categories",
    //     force: true,
    //   });
    // });
  },
  asyncData(context) {
    //  Load the JSON from the API
    let version = context.query._storyblok || context.isDev ? "draft" : "published";

    return context.app.$storyapi
      .get(`cdn/stories`, {
        version: version,
        starts_with: "blog/",
      })
      .then((res) => {
        return res.data;
      })
      .catch((res) => {
        if (!res.response) {
          console.error(res);
          context.error({
            statusCode: 404,
            message: "Failed to receive content form api",
          });
        } else {
          console.error(res.response.data);
          context.error({ statusCode: res.response.status, message: res.response.data });
        }
      });
  },
};
</script>
