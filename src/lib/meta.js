/**
 * changeMeta change meta data of document
 * @param {String} name name of meta tag to change
 * @param {String} attribute name of attribute to set e.g: keywords || description
 * @param {String} content content to set as value of attribute 
 */

function changeMeta(name, attribute, content){
    try{
        let metaTags = document.getElementsByTagName('name');

        
        let metaToChange;
        for(let tag in metaTags){
            if(typeof metaTags[tag] != 'object') continue; //skip primitive props
            if(metaTags[tag].name == name) metaToChange = metaTags[tag];
        }


        if(!metaToChange){ //create tag
            metaToChange = document.createElement('meta');
            metaToChange.setAttribute('name', name);
            document.head.appendChild(metaToChange)
        }
        metaToChange.setAttribute(attribute, content);
        return true
    }catch(err){
        console.log('could not perform meta change, error: ');
        console.log(err.message);
        return false;
    }
}
// export default changeMeta;

function changeTitle(newTitle){
    document.title = newTitle || ''
}

export {
    changeTitle,
    changeMeta
}