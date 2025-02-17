<script setup>
import { Modal } from "ant-design-vue";

const props = defineProps({
  columns: {
    type: Array,
    required: true,
  },
  dataSource: {
    type: Array,
    required: true,
  },
  addButtonText: {
    type: String,
  },
  actions: {
    type: Array,
    required: true,
  },
});

const handleShowAdd = () => {
  console.log("[TODO] handleAdd");
};

const handleAction = (action, record) => {
  if (action.confirm) {
    Modal.confirm({
      title: "提示",
      content: `确定要${action.label}吗？`,
      okText: "确定",
      cancelText: "取消",
      onOk: () => {
        console.log("[TODO] handleAction", action, record);
      },
    });
  } else {
    console.log("[TODO] handleAction", action, record);
  }
};
</script>

<template>
  <div class="section-table relative">
    <div
      v-if="addButtonText"
      class="section-table__header absolute -top-10 right-0"
    >
      <a-button @click="handleShowAdd">{{ addButtonText }}</a-button>
    </div>
    <a-row>
      <a-col :span="24">
        <a-table
          style="border-radius: unset"
          :columns="columns"
          :dataSource="dataSource"
          row-key="id"
          row-class-name="section-table__row"
          :pagination="false"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.dataIndex === 'action'">
              <a-button
                v-for="action in actions"
                :key="action.label"
                type="link"
                :danger="action.type === 'danger'"
                style="padding-left: 0"
                @click="handleAction(action, record)"
                >{{ action.label }}</a-button
              >
            </template>
          </template>
        </a-table>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>
.-top-10 {
  top: -40px;
}

.right-0 {
  right: 0;
}
</style>
