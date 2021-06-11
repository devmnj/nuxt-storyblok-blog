<template>
  <div v-editable="blok" class="prose flex-grow mx-auto">
    <h1>{{ blok.content.title }}</h1>
    <div class="font-bold flex justify-between">
      <span class="flex justify-left"
        >Date: {{ new Date(blok.published_at).toDateString() }}
      </span>
      <span >Filed Under: <span class="italic text-green-500">{{categories}}</span> </span>
      <!-- <span class="" v-for="cat in blok.content.categories" :key="cat._uid">{{cat.name}},</span> -->
    </div>
    <div class="bg-blue-50 itealic font-medium italic px-2 text-right rounded-md">
      {{ blok.content.excerpt }}
    </div>
    <div class="font-bold flex justify-between"></div>

    <p class="text-xl">
      <rich-text-renderer :document="blok.content.body" />
    </p>
    <img class="h-48 w-full mb-4 object-cover" :src="blok.content.imglink[0].link.url" />
    <span class="font-bold">Tags:Vuejs</span>
  </div>
</template>

<script>

export default {
data() {
  return {
related:[],
categories:'',
  }
},
mounted() {
this.blok.content.categories.forEach(element => {
this.categories+=element.name+","
});
},
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>
