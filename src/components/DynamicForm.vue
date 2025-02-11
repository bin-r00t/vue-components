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
// computed + JSON.stringify will not work!
// const displayForm = computed(() => JSON.stringify(formData.value) !== "{}");
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
  <div
    class="dynamic-form"
    style="padding: 20px; border: 1px solid #ccc; margin: 20px"
  >
    <h1>Dynamic Form</h1>
    <pre>
        <code>
            {{ props.schema }}
        </code>
    </pre>

    <hr />
    <p>{{ displayForm }}</p>
    <p>{{ Object.keys(formData).length }}</p>
    <a-form
      v-if="displayForm"
      ref="form"
      :model="formData"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 14 }"
    >
      <a-row>
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
