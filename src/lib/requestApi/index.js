class RequestApi {
  constructor() {
    this.baseURL = null;
    this.currentURL;
    this.headers;
    this.cacheHandler = new Map(); // default cache handler; store in memory
  }

  set baseURL(url) {
    if (!RequestApi.isUrlValid(url)) throw new TypeError("Invalid Url");

    //remove trailing slash 
    if(url[url.length] == "/"){ 
      url = url.slice(0, url.length - 1);
    }

    this.baseURL = url;
  }

  get baseURL() {
    return this.baseURL;
  }

  set cacheHandler(handler){
    if(!handler.__proto__.has || typeof handler.__proto__.has !== 'function'){
      throw new Error("handler must have method has()")
    }
    if(!handler.__proto__.get || typeof handler.__proto__.get !== 'function'){
      throw new Error("handler must have method get()")
    }
    if(!handler.__proto__.set || typeof handler.__proto__.set !== 'function'){
      throw new Error("handler must have method set()")
    }
    if(!handler.__proto__.delete || typeof handler.__proto__.delete !== 'function'){
      throw new Error("handler must have method delete()")
    }

    this.cacheHandler = handler;
  }

  get cacheHandler(){
    return this.cacheHandler;
  }


  set headers(headerObject){

  }

  async getRequest(url) {
    this.currentURL = RequestApi.prepareUrl(url, this.baseURL);

    //fetch request
    //... 
    // ...



  }

  static isUrlValid(url) {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(url);
  }

  static isAbsoluteUrl(url){
    const pattern = new RegExp('^(?:[a-z]+:)?//', 'i');
    return pattern.test(url)
  }

  static prepareUrl(url, baseURL){

    if(RequestApi.isAbsoluteUrl(url)) return url; //absolute url passed; ignored baseurl
    else{
      if(!baseURL) throw new Error("Invalid URL, make sure to pass baseURL if first argument contains relative URL");

      if(url[0] !== "/" && baseURL[baseURL.length-1] !=='/') url = "/" + url; //add forward slash if not present

      return baseURL + url;
    }
  }

  static generateUniqueRequestKey(url){
    
  }
}


let requestApi = new RequestApi()
requestApi.baseURL = "Https://google.com"
requestApi.cacheHandler = new ChacheHandler();

class ChacheHandler{
  constructor(){
    this.cache = {}
  }
  has(key){
    return Object.keys(this.cache).includes(key);
  }
  get(key){
    return this.cache[key]
  }
  set(key, value){
    this.cache[key] = value
  }
  delete(key){
    delete this.cache[key]
  }
}

