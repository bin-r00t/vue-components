<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },
});

function moveTo(indicator, target) {
  if (typeof target === "number") {
    /** index  */
    activeTab.value = target;
    const targetWidth = tabsInfo.value[target].width;
    const targetLeft = tabsInfo.value[target].left;
    indicator.style.width = `${targetWidth}px`;
    indicator.style.transform = `translateX(${targetLeft}px)`;
  } else {
    const targetWidth = target.offsetWidth;
    const targetLeft = target.offsetLeft;
    indicator.style.width = `${targetWidth}px`;
    indicator.style.transform = `translateX(${targetLeft}px)`;
  }
}

const activeTab = ref(0);
const scrollIndicator = ref();
const tabsInfo = ref([]);
onMounted(() => {
  const scrollableTabs = document.getElementById("scrollable-tabs");
  tabsInfo.value = [];
  const tabs = scrollableTabs.querySelectorAll("li");
  tabs.forEach((tab) => {
    tabsInfo.value.push({
      width: tab.offsetWidth,
      left: tab.offsetLeft,
    });
  });

  moveTo(scrollIndicator.value, tabs[0]);
});
</script>

<template>
  <div class="section-tabs">
    <ul id="scrollable-tabs">
      <div id="scroll-indicator" ref="scrollIndicator"></div>
      <li
        v-for="(tab, index) in tabs"
        :key="tab.id"
        :id="`tab-${tab.id}`"
        :class="{ active: index === activeTab }"
      >
        <a @click="moveTo(scrollIndicator, index)">{{ tab.label }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.section-tabs {
  display: flex;
  flex-direction: column;
}

.section-tabs ul {
  margin: 8px 0;
  display: flex;
  flex-direction: row;
  position: relative;
}

.section-tabs ul li {
  list-style: none;
  padding: 0 16px;
}

.section-tabs ul li.active a {
  color: #15181d;
}

.section-tabs ul li a {
  display: inline-block;
  appearance: none;
  border: none;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  line-height: 3;
  font-size: 16px;
  color: #6f7686;
  font-weight: 500;
}

.section-tabs ul #scroll-indicator {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 32px;
  height: 4px;
  border-radius: 2px;
  background-color: #3234ca;
  transform: translateX(0);
  transition: transform 0.2s ease-in-out, width 0.2s ease-in-out;
}
</style>
