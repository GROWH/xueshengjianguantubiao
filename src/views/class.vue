<template>
  <div id="class">
    <div id="left"></div>
    <div id="right"></div>
  </div>
</template>

<script>
// @ is an alias to /src

var Highcharts = require("highcharts");
// require('highcharts/modules/exporting')(Highcharts);

export default {
  data() {
    return {
      chengji: [
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
      ],
      error: [
        {
          day: "周一",
          number: 20
        },
        {
          day: "周二",
          number: 16
        },
        {
          day: "周三",
          number: 40
        },
        {
          day: "周四",
          number: 15
        },
        {
          day: "周五",
          number: 30
        }
      ]
    };
  },
  created: function() {},
  mounted: function() {
    this.bing();
    this.mian();
  },
  methods: {
    bing: function() {
      let data = this.chengji.map(item => {
        return { name: item.k, y: parseFloat(item.j) };
      });

      Highcharts.chart("left", {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie"
        },
        title: {
          text: "学生成绩各科的比例"
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.y}分</b>"
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              format: "<b>{point.name}</b>: {point.percentage:.1f} %",
              style: {
                color:
                  (Highcharts.theme && Highcharts.theme.contrastTextColor) ||
                  "black"
              }
            }
          }
        },
        series: [
          {
            name: "成绩",
            colorByPoint: true,
            data: data
          }
        ]
      });
    },
    mian:function(){
      var chart = Highcharts.chart('right', {
	chart: {
		type: 'areaspline'
	},
	title: {
		text: '学生近七天的违纪情况曲线面积图'
	},
	legend: {
		layout: 'vertical',
		align: 'left',
		verticalAlign: 'top',
		x: 150,
		y: 100,
		floating: true,
		borderWidth: 1,
		backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
	},
	xAxis: {
		categories: this.error.map(item=>{
							return item.day
						}),
		plotBands: [{ // 标识出周末
			from: 4.5,
			to: 6.5,
			color: 'rgba(68, 170, 213, .2)'
		}]
	},
	yAxis: {
		title: {
			text: '违纪 个数'
		}
	},
	tooltip: {
		shared: true,
		valueSuffix: '个'
	},
	plotOptions: {
		areaspline: {
			fillOpacity: 0.5
		}
	},
	series: [{
		name: '小张',
		data:this.error.map(item=>{
							return item.number
						})
	}]
});
    }
  }
};
</script>
<style>
#class {
  display: flex;
  justify-content: space-around;
  margin: 10px;
  background-color: #ccc;
}
#class div {
  height: 500px;
  width: 49%;
  background-color: #ccc;
}
</style>
