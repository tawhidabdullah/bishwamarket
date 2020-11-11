import config from "../config.json";
import dataMap from "../dataMap.json";

class Converter {
  /**
   * @public
   * @method categoryList convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async categoryList(resData) {
    const data = resData.data || [];
    const formatedData =
      data.length > 0 &&
      data.map((category) => {
        return {
          id: category._id || "",
          name: category.name && category.name,
          description: category.description && category.description,
          cover: `${config["baseURL"]}${
            category.cover && category.cover.thumbnail
              ? category.cover.thumbnail
              : ""
          }`,
          fullCover: `${config["baseURL"]}${
            category.cover && category.cover.full ? category.cover.full : ""
          }`,
          icon: category.icon
            ? `${config["baseURL"]}${category.icon ? category.icon : ""}`
            : null,
          productCount: category.productCount || 0,
          url: category.url || "",
          bn: category.bn || "",
          metaTitle: category.metaTitle,
          metaTags: category.metaTags,
          metaDescription: category.metaDescription,
          ...(category.subCategory &&
            category.subCategory.length > 0 &&
            category.subCategory[0] &&
            category.subCategory[0]["name"] && {
              subCategory: category.subCategory.map((subCat) => {
                return {
                  ...subCat,
                  id: subCat._id || "",
                  name: subCat.name && subCat.name,
                  description: subCat.description && subCat.description,
                  cover: subCat.cover
                    ? `${config["baseURL"]}${subCat.cover.medium}`
                    : "",
                };
              }),
            }),
        };
      });

    return formatedData;
  }

  /**
   * @public
   * @method categoryPostList convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async postCategoryList(resData) {
    const data = resData.data && resData.data ? resData.data : [];

    const formatedData =
      data.length > 0 &&
      data.map((category) => {
        return {
          ...category,
          id: category._id || "",
          key: category._id || "",
          name: category.name && category.name,
          description: category.description && category.description,
          cover: category.cover
            ? `${config["baseURL"]}${category.cover.thumbnail}`
            : null,
          icon: category.icon ? `${config["baseURL"]}${category.icon}` : null,
        };
      });

    return formatedData;
  }

  /**
   * @public
   * @method postCategoryPosts convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async postCategoryPosts(resData) {
    const data = resData.data;
    // const isNext = resData.page.next;

    let convertedData =
      data.length > 0 &&
      data.map((post) => {
        return {
          id: post._id || "",
          name: post.name && post.name,
          body: post.body && post.body,
          preparationTime: post.preparationTime && post.preparationTime,
          servingSize: post.servingSize && post.servingSize,
          cookingTime: post.cookingTime && post.cookingTime,
          cover: `${config["baseURL"]}${
            (post.cover && post.cover["thumbnail"]) || ""
          }`,
          url: post.url,
          category: post.category,
          tags: post.tags,
        };
      });

    // convertedData = {
    // 	data: convertedData,
    // 	isNext
    // };

    return convertedData;
  }

  /**
   * @public
   * @method postList convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async postList(resData) {
    const data = resData.data;
    // const isNext = resData.page.next;

    let convertedData =
      data.length > 0 &&
      data.map((post) => {
        return {
          ...post,
          id: post._id || "",
          name: post.name && post.name,
          body: post.body && post.body,
          preparationTime: post.preparationTime && post.preparationTime,
          servingSize: post.servingSize && post.servingSize,
          cookingTime: post.cookingTime && post.cookingTime,
          cover: `${config["baseURL"]}${
            (post.cover && post.cover["thumbnail"]) || ""
          }`,
          url: post.url,
          category: post.category,
          tags: post.tags,
        };
      });

    // convertedData = {
    // 	data: convertedData,
    // 	isNext
    // };

    return convertedData;
  }

  /**
   * @public
   * @method pageList convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async pageList(resData) {
    const data = resData.data;
    // const isNext = resData.page.next;

    let convertedData =
      data.length > 0 &&
      data.map((post) => {
        return {
          ...post,
          id: post._id || "",
        };
      });

    // convertedData = {
    // 	data: convertedData,
    // 	isNext
    // };

    return convertedData;
  }

  /**
   * @public
   * @method pageDetail convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async pageDetail(resData) {
    const data = resData;
    // const isNext = resData.page.next;

    if (data && Object.keys(data).length > 0) {
      return {
        ...data,
      };
    } else return {};
  }

  /**
   * @public
   * @method postDetail convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async postDetail(resData) {
    const data = resData;
    // const isNext = resData.page.next;

    if (Object.keys(data).length > 0) {
      return {
        ...data,
        id: data._id || "",
        name: data.name && data.name,
        body: data.body && data.body,
        preparationTime: data.preparationTime && data.preparationTime,
        servingSize: data.servingSize && data.servingSize,
        cookingTime: data.cookingTime && data.cookingTime,
        cover: `${config["baseURL"]}${
          (data.cover && data.cover["medium"]) || ""
        }`,
        url: data.url,
        products: data.requiredProducts,
        category:
          (data.category &&
            data.category.length > 0 &&
            data.category.map((cat) => {
              return {
                id: cat._id,
                name: cat.name,
              };
            })) ||
          data.category,
        tags: data.tags && data.tags.length > 0 ? data.tags : [],
      };
    } else return {};
  }

  /**
   * @public
   * @method postCategoryDetail convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async postCategoryDetail(resData) {
    const data = resData;

    if (Object.keys(data).length > 0) {
      return {
        id: data._id || "",
        key: data._id || "",
        name: data.name && data.name,
        description: data.description && data.description,
        cover: data.cover
          ? `${config["baseURL"]}${data.cover.thumbnail}`
          : null,
        icon: data.icon ? `${config["baseURL"]}${data.icon}` : null,
      };
    }
  }

  /**
   * @public
   * @method categoryProducts convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async categoryProducts(resData) {
    const data = resData.data || [];
    const next = resData.page?.next;
    const total = resData.page?.totalIndex;

    const convertedData =
      data.length > 0 &&
      data.map((product) => {
        return {
          ...product,
          id: product._id || "",
          name: product.name && product.name,
          description: product.description && product.description,
          cover: `${config["baseURL"]}${
            (product.cover && product.cover["medium"]) || ""
          }`,
          regularPrice: product.price && product.price["regular"],
          offerPrice: product.price && product.price["offer"],
          url: product.url,
          unit: product.unit,
          price:
            product.price && parseInt(product.price["offer"])
              ? product.price["offer"]
              : product.price["regular"],
          stock:
            product.pricing &&
            product.pricing.length > 0 &&
            product.pricing[0].stock.available
              ? product.pricing[0].stock.available
              : 0,
          pricing: product.pricing || [],
          date: product.date,
          venue: product.venue,
          bn: product.bn || "",
          metaTitle: product.metaTitle,
          metaTags: product.metaTags,
          metaDescription: product.metaDescription,
          offerTaka:
            product.price &&
            parseInt(product.price["offer"]) &&
            parseInt(product.price["regular"]) >
              parseInt(product.price["offer"])
              ? parseInt(product.price["regular"]) -
                parseInt(product.price["offer"])
              : 0,
        };
      });

    return {
      data: convertedData,
      next,
      total,
    };
  }

  /**
   * @public
   * @method categoryProductsByUrl convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async categoryProductsByUrl(resData) {
    const data = resData.data || [];
    const isNext = resData.page.next;

    const convertedData =
      data.length > 0 &&
      data.map((product) => {
        return {
          id: product._id || "",
          name: product.name && product.name,
          description: product.description && product.description,
          cover: `${config["baseURL"]}${
            (product.cover && product.cover["medium"]) || ""
          }`,
          regularPrice: product.price && product.price["regular"],
          offerPrice: product.price && product.price["offer"],
          url: product.url,
          unit: product.unit,
          price:
            product.price && parseInt(product.price["offer"])
              ? product.price["offer"]
              : product.price["regular"],
          stock:
            product.pricing &&
            product.pricing.length > 0 &&
            product.pricing[0].stock.available
              ? product.pricing[0].stock.available
              : 0,
          pricing: product.pricing || [],
          date: product.date,
          venue: product.venue,
        };
      });

    // return {
    //   data: convertedData,
    //   isNext: isNext,
    // };

    return convertedData;
  }

  /**
   * @public
   * @method getCart convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async getCart(resData) {
    const cartItems = resData || [];
    const convertedData =
      cartItems.length > 0 &&
      cartItems.map((cartItem) => {
        return {
          ...cartItem,
          cover: `${config["baseURL"]}${
            (cartItem.cover && cartItem.cover["thumbnail"]) || ""
          }`,
        };
      });

    return convertedData;
  }

  /**
   * @public
   * @method addtoCart convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async addtoCart(resData) {
    let data = false;

    if (resData.length > 0 && resData.length < 2) {
      data = {
        type: "single",
        data: {
          ...resData[0],
          cover: `${config["baseURL"]}${
            (resData[0].cover && resData[0].cover["thumbnail"]) || ""
          }`,
        },
      };
    } else if (resData.length > 0 && resData.length > 1) {
      data = {
        type: "multiple",
        data: resData.map((item) => {
          return {
            ...item,
            cover: `${config["baseURL"]}${
              (item.cover && item.cover["thumbnail"]) || ""
            }`,
          };
        }),
      };
    }

    const convertedData = data;

    return convertedData;
  }

  /**
   * @public
   * @method removeFromCart convert api data from API to general format based on config server
   * @param {Object} resData response objectc from alpha
   * @returns {Object}  converted data
   */
  async removeFromCart(resData) {
    let convertedData = false;
    if (resData) {
      convertedData = true;
    }
    return convertedData;
  }

