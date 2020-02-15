<template>
  <!-- 左侧导航区域 -->
  <div class="left-menu">
    <dl id="menu-list">
      <dt>学生管理</dt>
      <router-link tag="dd" to="/studentList" data-id="student-list">学生列表</router-link>
      <router-link tag="dd" to="/addStudent" data-id="add-student">新增学生</router-link>
    </dl>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>