import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Board from '@/components/Board'

Vue.use(Router)

export default new Router({
    routes: [
		{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		},
        {
            path: '/board/free',
            name: 'Board',
            component: Board
        }
    ],
    mode: "history"
})