  /**
   * @public
   * @method updateCartItem convert api data from API to general format based on config server
   * @param {Object} resData response objectc from alpha
   * @returns {Object}  converted data
   */
  async updateCartItem(resData) {
    let convertedData = false;
    if (resData["updated"]) {
      convertedData = {
        quantity: resData.updated["quantity"],
      };
    }
    return convertedData;
  }

  /**
   * @public
   * @method clearCart convert api data from API to general format based on config server
   * @param {Object} resData response objectc from alpha
   * @returns {Object}  converted data
   */
  async clearCart(data) {
    if (data && data["msg"]) {
      return {
        status: "ok",
      };
    }
    return data;
  }
  /**
   * @public
   * @method getWishlist convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async getWishlist(resData) {
    // const cartItems = resData.items || [];
    const convertedData = resData;

    return convertedData;
  }

  /**
   * @public
   * @method addWishlist convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async addWishlist(resData) {
    if (resData && resData["msg"] === "wishlist updated") {
      return {
        status: "ok",
      };
    }

    return false;
  }

  /**
   * @public
   * @method removeFromWishlist convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async removeFromWishlist(resData) {
    if (resData && resData["msg"] === "wishlist updated") {
      return {
        status: "ok",
      };
    }

    return false;
  }

  /**
   * @public
   * @method removeAllWishlist convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async removeAllWishlist(resData) {
    if (resData && resData["msg"] === "wishlist updated") {
      return {
        status: "ok",
      };
    }

    return false;
  }

  /**
   * @public
   * @method tagProducts convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async tagProducts(resData) {
    const data = resData.data || [];
    const isNext = resData.page.next;

    const convertedData =
      data.length > 0 &&
      data.map((product) => {
        return {
          id: product._id || "",
          name: product.name && product.name,
          description: product.description && product.description,
          cover: `${config["baseURL"]}${
            (product.cover && product.cover["thumbnail"]) || ""
          }`,
          regularPrice: product.price && product.price["regular"],
          offerPrice: product.price && product.price["offer"],
          price:
            parseInt(product.price["offer"]) >
            parseInt(product.price["regular"])
              ? product.price["offer"]
              : product.price["regular"],
          url: product.url,
          unit: product.unit,
        };
      });

    return {
      data: convertedData,
      isNext: isNext,
    };
  }

  /**
   * @public
   * @method brandProducts convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async brandProducts(resData) {
    const data = resData.data || [];
    const isNext = resData.page.next;

    const convertedData =
      data.length > 0 &&
      data.map((product) => {
        return {
          id: product._id || "",
          name: product.name && product.name,
          description: product.description && product.description,
          cover: `${config["baseURL"]}${
            (product.cover && product.cover["medium"]) || ""
          }`,
          regularPrice: product.price && product.price["regular"],
          offerPrice: product.price && product.price["offer"],
          price:
            parseInt(product.price["offer"]) >
            parseInt(product.price["regular"])
              ? product.price["offer"]
              : product.price["regular"],
          url: product.url,
          unit: product.unit,
          stock:
            product.pricing &&
            product.pricing.length > 0 &&
            product.pricing[0].stock.available
              ? product.pricing[0].stock.available
              : 0,
        };
      });

    return {
      data: convertedData,
      isNext: isNext,
    };
  }

  /**
   * @public
   * @method productSearch convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async productSearch(resData) {
    const data = resData.data || [];
    const isNext = resData.page.next;

    let convertedData =
      data.length > 0 &&
      data.map((product) => {
        return {
          ...product,
          id: product._id || "",
          name: product.name && product.name,
          description: product.description && product.description,
          cover: `${config["baseURL"]}${
            (product.cover && product.cover["medium"]) || ""
          }`,
          regularPrice: product.price && product.price["regular"],
          offerPrice: product.price && product.price["offer"],
          unit: product.unit,
          url: product.url,
          price:
            product.price && parseInt(product.price["offer"])
              ? product.price["offer"]
              : product.price["regular"],
          stock:
            product.pricing &&
            product.pricing.length > 0 &&
            product.pricing[0].stock.available,
          pricing: product.pricing || [],
          date: product.date,
          venue: product.venue,
          offerTaka:
            product.price &&
            parseInt(product.price["offer"]) &&
            parseInt(product.price["regular"]) >
              parseInt(product.price["offer"])
              ? parseInt(product.price["regular"]) -
                parseInt(product.price["offer"])
              : 0,
        };
      });

    // convertedData = {
    //   data: convertedData,
    //   isNext,
    // };

    return convertedData;
  }

  /**
   * @public
   * @method productList convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async productList(resData) {
    const data = resData.data || [];
    const next = resData.page?.next;
    const total = resData.page?.totalIndex;
    // const isNext = resData.page.next;

    let convertedData =
      data.length > 0 &&
      data.map((product) => {
        return {
          ...product,
          id: product._id || "",
          name: product.name && product.name,
          description: product.description && product.description,
          cover: `${config["baseURL"]}${
            (product.cover && product.cover["medium"]) || ""
          }`,
          regularPrice: product.price && product.price["regular"],
          offerPrice: product.price && product.price["offer"],
          unit: product.unit,
          url: product.url,
          price:
            product.price && parseInt(product.price["offer"])
              ? product.price["offer"]
              : product.price["regular"],
          stock:
            product.pricing &&
            product.pricing.length > 0 &&
            product.pricing[0].stock.available,
          pricing: product.pricing,
          date: product.date,
          venue: product.venue,
          offerTaka:
            product.price &&
            parseInt(product.price["offer"]) &&
            parseInt(product.price["regular"]) >
              parseInt(product.price["offer"])
              ? parseInt(product.price["regular"]) -
                parseInt(product.price["offer"])
              : 0,
        };
      });

    return {
      data: convertedData,
      next,
      total,
    };
  }

  async filterProduct(resData) {
    const data = resData.data || [];
    const next = resData.page?.next;
    const total = resData.page?.totalIndex;
    // const isNext = resData.page.next;

    let convertedData =
      data.length > 0 &&
      data.map((product) => {
        return {
          ...product,
          id: product._id || "",
          name: product.name && product.name,
          description: product.description && product.description,
          cover: `${config["baseURL"]}${
            (product.cover && product.cover["medium"]) || ""
          }`,
          regularPrice: product.price && product.price["regular"],
          offerPrice: product.price && product.price["offer"],
          unit: product.unit,
          url: product.url,
          price:
            product.price && parseInt(product.price["offer"])
              ? product.price["offer"]
              : product.price["regular"],
          stock:
            product.pricing &&
            product.pricing.length > 0 &&
            product.pricing[0].stock.available,
          pricing: product.pricing,
          date: product.date,
          venue: product.venue,
          offerTaka:
            product.price &&
            parseInt(product.price["offer"]) &&
            parseInt(product.price["regular"]) >
              parseInt(product.price["offer"])
              ? parseInt(product.price["regular"]) -
                parseInt(product.price["offer"])
              : 0,
        };
      });

    return {
      data: convertedData,
      next,
      total,
    };
  }

  async getSingleOrderHistory(data) {
    return data;
  }

  /**
   * @public
   * @method offerListCount convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async offerListCount(resData) {
    const data = resData.data || [];

    let count = 0;
    if (data.length > 0) {
      data.forEach((product) => {
        if (
          product.price &&
          parseInt(product.price["offer"]) &&
          parseInt(product.price["regular"]) > parseInt(product.price["offer"])
            ? parseInt(product.price["regular"]) -
              parseInt(product.price["offer"])
            : 0
        ) {
          count++;
        }
      });
    }
    return count;
  }

  /**
   * @public
   * @method relatedProductList convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async relatedProductList(resData) {
    const data = resData.data || [];
    const isNext = resData.page.next;

    let convertedData =
      data.length > 0 &&
      data.map((product) => {
        return {
          ...product,
          id: product._id || "",
          name: product.name && product.name,
          description: product.description && product.description,
          cover: `${config["baseURL"]}${
            (product.cover && product.cover["medium"]) || ""
          }`,
          regularPrice: product.price && product.price["regular"],
          offerPrice: product.price && product.price["offer"],
          unit: product.unit,
          url: product.url,
          price:
            product.price && parseInt(product.price["offer"])
              ? product.price["offer"]
              : product.price["regular"],
          stock:
            product.pricing &&
            product.pricing.length > 0 &&
            product.pricing[0].stock.available,
          pricing: product.pricing || [],
          date: product.date,
          venue: product.venue,
          offerTaka:
            product.price &&
            parseInt(product.price["offer"]) &&
            parseInt(product.price["regular"]) >
              parseInt(product.price["offer"])
              ? parseInt(product.price["regular"]) -
                parseInt(product.price["offer"])
              : 0,
        };
      });

    // convertedData = {
    //   data: convertedData,
    //   isNext,
    // };

    return convertedData;
  }

  /**
   * @public
   * @method tagList convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async tagList(resData) {
    const data = resData.data || [];

    const convertedData =
      data.length > 0 &&
      data.map((tag) => {
        return {
          id: tag._id || "",
          name: tag.name && tag.name,
          description: tag.description && tag.description,
        };
      });

    return convertedData;
  }

  /**
   * @public
   * @method brandList convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async brandList(resData) {
    const data = resData.data || [];

    const convertedData =
      data.length > 0 &&
      data.map((brand) => {
        return {
          id: brand._id || "",
          name: brand.name && brand.name,
          description: brand.description && brand.description,
          cover: `${config["baseURL"]}${
            brand.cover && brand.cover.original ? brand.cover.original : ""
          }`,
        };
      });

    return convertedData;
  }

  /**
   * @public
   * @method countryList convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async countryList(resData) {
    const data = resData || [];

    const convertedData =
      data.length > 0 &&
      data.map((country) => {
        return {
          id: country._id || "",
          name: country.name && country.name,
        };
      });

    return convertedData;
  }

  /**
   * @public
   * @method getDeliveryCharge convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async getDeliveryCharge(data) {
    const convertedData = data;

    return convertedData;
  }

  /**
   * @public
   * @method deliveryCityList convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async deliveryCityList(data) {
    let cityList = [];

    if (data) {
      data.map((c) => {
        c.city.map((name) => cityList.push(name));
      });
    }

    return [...new Set(cityList)];

    // console.log(cityList);
    // return [...new Set(cityList)];
  }

  /**
   * @public
   * @method cityList convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async cityList(resData) {
    const data = resData || [];

    const convertedData =
      data.length > 0 &&
      data.map((city) => {
        return {
          id: city._id || "",
          name: city.name && city.name,
        };
      });

    return convertedData;
  }

  /**
   * @public
   * @method forAnalytics convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async forAnalytics(resData) {
    return resData;
  }

  /**
   * @public
   * @method productDetail convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async productDetail(data) {
    const convertedData =
      (Object.keys(data).length > 0 && {
        ...data,
        id: data._id || data.id || "",
        name: data.name || "",
        description: data.description.replace(/<[^>]+>/g, "") || "",
        regularPrice: data.price && data.price["regular"],
        offerPrice: data.price && data.price["offer"],
        url: data.url,
        cover: `${config["baseURL"]}${
          data.cover && data.cover.medium ? data.cover.medium : ""
        }`,
        availableStock: data.availableStock,
        minimumStock: data.minimumStock,
        bn: data.bn || "",
        metaTitle: data.metaTitle,
        metaTags: data.metaTags,
        metaDescription: data.metaDescription,
        unit: data.unit,
        date: data.date || "",
        time: data.time || "",
        venue: data.venue || "",
        pricing: data.pricing || "",
        price:
          data.price && parseInt(data.price["offer"])
            ? data.price["offer"]
            : data.price["regular"],
        category:
          (data.category &&
            data.category.length > 0 &&
            data.category.map((cat) => {
              return {
                id: cat._id,
                name: cat.name,
                url: cat.url,
              };
            })) ||
          data.category,
        brand:
          (data.brand &&
            data.brand.length > 0 &&
            data.brand.map((b) => {
              return {
                id: b._id,
                name: b.name,
              };
            })) ||
          data.brand,
        tags:
          (data.tags &&
            data.tags.length > 0 &&
            data.tags.map((tag) => {
              return {
                id: tag._id,
                name: tag.name,
              };
            })) ||
          data.tags,

        image:
          (data.image &&
            data.image.length > 0 &&
            data.image.map((img) => {
              return {
                small: `${config.baseURL}${img.thumbnail}`,
                large: `${config.baseURL}${img.full}`,
              };
            })) ||
          [],
      }) ||
      {};

    return convertedData;
  }

  /**
   * @public
   * @method productDetailById convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async productDetailById(data) {
    const convertedData =
      (Object.keys(data).length > 0 && {
        ...data,
        id: data._id || data.id || "",
        name: data.name || "",
        description: data.description.replace(/<[^>]+>/g, "") || "",
        regularPrice: data.price && data.price["regular"],
        offerPrice: data.price && data.price["offer"],
        bn: data.bn || "",
        metaTitle: data.metaTitle,
        metaTags: data.metaTags,
        metaDescription: data.metaDescription,
        price:
          data.price && parseInt(data.price["offer"])
            ? data.price["offer"]
            : data.price["regular"],
        url: data.url,
        cover: `${config["baseURL"]}${
          data.cover && data.cover.original ? data.cover.original : ""
        }`,
        availableStock: data.availableStock,
        minimumStock: data.minimumStock,
        unit: data.unit,
        date: data.date || "",
        venue: data.venue || "",
        pricing: data.pricing || "",
        category:
          (data.category &&
            data.category.length > 0 &&
            data.category.map((cat) => {
              return {
                id: cat._id,
                name: cat.name,
                url: cat.url,
              };
            })) ||
          data.category,
        brand:
          (data.brand &&
            data.brand.length > 0 &&
            data.brand.map((b) => {
              return {
                id: b._id,
                name: b.name,
              };
            })) ||
          data.brand,
        tags:
          (data.tags &&
            data.tags.length > 0 &&
            data.tags.map((tag) => {
              return {
                id: tag._id,
                name: tag.name,
              };
            })) ||
          data.tags,
        image:
          (data.image &&
            data.image.length > 0 &&
            data.image.map((img) => {
              return {
                small: `${config.baseURL}${img.thumbnail}`,
                large: `${config.baseURL}${img.full}`,
              };
            })) ||
          [],
      }) ||
      {};

    return convertedData;
  }

  /**
   * @public
   * @method categoryDetail convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async categoryDetail(data) {
    const convertedData = {
      id: data.id || data._id || "",
      name: data.name && data.name,
      description: data.description && data.description,
      productCount: data.count || data.productCount,
      bn: data.bn || "",
      metaTitle: data.metaTitle,
      metaTags: data.metaTags,
      metaDescription: data.metaDescription,
      icon: data.icon || "",
      cover: data.cover
        ? `${config["baseURL"]}${
            data.cover && data.cover.full ? data.cover.full : ""
          }`
        : null,
      subCategory:
        data.subCategory.length > 0 &&
        data.subCategory[0] &&
        data.subCategory[0]["name"]
          ? data.subCategory.map((subCat) => {
              return {
                ...subCat,
                id: subCat._id || "",
                name: subCat.name && subCat.name,
                description: subCat.description && subCat.description,
                cover: subCat.cover
                  ? `${config["baseURL"]}${subCat.cover.original}`
                  : "",
              };
            })
          : [],
      image:
        (data.image &&
          data.image.length > 0 &&
          data.image.map((img) => `${config.baseURL}${img.original}`)) ||
        [],
    };

    return convertedData;
  }

  /**
   * @public
   * @method categoryDetailByURL convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async categoryDetailByURL(data) {
    const convertedData = {
      id: data.id || data._id || "",
      name: data.name && data.name,
      description: data.description && data.description,
      productCount: data.count || data.productCount,
      bn: data.bn || "",
      metaTitle: data.metaTitle,
      metaTags: data.metaTags,
      metaDescription: data.metaDescription,
      icon: data.icon || "",
      cover: data.cover
        ? `${config["baseURL"]}${
            data.cover && data.cover.full ? data.cover.full : ""
          }`
        : null,

      thumbnail: data.thumbnail
        ? `${config["baseURL"]}${data.thumbnail ? data.thumbnail : ""}`
        : null,

      subCategory:
        data.subCategory.length > 0 &&
        data.subCategory[0] &&
        data.subCategory[0]["name"]
          ? data.subCategory.map((subCat) => {
              return {
                ...subCat,
                id: subCat._id || "",
                name: subCat.name && subCat.name,
                description: subCat.description && subCat.description,
                cover: subCat.cover
                  ? `${config["baseURL"]}${subCat.cover.original}`
                  : "",
                thumbnail: subCat.thumbnail
                  ? `${config["baseURL"]}${
                      subCat.thumbnail ? subCat.thumbnail : ""
                    }`
                  : null,
              };
            })
          : [],
      image:
        (data.image &&
          data.image.length > 0 &&
          data.image.map((img) => `${config.baseURL}${img.original}`)) ||
        [],
    };

    return convertedData;
  }

  async popular(data) {
    let convertedData = [];

    if (data && data.popularProduct && data.popularProduct.data.length > 0) {
      data.popularProduct.data.map((product) => {
        let newData = {
          _id: product._id,
          url: product.url && product.url,
          name: product.name,
          price: product.price && parseFloat(product.price.regular),
          offerPrice: product.price && parseFloat(product.price.offer),
          image: `${config["baseURL"]}${
            (product.cover && product.cover["thumbnail"]).substring(1) || ""
          }`,

          inStock: product.inStock && product.inStock,
          defaultVariation:
            product.price &&
            product.price.defaultVariation &&
            product.price.defaultVariation,
        };

        convertedData.push(newData);
      });
    }

    return convertedData;
  }

  async offerProduct(data) {
    let convertedData = [];

    if (data && data.data && data.data.length > 0) {
      data.data.map((product) => {
        let newData = {
          _id: product._id,
          url: product.url && product.url,
          name: product.name,
          price: product.price && parseFloat(product.price.regular),
          offerPrice: product.price && parseFloat(product.price.offer),
          description: product.description || "",
          image: `${config["baseURL"]}${
            (product.cover && product.cover["thumbnail"]).substring(1) || ""
          }`,

          inStock: product.inStock && product.inStock,
          defaultVariation:
            product.price &&
            product.price.defaultVariation &&
            product.price.defaultVariation,
        };

        convertedData.push(newData);
      });
    }

    return convertedData;
  }

  /**
   * @public
   * @method brandDetail convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async brandDetail(data) {
    const convertedData = {
      id: data.id || data._id || "",
      name: data.name && data.name,
      description: data.description && data.description,
      cover: `${config["baseURL"]}${data.cover ? data.cover.medium : ""}`,
      image:
        (data.image &&
          data.image.length > 0 &&
          data.image.map((img) => `${config.baseURL}${img.medium}`)) ||
        [],
    };

    return convertedData;
  }

  /**
   * @public
   * @method createOrder convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async createOrder(data) {
    //map props

    const formatedData = {
      ...data,
    };

    return formatedData;
  }

  /**
   * @public
   * @method recoverPassword convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */

