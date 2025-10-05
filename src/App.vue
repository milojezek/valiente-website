<template>
  <CommonHeader />
  <div class="page">
    <router-view />
  </div>
</template>

<script>
import CommonHeader from "@components/CommonHeader.vue";

export default {
  name: "App",
  components: {
    CommonHeader,
  },
};
</script>
