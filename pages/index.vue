<template>
  <div>
    
    <div class="side-scroll" @wheel="onWheel">
      <MouseFollower/>
      <!-- 横スクロールするコンテンツをここに配置 -->
      <div class="section1">Section 1<a href="page2">aaaa</a></div>
      <div class="section2">Section 2</div>
      <div class="section3">Section 3</div>
      <!-- ... -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onWheel(event) {
      const container = event.currentTarget;

      if (event.deltaY) {
        container.scrollLeft += event.deltaY;
        event.preventDefault(); // 縦スクロールの防止
      }
    },
  },
};
</script>

<style scoped>

</style>
