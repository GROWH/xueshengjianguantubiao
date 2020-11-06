<template>
  <div class="index">
    <div class="left">
      <p>学生违纪</p>
    </div>
    <div class="right">
      <p>学生成绩</p>
    </div>
  </div>
</template>

<script>
const d3 = require("d3");
// @ is an alias to /src

export default {
  data() {
    return {
      error: [],
      chengji: []
    };
  },
  created: function() {
    // 发送网络请求
    // setTimeout(() => {
    this.error = [
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
    ];
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

    // }, 2000);
  },
  mounted: function() {
    // console.log(d3);
    // 操作dom节点
    this.mianji()//画面积图
    this.bing(); //画饼状图
  },
  methods: {
    mianji: function() {
      var width = 600,
        height = 400; //设置svg的宽和高
      var margin = { top: 30, right: 30, bottom: 30, left: 30 }; //设置图表距离svg元素的距离
      var g_width = width - margin.left - margin.right; //g元素(图表的宽度)
      var g_height = height - margin.top - margin.bottom; //g 元素的高

      //设置svg元素用来放在整个图表
      var svg = d3
        .select(".left")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

      //设置一个g元素用来放置整个图表，并设置位移(设置这个的目的为了能让坐标系显示出来)，g元素是不能有宽高属性的，里面的子元素什么样子，g元素就是什么样子。
      var g = svg
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      //设置x轴比例尺（序数比例尺）
      var scaleX = d3
        .scaleBand()
        .domain(
          this.error.map(item => {
            return item.day;
          })
        )
        .rangeRound([0, g_width]);

      //设置y轴比例尺(线性比例尺)
      let num = this.error.map(item => {
        return item.number;
      });
      let max = d3.max(num);

      var scaleY = d3
        .scaleLinear()
        .domain([0, max])
        .range([g_height, 0]);

      //区域生成器
      //使用面生成器生成区域
      var area_gen = d3
        .area()
        .x(function(item, index) {
          return scaleX(item.day) + scaleX.bandwidth() / 2;
        })
        .y(function(item) {
          return scaleY(item.number);
        })
        .y0(g_height)
        .y1(function(item) {
          return scaleY(item.number);
        });
      g.append("path")
        .attr("d", area_gen(this.error))
        .style("fill", "blue");
      // 加上違紀量
      g.selectAll("text")
        .data(this.error)
        .enter()
        .append("text")
        .html(item => {
          return item.number;
        })
        .attr("x", item => {
          return scaleX(item.day) + scaleX.bandwidth() / 2;
        })
        .attr("y", item => {
          return scaleY(item.number);
        })
        .attr("font-size", "12px")
        .attr("fill", "red");

      //生成坐标轴
      var axisX = d3.axisBottom().scale(scaleX);
      var axisY = d3.axisLeft().scale(scaleY);

      g.append("g")
        .call(axisX)
        .attr("transform", "translate(0," + g_height + ")");
      g.append("g").call(axisY);
    },
    bing: function() {
      var width = 600,height = 400; //设置svg的宽和高

      var margin = { top: 30, right: 30, bottom: 30, left: 30 }; //设置图表距离svg元素的距离
      //设置svg元素用来放在整个图表
      var svg = d3.select(".right").append("svg")
        .attr("width", width)
        .attr("height", height)
        // console.log(svg)
      
 
      //设置元素
      var g = svg.append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")


      //画图
      let arc = d3
        .arc()
        .innerRadius(0)
        .outerRadius(200);
      //饼状角度生成器
      var angle = d3.pie().value(function(item) {
        return item.j;
      });
      //颜色生成器
      var color = d3.schemeCategory10;
      // console.log(color)
      //生成饼状图
      g.selectAll("path")
        .data(angle(this.chengji))
        .enter()
        .append("path")
        .attr("d", arc)
        .attr("fill", function(data, i) {
          return color[i];
        });

      //往饼状图写字
      g.selectAll("text")
        .data(angle(this.chengji))
        .enter()
        .append("text")
        .text(function(item) {
          return item.data.k + ":" + item.data.j;
        })
        .attr("transform", function(d) {
          return "translate(" + arc.centroid(d) + ")";
        });
    }
  },

  components: {}
};
</script>
<style  scoped>
.index {
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 500px;
  /* margin-bottom: 75px; */
}
.index div {
  width: 49%;
  background-color: #cccccc;
}
.index p {
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-bottom: 3px solid #ffffff;
}
</style>
