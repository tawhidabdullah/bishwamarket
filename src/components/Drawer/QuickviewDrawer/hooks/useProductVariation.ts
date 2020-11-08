import { useEffect, useState } from "react";

// import utils
import { getPricingOptions } from "../../../../utils";

const useProductVariation = (pricing) => {
  const [price, setPrice] = useState("");
  const [selectedVariationId, setSelectedVariationId] = useState("");
  const [attributes, setAttributes] = useState([]);

  const getPriceByVariationId = (id) => {
    if (pricing && pricing.length > 0) {
      const priceItem = pricing.find((pricingItem) => pricingItem._id === id);

      if (priceItem && priceItem.price.regular) {
        return priceItem.price.offer && parseInt(priceItem.price.offer)
          ? priceItem.price.offer
          : priceItem.price.regular;
      } else return "";
    } else {
      return "";
    }
  };

  const getDefaultVariationId = (pricing) => {
    const defaultVariationId = pricing?.[0]?.["_id"];
    return defaultVariationId;
  };

  useEffect(() => {
    const pricingOptions = getPricingOptions(pricing);
    let defaultVariationId = "";

    // if there is not attribute, then just return the default price.
    if (!pricingOptions[0]) {
      defaultVariationId = getDefaultVariationId(pricing);
      const price = getPriceByVariationId(defaultVariationId);
      setPrice(price);
      setSelectedVariationId(defaultVariationId);
    }
    // do these if there's attributes
    else {
      setAttributes(pricingOptions);
      defaultVariationId = getDefaultVariationId(pricing);
      // set default variation id to selected variation id.
      setSelectedVariationId(defaultVariationId);
      const defaultPrice = getPriceByVariationId(defaultVariationId);
      setPrice(defaultPrice);
    }
  }, [pricing]);

  useEffect(() => {
    if (selectedVariationId) {
      const price = getPriceByVariationId(selectedVariationId);
      setPrice(price);
    }
  }, [selectedVariationId]);

  return {
    attributes,
    price,
    setSelectedVariationId,
    selectedVariationId,
  };
};

export default useProductVariation;
