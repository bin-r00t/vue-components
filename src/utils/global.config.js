import SectionDynamicForm from "@/components/SectionDynamicForm.vue";
import SectionAttachmentList from "@/components/SectionAttachmentList.vue";
import SectionTable from "@/components/SectionTable.vue";

export const AvailableComponents = {
  DynamicForm: "SectionDynamicForm",
  AttachmentList: "AttachmentList",
};

export const components = {
  [AvailableComponents.DynamicForm]: SectionDynamicForm,
  [AvailableComponents.AttachmentList]: SectionAttachmentList,
  [AvailableComponents.SectionTable]: SectionTable,
};
