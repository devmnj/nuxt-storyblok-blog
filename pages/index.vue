<template>
  <div>
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    />
    <!-- <content-holder >

      <template v-slot:thumbnail>
        <img
            src="https://images.pexels.com/photos/7988209/pexels-photo-7988209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="_"
            class="rounded-lg object-cover object-center"
            style="width: 588px; height: 420px"
        />
      </template>

      <template v-slot:title>
        <h2
          class="font-display text-3xl font-blue  text-secondary-500   lg:text-3xl tracking-wide text-center mt-4 lg:leading-tight md:text-left"
        >
Philosophy
        </h2>
      </template>
      <template v-slot:content>
        <p class="pb-6 leading-relaxed">
Non do quis excepteur pariatur mollit veniam nulla anim aute duis minim. Id nulla cupidatat ea voluptate ullamco id proident magna ullamco adipisicing aute. Aute amet culpa id pariatur nostrud consectetur. Quis in exercitation nisi in quis excepteur sint veniam laboris magna duis labore.
        </p>
      </template>

    </content-holder> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      story: { content: {} },
    };
  },
  mounted() {
    // Use the input event for instant update of content
    this.$storybridge.on("input", (event) => {
      if (event.story.id === this.story.id) {
        this.story.content = event.story.content;
      }
    });
    // Use the bridge to listen the events
    this.$storybridge.on(["published", "change"], (event) => {
      // window.location.reload()
      this.$nuxt.$router.go({
        path: this.$nuxt.$router.currentRoute,
        force: true,
      });
    });
  },
  // async fetch(context) {
  //   // Loading reference data - Articles in our case
  //   if (context.store.state.articles.loaded !== "1") {
  //     let articlesRefRes = await context.app.$storyapi.get(`cdn/stories/`, {
  //       starts_with: "blog/",
  //       version: "draft",
  //     });
  //     context.store.commit("articles/setArticles", articlesRefRes.data.stories);
  //     context.store.commit("articles/setLoaded", "1");
  //   }
  //   // if (context.store.state.siteconfigs.loaded !== "1") {
  //   //   let configsRefRes = await context.app.$storyapi.get(`cdn/stories/`, {
  //   //     starts_with: "siteconfigs/",
  //   //     version: "draft",
  //   //   });
  //   //   context.store.commit("siteconfigs/setConfigs", configsRefRes.data.stories);
  //   //   context.store.commit("siteconfigs/setLoaded", "1");
  //   // }
  // },

  asyncData(context) {
    // // This what would we do in real project
    // const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    // const fullSlug = (context.route.path == '/' || context.route.path == '') ? 'home' : context.route.path

    // Load the JSON from the API - loadig the home content (index page)
    return context.app.$storyapi
      .get("cdn/stories/home", {
        version: "draft",
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

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
