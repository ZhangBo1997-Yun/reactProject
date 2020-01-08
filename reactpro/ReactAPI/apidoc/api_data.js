define({ "api": [
  {
    "type": "get",
    "url": "getGoodsById/:id",
    "title": "获取单个商品信息",
    "name": "getGoodsById",
    "group": "api",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>商品id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/home.js",
    "groupTitle": "api"
  },
  {
    "type": "get",
    "url": "getHome",
    "title": "获取首页信息",
    "name": "getHome",
    "group": "api",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "banners",
            "description": "<p>banners of  the goods</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "themes",
            "description": "<p>themes of the goods</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>products of the goods</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/home.js",
    "groupTitle": "api"
  },
  {
    "type": "get",
    "url": "getHome",
    "title": "获取首页信息",
    "name": "getHome",
    "group": "api",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "banners",
            "description": "<p>banners of the goods.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "themes",
            "description": "<p>themes of the goods.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>products of the goods.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "api"
  },
  {
    "type": "get",
    "url": "getThemeById/:themeid/:page获取主题信息根据id",
    "title": "柯分页",
    "name": "getThemeById",
    "group": "api",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>数据页码数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "themeid",
            "description": "<p>主题id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/home.js",
    "groupTitle": "api"
  },
  {
    "type": "get",
    "url": "/goodsByType/:type",
    "title": "根据类别查找商品",
    "name": "goodsByType",
    "group": "api",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>type unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/home.js",
    "groupTitle": "api"
  },
  {
    "type": "get",
    "url": "goodsType/",
    "title": "获取类别信息",
    "name": "goodsType",
    "group": "api",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/home.js",
    "groupTitle": "api"
  },
  {
    "type": "get",
    "url": "goodslist/",
    "title": "获取所有商品信息",
    "name": "goodslist",
    "group": "api",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/home.js",
    "groupTitle": "api"
  }
] });
