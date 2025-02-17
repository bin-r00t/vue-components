<script setup>
import { provide, ref } from "vue";
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
      urls: {
        add: "https://jsonplaceholder.typicode.com/posts",
        update: "https://jsonplaceholder.typicode.com/posts",
        delete: "https://jsonplaceholder.typicode.com/posts",
        disconnect: "https://jsonplaceholder.typicode.com/posts",
      },
      actions: [
        {
          label: '删除',
          type: 'danger',
          action: 'delete', // 关联urls, urls.delete
          confirm: true
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

provide("mode", 1 ? "editable" :"readOnly")
</script>

<template>
  <SectionForm :schema="schema" />
</template>
