<template>
	<div class="search-box">
		<h2>请输入书名</h2>
		<label for="input">搜索</label>
		<input type="text" id="input" class="search-input" v-model="keywords" @keyup="search(keywords, $event.keyCode)">
	</div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";

@Component({})
export default class Search extends Vue {
	public keywords: string = "请输入关键字";

	@Emit("search")
	public search(keywords: string, keyCode: string): string | void {
    	if (keyCode === "13") {
      		return keywords;
    	}
  	}
}
</script>

<style lang="scss">
.search-input {
	display: inline-block;
	width: 300px;
	height: 30px;
	line-height: 30px;
}
</style>