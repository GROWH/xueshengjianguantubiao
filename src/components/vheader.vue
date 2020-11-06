<template>
<div class="vheader">
  <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="index">首页</el-menu-item>
  <el-menu-item index="student">学生数据</el-menu-item>
  <el-menu-item index="teacher">教师数据</el-menu-item>
  <el-menu-item index="class">教室数据</el-menu-item>
  <el-menu-item index="error">违纪数据</el-menu-item>
 
</el-menu>
</div>
</template>

<script>
export default {
 data() {
      return {

        activeIndex2: 'index'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
        this.$router.push({name:key})
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
