const customStyle = { label: { "font-weight": "bold" } };

export const FormProps = [
  {
    id: "fp1",
    sizes: {
      md: 6,
      sm: 12,
      xs: 12,
    },
    customStyle,
    label: "First Name",
    type: "text",
    name: "firstName",
    isSelect: false,
    isCheckbox: false,
    placeholder: "",
  },

  {
    id: "fp2",
    sizes: {
      md: 6,
      sm: 12,
      xs: 12,
    },
    customStyle,
    label: "Last Name",
    type: "text",
    name: "lastName",
    isSelect: false,
    isCheckbox: false,
    placeholder: "",
  },

  {
    id: "fp3",
    sizes: {
      md: 6,
      sm: 12,
      xs: 12,
    },
    customStyle,
    label: "Phone",
    type: "text",
    name: "phone",
    isSelect: false,
    isCheckbox: false,
    placeholder: "",
  },

  {
    id: "fp4",
    sizes: {
      md: 6,
      sm: 12,
      xs: 12,
    },
    customStyle,
    label: "Email",
    type: "email",
    name: "email",
    isSelect: false,
    isCheckbox: false,
    placeholder: "",
  },

  {
    id: "fp5",
    sizes: {
      md: 12,
      sm: 12,
      xs: 12,
    },
    customStyle,
    label: "Country",
    // type: "text",
    name: "country",
    isSelect: true,
  },

  {
    id: "fp6",
    sizes: {
      md: 12,
      sm: 12,
      xs: 12,
    },
    customStyle,
    label: "Address",
    type: "text",
    name: "address",
    isSelect: false,
    isCheckbox: false,
    placeholder: "Street address",
  },

  {
    id: "fp7",
    sizes: {
      md: 12,
      sm: 12,
      xs: 12,
    },
    customStyle,
    label: "City",
    type: "text",
    name: "city",
    isSelect: false,
    isCheckbox: false,
    placeholder: "",
  },

  {
    id: "fp8",
    sizes: {
      md: 12,
      sm: 12,
      xs: 12,
    },
    customStyle,
    label: "Delivery Area",
    type: "text",
    name: "deliveryArea",
    isSelect: false,
    isCheckbox: false,
    placeholder: "",
  },

  {
    id: "fp9",
    sizes: {
      md: 12,
      sm: 12,
      xs: 12,
    },
    customStyle,
    label: "Postal Code",
    type: "text",
    name: "postalCode",
    isSelect: false,
    isCheckbox: false,
    placeholder: "",
  },

  {
    id: "fp10",
    sizes: {
      md: 12,
      sm: 12,
      xs: 12,
    },
    customStyle,
    label: "Create An Account?",
    type: "checkbox",
    name: "createAccount",
    isSelect: false,
    isCheckbox: true,
    placeholder: "",
  },
];
