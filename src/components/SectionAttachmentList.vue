<script setup>
import { UploadOutlined, SearchOutlined } from "@ant-design/icons-vue";
import { ref, h } from "vue";

const name = ref("");
const columns = [
  {
    title: "附件细节",
    dataIndex: "detail",
  },
  {
    title: "操作",
    dataIndex: "action",
  },
];
const listData = ref([
  {
    id: 1,
    filename: "工作量确认表.pdf",
    filetype: "pdf",
    uploadTime: "2024-12-20 11:33:00",
    uploader: "张三",
  },
  {
    id: 2,
    filename:
      "投行业务总部（一）关于申请2022年项目计提培育奖、协同奖的请示.doc",
    filetype: "doc",
    uploadTime: "2024-12-20 11:33:00",
    uploader: "张三",
  },
  {
    id: 3,
    filename: "奖金金额明细.xlsx",
    filetype: "xlsx",
    uploadTime: "2024-12-20 11:33:00",
    uploader: "张三",
  },
]);
</script>

<template>
  <div class="section-attachment-list">
    <a-row style="position: relative">
      <a-col :span="8">
        <a-input v-model="name" placeholder="搜索附件名称">
          <template #suffix>
            <SearchOutlined style="color: rgba(0, 0, 0, 0.45)" />
          </template>
        </a-input>
      </a-col>
      <a-button style="position: absolute; right: 0" :icon="h(UploadOutlined)"
        >上传</a-button
      >
    </a-row>
    <a-row style="margin-top: 12px">
      <a-col :span="24">
        <a-table
          style="border-radius: unset"
          :columns="columns"
          :dataSource="listData"
          :show-header="false"
          row-key="id"
          row-class-name="attachment-list-row"
          :pagination="{
            total: 3,
            pageSize: 5,
          }"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.dataIndex === 'detail'">
              <div style="display: flex; flex-direction: column; gap: 6px">
                <span style="color: #15181d; font-weight: 500">{{
                  record.filename
                }}</span>
                <div style="display: flex; gap: 6px">
                  <span style="color: #6f7686">{{ record.uploadTime }}</span>
                  <span
                    style="height: 20px; width: 1px; background: #ccc"
                  ></span>
                  <span style="color: #6f7686">{{ record.uploader }}</span>
                </div>
              </div>
            </template>
            <template v-if="column.dataIndex === 'action'">
              <div style="display: flex; justify-content: flex-end">
                <a-button type="link" @click="handleDelete(record)"
                  >预览</a-button
                >
                <a-button type="link" @click="handleDelete(record)"
                  >下载</a-button
                >
                <a-button type="link" @click="handleDelete(record)" danger
                  >删除</a-button
                >
              </div>
            </template>
          </template>
        </a-table>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>
.attachment-list-row > .ant-table-cell {
  border-radius: 0;
}

.attachment-list-row > .ant-table-cell-hover {
  border-radius: 0;
}
</style>
