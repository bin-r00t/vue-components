<script setup>
import { ref, watchPostEffect, computed } from "vue";
import { Input } from "ant-design-vue";
const components = {
  Input,
};

const props = defineProps({
  schema: {
    type: Object,
    required: true,
  },
});
const form = ref();
const formData = ref({});
watchPostEffect(() => {
  console.log("watch post effect");
  props.schema.children.forEach((item, index) => {
    formData.value[item.model] = undefined;
  });
});
const displayForm = computed(() => Object.keys(formData.value).length > 0);

const handleSubmit = () => {
  console.log("handle submit");
  console.log(formData.value);
  form.value.validate().then((res) => {
    console.log(res);
  });
};
</script>

<template>
  <div class="dynamic-form">
    <!-- <pre>
        <code>
            {{ props.schema }}
        </code>
    </pre> -->
    <a-form
      v-if="displayForm"
      ref="form"
      :model="formData"
      :wrapper-col="{ span: 20 }"
      label-align="left"
      layout="vertical"
    >
      <a-row class="space-y-12">
        <a-col :span="cfg.span" v-for="cfg in schema.children" :key="cfg.model">
          <a-form-item :name="cfg.model" :label="cfg.label" :rules="cfg.rules">
            <component
              :is="components[cfg.type]"
              v-model:value="formData[cfg.model]"
              v-bind="{ ...cfg.props, ...cfg.htmlProps }"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col>
          <a-button type="submit" @click="handleSubmit">submit</a-button>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>

<style scoped>
.space-y-12.ant-row > .ant-col {
  margin-top: 12px;
}
</style>