  async recoverPassword(data) {
    if (data["message"]) {
      return {
        status: "sent",
        data: data,
      };
    }
  }

  /**
   * @public
   * @method validateToken convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */

  async validateToken(data) {
    if (data["success"]) {
      return {
        status: "ok",
        data: data,
      };
    }
  }

  /**
   * @public
   * @method resetPassword convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */

  async resetPassword(data) {
    if (data["success"]) {
      return {
        status: "ok",
        data: data,
      };
    }
  }

  /**
   * @public
   * @method signup convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async signup(data) {
    if (data["inserted"]) {
      return {
        status: "ok",
        ...data["inserted"][0],
      };
    }

    return data;
  }

  /**
   * @public
   * @method signin convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async signin(data) {
    if (data["success"]) {
      return {
        status: "ok",
        data: data,
      };
    }

    return false;
  }

  /**
   * @public
   * @method getCurrentUserData convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async getCurrentCustomerData(data) {
    //map props
    // let generalFormat = dataMap[config['server']]['getCurrentUserData']; //get genereal format from dataMap

    const formatedData = {
      ...data,
    };

    return formatedData;
  }

  /**
   * @public
   * @method currentCustomerData convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async currentCustomerData(data) {
    //map props
    // let generalFormat = dataMap[config['server']]['currentCustomerData']; //get genereal format from dataMap

    const convertedData = {
      ...data,
    };

    return convertedData;
  }

  /**
   * @public
   * @method updateCurrentCustomerData convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async updateCurrentCustomerData(data) {
    //map props
    // let generalFormat = dataMap[config['server']]['updateCurrentCustomerData']; //get genereal format from dataMap

    const convertedData = {
      status: "ok",
      data: data,
    };

    return convertedData;
  }

  /**
   * @public
   * @method changePassword convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async changePassword(data) {
    if (data["success"]) {
      return {
        status: "ok",
      };
    }

    return data;
  }

  /**
   * @public
   * @method checkout convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async checkout(data) {
    if (data["inserted"] && !data["token"]) {
      return {
        statusRes: "ok",
        ...data["inserted"][0],
        paymentUrl: data["inserted"][0].payment
          ? data["inserted"][0].payment.payment_url
          : "",
      };
    } else if (data["inserted"] && data["token"]) {
      return {
        statusRes: "ok",
        token: data["token"],
        ...data["inserted"][0],
        paymentUrl: data["inserted"][0].payment
          ? data["inserted"][0].payment.payment_url
          : "",
      };
    }

    return data;
  }

  /**
   * @public
   * @method validateCoupon convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async validateCoupon(data) {
    // if (data['inserted'] && !data['token']) {
    //   return {
    //     statusRes: 'ok',
    //     ...data['inserted'][0],
    //     paymentUrl: data['inserted'][0].payment ? data['inserted'][0].payment.payment_url : ''
    //   };
    // }
    // else if (data['inserted'] && data['token']) {
    //   return {
    //     statusRes: 'ok',
    //     token: data['token'],
    //     ...data['inserted'][0],
    //     paymentUrl: data['inserted'][0].payment ? data['inserted'][0].payment.payment_url : ''
    //   };
    // }

    return data;
  }

  /**
   * @public
   * @method getCurrentUserOrders convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async getCurrentUserOrders(resData) {
    const data = resData.data || [];
    const next = resData.page?.next;
    const total = resData.page?.totalIndex;

    // const isNext = resData.page.next;

    let convertedData =
      (data.length > 0 &&
        data.map((item) => {
          return {
            id: item.id || item._id,
            billingAddress: item.billingAddress,
            name:
              item.shippingAddress && item.shippingAddress["firstName"]
                ? `${item.shippingAddress["firstName"]} ${item.shippingAddress["lastName"]}`
                : null,
            phone:
              item.shippingAddress && item.shippingAddress["phone"]
                ? item.shippingAddress["phone"]
                : null,
            email:
              item.shippingAddress && item.shippingAddress["email"]
                ? item.shippingAddress["email"]
                : null,
            address1:
              item.shippingAddress && item.shippingAddress["address1"]
                ? item.shippingAddress["address1"]
                : null,
            status:
              typeof item.status === "string"
                ? item.status
                : item.status && Object.keys(item.status).length > 0
                ? item.status["name"]
                : "pending",
            totalPrice: item.totalPrice,
            products: item.products,
            date_created: item.added,
            deliveryRegion: item.deliveryRegion,
            paymentMethod: item["payment"]["paymentMethod"],
            paymentStatus: item["payment"]["status"],
            payment: item["payment"],
            shortCode: item["shortCode"],
          };
        })) ||
      [];

    // convertedData = {
    //   data: convertedData,
    //   isNext,
    // };

    // return convertedData;
    return {
      data: convertedData,
      next,
      total,
    };
  }

  /**
   * @public
   * @method getCurrentUserOrderDetail convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async getCurrentUserOrderDetail(data) {
    if (data && Object.keys(data).length > 0) {
      return {
        ...data,
        products:
          data.products &&
          data.products.length > 0 &&
          data.products.map((item) => {
            return {
              ...item,
              id: item._id,
              date: item.date,
              cover: `${config["baseURL"]}${
                item.cover ? item.cover.original : ""
              }`,
            };
          }),
      };
    }
    return data;
  }

  /**
   * @public
   * @method currentUserOrders convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async currentUserOrders(data) {
    //map props
    let generalFormat = dataMap[config["server"]]["currentUserOrders"]; //get genereal format from dataMap

    const convertedData =
      (data.length > 0 &&
        data.map((item) => {
          return {
            ...generalFormat,
            id: item.id,
            status: item.status,
            total: item.total,
            line_items: item.line_items,
            date_created: item.date_created,
          };
        })) ||
      [];

    return convertedData;
  }

  /**
   * @public
   * @method payment convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */

