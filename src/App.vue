<template>
	<div id="app">
		<el-container>
			<el-header>
				<Header></Header>
			</el-header>
			<el-main></el-main>
			<el-footer></el-footer>
		</el-container>
	</div>
</template>

<script>
import Header from './components/Header.vue';

export default {
	name: 'App',
	components: {
		Header
	}
};
</script>

<style lang="stylus">
#app
	font-family Avenir Helvetica Arial sans-serif
	-webkit-font-smoothing antialiased
	-moz-osx-font-smoothing grayscale
	text-align center
	color #2c3e50

#nav
	padding	30px

#nav a
	font-weight bold
	color #2c3e50

#nav a.router-link-exact-active
	color #42b983
</style>
