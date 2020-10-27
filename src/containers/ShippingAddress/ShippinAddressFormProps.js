export const ShippinAddressFormProps = [
  {
    id: "sa1",
    sizes: {
      md: 6,
      // sm: 12,
      // xs: 12,
    },
    customStyle: { label: { "font-weight": "bold" } },
    label: "Flat/Plot",
    type: "text",
    name: "flat",
    isSelect: false,
    isCheckbox: false,
    placeholder: "Company Name",
  },

  {
    id: "sa2",
    sizes: {
      md: 6,
      // sm: 12,
      // xs: 12,
    },
    customStyle: { label: { "font-weight": "bold" } },
    label: "Address *",
    type: "text",
    name: "address",
    isSelect: false,
    isCheckbox: false,
    placeholder: "Address",
  },

  {
    id: "sa3",
    sizes: {
      md: 6,
      // sm: 12,
      // xs: 12,
    },
    customStyle: { label: { "font-weight": "bold" } },
    label: "Zip Code *",
    type: "text",
    name: "zipCode",
    isSelect: false,
    isCheckbox: false,
    placeholder: "zip-code",
  },

  {
    id: "sa4",
    sizes: {
      md: 6,
      // sm: 12,
      // xs: 12,
    },
    customStyle: { label: { "font-weight": "bold" } },
    label: "Country *",
    // type: "",
    name: "country",
    isSelect: true,
    isCheckbox: false,
    placeholder: "Email",
  },

  {
    id: "sa5",
    sizes: {
      md: 6,
      // sm: 12,
      // xs: 12,
    },
    customStyle: { label: { "font-weight": "bold" } },
    label: "City *",
    type: "text",
    name: "city",
    placeholder: "City",
  },

  {
    id: "sa6",
    sizes: {
      md: 6,
      // sm: 12,
      // xs: 12,
    },
    customStyle: { label: { "font-weight": "bold" } },
    label: "Region/State *",
    type: "text",
    name: "state",
    placeholder: "Region/State",
  },
];