  async payment(data) {
    const paymentItems = data.items;
    if (!paymentItems.length > 0) {
      return paymentItems;
    }

    const items = paymentItems.map((item) => {
      return {
        name: item.name || "",
        number: item.text || "",
      };
    });
    return items;
  }

  /**
   * @public
   * @method welcome convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async welcome(data) {
    return {
      text: data.text,
    };
  }

  /**
   * @public
   * @method banner convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async banner(data) {
    const items = data.items || [];

    if (items.length > 0) {
      const featureOfferItems = [];
      items.forEach((featuredItem) => {
        if (featuredItem.image && featuredItem.image[0]) {
          featureOfferItems.push({
            title: featuredItem.title,
            target: featuredItem.target,
            src:
              featuredItem.image &&
              featuredItem.image[0] &&
              `${config["baseURL"]}${featuredItem.image[0].original}`,
          });
        }
      });

      return featureOfferItems;
    } else return false;
  }

  /**
   * @public
   * @method partners convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async partners(data) {
    const item = (data.items && data.items[0]) || {};

    if (item && Object.keys(item).length > 0) {
      console.log("mahItem", item);
      const image = item.image;
      const partnersImages = [];

      if (image && image.length > 0) {
        image.forEach((imageItem) => {
          if (imageItem) {
            partnersImages.push(`${config["baseURL"]}${imageItem.thumbnail}`);
          }
        });
      }
      return partnersImages;
    } else return [];
  }

  /**
   * @public
   * @method abousUsImage convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */

