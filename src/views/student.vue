<template>
 <div id="student">
  </div>
</template>

<script>
// @ is an alias to /src

var echarts = require('echarts');
export default {

 data(){
			return {
				error:[]
			}
		},
		created:function(){
			this.error=[{
					day:"01",
					number:20,
				},{
					day:"02",
					number:16,
				},{
					day:"03",
					number:40,
				},{
					day:"04",
					number:15,
				},{
					day:"05",
					number:30,
				},{
					day:"06",
					number:90,
				}]
    },
    mounted:function(){
			this.zhexian()
    },
    methods:{
      zhexian:function(){
          // 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('student'));

var option = {
  title: {
						text: '学生违纪的数量'
          },
          tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['学生违纪']
          },
          grid: {
						left: '3%',
						right: '4%',
						bottom: '10%',
						containLabel: false
					},
					toolbox: {
						feature: {
							saveAsImage: {}
						}
					},
    xAxis: {
        type: 'category',
        data: this.error.map(item=>{
          return item.day
        })
    },
    yAxis: {
        type: 'value'
    },
   series: [
						{
							name: '学生违纪',
							type: 'line',
							stack: '总量',
							data: this.error.map(item=>{
							return item.number
						})
						}
					]
};



  // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      }
    }
}
</script>
<style>
#student{
			background: #CCCCCC;
			height:500px;
			margin:10px;
    }  
      
</style>
