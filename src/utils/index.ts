export const numberWithCommas = (x) => {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else return x;
};

export const urlToString = (url) => {
  return url
    .split("/")
    .join("")
    .split(":")
    .join("")
    .split(".")
    .join()
    .split(",")
    .join("");
};

export const isValuesEmpty = (values) => {
  const keysOfValus = Object.values(values);

  if (!(Object.keys(values).length > 0)) return true;
  let isEmpty = false;

  keysOfValus.forEach((value) => {
    if (!value) {
      isEmpty = true;
    }
  });

  return isEmpty;
};

export const isObjectEmpty = (value = {}) => {
  return !(Object.keys(value).length > 0);
};

export const checkIfItemExistsInCache = (key: string, cache: any) => {
  if (cache[key]) {
    return true;
  }
  return false;
};

export const getDeliveryChargeTotal = (delivery, totalPrice) => {
  try {
    if (!delivery) return;
    if (delivery && !(Object.keys(delivery).length > 0)) return;

    let deliveryAmount = delivery && Object.keys(delivery.charge);
    deliveryAmount.sort((a: any, b: any) => a - b);

    let deliveryCharge;

    // get the delivery charge according to totalPrice

    if (totalPrice < deliveryAmount && deliveryAmount[0]) {
      return "Minium order amount is " + deliveryCharge && deliveryCharge[0];
    } else if (
      totalPrice >= deliveryAmount &&
      deliveryAmount[deliveryAmount.length - 1]
    ) {
      // higher than all amount
      deliveryCharge = delivery.charge[deliveryAmount.length - 1];
    } else {
      // iterate through all items

      for (let index in deliveryAmount) {
        // check if price is between the current amount and the next

        if (
          totalPrice >= deliveryAmount[index] &&
          totalPrice < deliveryAmount[+index + 1]
        ) {
          // set the charge of the amount as delivery charge
          deliveryCharge = delivery.charge[deliveryAmount[index]];
          break;
        }
      }
    }

    return deliveryCharge;
  } catch (err) {}
};

export const deleteCity = async () => {
  await localStorage.removeItem("city");
};

export const saveCity = async (city) => {
  if (city) {
    const preCity = await localStorage.getItem("city");
    if (preCity) {
      await deleteCity();
      await localStorage.setItem("city", city);
    } else {
      await localStorage.setItem("city", city);
    }
  }
};

export const getCity = async () => {
  const city = await localStorage.getItem("city");
  if (!city) {
    return false;
  }
  return city;
};

export const deleteCustomerData = async () => {
  await localStorage.removeItem("customerData");
};

export const saveCustomerData = async (customerData) => {
  if (customerData) {
    const preCustomerData = await localStorage.getItem("customerData");
    // @ts-ignore
    if (!JSON.parse(preCustomerData)) {
      await localStorage.setItem("customerData", JSON.stringify(customerData));
    } else {
      await deleteCustomerData();
      await localStorage.setItem("customerData", JSON.stringify(customerData));
    }
  }
};

export const getCustomerData = async () => {
  const customerData = await localStorage.getItem("customerData");
  // @ts-ignore
  if (!JSON.parse(customerData)) {
    return false;
  }
  // @ts-ignore

  return JSON.parse(customerData);
};

// normalized image array

export const getImagesInCollumn = (imgs) => {
  if (!imgs[0]) return false;
  const columns = {};

  let localIndex = 0;
  let columnNumber = 0;

  imgs.forEach((item, index) => {
    if (localIndex < 3) {
      if (columns[columnNumber]) {
        columns[columnNumber] = [...columns[columnNumber], item];
      } else columns[columnNumber] = [item];

      localIndex = localIndex + 1;
      columnNumber = columnNumber + 1;
    } else {
      localIndex = 0;
      columnNumber = 0;
    }
  });

  return columns;
};

export const checkIfItemExistsInCartItemById: (
  cartItems: any[] | [],
  givenCartItem: object
) => boolean = (cartItems: any[] | [], givenCartItem: object) => {
  if (!(cartItems.length > 0)) return false;

  const index = cartItems.findIndex(
    (cartItem) =>
      cartItem.product === givenCartItem["product"] &&
      cartItem.variation === givenCartItem["variation"]
  );

  if (index !== -1) return true;
  return false;
};

export const checkIfTheWishListExistsInArrayById: (
  array: any[] | [],
  id: number | string
) => boolean = (array: any[] | [], id: number | string) => {
  if (!(array.length > 0)) return false;

  const item = array.find((item) => item === id);

  return (!isObjectEmpty(item) && true) || false;
};

export const getCartKeyFromCartItems = (cartItems, productId: string) => {
  const cartItem = cartItems.find(({ product }) => product.id === productId);
  if (!cartItem) {
    return false;
  }
  const cartKey = cartItem["product"]["cartKey"];
  return cartKey;
};

export const authHeader = () => {
  const authToken = localStorage.getItem("authToken");

  if (authToken) {
    return {
      Authorization: authToken,
    };
  }

  return {};
};

const numbers = {
  "0": "০",
  "1": "১",
  "২": "২",
  "3": "৩",
  "4": "৪",
  "5": "৫",
  "6": "৬",
  "7": "৭",
  "8": "৮",
  "9": "৯",
};

export const replaceNumbers = (input: any) => {
  if (!input) {
    // return 0;
    return;
  }
  var output = [];
  for (var i = 0; i < input.length; ++i) {
    if (numbers.hasOwnProperty(input[i])) {
      // @ts-ignore
      output.push(numbers[input[i]]);
    } else {
      // @ts-ignore
      output.push(input[i]);
    }
  }
  return output.join("");
};

export const convertParamsId = (params) => {
  if (Object.keys(params).length > 0) {
    return params.map((param) => Object.values(param).join());
  } else {
    return [];
  }
};

export function isEmpty(value) {
  value = `${value}`;
  const emptyValues = ["undefined", "null", "true", "false", "", "[]", "{}"];
  return emptyValues.includes(value);
}