  async abousUsImage(data) {
    const items = data.items || [];

    if (items.length > 0) {
      const featureOfferItems = [];
      items.forEach((featuredItem) => {
        if (featuredItem.image && featuredItem.image[0]) {
          featureOfferItems.push({
            title: featuredItem.title,
            target: featuredItem.target,
            src:
              featuredItem.image &&
              featuredItem.image[0] &&
              `${config["baseURL"]}${featuredItem.image[0].original}`,
          });
        }
      });

      return featureOfferItems;
    } else return false;
  }

  /**
   * @public
   * @method adImage convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */

  async adImage(data) {
    const items = data.items || [];

    if (items.length > 0) {
      const featureOfferItems = [];
      items.forEach((featuredItem) => {
        if (featuredItem.image && featuredItem.image[0]) {
          featureOfferItems.push({
            title: featuredItem.title,
            target: featuredItem.target,
            src:
              featuredItem.image &&
              featuredItem.image[0] &&
              `${config["baseURL"]}${featuredItem.image[0].original}`,
          });
        }
      });

      return featureOfferItems;
    } else return false;
  }

  /**
   * @public
   * @method weFollowImage convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */

  async weFollowImage(data) {
    const items = data.items || [];

    if (items.length > 0) {
      const featureOfferItems = [];
      items.forEach((featuredItem) => {
        if (featuredItem.image && featuredItem.image[0]) {
          featureOfferItems.push({
            title: featuredItem.title,
            target: featuredItem.target,
            src:
              featuredItem.image &&
              featuredItem.image[0] &&
              `${config["baseURL"]}${featuredItem.image[0].original}`,
          });
        }
      });

      return featureOfferItems;
    } else return false;
  }

