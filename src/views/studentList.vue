<template>
  <!-- 学生列表展示区域 -->
  <div class="student-list content" id="student-list">
    <system-search></system-search>
    <system-tabel></system-tabel>
    <turn-page></turn-page>
    <transition>
      <show-modal v-if="$store.state.showModal"></show-modal>
    </transition>
  </div>
</template>

<script>
import systemSearch from "../components/list/systemSearch";
import systemTabel from "../components/list/systemTabel";
import turnPage from "../components/list/turnPage";
import showModal from "../components/list/showModal";
export default {
  components: {
    systemSearch,
    systemTabel,
    turnPage,
    showModal
  }
};
</script>

<style>
.v-enter,
.v-leave-to {
  top: -100%;
  height: 0;
  opacity: 0;
}
.v-enter-to,
.v-leave {
  top: 0;
  height: 100%;
  opacity: 1;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}
</style>