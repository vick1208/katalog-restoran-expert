const UrlParser = {
  parseActiveUrlWithCombiner(){
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },
  parseActiveUrlWithoutCombiner(){
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url){
    const splitUrl = url.split('/');
    return {
      resource: splitUrl[1] || null,
      id: splitUrl[2] || null,
      verb: splitUrl[3] || null,
    };
  },
  _urlCombiner(splitedUrl){
    return (splitedUrl.resource ? `/${splitedUrl.resource}`:'/')
    + (splitedUrl.id?'/:id':'')
    + (splitedUrl.verb? `/${splitedUrl.verb}`:'');
  }
};

export default UrlParser;