  /**
   * @public
   * @method featuredOffer convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async featuredOffer(data) {
    const items = data.items || [];

    if (items.length > 0) {
      const featureOfferItems = [];
      items.forEach((featuredItem) => {
        if (featuredItem.image && featuredItem.image[0]) {
          featureOfferItems.push({
            title: featuredItem.title,
            target: featuredItem.target,
            src:
              featuredItem.image &&
              featuredItem.image[0] &&
              `${config["baseURL"]}${featuredItem.image[0].medium}`,
          });
        }
      });

      return featureOfferItems;
    } else return false;
  }

  /**
   * @public
   * @method appStoresLink convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async appStoresLink(data) {
    const items = data.items || [];

    if (items.length > 0) {
      const featureOfferItems = {};
      items.forEach((featuredItem) => {
        featureOfferItems[featuredItem.title] = featuredItem;
      });

      return featureOfferItems;
    } else return false;
  }

  /**
   * @public
   * @method socialLInk convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async socialLInk(data) {
    const items = data.items || [];

    if (items.length > 0) {
      const featureOfferItems = {};
      items.forEach((featuredItem) => {
        featureOfferItems[featuredItem.title] = featuredItem;
      });

      return featureOfferItems;
    } else return false;
  }

  /**
   * @public
   * @method logo convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async logo(data) {
    const items = data.items || [];

    if (items.length > 0) {
      const img = items[0].image || [];
      if (img.length > 0) {
        return {
          src: `${config["baseURL"]}${img[0].original || ""}`,
          target: data.target,
        };
      } else return false;
    } else return false;
  }

  /**
   * @public
   * @method hotline convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async hotline(data) {
    return {
      text: data.text,
    };
  }

  /**
   * @public
   * @method navLinks convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async navLinks(data) {
    const navLinkItems = data.items;
    if (!navLinkItems.length > 0) {
      return [];
    }

    const items = navLinkItems.map((item) => {
      return {
        text: item.name || item.text,
        target: item.target,
      };
    });

    return items;
  }

  /**
   * @public
   * @method slider convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async slider(data) {
    const sliderItems = data.items;
    if (!sliderItems.length > 0) {
      return sliderItems;
    }

    const images = sliderItems.map((item) => {
      return {
        target: item.target,
        src: `${config["baseURL"]}${item.image[0]["medium"]}`,
      };
    });
    return images;
  }

  /**
   * @public
   * @method sliderRight convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async sliderRight(data) {
    const sliderRightItems = data.items;
    if (!sliderRightItems.length > 0) {
      return sliderRightItems;
    }

    const images = sliderRightItems.map((item) => {
      return {
        target: item.target,
        src: `${config["baseURL"]}${item.image[0]["medium"]}`,
      };
    });
    return images;
  }

  /**
   * @public
   * @method address convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async address(data) {
    const items = data.items || [];

    if (items.length > 0) {
      const text = items[0].text || [];
      if (text) {
        return {
          text,
        };
      } else return false;
    } else return false;
  }

  /**
   * @public
   * @method aboutText convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async aboutText(data) {
    const items = data.items || [];

    if (items.length > 0) {
      const text = items[0].text || [];
      if (text) {
        return {
          text,
        };
      } else return false;
    } else return false;
  }

  /**
   * @public
   * @method phone convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async phone(data) {
    const items = data.items || [];

    if (items.length > 0) {
      const text = items[0].text || [];
      if (text) {
        return {
          text,
        };
      } else return false;
    } else return false;
  }

  /**
   * @public
   * @method email convert api data from API to general format based on config server
   * @param {Object} data response objectc from alpha
   * @returns {Object}  converted data
   */
  async email(data) {
    const items = data.items || [];

    if (items.length > 0) {
      const text = items[0].text || [];
      if (text) {
        return {
          text,
        };
      } else return false;
    } else return false;
  }

