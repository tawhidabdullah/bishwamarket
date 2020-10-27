export const PersonalDetailFormProps = [
  {
    id: "pd1",
    sizes: {
      md: 6,
      // sm: 12,
      // xs: 12,
    },
    customStyle: { label: { "font-weight": "bold" } },
    label: "First Name",
    type: "text",
    name: "firstName",
    isSelect: false,
    isCheckbox: false,
    placeholder: "Enter Your Name",
  },

  {
    id: "pd2",
    sizes: {
      md: 6,
      // sm: 12,
      // xs: 12,
    },
    customStyle: { label: { "font-weight": "bold" } },
    label: "Last Name",
    type: "text",
    name: "lastName",
    isSelect: false,
    isCheckbox: false,
    placeholder: "Last Name",
  },

  {
    id: "pd3",
    sizes: {
      md: 6,
      // sm: 12,
      // xs: 12,
    },
    customStyle: { label: { "font-weight": "bold" } },
    label: "Phone Number",
    type: "text",
    name: "phone",
    isSelect: false,
    isCheckbox: false,
    placeholder: "Enter Your Number",
  },

  {
    id: "pd4",
    sizes: {
      md: 6,
      // sm: 12,
      // xs: 12,
    },
    customStyle: { label: { "font-weight": "bold" } },
    label: "Email",
    type: "email",
    name: "email",
    isSelect: false,
    isCheckbox: false,
    placeholder: "Email",
  },

  {
    id: "pd5",
    sizes: {
      md: 12,
      // sm: 12,
      // xs: 12,
      rows: 6,
    },
    customStyle: { label: { "font-weight": "bold" } },
    label: "Write Your Message",
    // type: "text",
    name: "country",
    isTextarea: true,
    placeholder: "Write Your Message",
    content: "Write Your Message",
  },
];
