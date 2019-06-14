<template>
    <div>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="pages"
        :current-page="current"
        @current-change="changePage"
      >
      </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "page",
      data(){
          return {
            sum_pages:100
          }
      },
      props:['pages','current'],
      methods:{
        changePage(val){
          console.log(val)
          this.$emit('funcPage',val);
        }
      }
    }
</script>

<style scoped>

</style>