  /**
   * @public
   * @method Links convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async Links(data) {
    const servicesItems = data.items;
    if (!servicesItems.length > 0) {
      return servicesItems;
    }

    const items = servicesItems.map((item) => {
      return {
        target: item.target,
        name: item.title || item.text,
      };
    });
    return items;
  }

  /**
   * @public
   * @method myAccountComponentLinks convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async myAccountComponentLinks(data) {
    const linkList = data.items;
    if (!linkList.length > 0) {
      return linkList;
    }

    const items = linkList.map((item) => {
      return {
        target: item.target,
        name: item.title || item.text,
      };
    });

    return items;
  }

  /**
   * @public
   * @method footerLinks convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async footerLinks(data) {
    const servicesItems = data.items;
    if (!servicesItems[0]) {
      return servicesItems;
    }

    const items = servicesItems.map((item) => {
      return {
        target: item.target,
        name: item.title || item.text,
        text: item.text || item.text,
        ...item,
      };
    });
    return items;
  }

  /**
   * @public
   * @method AddContactForm convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async AddContactForm(data) {
    return data;
  }

  /**
   * @public
   * @method Account convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async Account(data) {
    const accountItems = data.items;
    if (!accountItems.length > 0) {
      return accountItems;
    }

    const items = accountItems.map((item) => {
      return {
        target: item.target,
        name: item.name || item.text,
      };
    });
    return items;
  }

  /**
   * @public
   * @method promotionBanner convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async promotionBanner(data) {
    const accountItems = data.items;
    if (!accountItems.length > 0) {
      return accountItems;
    }

    const items = accountItems.map((item) => {
      return {
        target: item.target,
        src: `${config["baseURL"]}${item.image[0] && item.image[0]["medium"]}`,
        name: item.title || item.text,
      };
    });
    return items;
  }

  /**
   * @public
   * @method 'About Us' convert api data from API to general format based on config server
   * @param {Object} data response objectc from wc
   * @returns {Object}  converted data
   */
  async "About Us"(data) {
    const aboutUsItems = data.items;
    if (!aboutUsItems.length > 0) {
      return aboutUsItems;
    }

    const items = aboutUsItems.map((item) => {
      return {
        target: item.target,
        name: item.name || item.text,
      };
    });
    return items;
  }
}

