<template>
	<div class="header">
		<el-row type="flex" justify class="header">
			<el-col :span="1">
				<img class="logo" src="@/assets/logo.png" />
			</el-col>
			<el-col :span="1" class="banner">
				<span>Lollipop Studio</span>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.header
  background-color #41d4b1

.logo
  width 60px

.banner


h3
  margin 40px 0 0
ul
  list-style-type none
  padding 0
li
  display inline-block
  margin 0 10px
a
  color #42b983
</style>
