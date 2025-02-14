<script setup>
import { components } from "@/utils/global.config.js";

const props = defineProps({
  cfg: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

console.log("cfg", props.cfg);
</script>

<template>
  <div class="section-item">
    <h1>{{ title }}</h1>
    <component :is="components[cfg.component]" v-bind="cfg.bind" />
  </div>
</template>

<style scoped>
.section-item {
  padding: 12px;
}

.section-item h1 {
  position: relative;
  font-size: 16px;
  line-height: 24px;
  vertical-align: middle;
  margin-bottom: 12px;
}

.section-item h1::before {
  content: "";
  position: absolute;
  left: -13px;
  top: 0;
  border-radius: 2px;
  width: 4px;
  height: 80%;
  transform: translateY(16%);
  background-color: #3234ca;
}
</style>