export default Converter;

const x = {
  inserted: [
    {
      _id: "5f22c27b9da63005e00ed81c",
      added: "2020-07-30T12:52:11.568Z",
      products: [
        {
          _id: "5f1d72f7df25a51cda9a86af",
          variation: "5f1d72f7df25a51cda9a86ac",
          unitPrice: 66,
          price: 66,
          quantity: 1,
        },
      ],
      billingAddress: {
        firstName: "Tawhid",
        lastName: "Abdullah",
        country: "Algeria",
        city: "5e8218a9a0be4401500e4d62",
        address1: "Dhaka,mohammadpur-1207",
        address2: "",
        phone: "test",
        email: "lost@gmail.com",
      },
      payment: {
        paymentMethod: "orangeMoney",
        status: "pending",
        pay_token:
          "v1b4d4rc7epz1ibmkadtuxtnzxigb5gudzh7d3sh5wa92eflvtp4lvdtltwtbiyp",
        payment_url:
          "https://webpayment-ow-sb.orange-money.com/sx/mpayment/abstract/v1b4d4rc7epz1ibmkadtuxtnzxigb5gudzh7d3sh5wa92eflvtp4lvdtltwtbiyp",
      },
      status: "Pending",
      totalPrice: 66,
      customer: "5f128439de21e8749d270dd0",
      qrCode: {
        web: "qrCode/web/5f22c27b9da63005e00ed81c-webQr.png",
        app: "qrCode/app/5f22c27b9da63005e00ed81c-appQr.png",
      },
    },
  ],
};
