window.ck = {
  get: function(key) { 
    return document.cookie.split(';').map(function(x) { return x.indexOf(key) > -1 ? x : '' } ).join('').split(key + '=')[1] 
  },
  set: function(c) {
    document.cookie = Object.keys(c)[0] + '=' + c[Object.keys(c)[0]] + '; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/'
  }
}