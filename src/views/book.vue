<template>
	<div class="book-box">
		<Search @search="search"></Search>
		<BookList :list="list"></BookList>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Search from "@/components/Search.vue";
import BookList from "@/components/BookList.vue";
import { getBookList, searchBookByName } from "@/api/index.ts";
import * as types from "./../types";

@Component({
	components: {
		Search,
		BookList
	}
})
export default class Book extends Vue {
  //   list: any[] = [];
	public list: object[] = [];

	public created() {
		getBookList().then((data: []) => {
			data.forEach((item: types.Obj) => {
				this.list.push({
				bid: item.bid,
				cover: item.book_cover,
				title: item.bookname,
				author: item.author_name,
				category: item.stat_name,
				tags: item.class_name,
				desc: item.introduction
				});
			});
		});
	}

	public search(keywords: string) {
		searchBookByName(keywords).then((data: types.Book) => {
			this.list = data.data;
		});
	}
}
</script>

<style lang="scss">
</style>