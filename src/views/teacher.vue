<template>
  <div id="teacher">
  
  </div>
</template>

<script>
// @ is an alias to /src


var echarts = require('echarts');
export default {

 data(){
			return {
				chengji:[]
			}
		},
		created:function(){
       this.chengji = [
      {
        k: "语文",
        j: "20"
      },
      {
        k: "数学",
        j: "60"
      },
      {
        k: "音乐",
        j: "30"
      },
      {
        k: "化学",
        j: "54"
      },
      {
        k: "英语",
        j: "67"
      },
      {
        k: "物理",
        j: "80"
      }
    ];

  
    },
    mounted:function(){
			this.zhu()
    },
    methods:{
      zhu:function(){
          // 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('teacher'));

var option = {
  title: {
						text: '学生成绩柱状图'
          },
          tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['成绩']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: this.chengji.map(item=>{
          return item.k
        })
    },
    yAxis: {
        type: 'value'
    },
    series: [ {
            name: '成绩',
            type: 'bar',
           	data: this.chengji.map(item=>{
							return item.j
						})
        },]
};

  // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      }
    }
}
</script>
<style>
#teacher{
			background: #CCCCCC;
			height:500px;
			margin:10px;
    }  
      
</style>