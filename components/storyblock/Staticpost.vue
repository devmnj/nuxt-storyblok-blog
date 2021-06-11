<template>
  <div v-editable="blok" class="py-2">
    <content-holder>
      <template v-slot:thumbnail v-if="blok.image[0]">
        <img
          :src="blok.image[0].link.url"
          alt="_"
          class="rounded-lg object-cover object-center"
          style="width: 588px; height: 420px"
        />
      </template>

      <template v-slot:title>
        <h2
          class="font-display text-3xl font-blue text-secondary-500 lg:text-3xl tracking-wide text-center mt-4 lg:leading-tight md:text-left"
        >
          {{ blok.title }}
        </h2>
      </template>
      <template v-slot:content>
        <p class="pb-6 leading-relaxed">
 <rich-text-renderer
      :document="blok.body"
    />
        </p>
      </template>
    </content-holder>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>
