/**
 * changeMeta change meta data of document
 * @param {String} name name of meta tag to change
 * @param {String} attribute name of attribute to set e.g: keywords || description
 * @param {String} content content to set as value of attribute
 */

function changeMeta(name, attribute, content) {
  try {
    let existingMetaTag = document.querySelector(`meta[name=${name}]`);

    if (!existingMetaTag) {
      //create tag
      existingMetaTag = document.createElement("meta");
      existingMetaTag.setAttribute("name", name);
      document.head.appendChild(existingMetaTag);
    }

    //set content
    existingMetaTag.setAttribute(attribute, content);

    return true;
  } catch (err) {
    console.log("could not perform meta change, error: ");
    console.log(err.message);
    return false;
  }
}

// export default changeMeta;

function changeTitle(newTitle) {
  document.title = newTitle;
}

export { changeTitle, changeMeta };
