<template>
    <div>
      <div class="header">
      文本编辑
      </div>
        <quill-editor
          v-model="content"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
          @change="onEditorChange($event)">
        </quill-editor>
      <div class="submit_btn">
        <button type="button" class="el-button el-button--primary" v-on:click="saveHtml"><!----><!----><span >提交</span></button></div>
    </div>
</template>

<script>
    export default {
        name: "editPage",
      data(){
          return {
            content:'',
            editorOption: {
              //使用哪种主题就写哪个。默认是snow主题的。
              theme:'snow'
            }
          }
      },
      methods:{
        onEditorBlur(){}, // 失去焦点事件
        onEditorFocus(){}, // 获得焦点事件
        onEditorChange(){}, // 内容改变事件
        saveHtml:function(event){
          alert(this.content);
        }
      }
    }
</script>

<style scoped>
  .quill-editor{
    height: 350px;
  }
  button{
    margin-top: 150px;
    margin-left: 50%;
  }
</style>
