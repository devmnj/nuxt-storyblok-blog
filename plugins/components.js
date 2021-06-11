import Vue from 'vue'
import Page from '~/components/storyblock/Page.vue'
// import Teaser from '~/components/storyblock/Teaser.vue'
// import Grid from '~/components/storyblock/Grid.vue'
// import Feature from '~/components/storyblock/Feature.vue'
import ArticleTeaser from '~/components/storyblock/ArticleTeaser.vue'
import MiniArticleTeaser from '~/components/storyblock/MiniArticleTeaser.vue'
import ContentHolder from '~/components/ContentHolder.vue'
import FeaturedPost from '~/components/FeaturedPost.vue'
import PostCard from '~/components/PostCard.vue'
import Staticpost from '~/components/storyblock/Staticpost.vue'

Vue.component('page', Page)
// Vue.component('teaser', Teaser)
// Vue.component('grid', Grid)
// Vue.component('feature', Feature)
Vue.component('article-teaser', ArticleTeaser)
Vue.component('mini-article-teaser', MiniArticleTeaser)
Vue.component('content-holder', ContentHolder)
Vue.component('featured-post', FeaturedPost)
Vue.component('post-card', PostCard)
Vue.component('staticpost', Staticpost)
