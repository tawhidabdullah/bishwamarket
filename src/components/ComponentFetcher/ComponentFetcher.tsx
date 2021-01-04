import React from "react";

// import hooks
import { useQueryFetch } from "../../hooks";

// import utils
import { isEmpty } from "../../utils";

interface Props {
  type: string;
  apiMapKey: string;
  children: (componentState: any) => React.ReactNode;
}

const ComponentFetcher = ({ type, apiMapKey, children }: Props): any => {
  const componentState = useQueryFetch(apiMapKey);

  function mapResultData(data, dataType) {
    try {
      if (dataType === "text" && data?.toString() === "[object Object]") {
        // If data.text is exists then return the text;
        if (data.text) {
          return data.text;
        } else {
          throw new Error(
            `${apiMapKey}: Format the Data Correctly in the converter.js file or GET the correct data format from the server. ex. {text: 'some string'}`
          );
        }
      } else if (dataType === "linkList" && Array.isArray(data)) {
        return data;
      } else {
        return data;
      }
    } catch (err) {
      // throw err;
      console.error(err);
    }
  }

  if (!isEmpty(componentState?.data) && componentState.isSuccess) {
    const data = componentState.data;
    const dataType = type;
    return children(mapResultData(data, dataType));
  } else {
    return <></>;
  }
};

export default ComponentFetcher;
