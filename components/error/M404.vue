<template>
  <div><section class="">
	<div class="container">
		<div class="row">	
		<div class="col-sm-12 ">
		<div class="col-sm-10 col-sm-offset-1  text-center">
		<div class="four_zero_four_bg">
			<h1 class="text-center ">404</h1>
		
		
		</div>
		
		<div class="contant_box_404">
		<h3 class="h2">
		Look like you're lost
		</h3>
		
		<p>the page you are looking for not avaible!</p>
		
		<nuxt-link  to="/" class="link_404">Go to Home</nuxt-link>
	</div>
		</div>
		</div>
		</div>
	</div>
</section></div>
</template>

<script>
export default {
 
  created() {},
  data() {
    return {home:"#"};
  },
  props: {
	  
  },
  methods: {},
};
</script>

<style lang="css" scoped>
@import url("./style.css")
</style>