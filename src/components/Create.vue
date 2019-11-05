<template>
    <div>
        <input placeholder="글쓴이" v-model="writer"> <br>
        <input placeholder="제목" v-model="title"> <br>
        <textarea placeholder="내용" v-model="content"></textarea> <br>
        <button @click="write">저장</button>
    </div>
</template>

<script>
    import data from '@/data'

    export default {
        name: "Create",
        data() {
            return {
                data: data,
                writer: "",
                title: "",
                content: ""
            }
        },
        methods: {
            write() {
                this.data.push(
                    {
                        writer: this.writer,
                        title: this.title,
                        content: this.content
                    }
                );

                this.$router.push({
                    path: '/'
                })
            }
        }
    }
</script>

<style scoped>

</style>