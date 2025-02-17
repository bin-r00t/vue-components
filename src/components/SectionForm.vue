<script setup>
import { inject, onMounted, onUpdated, provide, ref } from "vue";
import SectionTabs from "./SectionTabs.vue";
import SectionItem from "./SectionItem.vue";
import axios from "axios";
import dayjs from "dayjs";

const props = defineProps({
  schema: {
    type: Object,
    required: true,
  },
  initialUrl: {
    type: String,
    required: false,
  },
  createUrl: {
    type: String,
    required: false,
  },
  updateUrl: {
    type: String,
  },
});

const loading = ref(false);
const formRef = ref(null);
const formModel = ref({});
initFormModel();
/** 初始化formModel的字段 */
function initFormModel() {
  props.schema.sections.forEach((sec) => {
    if (props.schema[sec.ref].type === "form") {
      // formModel.value[sec.ref + "Form"] = {};
      formModel.value = { id: null };
      props.schema[sec.ref].bind.schema.children.forEach((child) => {
        formModel.value[child.model] = undefined;
        if (child.type === "select" && child.props.multiple) {
          formModel.value[child.model] = [];
        }
      });
    }
  });
}

const token =
  "e01c7019cf8976d410215e559a86a4afda89b460ec7e68221b4877998b72a66e52a3540af187e8125ebe002faf4795b2780ba54ebca4a3c3172c6cc0a4ecd9bf409dfcffb6f4eafaae3a68242ddf552226710dbc0fe953907562f43d5c07552eaf1a972645a62fd7a227881395dfe153edfc26b4c896c3d16c46cd7a46685c70";

onMounted(() => {
  if (props.initialUrl) {
    axios(props.initialUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      const formData = res.data.data;
      Object.keys(formModel.value).forEach((key) => {
        if (key === "dealTime") {
          formModel.value[key] = dayjs(formData[key]);
        } else {
          formModel.value[key] = formData[key];
        }
      });
    });
  }
});

async function onSubmit() {
  await formRef.value.validate(props.schema.needsValidate);
  axios(props.createUrl, {
    method: "POST",
    data: { data: formModel.value },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
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
    <a-form
      :model="formModel"
      ref="formRef"
      :loading="loading"
      layout="vertical"
      :wrapper-col="{ span: 20 }"
      label-align="left"
      :disabled="mode === 'readOnly'"
    >
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
