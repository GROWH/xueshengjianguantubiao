<template>
 <div id="error">
  </div>
</template>

<script>
// @ is an alias to /src

var Highcharts = require("highcharts");
export default {

  data() {
    return {
      error: [
        {
          day: "01",
          number: 20
        },
        {
          day: "02",
          number: 16
        },
        {
          day: "03",
          number: 40
        },
        {
          day: "04",
          number: 15
        },
        {
          day: "05",
          number: 30
        },
        {
          day: "06",
          number: 90
        }
      ]
    }
},
 created: function() {},
  mounted: function() {
    this.mian()
  },
  methods: {
   mian:function(){
				var chart = Highcharts.chart('error', {
					chart: {
						type: 'area'
					},
					title: {
						text: '学生近七天的违纪情况'
					},
					subtitle: {
						text: '数据来源: u就业'
					},
					xAxis: {
						categories: this.error.map(item=>{
							return item.day
						}),
						tickmarkPlacement: 'on',
						title: {
							enabled: false
						}
					},
					yAxis: {
						title: {
							text: '个数'
						},
						labels: {
							formatter: function () {
								return this.value;
							}
						}
					},
					tooltip: {
						split: true,
						valueSuffix: ' 个'
					},
					plotOptions: {
						area: {
							stacking: 'normal',
							lineColor: '#666666',
							lineWidth: 1,
							marker: {
								lineWidth: 1,
								lineColor: '#666666'
							}
						}
					},
					series: [{
						name: '总量',
						data: this.error.map(item=>{
							return item.number
						})
					}]
				});
			}
}
}
</script>
<style>
#error{
			background: #CCCCCC;
			height:500px;
			margin:10px;
    }  
      
</style>