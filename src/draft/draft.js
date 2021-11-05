  componentDidMount() {
    let base64 = require('base-64');

    let url = 'https://mgppiaf01/piwebapi';
    let username = 'piadmin';
    let password = 'piadmin';

    let headers = new Headers();

    //headers.append('Content-Type', 'text/json');
    //headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));
/*
    fetch( url , {
      //mode: 'no-cors',
      //credentials: 'include',
      //"Content-Type": "application/json",
      //"Access-Control-Allow-Origin": "*",
      method:'GET',
      headers: headers
      //credentials: 'user:passwd'
     })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log('Authorization failed : ' + error.message));
    //.done();

*/
    headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));

    fetch( "https://mgppiaf01/piwebapi/assetservers/F1RScegbpJtv7kKlF5s1SRObWgTUdQUElBRjAx/assetdatabases", {
      method:'GET',
      headers: headers
      //credentials: 'user:passwd'
     })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log('Authorization failed : ' + error.message));
    //.done();

      console.log("loaded")


      if (!String.prototype.format) {
        String.prototype.format = function () {
          var args = arguments;
          return this .replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] !== 'undefined'
            ? args[number]
            : match;
          });
        };
        console.log("Hello")
      }

      var databasePath = "\\\\MGPPIAF01\\Configuration";
      var databaseUrl = "https://mgppiaf01/piwebapi/assetdatabases?path={0}".format(databasePath);
      var plantSearchUrl;
      var pumpSearchUrl;

      //$.getJSON(databaseUrl, function (database) {
       //   plantSearchUrl = database.Links.Elements + "?templateName=Plant&nameFilter=Wichita&searchFullHierarchy=true";
      //});
      console.log(databaseUrl)

  }
