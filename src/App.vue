<script setup>
import DynamicForm from "./components/DynamicForm.vue";
import { ref } from "vue";

const schema = ref({
  name: "testForm",
  children: [
    {
      label: "name",
      model: "name",
      type: "Input",
      span: 6,
      rules: [{ required: true, message: "Please input name" }],
      props: {
        placeholder: "Please input name",
        "allow-clear": true,
      },
    },
    {
      label: "age",
      model: "age",
      type: "Input",
      span: 6,
      rules: [{ required: true, message: "Please input age" }],
      props: {
        placeholder: "Please input age",
        "allow-clear": true,
      },
    },
    {
      label: "email",
      model: "email",
      type: "Input",
      span: 6,
      rules: [{ type: "email", message: "Email is not valid" }],
      props: {
        placeholder: "Please input email",
        "allow-clear": true,
      },
      htmlProps: {
        type: "email",
      },
    },
  ],
});
</script>

<template>
  <DynamicForm :schema="schema" />
</template>
