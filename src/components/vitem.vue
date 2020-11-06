<template>
  <div class="vitem">
   <div class="navlist" v-for="(item,index) in navlist" :key="index">
       <div :style="{backgroundColor:item.bg}"></div>
        <div>
          <span>{{item.number}}</span>
          <span>{{item.name}}</span>
        </div>
   </div>
  
  </div>
</template>

<script>
export default {
data(){
  return {
    navlist:[]
  }
},
created:function(){

},
mounted:function(){
  //发送网络请求
		this.navlist=[
			  { bg: "green", number: "150门", name: "课程设置总量" },
			  { bg: "orange", number: "70门", name: "本学期开课总量" },
			  { bg: "blue", number: "5个", name: "课程运行预警" },
			  { bg: "green", number: "20个", name: "逃课预警" },
			  { bg: "purple", number: "5个", name: "教师使用预警" },
			  { bg: "green", number: "10000点", name: "知识图谱" },
			  { bg: "orange", number: "5%", name: "精品课程" },
			  { bg: "blue", number: "23个", name: "成绩预警" },
			  { bg: "green", number: "5节", name: "学生都课概率预警" },
			  { bg: "purple", number: "1个", name: "督导评价预警" }
			]
	
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vitem{
     margin-top: 10px;
     display: flex;
     flex-direction: row;
     justify-content: space-around;
     flex-wrap: wrap;
     background-color: #cccccc;
  }
  	.navlist{
		width:18%;
		display: flex;
		height:70px;
		margin:10px;
	}
/* p:nth-of-type(2) */
/* 规定属于其父元素的第二个 p 元素的每个 p： */

  /* :nth-of-type(n) 选择器匹配属于父元素的特定类型的第 N 个子元素的每个元素. */
/* n 可以是数字、关键词或公式。 */
  	.navlist div:nth-of-type(1){
		flex: 1;
	}
	.navlist div:nth-of-type(2){
		flex: 2;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		background-color: #ffffff;
	}
</style>
