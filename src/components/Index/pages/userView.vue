<template>
    <div>
      <div class="header">
      用户分布
      </div>
      <div id="myChart" :style="{width: '100%', height: '450px'}"></div>
    </div>
</template>

<script>
    export default {
        name: "userView",
        data(){
          return{

          }
      },
      mounted(){
        this.drawLine();
      },
      methods: {
        drawLine(){
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('myChart'))
          // 绘制图表
          myChart.setOption({
            title: {
              text: '用户分布信息',
              left:'center'
            },
            tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              left: '15%',
              data: ['北京','河南','天津','上海','重庆']
            },
            series : [
              {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                  {value:335, name:'北京'},
                  {value:310, name:'天津'},
                  {value:234, name:'河南'},
                  {value:135, name:'上海'},
                  {value:1548, name:'重庆'}
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          });
        }
      }
    }
</script>

<style scoped>

</style>
