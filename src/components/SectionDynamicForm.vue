<script setup>
import { ref, watchPostEffect, computed, inject, onUpdated } from "vue";
import { Input, Select, DatePicker } from "ant-design-vue";
const components = {
  Input,
  Select,
  DatePicker,
};

const props = defineProps({
  schema: {
    type: Object,
    required: true,
  },
});

const form = inject("form");

console.log("injected form", form);
// const form = ref();
// const formData = ref({});
// watchPostEffect(() => {
//   console.log("watch post effect");
//   props.schema.children.forEach((item, index) => {
//     formData.value[item.model] = undefined;
//   });
// });
// const displayForm = computed(() => Object.keys(formData.value).length > 0);

// const handleSubmit = () => {
//   console.log("handle submit");
//   console.log(formData.value);
//   form.value.validate().then((res) => {
//     console.log(res);
//   });
// };


onUpdated(() => {
  console.log('rerender..........')
})
</script>

<template>
  <div class="dynamic-form">
    <!-- <pre>
        <code>
            {{ props.schema }}
        </code>
    </pre> -->
    <a-row class="space-y-12">
      <a-col :span="cfg.span" v-for="cfg in schema.children" :key="cfg.model">
        <a-form-item :name="cfg.model" :label="cfg.label" :rules="cfg.rules">
          <component
            :is="components[cfg.type]"
            v-model:value="form.model.value[cfg.model]"
            v-bind="{ ...cfg.props, ...cfg.htmlProps }"
          />
        </a-form-item>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>
/* .space-y-12.ant-row > .ant-col {
  margin-top: 12px;
} */
</style>
