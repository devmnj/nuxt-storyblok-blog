<template>
  <div
    v-editable="blok"
    class="pb-8 mb-6 font-bold text-center">
    <h3 class="text-5xl">{{ blok.title }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>
