<script setup>
import { inject, provide, ref } from "vue";
import SectionTabs from "./SectionTabs.vue";
import SectionItem from "./SectionItem.vue";

const props = defineProps({
  schema: {
    type: Object,
    required: true,
  },
});

const formModel = ref({});
initFormModel();
/** 初始化formModel的字段 */
function initFormModel() {
  //   props.schema.sections.forEach((sec) => {
  //     formModel.value[sec.ref] = {};
  //   });
  console.log("[TODO] initFormModel");
}

function onSubmit() {
  console.log("[TODO] onSubmit");
}

function onCancel() {
  console.log("[TODO] onCancel");
}

provide("form", {
  model: formModel,
  update: (key, value) => {
    formModel.value[key] = value;
  },
});

const mode = inject("mode");

defineExpose({
  onSubmit,
  onCancel,
});
</script>

<template>
  <div class="section-form">
    <h1>SectionForm</h1>
    <SectionTabs :tabs="schema.sections" @click="handleTabChange" />
    <a-form :model="formModel" :disabled="mode === 'readOnly'">
      <div class="section-form__main">
        <SectionItem
          v-for="sec in schema.sections"
          :title="sec.label"
          :cfg="schema[sec.ref]"
        />
      </div>
    </a-form>
  </div>
</template>

<style scoped>
.section-form {
  padding: 16px;
}

.section-form__main {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
