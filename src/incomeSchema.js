const incomeSchema = [
  {
    label: "交易时间",
    model: "dealTime",
    type: "DatePicker",
    span: 12,
    rules: [{ required: true, message: "请选择交易时间" }],
    props: {
      placeholder: "请选择交易时间",
      "allow-clear": true,
      showTime: true,
    },
  },
  {
    label: "银行流水号",
    model: "number",
    type: "Input",
    span: 12,
    rules: [{ required: true, message: "请输入银行流水号" }],
    props: {
      placeholder: "请输入银行流水号",
      "allow-clear": true,
    },
  },
  {
    label: "借",
    model: "debit",
    type: "Input",
    span: 12,
    props: {
      placeholder: "请输入借",
      "allow-clear": true,
      type: "number",
    },
    rules: [{ required: true, message: "请输入借" }],
  },
  {
    label: "贷",
    model: "credit",
    type: "Input",
    span: 12,
    props: {
      placeholder: "请输入贷",
      "allow-clear": true,
      type: "number",
    },
    rules: [{ required: true, message: "请输入贷" }],
  },
  {
    label: "用途",
    model: "purpose",
    type: "Input",
    span: 12,
    props: {
      placeholder: "请输入用途",
      "allow-clear": true,
    },
    rules: [{ required: true, message: "请输入用途" }],
  },
  {
    label: "款项性质",
    model: "paymentNature",
    type: "Input",
    span: 12,
    props: {
      placeholder: "请输入款项性质",
      "allow-clear": true,
    },
    rules: [{ required: true, message: "请输入款项性质" }],
  },
  {
    label: "NC凭证编号",
    model: "ncNumber",
    type: "Input",
    span: 12,
    props: {
      placeholder: "请输入NC凭证编号",
      "allow-clear": true,
    },
    rules: [{ required: true, message: "请输入NC凭证编号" }],
  },
  {
    label: "对方户名",
    model: "counterpartyName",
    type: "Input",
    span: 12,
    props: {
      placeholder: "请输入对方户名",
      "allow-clear": true,
    },
    rules: [{ required: true, message: "请输入对方户名" }],
  },
  {
    label: "客商编号",
    model: "merchantNumber",
    type: "Input",
    span: 12,
    props: {
      placeholder: "请输入客商编号",
      "allow-clear": true,
    },
    rules: [{ required: true, message: "请输入客商编号" }],
  },
  {
    label: "对方账号",
    model: "counterpartyAccount",
    type: "Input",
    span: 12,
    props: {
      placeholder: "请输入对方账号",
      "allow-clear": true,
    },
    rules: [{ required: true, message: "请输入对方账号" }],
  },
  {
    label: "账号",
    model: "account",
    type: "Input",
    span: 12,
    props: {
      placeholder: "请输入账号",
      "allow-clear": true,
    },
    rules: [{ required: true, message: "请输入账号" }],
  },
  {
    label: "账户名称",
    model: "accountName",
    type: "Input",
    span: 12,
    props: {
      placeholder: "请输入账户名称",
      "allow-clear": true,
    },
    rules: [{ required: true, message: "请输入账户名称" }],
  },
  {
    label: "余额",
    model: "balance",
    type: "Input",
    span: 12,
    props: {
      placeholder: "请输入余额",
      "allow-clear": true,
      type: "number",
    },
    rules: [{ required: true, message: "请输入余额" }],
  },
  {
    label: "对方开户行",
    model: "counterpartyBank",
    type: "Input",
    span: 12,
    props: {
      placeholder: "请输入对方开户行",
      "allow-clear": true,
    },
    rules: [{ required: true, message: "请输入对方开户行" }],
  },
  {
    label: "摘要",
    model: "summary",
    type: "Input",
    span: 12,
    props: {
      placeholder: "请输入摘要",
      "allow-clear": true,
    },
    rules: [{ required: true, message: "请输入摘要" }],
  },
  {
    label: "备注",
    model: "remark",
    type: "Input",
    span: 12,
    props: {
      placeholder: "请输入备注",
      "allow-clear": true,
    },
    rules: [{ required: true, message: "请输入备注" }],
  },
  {
    label: "关联项目",
    model: "associatedItem",
    type: "Input",
    span: 12,
    props: {
      placeholder: "请输入关联项目",
      "allow-clear": true,
    },
    rules: [{ required: true, message: "请输入关联项目" }],
  },
  {
    label: "流水拆分",
    model: "flowSplit",
    type: "Input",
    span: 12,
    props: {
      placeholder: "请输入流水拆分",
      "allow-clear": true,
    },
    rules: [{ required: true, message: "请输入流水拆分" }],
  },
];

const needsValidate = [
  "dealTime", // 交易时间
  "number", // 银行流水号
  "debit", // 借
  "credit", // 贷
  "purpose", // 用途
  "paymentNature", // 款项性质
  "ncNumber", // NC凭证编号
  "counterpartyName", // 对方户名
  "merchantNumber", // 客商编号
  "counterpartyAccount", // 对方账号
  "account", // 账号
  "accountName", // 账户名称
  "balance", // 余额
  "counterpartyBank", // 对方开户行
  "summary", // 摘要
  "remark", // 备注
  "associatedItem", // 关联项目
  "flowSplit", // 流水拆分
];

export default {
  incomeSchema,
  needsValidate,
};
