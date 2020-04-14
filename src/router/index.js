import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
	{
		path: "/home",
		name: "home",
		component: () =>
			import(/* webpackChunkName: "home" */ "../views/Home/Index.vue"),
		meta: {
			title: "鲁班"
		}
	},
	{
		path: "/login",
		name: "login",
		component: () =>
			import(/*webpackChunkName:"login"*/ "../views/Login/Index.vue"),
		meta: {
			title: "登录"
		}
	},
	{
		path: "/reset",
		name: "reset",
		component: () =>
			import(/*webpackChunName:"reset"*/ "../views/Login/Reset.vue"),
		meta: {
			title: "重置密码"
		}
	}
];

const router = new VueRouter({
	routes
});

router.afterEach(to => {
	document.title = to.meta.title;
});

export default router;
