<template>
  <div>
    <div class="header">
      首页
    </div>
    <div>
      <div class="t-center">数据统计</div>
      <el-divider></el-divider>
      <div style="padding-left:10%;">
      <el-row :gutter="25">
        <el-col :span="3">
          <div class="grid-content bg-purple bg-gold bg-common">当日数据：</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple-light bg-common bg-item">
            1 <span class="gray">新增用户</span>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple-light bg-common bg-item">
            25 <span class="gray">新增订单</span>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light bg-common bg-item">
            14 <span class="gray">新增管理员</span>
          </div>
        </el-col>
      </el-row>
      <br>
      <el-row :gutter="25">
        <el-col :span="3">
          <div class="grid-content bg-purple bg-blue bg-common">总数据：</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light bg-common bg-item">
            152 <span class="gray">注册用户</span>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light bg-common bg-item">
            3000 <span class="gray">订单</span>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple-light bg-common bg-item">
            500<span class="gray">管理员</span>
          </div>
        </el-col>
      </el-row>
      </div>
    </div>
    <div id="myChart" :style="{width: '100%', height: '450px',marginTop:'50px'}">

    </div>
  </div>
</template>

<script>
  export default {
    name: "personalWork",
    data() {
      return {

      }
    },
    mounted(){
      this.drawLine();
    },
    methods:{
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: {
            text: '走势图',
            subtext: ''
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['新注册用户','新增订单', '新增管理员']
          },
          toolbox: {
            show: true,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              magicType: {type: ['line', 'bar']},
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['2019-05-20','2019-05-21','2019-05-22','2019-05-23','2019-05-24','2019-05-25','2019-05-26']
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value} °C'
            }
          },
          series: [
            {
              name:'新注册用户',
              type:'line',
              data:[11, 11, 15, 13, 12, 13, 10],
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'}
                ]
              }
            },
            {
              name:'新增订单',
              type:'line',
              data:[1, 3, 2, 5, 3, 2,8],
              markPoint: {
                data: [
                  {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'},
                  [{
                    symbol: 'none',
                    x: '90%',
                    yAxis: 'max'
                  }, {
                    symbol: 'circle',
                    label: {
                      normal: {
                        position: 'start',
                        formatter: '最大值'
                      }
                    },
                    type: 'max',
                    name: '最高点'
                  }]
                ]
              }
            },
            {
              name:'新增管理员',
              type:'line',
              data:[20, 1, 10, 5,8, 3, 15],
              markPoint: {
                data: [
                  {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'},
                  [{
                    symbol: 'none',
                    x: '90%',
                    yAxis: 'max'
                  }, {
                    symbol: 'circle',
                    label: {
                      normal: {
                        position: 'start',
                        formatter: '最大值'
                      }
                    },
                    type: 'max',
                    name: '最高点'
                  }]
                ]
              }
            }
          ]
        });
      }
    }
  }
</script>

<style scoped>
  .gray {
    color: black;
  }

  .bg-common {
    border-radius: 4px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    color: white;

  }

  .bg-gold {
    background: gold;
  }

  .bg-blue {
    background: steelblue;
  }
  .bg-item {
    background: #e5e9f2;
    color:black;
    font-weight: bold;
  }
  .bg-item span{
    font-weight: normal;
  }
</style>
