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

  useEffect(() => {
    const pricingOptions = getPricingOptions(pricing);
    setAttributes(pricingOptions);
    const defaultVariationId = pricingOptions?.[0]?.["value"];
    setSelectedVariationId(defaultVariationId);
    const defaultPrice = getPriceByVariationId(defaultVariationId);
    setPrice(defaultPrice);
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
