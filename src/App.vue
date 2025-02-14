<script setup>
import { ref } from "vue";
import SectionForm from "./components/SectionForm.vue";
import { AvailableComponents } from "@/utils/global.config.js";

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
  contractDetail: {
    type: "custom",
    component: AvailableComponents.DynamicForm,
    bind: {
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
              "allow-clear": true,
            },
          },
          {
            label: "合同标题",
            model: "age",
            type: "Input",
            span: 12,
            rules: [{ required: true, message: "Please input age" }],
            props: {
              placeholder: "Please input age",
              "allow-clear": true,
            },
          },
          {
            label: "合同金额",
            model: "age",
            type: "Input",
            span: 12,
            rules: [{ required: true, message: "Please input age" }],
            props: {
              placeholder: "Please input age",
              "allow-clear": true,
            },
          },
          {
            label: "实际金额",
            model: "age",
            type: "Input",
            span: 12,
            rules: [{ required: true, message: "Please input age" }],
            props: {
              placeholder: "Please input age",
              "allow-clear": true,
            },
          },
          {
            label: "已关联金额（自动计算）",
            model: "age",
            type: "Input",
            span: 12,
            rules: [{ required: true, message: "Please input age" }],
            props: {
              placeholder: "Please input age",
              "allow-clear": true,
            },
          },
          {
            label: "部门名称",
            model: "age",
            type: "Input",
            span: 12,
            rules: [{ required: true, message: "Please input age" }],
            props: {
              placeholder: "Please input age",
              "allow-clear": true,
            },
          },
          {
            label: "签订日期",
            model: "age",
            type: "Input",
            span: 12,
            rules: [{ required: true, message: "Please input age" }],
            props: {
              placeholder: "Please input age",
              "allow-clear": true,
            },
          },
          {
            label: "合同甲方主体",
            model: "email",
            type: "Input",
            span: 12,
            rules: [{ type: "email", message: "Email is not valid" }],
            props: {
              placeholder: "Please input email",
              "allow-clear": true,
            },
            htmlProps: {
              type: "email",
            },
          },
          {
            label: "合同乙方主体",
            model: "age",
            type: "Input",
            span: 12,
            rules: [{ required: true, message: "Please input age" }],
            props: {
              placeholder: "Please input age",
              "allow-clear": true,
            },
          },
          {
            label: "关联项目",
            model: "age",
            type: "Input",
            span: 12,
            rules: [{ required: true, message: "Please input age" }],
            props: {
              placeholder: "Please input age",
              "allow-clear": true,
            },
          },
        ],
      },
    },
  },
  relatedContractList: {
    type: "custom",
    component: AvailableComponents.SectionTable,
  },
  attachmentList: {
    type: "custom",
    component: AvailableComponents.AttachmentList,
  },
});
</script>

<template>
  <SectionForm :schema="schema" />
</template>
