<script setup>
import { provide, ref } from "vue";
import SectionForm from "./components/SectionForm.vue";
import { AvailableComponents } from "@/utils/global.config.js";
import incomeSchema from "./incomeSchema";

const schema = ref({
  name: "sectionForm",
  sections: [
    {
      label: "合同详情",
      ref: "contractDetail",
      type: "json",
      id: 1,
    },
    {
      label: "关联合同列表",
      ref: "relatedContractList",
      type: "table",
      id: 3,
    },
    {
      label: "附件列表",
      ref: "attachmentList",
      type: "files",
      id: 2,
    },
  ],
  needsValidate: incomeSchema.needsValidate,
  urls: {
    add: "http://localhost:1337/api/incomes",
    update: "http://localhost:1337/api/incomes",
    delete: "http://localhost:1337/api/incomes",
    disconnect: "http://localhost:1337/api/incomes",
  },
  contractDetail: {
    type: "form",
    component: AvailableComponents.DynamicForm,
    bind: {
      schema: {
        name: "testForm",
        children: incomeSchema.incomeSchema,
      },
    },
  },
  relatedContractList: {
    type: "custom",
    component: AvailableComponents.SectionTable,
    bind: {
      addButtonText: "新增关联合同",
      addForm: {
        schema: {
          name: "testForm",
          children: [
            {
              label: "合同编号",
              model: "name",
              type: "Input",
              span: 12,
              rules: [{ required: true, message: "Please input name" }],
              props: {
                placeholder: "Please input name",
              },
            },
            {
              label: "合同标题",
              model: "age",
              type: "Input",
              span: 12,
            },
          ],
        },
      },
      actions: [
        {
          label: "删除",
          type: "danger",
          action: "delete", // 关联urls, urls.delete
          confirm: true,
        },
        {
          label: "取消关联",
          type: "default",
          action: "disconnect", // 关联urls, urls.disconnect
          confirm: true,
        },
      ],
      columns: [
        {
          title: "合同编号",
          dataIndex: "name",
        },
        {
          title: "合同标题",
          dataIndex: "age",
        },
        {
          title: "操作",
          dataIndex: "action",
          width: 180,
        },
      ],
      dataSource: [
        {
          id: 1,
          name: "合同编号",
        },
      ],
    },
  },
  attachmentList: {
    type: "custom",
    component: AvailableComponents.AttachmentList,
  },
});

provide("mode", 1 ? "editable" : "readOnly");

const formRef = ref(null);

function handleSubmit() {
  formRef.value.onSubmit();
}
</script>

<template>
  <SectionForm
    :schema="schema"
    ref="formRef"
    initialUrl="http://localhost:1337/api/incomes/du8nhosl1428zy0diu5373pe"
    createUrl="http://localhost:1337/api/incomes"
    updateUrl="http://localhost:1337/api/incomes/du8nhosl1428zy0diu5373pe"
  />
  <a-row style="padding: 20px 0">
    <a-col :span="24" style="text-align: right">
      <a-button type="primary" @click="handleSubmit">提交</a-button>
    </a-col>
  </a-row>
</template>
