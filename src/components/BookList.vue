<template>
	<div class="booklist-box">
		<ul class="booklist-ul">
			<li v-for="item in list" :key="item.bid" class="booklist-li">
				<img :src="item.cover" alt="" class="book-img">
				<h4>{{item.title}}</h4>
				<p class="book-info">【作者】{{item.author}} 【类别】{{item.category}} 【标签】{{item.tags}}</p>
				<p class="book-desc">{{item.desc}}</p>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class BookList extends Vue {
	@Prop({ type: Array }) public list!: object[];
}
</script>

<style lang="scss">
.booklist-box {
	width: 800px;
	margin: 0 auto;
	text-align: left;
	.booklist-ul {
		list-style: none;
	}
	.booklist-li {
		padding: 10px 20px 10px 130px;
		border-bottom: 1px solid #eee;
		list-style: none;
		position: relative;
		.book-img {
			position: absolute;
			top: 30px;
			left: 10px;
			width: 100px;
		}
		.book-info,
		.book-desc {
			font-size: 12px;
		}
	}
}
</style>