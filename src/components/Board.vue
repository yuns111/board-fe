<template>
	<div>
		<b-table striped hover :items="items" :fields="fields" @row-clicked="rowClicked"></b-table>
		<b-button @click="writeContent">글쓰기</b-button>
	</div>
</template>

<script>
	import data from '@/data'

	export default {
		name: "Board",
		data() {
			let items = data.Content.sort((a, b) => {
				return b.content_id - a.content_id
			});
			items = items.map(contentItem => {
				return {...contentItem, user_name: data.User.filter(userItem => userItem.user_id === contentItem.user_id)[0].name}
			});

			return {
				items: items,
				fields: [
					{
						key: 'content_id',
						label: '글번호'
					},
					{
						key: 'title',
						label: '제목'
					},
					{
						key: 'user_name',
						label: '작성자'
					},
					{
						key: 'created_at',
						label: '작성일'
					}
				]
			}
		},
		methods: {
			rowClicked(item, index, e) {
				this.$router.push({
					path: `/board/free/detail/${item.content_id}`
				})
			},
			writeContent() {
				this.$router.push({
					path: '/board/free/create'
				})
			}
		}
	}
</script>

<style scoped>

</style>