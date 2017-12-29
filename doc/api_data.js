define({ "api": [
  {
    "type": "get",
    "url": "/calendar?start=17082017&to=17122017",
    "title": "Get Kalender.",
    "version": "0.1.0",
    "group": "API_V_1",
    "name": "GetCalender",
    "description": "<p>digunakan untuk mendapatkan List Kalender.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "start",
            "description": "<p>Optional start format date ='ddMMYYYY'.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "to",
            "description": "<p>Optional to with format date ='ddMMYYYY'.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Cara penggunaan:",
        "content": "http://apps.prosia.co.id:8072/sarcore/calendar?start=17082017&to=17122017",
        "type": "json"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": " {\n    \"response_code\": \"00\",\n    \"response_message\": \"Success.\",\n    \"data\": [\n        {\n            \"title\": \"judul\",\n            \"all_day\": true,\n            \"start_date\": \"2017-11-28 13:27:29.636\",\n            \"end_date\": \"2017-11-28 13:27:29.636\",\n            \"repeat\": \"no repeat\",\n            \"reminder\": 10\n        },\n        {\n            \"title\": \"Senam Pagi yang ke 100\",\n            \"all_day\": true,\n            \"start_date\": \"2017-11-24 17:40:00.0+07\",\n            \"end_date\": \"2017-11-24 17:40:00.0+07\",\n            \"repeat\": \"monthly\",\n            \"reminder\": 10\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 UnAuthorized\n{\n    \"response_code\": \"UA\",\n    \"response_message\": \"Invalid/expired access token.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./calender.js",
    "groupTitle": "API_V_1"
  },
  {
    "type": "get",
    "url": "/library",
    "title": "Get Library.",
    "version": "0.1.0",
    "group": "API_V_1",
    "name": "GetLibrary",
    "description": "<p>digunakan untuk mendapatkan List Perpustakaan.</p>",
    "examples": [
      {
        "title": "Cara penggunaan:",
        "content": "http://apps.prosia.co.id:8072/sarcore/library",
        "type": "json"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": " {\n    \"response_code\": \"00\",\n    \"response_message\": \"Success.\",\n    \"data\": [\n        {\n            \"url_image_lib\": \"http://apps.prosia.co.id:8072/sarcore/document/library/1\",\n            \"downloadfile\": \"http://apps.prosia.co.id:8072/sarcore/download/1?name=ic_buku_sample.jpg\",\n            \"lib_id\": 1,\n            \"title\": \"judul edit\",\n            \"created_by\": \"superadmin\",\n            \"created_date\": \"2017-11-27 21:29:06.733\",\n            \"lib_attachment\": \"ic_buku_sample.jpg\",\n            \"book_content\": \"deskripsi edit\"\n        },\n        {\n            \"url_image_lib\": \"http://apps.prosia.co.id:8072/sarcore/document/library/6\",\n            \"downloadfile\": \"http://apps.prosia.co.id:8072/sarcore/download/6?name=Export-Import OracleDB.txt\",\n            \"lib_id\": 6,\n            \"title\": \"vvvv\",\n            \"created_by\": \"superadmin\",\n            \"created_date\": \"2017-11-28 17:09:17.641\",\n            \"lib_attachment\": \"Export-Import OracleDB.txt\",\n            \"book_content\": \"ddddd\"\n        },\n        {\n            \"url_image_lib\": \"http://apps.prosia.co.id:8072/sarcore/document/library/7\",\n            \"downloadfile\": \"http://apps.prosia.co.id:8072/sarcore/download/7?name=68529937-praise-wallpapers.jpg\",\n            \"lib_id\": 7,\n            \"title\": \"a123\",\n            \"created_by\": \"superadmin2\",\n            \"created_date\": \"2017-11-30 15:20:02.612\",\n            \"lib_attachment\": \"68529937-praise-wallpapers.jpg\",\n            \"book_content\": \"bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla \"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 UnAuthorized\n{\n    \"response_code\": \"UA\",\n    \"response_message\": \"Invalid/expired access token.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./library.js",
    "groupTitle": "API_V_1"
  },
  {
    "type": "get",
    "url": "/notif?limit=10&start_from_id=1",
    "title": "Get Notif.",
    "version": "0.1.0",
    "group": "API_V_1",
    "name": "GetNotif",
    "description": "<p>digunakan untuk mendapatkan List Notifikasi.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>Optional limit with default 10.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "start_from_id",
            "defaultValue": "1",
            "description": "<p>Optional start_from_id with default 1.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Cara penggunaan:",
        "content": "http://apps.prosia.co.id:8072/sarcore/notif?limit=10&start_from_id=1",
        "type": "json"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": " {\n    \"response_code\": \"00\",\n    \"response_message\": \"Success.\",\n    \"data\": [\n        {\n            \"notification_id\": 1,\n            \"message\": \"Konten Digital\",\n            \"created_date\": \"2017-11-23 16:49:59.45\",\n            \"created_by\": \"superadmin\",\n            \"flag_comment\": false,\n            \"comment_list\": [\n                {\n                    \"comment\": \"aaaaaa\",\n                    \"gender\": \"M\",\n                    \"created_date\": \"2017-12-06 21:10:56.415\",\n                    \"created_by\": \"198611232010121001\"\n                },\n                {\n                    \"comment\": \"okeè..\",\n                    \"gender\": \"M\",\n                    \"created_date\": \"2017-12-20 19:26:05.234\",\n                    \"created_by\": \"198611232010121001\"\n                }]\n        }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 UnAuthorized\n{\n    \"response_code\": \"UA\",\n    \"response_message\": \"Invalid/expired access token.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./notif.js",
    "groupTitle": "API_V_1"
  },
  {
    "type": "post",
    "url": "/authenticate",
    "title": "Generate token.",
    "version": "0.1.0",
    "name": "GetUser",
    "group": "API_V_1",
    "description": "<p>digunakan untuk mengenerate Token.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Cara penggunaan:",
        "content": "http://apps.prosia.co.id:8072/sarcore/authenticate",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Post-Example Body:",
          "content": "Post Example\n   {\n     \"username\" : \"198611232010121001\",\n     \"password\": \"123\"\n   }",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"response_code\": \"00\",\n    \"access_token\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ\",\n    \"menu_list\": [\n        \"PROFILE\",\n        \"SETTING\",\n        \"POLICY\",\n        \"FEEDBACK\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 UnAuthorized\n{\n    \"response_code\": \"UA\",\n    \"response_message\": \"Username or password not match.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./example.js",
    "groupTitle": "API_V_1"
  },
  {
    "type": "get",
    "url": "/profile",
    "title": "Get Profile.",
    "version": "0.1.0",
    "group": "API_V_1",
    "name": "GetUserDetail",
    "description": "<p>digunakan untuk mendapatkan detail user.</p>",
    "examples": [
      {
        "title": "Cara penggunaan:",
        "content": "http://apps.prosia.co.id:8072/sarcore/profile",
        "type": "json"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": " {\n    \"response_code\": \"00\",\n    \"response_message\": \"Success.\",\n    \"data\": {\n        \"personel_id\": \"UPG-1201-0111\",\n        \"nrp\": \"198611232010121001\",\n        \"name\": \"nama personel\",\n        \"email\": \"test@test.com\",\n        \"username\": \"198611232010121001\",\n        \"address\": \"Tes lagi ya\",\n        \"identity_number\": null,\n        \"telephone_1\": null,\n        \"telephone_2\": \"123456\",\n        \"birthdate\": null,\n        \"sar_office\": \"KANTOR PUSAT\",\n        \"status\": null,\n        \"blood_type\": null,\n        \"information\": null,\n        \"religion\": null,\n        \"division\": null,\n        \"position\": null,\n        \"class\": null,\n        \"gender\": \"M\",\n        \"passport_number\": null,\n        \"image\": null\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 UnAuthorized\n{\n    \"response_code\": \"UA\",\n    \"response_message\": \"Invalid/expired access token.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./example.js",
    "groupTitle": "API_V_1"
  },
  {
    "type": "post",
    "url": "/placemark",
    "title": "Add Penanda Lokasi.",
    "version": "0.1.0",
    "group": "API_V_1_post",
    "name": "AddPlacemark",
    "description": "<p>digunakan untuk menambahkan lokasi ==&gt;Menggunakan MultiPart.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nama Lokasi.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Deskripsi Lokasi.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude Lokasi(required).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "longitude",
            "description": "<p>Latitude Lokasi (required).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "incident_id",
            "description": "<p>incident id.</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "uploadfile",
            "description": "<p>File Upload (Max 5MB).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Cara penggunaan:",
        "content": "http://apps.prosia.co.id:8072/sarcore/placemark",
        "type": "json"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": " {\n    \"response_code\": \"00\",\n    \"response_message\": \"Save Succes\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 UnAuthorized\n{\n    \"response_code\": \"UA\",\n    \"response_message\": \"Invalid/expired access token.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./placemark.js",
    "groupTitle": "API_V_1_post"
  },
  {
    "type": "Post",
    "url": "/incident/:incidentid/log",
    "title": "Add Log Incident.",
    "version": "0.1.0",
    "group": "API_V_1_post",
    "name": "addLogIncident",
    "description": "<p>digunakan untuk menambahkan Log Incident ==&gt;MultiPart .</p>",
    "examples": [
      {
        "title": "Cara penggunaan:",
        "content": "http://apps.prosia.co.id:8072/sarcore/incident/CGK-1303-0003/log",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subject_log",
            "description": "<p>Subject Log.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>content Log.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>date Log.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": "<p>time Log.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "initiator",
            "description": "<p>initiator Log.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "latitude",
            "description": "<p>latitude Log.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "longitude",
            "description": "<p>longitude Log.</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "uploadfile",
            "description": "<p>Upload Log file max 5mb.</p>"
          }
        ]
      }
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "\t  {\n    \"response_code\": \"00\",\n    \"response_message\": \"Save Succes\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 UnAuthorized\n{\n    \"response_code\": \"UA\",\n    \"response_message\": \"Invalid/expired access token.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./log.js",
    "groupTitle": "API_V_1_post"
  },
  {
    "type": "Post",
    "url": "/notifikasi",
    "title": "Add Notifikasi.",
    "version": "0.1.0",
    "group": "API_V_1_post",
    "name": "addNotifNull",
    "description": "<p>digunakan untuk menambahkan Notifikasi apabila belum ada.</p>",
    "examples": [
      {
        "title": "Cara penggunaan:",
        "content": "http://apps.prosia.co.id:8072/sarcore/notifikasi",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notifjudul",
            "description": "<p>Judul Notifikasi</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notifkonten",
            "description": "<p>Konten Notifikasi</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "tanggapi",
            "defaultValue": "false",
            "description": "<p>apabila tanggapi=false maka notifikasi tidak bisa ditanggapi</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "listpersonilid",
            "description": "<p>Apabila Personilnya lebih dari 1 maka gunakan pemisah &quot;,&quot;.(Required)</p>"
          }
        ]
      }
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "\t  {\n    \"response_code\": \"00\",\n    \"response_message\": \"Save Succes\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 UnAuthorized\n{\n    \"response_code\": \"UA\",\n    \"response_message\": \"Invalid/expired access token.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./addNotif.js",
    "groupTitle": "API_V_1_post"
  },
  {
    "type": "Post",
    "url": "/kritiksaran",
    "title": "Add Kritik Dan saran.",
    "version": "0.1.0",
    "group": "API_V_1_post",
    "name": "addSaran",
    "description": "<p>digunakan untuk menambahkan kritik dan saran.</p>",
    "examples": [
      {
        "title": "Cara penggunaan:",
        "content": "http://apps.prosia.co.id:8072/sarcore/kritiksaran",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Kritik Dan saran.</p>"
          }
        ]
      }
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Post-Example Body:",
          "content": "Post\n   {\n     \"comment\" : \"Kritik dan saran di masukkan ke sini.\"\n   }",
          "type": "json"
        },
        {
          "title": "Success-Response",
          "content": "\t  {\n    \"response_code\": \"00\",\n    \"response_message\": \"Save Succes\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 UnAuthorized\n{\n    \"response_code\": \"UA\",\n    \"response_message\": \"Invalid/expired access token.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./kritikSaran.js",
    "groupTitle": "API_V_1_post"
  },
  {
    "type": "post",
    "url": "/notif",
    "title": "add notifiksi comment.",
    "version": "0.1.0",
    "group": "API_V_1_post",
    "name": "postnotifcomment",
    "description": "<p>digunakan untuk Menambahkan comment notifikasi ke database.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "notification_id",
            "description": "<p>Notifikasi Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment Notifikasi.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Cara penggunaan:",
        "content": "http://apps.prosia.co.id:8072/sarcore/notif",
        "type": "json"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "   {\n     \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ\",\n\"Content-Type\":\"application/json\"\n   }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Post-Example Body:",
          "content": " Post Example\n{\n\"notification_id\" : 1,\n\"comment\" : \"loren ipsum.....\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response",
          "content": " {\n    \"response_code\": \"00\",\n    \"response_message\": \"Save Succes\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 UnAuthorized\n{\n    \"response_code\": \"UA\",\n    \"response_message\": \"Invalid/expired access token.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./notif.js",
    "groupTitle": "API_V_1_post"
  },
  {
    "type": "get",
    "url": "/notif/count",
    "title": "Count Notif.",
    "version": "0.1.0",
    "group": "API_V_1",
    "name": "addNotifCount",
    "description": "<p>digunakan untuk mengitung notif.</p>",
    "examples": [
      {
        "title": "Cara penggunaan:",
        "content": "http://apps.prosia.co.id:8072/sarcore/notif/count",
        "type": "json"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "3",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 UnAuthorized\n{\n    \"response_code\": \"UA\",\n    \"response_message\": \"Invalid/expired access token.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./addNotif.js",
    "groupTitle": "API_V_1"
  },
  {
    "type": "get",
    "url": "/planning/drift/{incidentid}",
    "title": "Get Driftcalculation.",
    "version": "0.1.0",
    "group": "API_V_1",
    "name": "getDrift",
    "description": "<p>digunakan untuk mendapatkan List Driftcalculation.</p>",
    "examples": [
      {
        "title": "Cara penggunaan:",
        "content": "http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014",
        "type": "json"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"response_code\": \"00\",\n    \"response_message\": \"Success.\",\n    \"data\": [\n        {\n            \"worksheet1\": [\n                {\n                    \"worksheet_name\": \"ws1\",\n                    \"description\": null,\n                    \"latitude\": \"-5.81890491\",\n                    \"longitude\": \"106.80583333333334\",\n                    \"incident_time\": \"2017-11-28 15:01:28.0\",\n                    \"operation_time\": \"2017-11-29 15:04:00.0\",\n                    \"safety_factor\": 1.1,\n                    \"unit\": \"0.0\",\n                    \"sea_current_angle\": 0.2,\n                    \"sea_current_speed\": 0.4,\n                    \"sea_current_distance\": 0.187,\n                    \"surface_wind_angle\": 0.2,\n                    \"wind_current_angle\": 0.2,\n                    \"wind_current_speed\": null,\n                    \"wind_current_distance\": 0.0144,\n                    \"leeway_divergence_angle\": 6.4983,\n                    \"leeway_distance\": 6.4983,\n                    \"leeway_speed\": 0.2702,\n                    \"leeway_left_angle\": 329.2,\n                    \"leeway_right_angle\": 31.2,\n                    \"drift_left_distance\": 6.6717,\n                    \"drift_right_distance\": 6.6717,\n                    \"drif_left_to_right_distance\": 6.6937,\n                    \"drift_error\": 4.1808,\n                    \"drift_error_percentage\": 12.5,\n                    \"distress_craft_error\": 0.1,\n                    \"search_craft_error\": 0.1,\n                    \"probable_error_total\": 4.1832,\n                    \"drift_left_latitude\": \"-5.722689\",\n                    \"drift_left_longitude\": \"106.750211\",\n                    \"drift_right_latitude\": \"-5.723078\",\n                    \"drift_right_longitude\": \"106.862130\",\n                    \"datum_latitude\": \"-5.722886\",\n                    \"datum_longitude\": \"106.806170\",\n                    \"search_radius\": 5,\n                    \"search_area\": 100,\n                    \"drift_left_to_right_angle\": 90.2,\n                    \"wind_current_speed_cal_distance\": 0.03086667,\n                    \"incident_to_datum_angle\": 0.2,\n                    \"search_area_on_map\": {\n                        \"overlays\": [\n                            {\n                                \"position\": {\n                                    \"lng\": 106.88979371325608,\n                                    \"lat\": -5.639844061979793\n                                },\n                                \"type\": \"Marker\",\n                                \"title\": \"Poin A\"\n                            },\n                            {\n                                \"position\": {\n                                    \"lng\": 106.88921193802022,\n                                    \"lat\": -5.806509713256083\n                                },\n                                \"type\": \"Marker\",\n                                \"title\": \"Poin B\"\n                            },\n                            {\n                                \"position\": {\n                                    \"lng\": 106.72254628674392,\n                                    \"lat\": -5.8059279380202105\n                                },\n                                \"type\": \"Marker\",\n                                \"title\": \"Poin C\"\n                            },\n                            {\n                                \"position\": {\n                                    \"lng\": 106.72312806197979,\n                                    \"lat\": -5.639262286743921\n                                },\n                                \"type\": \"Marker\",\n                                \"title\": \"Poin D\"\n                            },\n                            {\n                                \"paths\": [\n                                    {\n                                        \"lng\": 106.88979371325608,\n                                        \"lat\": -5.639844061979793\n                                    },\n                                    {\n                                        \"lng\": 106.88921193802022,\n                                        \"lat\": -5.806509713256083\n                                    },\n                                    {\n                                        \"lng\": 106.72254628674392,\n                                        \"lat\": -5.8059279380202105\n                                    },\n                                    {\n                                        \"lng\": 106.72312806197979,\n                                        \"lat\": -5.639262286743921\n                                    }\n                                ],\n                                \"strokeWeight\": 3,\n                                \"type\": \"Polyline\",\n                                \"strokeColor\": \"#FF0000\"\n                            }\n                        ]\n                    },\n                    \"search_pattern\": null,\n                    \"search_task_area\": {\n                        \"overlays\": [\n                            {\n                                \"paths\": [\n                                    {\n                                        \"lng\": 106.72312806197979,\n                                        \"lat\": -5.6392622867439135\n                                    },\n                                    {\n                                        \"lng\": 106.80646088761793,\n                                        \"lat\": -5.63955317436185\n                                    },\n                                    {\n                                        \"lng\": 106.80599546742926,\n                                        \"lat\": -5.772885695382889\n                                    },\n                                    {\n                                        \"lng\": 106.72266264179109,\n                                        \"lat\": -5.7725948077649525\n                                    },\n                                    {\n                                        \"lng\": 106.72312806197979,\n                                        \"lat\": -5.6392622867439135\n                                    }\n                                ],\n                                \"strokeWeight\": 3,\n                                \"fillOpacity\": 0.1,\n                                \"strokeOpacity\": 3,\n                                \"type\": \"Polygon\",\n                                \"strokeColor\": \"#000000\",\n                                \"fillColor\": \"#000000\"\n                            }\n                        ]\n                    }\n                },\n                {\n                    \"worksheet_name\": \"aaaa\",\n                    \"description\": null,\n                    \"latitude\": \"-5.81890491\",\n                    \"longitude\": \"106.80583333333334\",\n                    \"incident_time\": \"2017-11-28 15:01:28.0\",\n                    \"operation_time\": \"2017-12-19 00:00:00.0\",\n                    \"safety_factor\": 1.1,\n                    \"unit\": \"0.0\",\n                    \"sea_current_angle\": 10,\n                    \"sea_current_speed\": 4,\n                    \"sea_current_distance\": 38.0203,\n                    \"surface_wind_angle\": 6,\n                    \"wind_current_angle\": 6,\n                    \"wind_current_speed\": null,\n                    \"wind_current_distance\": 1.0269,\n                    \"leeway_divergence_angle\": 0.5868,\n                    \"leeway_distance\": 0.5868,\n                    \"leeway_speed\": 0.0012,\n                    \"leeway_left_angle\": 351,\n                    \"leeway_right_angle\": 21,\n                    \"drift_left_distance\": 39.6004,\n                    \"drift_right_distance\": 39.6207,\n                    \"drif_left_to_right_distance\": 0.3038,\n                    \"drift_error\": 5.1032,\n                    \"drift_error_percentage\": 12.5,\n                    \"distress_craft_error\": 0.1,\n                    \"search_craft_error\": 0.1,\n                    \"probable_error_total\": 5.1052,\n                    \"drift_left_latitude\": \"-5.169335\",\n                    \"drift_left_longitude\": \"106.916378\",\n                    \"drift_right_latitude\": \"-5.169863\",\n                    \"drift_right_longitude\": \"106.921424\",\n                    \"datum_latitude\": \"-5.169601\",\n                    \"datum_longitude\": \"106.918922\",\n                    \"search_radius\": 6,\n                    \"search_area\": 144,\n                    \"drift_left_to_right_angle\": 96,\n                    \"wind_current_speed_cal_distance\": 0.10803333,\n                    \"incident_to_datum_angle\": 9.84102274,\n                    \"search_area_on_map\": {\n                        \"overlays\": [\n                            {\n                                \"position\": {\n                                    \"lng\": 106.88979371325608,\n                                    \"lat\": -5.639844061979793\n                                },\n                                \"type\": \"Marker\",\n                                \"title\": \"Poin A\"\n                            },\n                            {\n                                \"position\": {\n                                    \"lng\": 106.88921193802022,\n                                    \"lat\": -5.806509713256083\n                                },\n                                \"type\": \"Marker\",\n                                \"title\": \"Poin B\"\n                            },\n                            {\n                                \"position\": {\n                                    \"lng\": 106.72254628674392,\n                                    \"lat\": -5.8059279380202105\n                                },\n                                \"type\": \"Marker\",\n                                \"title\": \"Poin C\"\n                            },\n                            {\n                                \"position\": {\n                                    \"lng\": 106.72312806197979,\n                                    \"lat\": -5.639262286743921\n                                },\n                                \"type\": \"Marker\",\n                                \"title\": \"Poin D\"\n                            },\n                            {\n                                \"paths\": [\n                                    {\n                                        \"lng\": 106.88979371325608,\n                                        \"lat\": -5.639844061979793\n                                    },\n                                    {\n                                        \"lng\": 106.88921193802022,\n                                        \"lat\": -5.806509713256083\n                                    },\n                                    {\n                                        \"lng\": 106.72254628674392,\n                                        \"lat\": -5.8059279380202105\n                                    },\n                                    {\n                                        \"lng\": 106.72312806197979,\n                                        \"lat\": -5.639262286743921\n                                    }\n                                ],\n                                \"strokeWeight\": 3,\n                                \"type\": \"Polyline\",\n                                \"strokeColor\": \"#FF0000\"\n                            }\n                        ]\n                    },\n                    \"search_pattern\": null,\n                    \"search_task_area\": {\n                        \"overlays\": [\n                            {\n                                \"paths\": [\n                                    {\n                                        \"lng\": 106.72312806197979,\n                                        \"lat\": -5.6392622867439135\n                                    },\n                                    {\n                                        \"lng\": 106.80646088761793,\n                                        \"lat\": -5.63955317436185\n                                    },\n                                    {\n                                        \"lng\": 106.80599546742926,\n                                        \"lat\": -5.772885695382889\n                                    },\n                                    {\n                                        \"lng\": 106.72266264179109,\n                                        \"lat\": -5.7725948077649525\n                                    },\n                                    {\n                                        \"lng\": 106.72312806197979,\n                                        \"lat\": -5.6392622867439135\n                                    }\n                                ],\n                                \"strokeWeight\": 3,\n                                \"fillOpacity\": 0.1,\n                                \"strokeOpacity\": 3,\n                                \"type\": \"Polygon\",\n                                \"strokeColor\": \"#000000\",\n                                \"fillColor\": \"#000000\"\n                            }\n                        ]\n                    }\n                },\n                {\n                    \"worksheet_name\": \"ws1-a\",\n                    \"description\": null,\n                    \"latitude\": \"-5.81890491\",\n                    \"longitude\": \"106.80583333333334\",\n                    \"incident_time\": \"2017-11-28 15:01:28.0\",\n                    \"operation_time\": \"2017-12-13 05:00:00.0\",\n                    \"safety_factor\": 1.1,\n                    \"unit\": \"0.0\",\n                    \"sea_current_angle\": 0.1,\n                    \"sea_current_speed\": 0.5,\n                    \"sea_current_distance\": 3.4016,\n                    \"surface_wind_angle\": 0.3,\n                    \"wind_current_angle\": 0.3,\n                    \"wind_current_speed\": null,\n                    \"wind_current_distance\": 0.175,\n                    \"leeway_divergence_angle\": 94.5655,\n                    \"leeway_distance\": 94.5655,\n                    \"leeway_speed\": 0.2702,\n                    \"leeway_left_angle\": 329.3,\n                    \"leeway_right_angle\": 31.3,\n                    \"drift_left_distance\": 97.6545,\n                    \"drift_right_distance\": 97.6427,\n                    \"drif_left_to_right_distance\": 97.4097,\n                    \"drift_error\": 60.9109,\n                    \"drift_error_percentage\": 12.5,\n                    \"distress_craft_error\": 0.1,\n                    \"search_craft_error\": 0.1,\n                    \"probable_error_total\": 60.9111,\n                    \"drift_left_latitude\": \"-4.406099\",\n                    \"drift_left_longitude\": \"106.000428\",\n                    \"drift_right_latitude\": \"-4.414565\",\n                    \"drift_right_longitude\": \"107.625640\",\n                    \"datum_latitude\": \"-4.410868\",\n                    \"datum_longitude\": \"106.813017\",\n                    \"search_radius\": 68,\n                    \"search_area\": 18496,\n                    \"drift_left_to_right_angle\": 90.3,\n                    \"wind_current_speed_cal_distance\": 0.02572222,\n                    \"incident_to_datum_angle\": 0.29146247,\n                    \"search_area_on_map\": {\n                        \"overlays\": [\n                            {\n                                \"position\": {\n                                    \"lng\": 106.88979371325608,\n                                    \"lat\": -5.639844061979793\n                                },\n                                \"type\": \"Marker\",\n                                \"title\": \"Poin A\"\n                            },\n                            {\n                                \"position\": {\n                                    \"lng\": 106.88921193802022,\n                                    \"lat\": -5.806509713256083\n                                },\n                                \"type\": \"Marker\",\n                                \"title\": \"Poin B\"\n                            },\n                            {\n                                \"position\": {\n                                    \"lng\": 106.72254628674392,\n                                    \"lat\": -5.8059279380202105\n                                },\n                                \"type\": \"Marker\",\n                                \"title\": \"Poin C\"\n                            },\n                            {\n                                \"position\": {\n                                    \"lng\": 106.72312806197979,\n                                    \"lat\": -5.639262286743921\n                                },\n                                \"type\": \"Marker\",\n                                \"title\": \"Poin D\"\n                            },\n                            {\n                                \"paths\": [\n                                    {\n                                        \"lng\": 106.88979371325608,\n                                        \"lat\": -5.639844061979793\n                                    },\n                                    {\n                                        \"lng\": 106.88921193802022,\n                                        \"lat\": -5.806509713256083\n                                    },\n                                    {\n                                        \"lng\": 106.72254628674392,\n                                        \"lat\": -5.8059279380202105\n                                    },\n                                    {\n                                        \"lng\": 106.72312806197979,\n                                        \"lat\": -5.639262286743921\n                                    }\n                                ],\n                                \"strokeWeight\": 3,\n                                \"type\": \"Polyline\",\n                                \"strokeColor\": \"#FF0000\"\n                            }\n                        ]\n                    },\n                    \"search_pattern\": null,\n                    \"search_task_area\": {\n                        \"overlays\": [\n                            {\n                                \"paths\": [\n                                    {\n                                        \"lng\": 106.72312806197979,\n                                        \"lat\": -5.6392622867439135\n                                    },\n                                    {\n                                        \"lng\": 106.80646088761793,\n                                        \"lat\": -5.63955317436185\n                                    },\n                                    {\n                                        \"lng\": 106.80599546742926,\n                                        \"lat\": -5.772885695382889\n                                    },\n                                    {\n                                        \"lng\": 106.72266264179109,\n                                        \"lat\": -5.7725948077649525\n                                    },\n                                    {\n                                        \"lng\": 106.72312806197979,\n                                        \"lat\": -5.6392622867439135\n                                    }\n                                ],\n                                \"strokeWeight\": 3,\n                                \"fillOpacity\": 0.1,\n                                \"strokeOpacity\": 3,\n                                \"type\": \"Polygon\",\n                                \"strokeColor\": \"#000000\",\n                                \"fillColor\": \"#000000\"\n                            }\n                        ]\n                    }\n                },\n                {\n                    \"worksheet_name\": \"ws1-b\",\n                    \"description\": null,\n                    \"latitude\": \"-5.81890491\",\n                    \"longitude\": \"106.80583333333334\",\n                    \"incident_time\": \"2017-11-28 15:01:28.0\",\n                    \"operation_time\": \"2017-11-30 09:00:00.0\",\n                    \"safety_factor\": 1.1,\n                    \"unit\": \"0.0\",\n                    \"sea_current_angle\": 0.1,\n                    \"sea_current_speed\": 0.5,\n                    \"sea_current_distance\": 0.408,\n                    \"surface_wind_angle\": 2.4,\n                    \"wind_current_angle\": 2.4,\n                    \"wind_current_speed\": null,\n                    \"wind_current_distance\": 0.1343,\n                    \"leeway_divergence_angle\": 11.3859,\n                    \"leeway_distance\": 11.3859,\n                    \"leeway_speed\": 0.2712,\n                    \"leeway_left_angle\": 331.4,\n                    \"leeway_right_angle\": 33.4,\n                    \"drift_left_distance\": 11.8619,\n                    \"drift_right_distance\": 11.8457,\n                    \"drif_left_to_right_distance\": 11.7283,\n                    \"drift_error\": 7.3459,\n                    \"drift_error_percentage\": 12.5,\n                    \"distress_craft_error\": 0.1,\n                    \"search_craft_error\": 0.1,\n                    \"probable_error_total\": 7.3473,\n                    \"drift_left_latitude\": \"-5.643565\",\n                    \"drift_left_longitude\": \"106.714821\",\n                    \"drift_right_latitude\": \"-5.651734\",\n                    \"drift_right_longitude\": \"106.910724\",\n                    \"datum_latitude\": \"-5.647658\",\n                    \"datum_longitude\": \"106.812755\",\n                    \"search_radius\": 9,\n                    \"search_area\": 324,\n                    \"drift_left_to_right_angle\": 92.4,\n                    \"wind_current_speed_cal_distance\": 0.16462222,\n                    \"incident_to_datum_angle\": 2.30330046,\n                    \"search_area_on_map\": {\n                        \"overlays\": [\n                            {\n                                \"position\": {\n                                    \"lng\": 106.88979371325608,\n                                    \"lat\": -5.639844061979793\n                                },\n                                \"type\": \"Marker\",\n                                \"title\": \"Poin A\"\n                            },\n                            {\n                                \"position\": {\n                                    \"lng\": 106.88921193802022,\n                                    \"lat\": -5.806509713256083\n                                },\n                                \"type\": \"Marker\",\n                                \"title\": \"Poin B\"\n                            },\n                            {\n                                \"position\": {\n                                    \"lng\": 106.72254628674392,\n                                    \"lat\": -5.8059279380202105\n                                },\n                                \"type\": \"Marker\",\n                                \"title\": \"Poin C\"\n                            },\n                            {\n                                \"position\": {\n                                    \"lng\": 106.72312806197979,\n                                    \"lat\": -5.639262286743921\n                                },\n                                \"type\": \"Marker\",\n                                \"title\": \"Poin D\"\n                            },\n                            {\n                                \"paths\": [\n                                    {\n                                        \"lng\": 106.88979371325608,\n                                        \"lat\": -5.639844061979793\n                                    },\n                                    {\n                                        \"lng\": 106.88921193802022,\n                                        \"lat\": -5.806509713256083\n                                    },\n                                    {\n                                        \"lng\": 106.72254628674392,\n                                        \"lat\": -5.8059279380202105\n                                    },\n                                    {\n                                        \"lng\": 106.72312806197979,\n                                        \"lat\": -5.639262286743921\n                                    }\n                                ],\n                                \"strokeWeight\": 3,\n                                \"type\": \"Polyline\",\n                                \"strokeColor\": \"#FF0000\"\n                            }\n                        ]\n                    },\n                    \"search_pattern\": null,\n                    \"search_task_area\": {\n                        \"overlays\": [\n                            {\n                                \"paths\": [\n                                    {\n                                        \"lng\": 106.72312806197979,\n                                        \"lat\": -5.6392622867439135\n                                    },\n                                    {\n                                        \"lng\": 106.80646088761793,\n                                        \"lat\": -5.63955317436185\n                                    },\n                                    {\n                                        \"lng\": 106.80599546742926,\n                                        \"lat\": -5.772885695382889\n                                    },\n                                    {\n                                        \"lng\": 106.72266264179109,\n                                        \"lat\": -5.7725948077649525\n                                    },\n                                    {\n                                        \"lng\": 106.72312806197979,\n                                        \"lat\": -5.6392622867439135\n                                    }\n                                ],\n                                \"strokeWeight\": 3,\n                                \"fillOpacity\": 0.1,\n                                \"strokeOpacity\": 3,\n                                \"type\": \"Polygon\",\n                                \"strokeColor\": \"#000000\",\n                                \"fillColor\": \"#000000\"\n                            }\n                        ]\n                    }\n                },\n                {\n                    \"worksheet_name\": \"angga\",\n                    \"description\": null,\n                    \"latitude\": \"-5.81890491\",\n                    \"longitude\": \"106.80583333333334\",\n                    \"incident_time\": \"2017-11-28 15:01:28.0\",\n                    \"operation_time\": \"2017-12-19 10:13:00.0\",\n                    \"safety_factor\": 1.1,\n                    \"unit\": \"0.0\",\n                    \"sea_current_angle\": 2,\n                    \"sea_current_speed\": 2,\n                    \"sea_current_distance\": 0,\n                    \"surface_wind_angle\": 4,\n                    \"wind_current_angle\": 0,\n                    \"wind_current_speed\": null,\n                    \"wind_current_distance\": 0,\n                    \"leeway_divergence_angle\": 0,\n                    \"leeway_distance\": 0,\n                    \"leeway_speed\": 0,\n                    \"leeway_left_angle\": 0,\n                    \"leeway_right_angle\": 0,\n                    \"drift_left_distance\": 0,\n                    \"drift_right_distance\": 0,\n                    \"drif_left_to_right_distance\": 0,\n                    \"drift_error\": 0,\n                    \"drift_error_percentage\": 12.5,\n                    \"distress_craft_error\": 0.1,\n                    \"search_craft_error\": 0.1,\n                    \"probable_error_total\": 0,\n                    \"drift_left_latitude\": \"-5.722689\",\n                    \"drift_left_longitude\": \"106.750211\",\n                    \"drift_right_latitude\": \"-5.723078\",\n                    \"drift_right_longitude\": \"106.862130\",\n                    \"datum_latitude\": \"-5.722886\",\n                    \"datum_longitude\": \"106.806170\",\n                    \"search_radius\": 0,\n                    \"search_area\": 0,\n                    \"drift_left_to_right_angle\": 90.2,\n                    \"wind_current_speed_cal_distance\": 0,\n                    \"incident_to_datum_angle\": 0.2,\n                    \"search_area_on_map\": {\n                        \"overlays\": [\n                            {\n                                \"position\": {\n                                    \"lng\": 106.88979371325608,\n                                    \"lat\": -5.639844061979793\n                                },\n                                \"type\": \"Marker\",\n                                \"title\": \"Poin A\"\n                            },\n                            {\n                                \"position\": {\n                                    \"lng\": 106.88921193802022,\n                                    \"lat\": -5.806509713256083\n                                },\n                                \"type\": \"Marker\",\n                                \"title\": \"Poin B\"\n                            },\n                            {\n                                \"position\": {\n                                    \"lng\": 106.72254628674392,\n                                    \"lat\": -5.8059279380202105\n                                },\n                                \"type\": \"Marker\",\n                                \"title\": \"Poin C\"\n                            },\n                            {\n                                \"position\": {\n                                    \"lng\": 106.72312806197979,\n                                    \"lat\": -5.639262286743921\n                                },\n                                \"type\": \"Marker\",\n                                \"title\": \"Poin D\"\n                            },\n                            {\n                                \"paths\": [\n                                    {\n                                        \"lng\": 106.88979371325608,\n                                        \"lat\": -5.639844061979793\n                                    },\n                                    {\n                                        \"lng\": 106.88921193802022,\n                                        \"lat\": -5.806509713256083\n                                    },\n                                    {\n                                        \"lng\": 106.72254628674392,\n                                        \"lat\": -5.8059279380202105\n                                    },\n                                    {\n                                        \"lng\": 106.72312806197979,\n                                        \"lat\": -5.639262286743921\n                                    }\n                                ],\n                                \"strokeWeight\": 3,\n                                \"type\": \"Polyline\",\n                                \"strokeColor\": \"#FF0000\"\n                            }\n                        ]\n                    },\n                    \"search_pattern\": null,\n                    \"search_task_area\": {\n                        \"overlays\": [\n                            {\n                                \"paths\": [\n                                    {\n                                        \"lng\": 106.72312806197979,\n                                        \"lat\": -5.6392622867439135\n                                    },\n                                    {\n                                        \"lng\": 106.80646088761793,\n                                        \"lat\": -5.63955317436185\n                                    },\n                                    {\n                                        \"lng\": 106.80599546742926,\n                                        \"lat\": -5.772885695382889\n                                    },\n                                    {\n                                        \"lng\": 106.72266264179109,\n                                        \"lat\": -5.7725948077649525\n                                    },\n                                    {\n                                        \"lng\": 106.72312806197979,\n                                        \"lat\": -5.6392622867439135\n                                    }\n                                ],\n                                \"strokeWeight\": 3,\n                                \"fillOpacity\": 0.1,\n                                \"strokeOpacity\": 3,\n                                \"type\": \"Polygon\",\n                                \"strokeColor\": \"#000000\",\n                                \"fillColor\": \"#000000\"\n                            }\n                        ]\n                    }\n                }\n            ],\n            \"worksheet2\": [\n                {\n                    \"search_object\": \"Ship > 91 (>300 ft)\",\n                    \"search_platform\": \"Fixed Wing\",\n                    \"search_platform_tas\": 180,\n                    \"meteorlogical_visibility\": 20,\n                    \"search_height\": 1000,\n                    \"search_repeat\": \"First\",\n                    \"windspeed\": 5,\n                    \"fatigue_factor\": false,\n                    \"uncorrected_sweep_width\": 13.2,\n                    \"weather_correction_factor\": 1,\n                    \"speed_correction_factor\": 1,\n                    \"fatigue_correction_factor\": 1,\n                    \"sweep_width_factor\": 13.2,\n                    \"practical_track_spacing\": 10,\n                    \"coverage_factor\": 1.32,\n                    \"probability_detection\": 100.7687,\n                    \"search_area\": 50,\n                    \"search_hours\": 0.0278,\n                    \"worksheet_name\": \"ws2a\"\n                },\n                {\n                    \"search_object\": \"Power Boat 10 (33 ft)\",\n                    \"search_platform\": \"Fixed Wing\",\n                    \"search_platform_tas\": 150,\n                    \"meteorlogical_visibility\": 5,\n                    \"search_height\": 1500,\n                    \"search_repeat\": \"First\",\n                    \"windspeed\": 4,\n                    \"fatigue_factor\": true,\n                    \"uncorrected_sweep_width\": 2.2,\n                    \"weather_correction_factor\": 1,\n                    \"speed_correction_factor\": 1,\n                    \"fatigue_correction_factor\": 0.9,\n                    \"sweep_width_factor\": 1.98,\n                    \"practical_track_spacing\": 2,\n                    \"coverage_factor\": 0.99,\n                    \"probability_detection\": 80.9078,\n                    \"search_area\": 0.002,\n                    \"search_hours\": 0,\n                    \"worksheet_name\": \"test wrk 2\"\n                }\n            ],\n            \"worksheet3\": [\n                {\n                    \"search_object\": \"Aircraft > 5700kg\",\n                    \"worksheet_name\": \"ws3b\",\n                    \"meteorlogical_visibility\": 30,\n                    \"search_height\": 1000,\n                    \"search_repeat\": \"First\",\n                    \"vegetation\": \"<15%\",\n                    \"fatigue_factor\": false,\n                    \"uncorrected_sweep_width\": 3,\n                    \"terrain_correction_factor\": 1,\n                    \"fatigue_correction_factor\": 1,\n                    \"sweep_width_factor\": 3,\n                    \"practical_track_spacing\": 5,\n                    \"coverage_factor\": 0.6,\n                    \"probability_detection\": 54.7216,\n                    \"search_area\": 50,\n                    \"search_hours\": 0.0833\n                },\n                {\n                    \"search_object\": \"Person\",\n                    \"worksheet_name\": \"test wrk 3\",\n                    \"meteorlogical_visibility\": 30,\n                    \"search_height\": 500,\n                    \"search_repeat\": \"Third\",\n                    \"vegetation\": \"15-60%\",\n                    \"fatigue_factor\": true,\n                    \"uncorrected_sweep_width\": 0.5,\n                    \"terrain_correction_factor\": 0.5,\n                    \"fatigue_correction_factor\": 0.9,\n                    \"sweep_width_factor\": 0.225,\n                    \"practical_track_spacing\": 10,\n                    \"coverage_factor\": 0.0225,\n                    \"probability_detection\": 6.7085,\n                    \"search_area\": 10,\n                    \"search_hours\": 0.0083\n                }\n            ],\n            \"worksheet8\": []\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 UnAuthorized\n{\n    \"response_code\": \"UA\",\n    \"response_message\": \"Invalid/expired access token.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./driftcalculation.js",
    "groupTitle": "API_V_1"
  },
  {
    "type": "get",
    "url": "/incident",
    "title": "Get Incident.",
    "version": "0.1.0",
    "group": "API_V_1",
    "name": "getIncident",
    "description": "<p>digunakan untuk mendapatkan list incident berdasarkan user login.</p>",
    "examples": [
      {
        "title": "Cara penggunaan:",
        "content": "http://apps.prosia.co.id:8072/sarcore/incident",
        "type": "json"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"response_code\": \"00\",\n    \"response_message\": \"Success.\",\n    \"data\": [\n        {\n            \"incident_id\": \"CGK-1303-0003\",\n            \"incident_name\": \"VESSEL IN DISTRESS\",\n            \"incident_number\": \"CGK-PLY-201303241740G\",\n            \"location\": \"INDIAN OCEAN\",\n            \"latitude\": \"-7.639722222222222\",\n            \"longitude\": \"105.3013888888889\",\n            \"incident_time\": \"2013-03-24 00:00:00.0\",\n            \"gmt\": \"GMT+07:00\",\n            \"incident_type\": \"Kecelakaan Laut\",\n            \"saroffice_list\": [\n                {\n                    \"name\": \"KANTOR SAR JAKARTA\",\n                    \"address\": \"Jl. Marsekal Suryadharma RT. 02 RW. 04 No. 115, Selapanjang, Neglasari, Tangerang 15127\",\n                    \"number\": \"622155727115\"\n                }\n            ],\n            \"picture_list\": []\n        },\n        {\n            \"incident_id\": \"BKS-1304-0001\",\n            \"incident_name\": \"ORANG TERSERET OMBAK\",\n            \"incident_number\": \"BKS-DLL-201304131135G\",\n            \"location\": \"PANTAI PANJANG\",\n            \"latitude\": \"-3.85\",\n            \"longitude\": \"102.2975\",\n            \"incident_time\": \"2013-04-13 00:00:00.0\",\n            \"gmt\": \"GMT+07:00\",\n            \"incident_type\": \"Musibah [Lain-lain]\",\n            \"saroffice_list\": [\n                {\n                    \"name\": \"KANTOR SAR BENGKULU\",\n                    \"address\": \"Jl. Suprapto Dalam No. 10 RT 17/ RW 04 Betungan, Bengkulu\",\n                    \"number\": \"627365500666\"\n                }\n            ],\n            \"picture_list\": []\n        },\n        {\n            \"incident_id\": \"PLM-1312-0001\",\n            \"incident_name\": \"ORANG TENGGELAM\",\n            \"incident_number\": \"PLM-DLL-201312100600G\",\n            \"location\": \"SUNGAI\",\n            \"latitude\": \"-3.3894444444444445\",\n            \"longitude\": \"104.8338888888889\",\n            \"incident_time\": \"2013-01-10 00:00:00.0\",\n            \"gmt\": \"GMT+07:00\",\n            \"incident_type\": \"Musibah [Lain-lain]\",\n            \"saroffice_list\": [\n                {\n                    \"name\": \"KANTOR SAR PALEMBANG\",\n                    \"address\": \"Jl. Gubernur H. Asnawi Mangku Alam/Akses Bandara Internasional Sultan Mahmud Badaruddin II, Palembang \",\n                    \"number\": \"62711357494\"\n                }\n            ],\n            \"picture_list\": []\n        },\n        {\n            \"incident_id\": \"BIK-1407-0002\",\n            \"incident_name\": \"KAPAL TENGGELAM\",\n            \"incident_number\": \"BIK-PLY-201407280940G\",\n            \"location\": \"PERAIRAN NABIRE\",\n            \"latitude\": \"3.3105555555555557\",\n            \"longitude\": \"135.36694444444444\",\n            \"incident_time\": \"2014-07-28 09:50:00.0\",\n            \"gmt\": \"GMT+07:00\",\n            \"incident_type\": \"Kecelakaan Laut\",\n            \"saroffice_list\": [\n                {\n                    \"name\": \"KANTOR SAR BIAK\",\n                    \"address\": \"Jl. Bosnik Raya No. 111 Biak -Papua 98111\",\n                    \"number\": \"6298121111\"\n                }\n            ],\n            \"picture_list\": []\n        },\n        {\n            \"incident_id\": \"TNJ-1707-0001\",\n            \"incident_name\": \"DISTRESS ALERT CORPAS SARSAT\",\n            \"incident_number\": \"TNJ-DLL-201209142255G\",\n            \"location\": \"Perairan Utara Pulau Sembur\",\n            \"latitude\": \"0.6916666666666667\",\n            \"longitude\": \"104.28416666666666\",\n            \"incident_time\": \"2017-07-25 10:02:46.0\",\n            \"gmt\": \"GMT+07:00\",\n            \"incident_type\": \"Musibah [Lain-lain]\",\n            \"saroffice_list\": [\n                {\n                    \"name\": \"KANTOR SAR TANJUNG PINANG\",\n                    \"address\": \"Jl. RH. Fisabilillah No 2 Km 6,5 Atas Tanjungpinang Provinsi Kepulauan Riau - 29125\",\n                    \"number\": \"62771319300\"\n                }\n            ],\n            \"picture_list\": []\n        },\n        {\n            \"incident_id\": \"BDO-1708-0003\",\n            \"incident_name\": \"SJH\",\n            \"incident_number\": \"BDO-BCA-201708211719Z\",\n            \"location\": null,\n            \"latitude\": null,\n            \"longitude\": null,\n            \"incident_time\": \"2017-08-21 00:00:00.0\",\n            \"gmt\": \"GMT+00:00\",\n            \"incident_type\": \"Bencana\",\n            \"saroffice_list\": [\n                {\n                    \"name\": \"KANTOR SAR BANDUNG\",\n                    \"address\": \"Jl. Raya Bandung - Garut KM. 27, Desa Sindang Pakuon, Kab. Sumedang - Jawa Barat 45364\",\n                    \"number\": \"62227780437\"\n                }\n            ],\n            \"picture_list\": []\n        },\n        {\n            \"incident_id\": \"BSN-1708-0001\",\n            \"incident_name\": \"kapal tenggelam\",\n            \"incident_number\": \"BSN-PLY-201708221500Z\",\n            \"location\": null,\n            \"latitude\": null,\n            \"longitude\": null,\n            \"incident_time\": \"2017-08-22 15:02:55.0\",\n            \"gmt\": \"GMT+00:00\",\n            \"incident_type\": \"Kecelakaan Laut\",\n            \"saroffice_list\": [\n                {\n                    \"name\": \"KANTOR PUSAT\",\n                    \"address\": \"Jl. Angkasa Blok B 15  Kav. 2 - 3, Kemayoran Jakarta Pusat\",\n                    \"number\": null\n                }\n            ],\n            \"picture_list\": []\n        },\n        {\n            \"incident_id\": \"BDO-1708-0002\",\n            \"incident_name\": \"GBLA\",\n            \"incident_number\": \"BDO-PNB-201708211642I\",\n            \"location\": null,\n            \"latitude\": null,\n            \"longitude\": null,\n            \"incident_time\": \"2017-08-21 00:00:00.0\",\n            \"gmt\": \"GMT+09:00\",\n            \"incident_type\": \"Kecelakaan Udara\",\n            \"saroffice_list\": [\n                {\n                    \"name\": \"KANTOR SAR BANDUNG\",\n                    \"address\": \"Jl. Raya Bandung - Garut KM. 27, Desa Sindang Pakuon, Kab. Sumedang - Jawa Barat 45364\",\n                    \"number\": \"62227780437\"\n                }\n            ],\n            \"picture_list\": []\n        },\n        {\n            \"incident_id\": \"BSN-1708-0002\",\n            \"incident_name\": \"Tabrakan Kapal\",\n            \"incident_number\": \"BSN-PLY-201708301215G\",\n            \"location\": \"Roxy\",\n            \"latitude\": \"10.0\",\n            \"longitude\": \"10.000833333333333\",\n            \"incident_time\": \"2017-08-30 12:16:04.0\",\n            \"gmt\": \"GMT+07:00\",\n            \"incident_type\": \"Kecelakaan Laut\",\n            \"saroffice_list\": [\n                {\n                    \"name\": \"KANTOR PUSAT\",\n                    \"address\": \"Jl. Angkasa Blok B 15  Kav. 2 - 3, Kemayoran Jakarta Pusat\",\n                    \"number\": null\n                }\n            ],\n            \"picture_list\": []\n        },\n        {\n            \"incident_id\": \"BDO-1708-0005\",\n            \"incident_name\": \"Tabrakan Dokar\",\n            \"incident_number\": \"BDO-PLY-201708301408G\",\n            \"location\": \"PVJ\",\n            \"latitude\": \"10.169444444444444\",\n            \"longitude\": \"10.175555555555556\",\n            \"incident_time\": \"2017-08-30 14:11:54.0\",\n            \"gmt\": \"GMT+07:00\",\n            \"incident_type\": \"Kecelakaan Laut\",\n            \"saroffice_list\": [\n                {\n                    \"name\": \"KANTOR SAR SEMARANG\",\n                    \"address\": \"Jl.Bukit Barisan A.IV No. 09 Perum Permata Puri Ngaliyan Semarang - 50189\",\n                    \"number\": \"62247629192\"\n                }\n            ],\n            \"picture_list\": []\n        },\n        {\n            \"incident_id\": \"PGK-1709-0001\",\n            \"incident_name\": \"AAA\",\n            \"incident_number\": \"PGK-PLY-201709061142G\",\n            \"location\": null,\n            \"latitude\": null,\n            \"longitude\": null,\n            \"incident_time\": \"2017-09-06 11:43:02.0\",\n            \"gmt\": \"GMT+07:00\",\n            \"incident_type\": \"Kecelakaan Laut\",\n            \"saroffice_list\": [\n                {\n                    \"name\": \"KANTOR SAR PANGKAL PINANG\",\n                    \"address\": \"Jl. Pulau Pelepas, Kel. Beluluk Kec. Pangkalan Baru Kab. Bangka Tengah Prov. Kepulauan Bangka Belitung\",\n                    \"number\": \"627174261338\"\n                }\n            ],\n            \"picture_list\": []\n        },\n        {\n            \"incident_id\": \"BSN-1709-0001\",\n            \"incident_name\": \"UFO Down\",\n            \"incident_number\": \"BSN-PNB-201709191140G\",\n            \"location\": \"Jakarta\",\n            \"latitude\": \"6.07091424\",\n            \"longitude\": \"106.821441\",\n            \"incident_time\": \"2017-09-19 11:41:43.0\",\n            \"gmt\": \"GMT+07:00\",\n            \"incident_type\": \"Kecelakaan Udara\",\n            \"saroffice_list\": [\n                {\n                    \"name\": \"KANTOR PUSAT\",\n                    \"address\": \"Jl. Angkasa Blok B 15  Kav. 2 - 3, Kemayoran Jakarta Pusat\",\n                    \"number\": null\n                }\n            ],\n            \"picture_list\": []\n        },\n        {\n            \"incident_id\": \"BSN-1709-0002\",\n            \"incident_name\": \"Insiden1\",\n            \"incident_number\": \"BSN-PLY-201709271517G\",\n            \"location\": \"Roxy\",\n            \"latitude\": \"10.169444444444444\",\n            \"longitude\": \"10.319444444444445\",\n            \"incident_time\": \"2017-09-27 15:19:17.0\",\n            \"gmt\": \"GMT+07:00\",\n            \"incident_type\": \"Kecelakaan Laut\",\n            \"saroffice_list\": [\n                {\n                    \"name\": \"KANTOR PUSAT\",\n                    \"address\": \"Jl. Angkasa Blok B 15  Kav. 2 - 3, Kemayoran Jakarta Pusat\",\n                    \"number\": null\n                }\n            ],\n            \"picture_list\": []\n        },\n        {\n            \"incident_id\": \"BSN-1709-0004\",\n            \"incident_name\": \"Kecelakaan kegencet mobil Truk\",\n            \"incident_number\": \"BSN-PLY-201709281639G\",\n            \"location\": \"Roxy\",\n            \"latitude\": \"10.169444444444444\",\n            \"longitude\": \"10.169444444444444\",\n            \"incident_time\": \"2017-09-28 16:39:55.0\",\n            \"gmt\": \"GMT+07:00\",\n            \"incident_type\": \"Kecelakaan Laut\",\n            \"saroffice_list\": [\n                {\n                    \"name\": \"KANTOR PUSAT\",\n                    \"address\": \"Jl. Angkasa Blok B 15  Kav. 2 - 3, Kemayoran Jakarta Pusat\",\n                    \"number\": null\n                }\n            ],\n            \"picture_list\": []\n        },\n        {\n            \"incident_id\": \"PLW-1708-0001\",\n            \"incident_name\": \"hard code\",\n            \"incident_number\": \"PLW-DLL-201708221700H\",\n            \"location\": null,\n            \"latitude\": null,\n            \"longitude\": null,\n            \"incident_time\": \"2017-08-22 17:01:14.0\",\n            \"gmt\": \"GMT+08:00\",\n            \"incident_type\": \"Musibah [Lain-lain]\",\n            \"saroffice_list\": [\n                {\n                    \"name\": \"KANTOR SAR PALU\",\n                    \"address\": \"Jl. Elang No. 12 Kel. Tanah Mudindi, Kec. Palu Selatan, Kodya Palu\",\n                    \"number\": \"62451481110\"\n                }\n            ],\n            \"picture_list\": []\n        },\n        {\n            \"incident_id\": \"BSN-1708-0003\",\n            \"incident_name\": \"test dari beacon\",\n            \"incident_number\": \"BSN-PLY-201303041624G\",\n            \"location\": \"test\",\n            \"latitude\": \"6.913\",\n            \"longitude\": \"122.069\",\n            \"incident_time\": \"2017-08-30 13:46:54.0\",\n            \"gmt\": \"GMT+07:00\",\n            \"incident_type\": \"Kecelakaan Laut\",\n            \"saroffice_list\": [\n                {\n                    \"name\": \"KANTOR PUSAT\",\n                    \"address\": \"Jl. Angkasa Blok B 15  Kav. 2 - 3, Kemayoran Jakarta Pusat\",\n                    \"number\": null\n                }\n            ],\n            \"picture_list\": []\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 UnAuthorized\n{\n    \"response_code\": \"UA\",\n    \"response_message\": \"Invalid/expired access token.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Incident.js",
    "groupTitle": "API_V_1"
  },
  {
    "type": "get",
    "url": "/incident/:id",
    "title": "Get Incident Detail.",
    "version": "0.1.0",
    "group": "API_V_1",
    "name": "getIncidentDetail",
    "description": "<p>digunakan untuk mendapatkan detail incident berdasarkan incident_id.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id-&gt;incident_id (required).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Cara penggunaan:",
        "content": "http://apps.prosia.co.id:8072/sarcore/incident/CGK-1303-0003",
        "type": "json"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"response_code\": \"00\",\n    \"response_message\": \"Success.\",\n    \"data\": {\n        \"incident_name\": \"VESSEL IN DISTRESS\",\n        \"incident_number\": \"CGK-PLY-201303241740G\",\n        \"sar_office\": \"KANTOR SAR JAKARTA\",\n        \"incident_time\": \"2013-03-24 00:00:00.0\",\n        \"general\": {\n            \"incident_scala\": \"0\",\n            \"sar_office\": \"KANTOR SAR JAKARTA\",\n            \"icident_type\": \"Kecelakaan Laut\",\n            \"incident_number\": \"CGK-PLY-201303241740G\",\n            \"location\": \"INDIAN OCEAN\",\n            \"latitude\": \"-7.639722222222222\",\n            \"longitude\": \"105.3013888888889\",\n            \"smc\": \"KAKANSAR JKT\",\n            \"start_date\": \"2013-03-24 00:00:00.0\",\n            \"close_date\": \"2013-03-24 00:00:00.0\",\n            \"close_ops_date\": null,\n            \"start_ops_date\": \"2013-03-24 08:26:00.0\",\n            \"timezone_start_date\": \"GMT+07:00\",\n            \"timezone_end_date\": \"GMT+07:00\",\n            \"timezone_start_ops_date\": \"GMT+07:00\",\n            \"timezone_end_ops_date\": null,\n            \"survivor_number\": 0,\n            \"lost_number\": 0,\n            \"light_injured_number\": 0,\n            \"heavy_injured_number\": 0,\n            \"death_number\": 0,\n            \"owner_name\": null,\n            \"owner_address\": null,\n            \"owner_email\": null,\n            \"owner_phone_number\": null,\n            \"owner_cellphone_number\": null,\n            \"owner_fax\": null,\n            \"object_call_sign\": null,\n            \"object_length\": null,\n            \"object_colour\": null,\n            \"object_home_base\": null\n        },\n        \"SH\": [\n            {\n                \"date\": \"2012-05-10 07:35:00.0\",\n                \"location\": \"GN SALAK\",\n                \"object\": \"Pesawat\",\n                \"description\": null,\n                \"latitude\": \"6.718611111111111\",\n                \"longitude\": \"106.72111111111111\",\n                \"status\": \"Belum Diproses\"\n            },\n            {\n                \"date\": \"2012-02-08 21:30:00.0\",\n                \"location\": \"TENGGELAM\",\n                \"object\": \"Orang\",\n                \"description\": \"MUSIBAH TUG BOAT SINAR MAS 09 BSG 61 TENGGELAM BERANGKAT DARI BANJARMASIN TUJUAN AMBON PADA KOORDINAT 03 53 00 S 114 32 00 E DI SEKITAR TAKISUNG KMA 6 ORG SELAMAT DAN 4 ORANG BELUM DIKETEMUKAN \",\n                \"latitude\": \"-3.8833333333333333\",\n                \"longitude\": \"114.53333333333333\",\n                \"status\": \"Belum Diproses\"\n            }\n        ],\n        \"SRU\": [\n            {\n                \"asset_type\": \"SRU Laut\",\n                \"name\": \"Imporr\",\n                \"potency_name\": null,\n                \"distance\": null,\n                \"angle\": null,\n                \"tanggal\": \"null\",\n                \"kecepatan\": \"null\",\n                \"endurance\": \"null\"\n            },\n            {\n                \"asset_type\": \"SRU Udara\",\n                \"name\": \"anaks\",\n                \"potency_name\": null,\n                \"distance\": null,\n                \"angle\": null,\n                \"tanggal\": \"null\",\n                \"kecepatan\": \"null\",\n                \"endurance\": \"null\"\n            },\n            {\n                \"asset_type\": \"SRU Udara\",\n                \"name\": \"araajkk\",\n                \"potency_name\": null,\n                \"distance\": null,\n                \"angle\": null,\n                \"tanggal\": \"null\",\n                \"kecepatan\": \"null\",\n                \"endurance\": \"null\"\n            },\n            {\n                \"asset_type\": \"SRU Darat\",\n                \"name\": \"DDD\",\n                \"potency_name\": \"Brimob SAT II Pelopor Kedung Alang\",\n                \"distance\": \"5739.3039\",\n                \"angle\": \"281.3118\",\n                \"tanggal\": \"null\",\n                \"kecepatan\": \"12.0\",\n                \"endurance\": \"10.0\"\n            },\n            {\n                \"asset_type\": \"SRU Udara\",\n                \"name\": \"rendddd\",\n                \"potency_name\": null,\n                \"distance\": null,\n                \"angle\": null,\n                \"tanggal\": \"null\",\n                \"kecepatan\": \"0.0\",\n                \"endurance\": \"0.0\"\n            },\n            {\n                \"asset_type\": \"SRU Udara\",\n                \"name\": \"Pekanbaru 03\",\n                \"potency_name\": null,\n                \"distance\": \"543.2327\",\n                \"angle\": \"334.7591\",\n                \"tanggal\": \"null\",\n                \"kecepatan\": \"0.0\",\n                \"endurance\": \"0.0\"\n            }\n        ],\n        \"resource\": {\n            \"personnel\": [],\n            \"potency\": [\n                {\n                    \"potency_name\": \"Ditpol Air POLRI\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"potency_type\": \"0\",\n                    \"phone_number\": \"6221492124\"\n                },\n                {\n                    \"potency_name\": \"Kecamatan\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"potency_type\": \"0\",\n                    \"phone_number\": \"081319988082\"\n                },\n                {\n                    \"potency_name\": \"ADPEL Tg.Priok\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"potency_type\": \"2\",\n                    \"phone_number\": null\n                },\n                {\n                    \"potency_name\": \"Brimob SAT II Pelopor Cikarang\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"potency_type\": \"0\",\n                    \"phone_number\": \"62214563221\"\n                },\n                {\n                    \"potency_name\": \"KPLP Sunda Kelapa\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"potency_type\": \"0\",\n                    \"phone_number\": null\n                },\n                {\n                    \"potency_name\": \"Dinas Kebakaran DKI Jakarta\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"potency_type\": \"1\",\n                    \"phone_number\": null\n                },\n                {\n                    \"potency_name\": \"Armada PLP. Tj. Priok\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"potency_type\": \"0\",\n                    \"phone_number\": null\n                },\n                {\n                    \"potency_name\": \"Kesbang Pol, Linmas Kab. Bogor\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"potency_type\": \"0\",\n                    \"phone_number\": null\n                },\n                {\n                    \"potency_name\": \"KPLP Tj. Priok\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"potency_type\": \"0\",\n                    \"phone_number\": \"62214922124\"\n                },\n                {\n                    \"potency_name\": \"Kesehatan Pelabuhan\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"potency_type\": \"2\",\n                    \"phone_number\": null\n                },\n                {\n                    \"potency_name\": \"Kodam Jayakarta\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"potency_type\": \"0\",\n                    \"phone_number\": null\n                },\n                {\n                    \"potency_name\": \"Koramil Sukamantri\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"potency_type\": \"0\",\n                    \"phone_number\": \"08561609523\"\n                },\n                {\n                    \"potency_name\": \"Korps Marinir Cilandak\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"potency_type\": \"0\",\n                    \"phone_number\": null\n                },\n                {\n                    \"potency_name\": \"Lantamal II\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"potency_type\": \"0\",\n                    \"phone_number\": null\n                },\n                {\n                    \"potency_name\": \"Lanud Halim Perdana Kusuma\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"potency_type\": \"0\",\n                    \"phone_number\": null\n                },\n                {\n                    \"potency_name\": \"Lanud Sulaiman Bandung\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"potency_type\": \"0\",\n                    \"phone_number\": null\n                },\n                {\n                    \"potency_name\": \"PKPPK Bandara Soekarno Hatta\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"potency_type\": \"0\",\n                    \"phone_number\": null\n                },\n                {\n                    \"potency_name\": \"PMI BOGOR\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"potency_type\": \"0\",\n                    \"phone_number\": \"0251-8359040\"\n                },\n                {\n                    \"potency_name\": \"PMI DKI Jakarta \",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"potency_type\": \"0\",\n                    \"phone_number\": null\n                },\n                {\n                    \"potency_name\": \"Pangkalan Armada Bea Cukai Tj. Priok\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"potency_type\": \"0\",\n                    \"phone_number\": null\n                },\n                {\n                    \"potency_name\": \"Polsek Sukamantri\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"potency_type\": \"0\",\n                    \"phone_number\": \"085733361333\"\n                },\n                {\n                    \"potency_name\": \"Posko Relawan\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"potency_type\": \"0\",\n                    \"phone_number\": \"0817356168\"\n                },\n                {\n                    \"potency_name\": \"Sub Dit Pol Udara\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"potency_type\": \"1\",\n                    \"phone_number\": null\n                },\n                {\n                    \"potency_name\": \"Wing 3 Paskhas Bandung\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"potency_type\": \"0\",\n                    \"phone_number\": null\n                },\n                {\n                    \"potency_name\": \"DVI Pusdokes POLRI\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"potency_type\": \"0\",\n                    \"phone_number\": null\n                }\n            ],\n            \"asset\": [\n                {\n                    \"asset_name\": \"ccc\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"quantity\": null\n                },\n                {\n                    \"asset_name\": \"Kantong Mayat\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"quantity\": null\n                },\n                {\n                    \"asset_name\": \"Kantong Mayat\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"quantity\": null\n                },\n                {\n                    \"asset_name\": \"SPEED\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"quantity\": null\n                },\n                {\n                    \"asset_name\": \"Kapal Selam 01\",\n                    \"office_name\": \"KANTOR SAR JAMBI\",\n                    \"quantity\": null\n                },\n                {\n                    \"asset_name\": \"Ambulance\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"quantity\": null\n                },\n                {\n                    \"asset_name\": \"AMBULANCE BOGOR\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"quantity\": null\n                },\n                {\n                    \"asset_name\": \"Ambulance\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"quantity\": null\n                },\n                {\n                    \"asset_name\": \"Ambulance\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"quantity\": null\n                },\n                {\n                    \"asset_name\": \"Pal Radio\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"quantity\": null\n                },\n                {\n                    \"asset_name\": \"Pal Radio\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"quantity\": null\n                },\n                {\n                    \"asset_name\": \"Pal Radio\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"quantity\": null\n                },\n                {\n                    \"asset_name\": \"SSB\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"quantity\": null\n                },\n                {\n                    \"asset_name\": \"SSB\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"quantity\": null\n                },\n                {\n                    \"asset_name\": \"Pal Radio\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"quantity\": null\n                },\n                {\n                    \"asset_name\": \"Handy Talky\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"quantity\": null\n                },\n                {\n                    \"asset_name\": \"aaaaxxx\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"quantity\": null\n                },\n                {\n                    \"asset_name\": \"Eskavator\",\n                    \"office_name\": \"KANTOR SAR JAKARTA\",\n                    \"quantity\": null\n                }\n            ]\n        },\n        \"planning\": null,\n        \"log\": [\n            {\n                \"subject_log\": \"this is a subject test save 23-12-2017\",\n                \"content\": \"this is a content\",\n                \"date\": \"2017-12-05\",\n                \"time\": \"16:05:30\",\n                \"initiator\": \"nama personel\",\n                \"latitude\": \"0.418263\",\n                \"longitude\": \"0.478122\",\n                \"picture\": []\n            },\n            {\n                \"subject_log\": \"gsgs\",\n                \"content\": \"fsfsf\",\n                \"date\": \"1999-12-31\",\n                \"time\": \"10:00:00\",\n                \"initiator\": \"nama personel\",\n                \"latitude\": \"6262\",\n                \"longitude\": \"62626\",\n                \"picture\": []\n            },\n            {\n                \"subject_log\": \"ffffff\",\n                \"content\": \"ffffff\",\n                \"date\": \"1999-12-30\",\n                \"time\": \"10:00:00\",\n                \"initiator\": \"nama personel\",\n                \"latitude\": \"-1\",\n                \"longitude\": \"111\",\n                \"picture\": []\n            },\n            {\n                \"subject_log\": null,\n                \"content\": \"ini content test\",\n                \"date\": \"2017-12-05\",\n                \"time\": \"16:05:30\",\n                \"initiator\": \"nama personel\",\n                \"latitude\": null,\n                \"longitude\": null,\n                \"picture\": []\n            },\n            {\n                \"subject_log\": null,\n                \"content\": \"ini content test\",\n                \"date\": \"2017-12-05\",\n                \"time\": \"16:05:30\",\n                \"initiator\": \"nama personel\",\n                \"latitude\": null,\n                \"longitude\": null,\n                \"picture\": []\n            }\n        ],\n        \"pob\": [],\n        \"drift_calculation\": null\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 UnAuthorized\n{\n    \"response_code\": \"UA\",\n    \"response_message\": \"Invalid/expired access token.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./incidentDetail.js",
    "groupTitle": "API_V_1"
  },
  {
    "type": "get",
    "url": "/office",
    "title": "Get List Office Sar.",
    "version": "0.1.0",
    "group": "API_V_1",
    "name": "getKansar",
    "description": "<p>digunakan untuk mendapatkan List Office Sar.</p>",
    "examples": [
      {
        "title": "Cara penggunaan:",
        "content": "http://apps.prosia.co.id:8072/sarcore/office",
        "type": "json"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"response_code\": \"00\",\n    \"response_message\": \"Success.\",\n    \"data\": [\n        {\n            \"office_code\": \"BKS\",\n            \"office_name\": \"KANTOR SAR BENGKULU\",\n            \"office_address\": \"Jl. Suprapto Dalam No. 10 RT 17/ RW 04 Betungan, Bengkulu\",\n            \"latitude\": \"-6.157222222222222\",\n            \"longitude\": \"106.83416666666666\",\n            \"pic\": null,\n            \"number\": \"627365500666\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"PGK\",\n            \"office_name\": \"KANTOR SAR PANGKAL PINANG\",\n            \"office_address\": \"Jl. Pulau Pelepas, Kel. Beluluk Kec. Pangkalan Baru Kab. Bangka Tengah Prov. Kepulauan Bangka Belitung\",\n            \"latitude\": \"-2.1166666666666667\",\n            \"longitude\": \"106.10527777777777\",\n            \"pic\": null,\n            \"number\": \"627174261338\",\n            \"picture_list\": [],\n            \"contact_list\": [\n                {\n                    \"name\": \"JUMARIL\",\n                    \"position\": \"KAKANSAR\",\n                    \"email\": null,\n                    \"number\": \"085397704118\"\n                }\n            ]\n        },\n        {\n            \"office_code\": \"DJB\",\n            \"office_name\": \"KANTOR SAR JAMBI\",\n            \"office_address\": \"Jl Jawa RT.07 Kel. Talang Bakung Kec. Jambi Selatan - 36135\",\n            \"latitude\": \"0.0\",\n            \"longitude\": \"0.0\",\n            \"pic\": null,\n            \"number\": \"62741571111\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"PLW\",\n            \"office_name\": \"KANTOR SAR PALU\",\n            \"office_address\": \"Jl. Elang No. 12 Kel. Tanah Mudindi, Kec. Palu Selatan, Kodya Palu\",\n            \"latitude\": \"-0.9005555555555556\",\n            \"longitude\": \"119.885\",\n            \"pic\": null,\n            \"number\": \"62451481110\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"BSN\",\n            \"office_name\": \"KANTOR PUSAT\",\n            \"office_address\": \"Jl. Angkasa Blok B 15  Kav. 2 - 3, Kemayoran Jakarta Pusat\",\n            \"latitude\": \"-6.157222222222225\",\n            \"longitude\": \"106.84194444444434\",\n            \"pic\": null,\n            \"number\": null,\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"BPN\",\n            \"office_name\": \"KANTOR SAR BALIKPAPAN\",\n            \"office_address\": \"Jl. Marsma R. Iswahyudi No.3 RT. 11 SepingganRaya, Balikpapan Selatan, Balikpapan, Kalimantan Timur 76115\",\n            \"latitude\": \"-1.26\",\n            \"longitude\": \"116.89833333333333\",\n            \"pic\": null,\n            \"number\": \"6254762111\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KDI\",\n            \"office_name\": \"KANTOR SAR KENDARI\",\n            \"office_address\": \"Jl. Kapten Pierre Tendean No. 91, Kec. Baruga, Kendari 93117 \",\n            \"latitude\": \"-4.040555555555556\",\n            \"longitude\": \"122.4888888888889\",\n            \"pic\": null,\n            \"number\": \"624013196557\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"PKU\",\n            \"office_name\": \"KANTOR SAR PEKANBARU\",\n            \"office_address\": \"Jl. Jend. Sudirman Ujung Simpang Tiga (arah TNI AU), Pekanbaru - 28284\",\n            \"latitude\": \"0.4697222222222222\",\n            \"longitude\": \"101.45166666666667\",\n            \"pic\": null,\n            \"number\": \"62761679991\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"BTJ\",\n            \"office_name\": \"KANTOR SAR BANDA ACEH\",\n            \"office_address\": \"Jl. Sultan Malikusaleh No. 108, Lhong Raya-Banda Aceh, 23238\",\n            \"latitude\": \"5.52\",\n            \"longitude\": \"95.32277777777777\",\n            \"pic\": null,\n            \"number\": \"6265133876\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"MES\",\n            \"office_name\": \"KANTOR SAR MEDAN\",\n            \"office_address\": \"Jl. Jamin Ginting No. 99 Kec. Medan Tuntungan Kel. Sidomulyo, MEdan 20136\",\n            \"latitude\": \"3.5369444444444444\",\n            \"longitude\": \"98.63888888888889\",\n            \"pic\": null,\n            \"number\": \"62618368111\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"BIK\",\n            \"office_name\": \"KANTOR SAR BIAK\",\n            \"office_address\": \"Jl. Bosnik Raya No. 111 Biak -Papua 98111\",\n            \"latitude\": \"-1.1883333333333335\",\n            \"longitude\": \"136.11888888888888\",\n            \"pic\": null,\n            \"number\": \"6298121111\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"TIM\",\n            \"office_name\": \"KANTOR SAR TIMIKA\",\n            \"office_address\": \"Jl. Yos Sudardo KM.5 Timika 99910\",\n            \"latitude\": \"-4.525\",\n            \"longitude\": \"136.86888888888888\",\n            \"pic\": null,\n            \"number\": \"629013125089\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"UPG\",\n            \"office_name\": \"KANTOR SAR MAKASSAR\",\n            \"office_address\": \"Bandara Sultan Hasanuddin Makasar 90552\",\n            \"latitude\": \"-5.071944444444444\",\n            \"longitude\": \"119.54444444444445\",\n            \"pic\": null,\n            \"number\": \"62411550024\",\n            \"picture_list\": [],\n            \"contact_list\": [\n                {\n                    \"name\": \"Mz\",\n                    \"position\": \"Karang Taruna\",\n                    \"email\": null,\n                    \"number\": \"aku\"\n                }\n            ]\n        },\n        {\n            \"office_code\": \"CGK\",\n            \"office_name\": \"KANTOR SAR JAKARTA\",\n            \"office_address\": \"Jl. Marsekal Suryadharma RT. 02 RW. 04 No. 115, Selapanjang, Neglasari, Tangerang 15127\",\n            \"latitude\": \"-6.126111111111111\",\n            \"longitude\": \"106.65555555555555\",\n            \"pic\": null,\n            \"number\": \"622155727115\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"DJJ\",\n            \"office_name\": \"KANTOR SAR JAYAPURA\",\n            \"office_address\": \"Jl. Raya Hawai Sentani No. 115, Jayapura - 99352\",\n            \"latitude\": \"-2.736388888888889\",\n            \"longitude\": \"140.53277777777777\",\n            \"pic\": null,\n            \"number\": \"62967591093\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"PLM\",\n            \"office_name\": \"KANTOR SAR PALEMBANG\",\n            \"office_address\": \"Jl. Gubernur H. Asnawi Mangku Alam/Akses Bandara Internasional Sultan Mahmud Badaruddin II, Palembang \",\n            \"latitude\": \"-2.8986111111111112\",\n            \"longitude\": \"104.71583333333334\",\n            \"pic\": null,\n            \"number\": \"62711357494\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"AMQ\",\n            \"office_name\": \"KANTOR SAR AMBON\",\n            \"office_address\": \"Jl. Dr. J. Leimena, Hative Besar - Kec. Teluk Ambon 97234\",\n            \"latitude\": \"-3.705\",\n            \"longitude\": \"128.09027777777777\",\n            \"pic\": null,\n            \"number\": \"62911323774\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"DPS\",\n            \"office_name\": \"KANTOR SAR DENPASAR\",\n            \"office_address\": \"JL. Raya Uluwatu no.201 Jimbaran - Badung - Bali 80361\",\n            \"latitude\": \"-8.79\",\n            \"longitude\": \"115.16333333333333\",\n            \"pic\": null,\n            \"number\": \"62361703300\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KPG\",\n            \"office_name\": \"KANTOR SAR KUPANG\",\n            \"office_address\": \"JL. Adisucipto - Penfui Kupang - NTT 85361 \",\n            \"latitude\": \"-10.171944444444444\",\n            \"longitude\": \"123.65527777777778\",\n            \"pic\": null,\n            \"number\": \"62380881573\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"MDC\",\n            \"office_name\": \"KANTOR SAR MANADO\",\n            \"office_address\": \"Jl. Worang By Pass Manado-Bitung, Desa Kaasar Kecamatan Kauditan Kabupaten Minahasa Utara, Sulawesi Utara\",\n            \"latitude\": \"1.4013888888888888\",\n            \"longitude\": \"125.01444444444445\",\n            \"pic\": null,\n            \"number\": \"6243852052\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"MKB\",\n            \"office_name\": \"KANTOR SAR PADANG\",\n            \"office_address\": \"Jl. By Pass Km. 25 Anak Air Kecamatan. Koto Tangah Padang Sumatera Barat - 25139\",\n            \"latitude\": \"-0.8080555555555555\",\n            \"longitude\": \"100.32555555555555\",\n            \"pic\": null,\n            \"number\": \"62751484534\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"PNK\",\n            \"office_name\": \"KANTOR SAR PONTIANAK\",\n            \"office_address\": \"Jl. Adisucipto KM. 15,6 Desa Arang Limbung Kec. Sungai Raya Kab. Kubu Raya Pontianak, Kalimantan Barat 78391 A\",\n            \"latitude\": \"-0.13583333333333333\",\n            \"longitude\": \"109.41\",\n            \"pic\": null,\n            \"number\": \"62561721234\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"SUB\",\n            \"office_name\": \"KANTOR SAR SURABAYA\",\n            \"office_address\": \"Jl. Raya Bandara Juanda Baru 61253-A, Kec. Sedati, Kab. Sidoarjo, Jawa Timur.\",\n            \"latitude\": \"-7.370833333333334\",\n            \"longitude\": \"112.77805555555555\",\n            \"pic\": null,\n            \"number\": \"62318666611\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"SRG\",\n            \"office_name\": \"KANTOR SAR SEMARANG\",\n            \"office_address\": \"Jl.Bukit Barisan A.IV No. 09 Perum Permata Puri Ngaliyan Semarang - 50189\",\n            \"latitude\": \"-7.0008333333333335\",\n            \"longitude\": \"110.33972222222222\",\n            \"pic\": null,\n            \"number\": \"62247629192\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"SOQ\",\n            \"office_name\": \"KANTOR SAR SORONG\",\n            \"office_address\": \"Jl. Avignam No.115 KM.10 Klawuyuk, Sorong\",\n            \"latitude\": \"-0.8897222222222222\",\n            \"longitude\": \"131.32305555555556\",\n            \"pic\": null,\n            \"number\": \"629513102316\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"TTE\",\n            \"office_name\": \"KANTOR SAR TERNATE\",\n            \"office_address\": \"Jl. Depot Pertamina Kel. Jambula, Ternate Selatan, 97751\",\n            \"latitude\": \"0.7619444444444444\",\n            \"longitude\": \"127.3175\",\n            \"pic\": null,\n            \"number\": \"629213120069\",\n            \"picture_list\": [],\n            \"contact_list\": [\n                {\n                    \"name\": \"JUMARIL\",\n                    \"position\": \"KAKANSAR\",\n                    \"email\": null,\n                    \"number\": \"085397704118\"\n                },\n                {\n                    \"name\": \"AMIRUDDIN\",\n                    \"position\": \"KAKANSAR\",\n                    \"email\": null,\n                    \"number\": null\n                }\n            ]\n        },\n        {\n            \"office_code\": \"TKG\",\n            \"office_name\": \"KANTOR SAR LAMPUNG\",\n            \"office_address\": \"Jl. Alamsyah Ratu Perwira Negara KM 27 Branti Raya, Kecamatan Natar, Lampung Selatan 35362\",\n            \"latitude\": \"-5.25\",\n            \"longitude\": \"105.18166666666667\",\n            \"pic\": null,\n            \"number\": \"627217697027\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"GTO\",\n            \"office_name\": \"KANTOR SAR GORONTALO\",\n            \"office_address\": \"Jl. Pangeran Hidayat II, Kota Gorontalo\",\n            \"latitude\": \"0.5558333333333334\",\n            \"longitude\": \"123.06666666666666\",\n            \"pic\": null,\n            \"number\": \"624358521161\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"MKW\",\n            \"office_name\": \"KANTOR SAR MANOKWARI\",\n            \"office_address\": \"Jl. Drs. Esau sessa, Souwi Gunung, Manokwari 98315, Papua Barat\",\n            \"latitude\": \"-0.8972222222222223\",\n            \"longitude\": \"134.04305555555555\",\n            \"pic\": null,\n            \"number\": \"62986213263\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"BDO\",\n            \"office_name\": \"KANTOR SAR BANDUNG\",\n            \"office_address\": \"Jl. Raya Bandung - Garut KM. 27, Desa Sindang Pakuon, Kab. Sumedang - Jawa Barat 45364\",\n            \"latitude\": \"6.966111111111111\",\n            \"longitude\": \"107.99194444444444\",\n            \"pic\": null,\n            \"number\": \"62227780437\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"TNJ\",\n            \"office_name\": \"KANTOR SAR TANJUNG PINANG\",\n            \"office_address\": \"Jl. RH. Fisabilillah No 2 Km 6,5 Atas Tanjungpinang Provinsi Kepulauan Riau - 29125\",\n            \"latitude\": \"0.9025\",\n            \"longitude\": \"104.48666666666666\",\n            \"pic\": null,\n            \"number\": \"62771319300\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"AMI\",\n            \"office_name\": \"KANTOR SAR MATARAM\",\n            \"office_address\": \"Jl. TGH. Lopan Kec. Labuapi Kab. Lombok Barat Nusa Tenggara Barat\",\n            \"latitude\": \"-8.631388888888889\",\n            \"longitude\": \"116.12638888888888\",\n            \"pic\": null,\n            \"number\": \"62370633253\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"BDJ\",\n            \"office_name\": \"KANTOR SAR BANJARMASIN\",\n            \"office_address\": \"Jl. A.Yani KM.28,2 Kec. Landasan Ulin, Kel. Landasan Ulin, Timur Banjarbaru, Kalsel\",\n            \"latitude\": \"-3.45\",\n            \"longitude\": \"114.76666666666667\",\n            \"pic\": null,\n            \"number\": \"625114707911\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"MKQ\",\n            \"office_name\": \"KANTOR SAR MERAUKE\",\n            \"office_address\": \"Jl. R.E Marthadinata, Kel. Rimba Jaya, Kec. Merauke, Merauke , Papua 99611\",\n            \"latitude\": \"-8.518611111111111\",\n            \"longitude\": \"140.4125\",\n            \"pic\": null,\n            \"number\": \"62971321158\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"JOG\",\n            \"office_name\": \"KANTOR SAR YOGYAKARTA\",\n            \"office_address\": \"Jl. Raya Jogja - Wates Km. 11,5 Kec. Sedayu, Kab. Bantul, Yogyakarta 55752\",\n            \"latitude\": null,\n            \"longitude\": null,\n            \"pic\": null,\n            \"number\": \"622747485111\",\n            \"picture_list\": [],\n            \"contact_list\": []\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 UnAuthorized\n{\n    \"response_code\": \"UA\",\n    \"response_message\": \"Invalid/expired access token.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./kansar.js",
    "groupTitle": "API_V_1"
  },
  {
    "type": "get",
    "url": "/placemark",
    "title": "Get PlaceMark.",
    "version": "0.1.0",
    "group": "API_V_1",
    "name": "getPlaceMark",
    "description": "<p>digunakan untuk mendapatkan List PlaceMark.</p>",
    "examples": [
      {
        "title": "Cara penggunaan:",
        "content": "http://apps.prosia.co.id:8072/sarcore/placemark",
        "type": "json"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"response_code\": \"00\",\n    \"response_message\": \"Success.\",\n    \"data\": [\n        {\n            \"placemarkName\": \"C\",\n            \"description\": \"SEARCH AREA TW 0113\",\n            \"latitude\": \"-7.005509577496602\",\n            \"longitude\": \"121.60454806857639\",\n            \"incidentId\": \"BSN-1301-0001\",\n            \"image_icon\": \"default_placemark.png\"\n        },\n        {\n            \"placemarkName\": \"B\",\n            \"description\": \"SEARCH AREA TW 0113\",\n            \"latitude\": \"-6.387382548929091\",\n            \"longitude\": \"121.60462131076389\",\n            \"incidentId\": \"BSN-1301-0001\",\n            \"image_icon\": \"default_placemark.png\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 UnAuthorized\n{\n    \"response_code\": \"UA\",\n    \"response_message\": \"Invalid/expired access token.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./placemark.js",
    "groupTitle": "API_V_1"
  },
  {
    "type": "get",
    "url": "/planning/{incidentid}",
    "title": "Get Planning.",
    "version": "0.1.0",
    "group": "API_V_1",
    "name": "getPlanning",
    "description": "<p>digunakan untuk mendapatkan List Planning.</p>",
    "examples": [
      {
        "title": "Cara penggunaan:",
        "content": "http://apps.prosia.co.id:8072/sarcore/planning/BSN-1711-0014",
        "type": "json"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deskripsi",
            "description": "<p>dibuat_oleh.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tanggal_operasi",
            "description": "<p>Tanggal Operasi.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "metode",
            "description": "<p>metode.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dibuat_oleh",
            "description": "<p>dibuat_oleh.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "trapezium",
            "description": "<p>Url Untuk trapezium.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "driftcalculation",
            "description": "<p>Url untuk driftcalculation.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"response_code\": \"00\",\n    \"response_message\": \"Success.\",\n    \"data\": [\n        {\n            \"name\": \"test\",\n            \"deskripsi\": \"null\",\n            \"tanggal_operasi\": \"null\",\n            \"metode\": \"Custom\",\n            \"dibuat_oleh\": \"null\",\n            \"tanggal_modifikasi\": \"null\",\n            \"driftcalculation\": \"http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014\",\n            \"trapezium\": \"http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014\"\n        },\n        {\n            \"name\": \"ws1\",\n            \"deskripsi\": \"null\",\n            \"tanggal_operasi\": \"2017-11-29 15:04:00.0\",\n            \"metode\": \"Drift Calculation\",\n            \"dibuat_oleh\": \"null\",\n            \"tanggal_modifikasi\": \"null\",\n            \"driftcalculation\": \"http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014\",\n            \"trapezium\": \"http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014\"\n        },\n        {\n            \"name\": \"ws1-a\",\n            \"deskripsi\": \"null\",\n            \"tanggal_operasi\": \"2017-12-13 05:00:00.0\",\n            \"metode\": \"Drift Calculation\",\n            \"dibuat_oleh\": \"superadmin\",\n            \"tanggal_modifikasi\": \"null\",\n            \"driftcalculation\": \"http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014\",\n            \"trapezium\": \"http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014\"\n        },\n        {\n            \"name\": \"aaaa\",\n            \"deskripsi\": \"ddddd\",\n            \"tanggal_operasi\": \"2017-12-19 00:00:00.0\",\n            \"metode\": \"Drift Calculation\",\n            \"dibuat_oleh\": \"superadmin\",\n            \"tanggal_modifikasi\": \"null\",\n            \"driftcalculation\": \"http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014\",\n            \"trapezium\": \"http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014\"\n        },\n        {\n            \"name\": \"angga\",\n            \"deskripsi\": \"gggg\",\n            \"tanggal_operasi\": \"2017-12-19 10:13:00.0\",\n            \"metode\": \"Drift Calculation\",\n            \"dibuat_oleh\": \"superadmin\",\n            \"tanggal_modifikasi\": \"null\",\n            \"driftcalculation\": \"http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014\",\n            \"trapezium\": \"http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014\"\n        },\n        {\n            \"name\": \"ws1-b\",\n            \"deskripsi\": \"null\",\n            \"tanggal_operasi\": \"2017-11-30 09:00:00.0\",\n            \"metode\": \"Drift Calculation\",\n            \"dibuat_oleh\": \"superadmin\",\n            \"tanggal_modifikasi\": \"null\",\n            \"driftcalculation\": \"http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014\",\n            \"trapezium\": \"http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014\"\n        },\n        {\n            \"name\": \"test6\",\n            \"deskripsi\": \"null\",\n            \"tanggal_operasi\": \"null\",\n            \"metode\": \"Trapesium Search Area\",\n            \"dibuat_oleh\": \"superadmin\",\n            \"tanggal_modifikasi\": \"2017-12-08 10:48:32.0\",\n            \"driftcalculation\": \"http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014\",\n            \"trapezium\": \"http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014\"\n        },\n        {\n            \"name\": \"test7\",\n            \"deskripsi\": \"null\",\n            \"tanggal_operasi\": \"null\",\n            \"metode\": \"Trapesium Search Area\",\n            \"dibuat_oleh\": \"superadmin\",\n            \"tanggal_modifikasi\": \"2017-12-08 13:56:42.0\",\n            \"driftcalculation\": \"http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014\",\n            \"trapezium\": \"http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014\"\n        },\n        {\n            \"name\": \"test8\",\n            \"deskripsi\": \"null\",\n            \"tanggal_operasi\": \"null\",\n            \"metode\": \"Trapesium Search Area\",\n            \"dibuat_oleh\": \"superadmin\",\n            \"tanggal_modifikasi\": \"2017-12-08 14:08:04.0\",\n            \"driftcalculation\": \"http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014\",\n            \"trapezium\": \"http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014\"\n        },\n        {\n            \"name\": \"tt1\",\n            \"deskripsi\": \"null\",\n            \"tanggal_operasi\": \"null\",\n            \"metode\": \"Trapesium Search Area\",\n            \"dibuat_oleh\": \"superadmin\",\n            \"tanggal_modifikasi\": \"2017-12-13 14:50:09.0\",\n            \"driftcalculation\": \"http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014\",\n            \"trapezium\": \"http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014\"\n        },\n        {\n            \"name\": \"test5\",\n            \"deskripsi\": \"null\",\n            \"tanggal_operasi\": \"null\",\n            \"metode\": \"Trapesium Search Area\",\n            \"dibuat_oleh\": \"superadmin\",\n            \"tanggal_modifikasi\": \"2017-12-08 10:21:29.0\",\n            \"driftcalculation\": \"http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014\",\n            \"trapezium\": \"http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014\"\n        },\n        {\n            \"name\": \"test4\",\n            \"deskripsi\": \"null\",\n            \"tanggal_operasi\": \"null\",\n            \"metode\": \"Trapesium Search Area\",\n            \"dibuat_oleh\": \"superadmin\",\n            \"tanggal_modifikasi\": \"2017-12-08 10:16:15.0\",\n            \"driftcalculation\": \"http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014\",\n            \"trapezium\": \"http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014\"\n        },\n        {\n            \"name\": \"test3\",\n            \"deskripsi\": \"null\",\n            \"tanggal_operasi\": \"null\",\n            \"metode\": \"Trapesium Search Area\",\n            \"dibuat_oleh\": \"superadmin\",\n            \"tanggal_modifikasi\": \"2017-12-08 09:58:51.0\",\n            \"driftcalculation\": \"http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014\",\n            \"trapezium\": \"http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014\"\n        },\n        {\n            \"name\": \"tt2\",\n            \"deskripsi\": \"null\",\n            \"tanggal_operasi\": \"null\",\n            \"metode\": \"Trapesium Search Area\",\n            \"dibuat_oleh\": \"superadmin\",\n            \"tanggal_modifikasi\": \"2017-12-13 14:52:02.0\",\n            \"driftcalculation\": \"http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014\",\n            \"trapezium\": \"http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014\"\n        },\n        {\n            \"name\": \"test1\",\n            \"deskripsi\": \"null\",\n            \"tanggal_operasi\": \"null\",\n            \"metode\": \"Trapesium Search Area\",\n            \"dibuat_oleh\": \"superadmin\",\n            \"tanggal_modifikasi\": \"2017-12-07 20:04:01.0\",\n            \"driftcalculation\": \"http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014\",\n            \"trapezium\": \"http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014\"\n        },\n        {\n            \"name\": \"TA1-2\",\n            \"deskripsi\": \"null\",\n            \"tanggal_operasi\": \"null\",\n            \"metode\": \"Trapesium Search Area\",\n            \"dibuat_oleh\": \"superadmin\",\n            \"tanggal_modifikasi\": \"null\",\n            \"driftcalculation\": \"http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014\",\n            \"trapezium\": \"http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014\"\n        },\n        {\n            \"name\": \"test2\",\n            \"deskripsi\": \"null\",\n            \"tanggal_operasi\": \"null\",\n            \"metode\": \"Trapesium Search Area\",\n            \"dibuat_oleh\": \"superadmin\",\n            \"tanggal_modifikasi\": \"2017-12-08 09:52:22.0\",\n            \"driftcalculation\": \"http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014\",\n            \"trapezium\": \"http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 UnAuthorized\n{\n    \"response_code\": \"UA\",\n    \"response_message\": \"Invalid/expired access token.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./planning.js",
    "groupTitle": "API_V_1"
  },
  {
    "type": "get",
    "url": "/sarpost",
    "title": "Get List Poss Sar.",
    "version": "0.1.0",
    "group": "API_V_1",
    "name": "getPossar",
    "description": "<p>digunakan untuk mendapatkan List Pos Sar.</p>",
    "examples": [
      {
        "title": "Cara penggunaan:",
        "content": "http://apps.prosia.co.id:8072/sarcore/sarpost",
        "type": "json"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"response_code\": \"00\",\n    \"response_message\": \"Success.\",\n    \"data\": [\n        {\n            \"office_code\": \"KANTOR SAR SORONG\",\n            \"office_name\": \"POSSAR Raja Ampat\",\n            \"latitude\": \"043-52-77\",\n            \"longitude\": null,\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR JAYAPURA\",\n            \"office_name\": \"POSSAR Oksibilx\",\n            \"latitude\": null,\n            \"longitude\": null,\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR JAKARTA\",\n            \"office_name\": \"POSSAR Merak\",\n            \"latitude\": \"-5.935277777777777\",\n            \"longitude\": \"106.00055555555555\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR SEMARANG\",\n            \"office_name\": \"POSSAR Yadasd\",\n            \"latitude\": \"1.0169444444444444\",\n            \"longitude\": \"1.0169444444444444\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR SEMARANG\",\n            \"office_name\": \"POSSAR Surakarta\",\n            \"latitude\": \"-7.573333333333333\",\n            \"longitude\": \"110.8163888888889\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR JAKARTA\",\n            \"office_name\": \"POSSAR Sukabumi\",\n            \"latitude\": \"-6.955\",\n            \"longitude\": \"106.47916666666667\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR BANDUNG\",\n            \"office_name\": \"POSSAR Cirebon\",\n            \"latitude\": \"-6.673333333333334\",\n            \"longitude\": \"108.42138888888888\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR DENPASAR\",\n            \"office_name\": \"POSSAR Karangasem\",\n            \"latitude\": \"-8.4825\",\n            \"longitude\": \"115.62305555555555\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR MEDAN\",\n            \"office_name\": \"POSSAR TanjungBalai\",\n            \"latitude\": \"2.9924999999999997\",\n            \"longitude\": \"99.84916666666666\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR MEDAN\",\n            \"office_name\": \"POSSAR Sibolga\",\n            \"latitude\": \"1.7019444444444445\",\n            \"longitude\": \"98.8236111111111\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR MEDAN\",\n            \"office_name\": \"POSSAR Nias\",\n            \"latitude\": \"1.2319444444444445\",\n            \"longitude\": \"97.65222222222222\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR BENGKULU\",\n            \"office_name\": \"POSSAR Mukomuko\",\n            \"latitude\": \"-2.5613888888888887\",\n            \"longitude\": \"101.10722222222222\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR PADANG\",\n            \"office_name\": \"POSSAR Pasaman\",\n            \"latitude\": \"0.12944444444444445\",\n            \"longitude\": \"99.87194444444444\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR PEKANBARU\",\n            \"office_name\": \"POSSAR Bengkalis\",\n            \"latitude\": \"1.4752777777777777\",\n            \"longitude\": \"102.145\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR DENPASAR\",\n            \"office_name\": \"POSSAR Jembrana\",\n            \"latitude\": \"-8.343333333333334\",\n            \"longitude\": \"114.5675\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR MERAUKE\",\n            \"office_name\": \"POSSAR Boven Digoel (Tanah Merah)\",\n            \"latitude\": \"-6.1113888888888885\",\n            \"longitude\": \"140.3177777777778\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR MERAUKE\",\n            \"office_name\": \"POSSAR Okaba\",\n            \"latitude\": \"-8.095277777777778\",\n            \"longitude\": \"139.72083333333333\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR PONTIANAK\",\n            \"office_name\": \"POSSAR Sintete\",\n            \"latitude\": \"1.1977777777777778\",\n            \"longitude\": \"109.05416666666666\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR PONTIANAK\",\n            \"office_name\": \"POSSAR Ketapang\",\n            \"latitude\": \"-1.7780555555555555\",\n            \"longitude\": \"109.94\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR TANJUNG PINANG\",\n            \"office_name\": \"POSSAR P. Natuna Besar\",\n            \"latitude\": \"3.92033333333333\",\n            \"longitude\": \"108.352583333333\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR SEMARANG\",\n            \"office_name\": \"POSSAR Cilacap\",\n            \"latitude\": \"-7.719166666666666\",\n            \"longitude\": \"109.01722222222222\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR SEMARANG\",\n            \"office_name\": \"POSSAR Jepara\",\n            \"latitude\": \"-6.628055555555555\",\n            \"longitude\": \"110.70861111111111\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR BANDA ACEH\",\n            \"office_name\": \"POSSAR Kutacane\",\n            \"latitude\": \"3.419722222222222\",\n            \"longitude\": \"97.88555555555556\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR SURABAYA\",\n            \"office_name\": \"POSSAR Trenggalek\",\n            \"latitude\": \"-8.087222222222222\",\n            \"longitude\": \"111.71083333333333\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR SURABAYA\",\n            \"office_name\": \"POSSAR Jember\",\n            \"latitude\": \"-8.105555555555556\",\n            \"longitude\": \"113.7375\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR BANJARMASIN\",\n            \"office_name\": \"POSSAR Sampit\",\n            \"latitude\": \"-2.55\",\n            \"longitude\": \"112.23388888888888\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR BALIKPAPAN\",\n            \"office_name\": \"POSSAR Tarakan\",\n            \"latitude\": \"3.34555555555556\",\n            \"longitude\": \"117.570833333333\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR BALIKPAPAN\",\n            \"office_name\": \"POSSAR Sangatta\",\n            \"latitude\": \"0.5138888888888888\",\n            \"longitude\": \"117.57638888888889\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR MATARAM\",\n            \"office_name\": \"POSSAR Kayangan\",\n            \"latitude\": \"-8.481111111111112\",\n            \"longitude\": \"116.67861111111111\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR MATARAM\",\n            \"office_name\": \"POSSAR Bima\",\n            \"latitude\": \"-8.517222222222223\",\n            \"longitude\": \"118.68916666666667\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR DENPASAR\",\n            \"office_name\": \"POSSAR Buleleng\",\n            \"latitude\": \"-8.132222222222222\",\n            \"longitude\": \"115.06222222222222\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR MAKASSAR\",\n            \"office_name\": \"POSSAR Bone\",\n            \"latitude\": \"-4.548333333333334\",\n            \"longitude\": \"120.37472222222222\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR MAKASSAR\",\n            \"office_name\": \"POSSAR Selayar\",\n            \"latitude\": \"-6.14\",\n            \"longitude\": \"120.35444444444444\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR AMBON\",\n            \"office_name\": \"POSSAR Namlea\",\n            \"latitude\": \"-3.2666666666666666\",\n            \"longitude\": \"127.08333333333333\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR AMBON\",\n            \"office_name\": \"POSSAR Banda\",\n            \"latitude\": \"-4.522777777777778\",\n            \"longitude\": \"129.9061111111111\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR BANDA ACEH\",\n            \"office_name\": \"POSSAR Langsa\",\n            \"latitude\": \"4.5\",\n            \"longitude\": \"97.95861111111111\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR BALIKPAPAN\",\n            \"office_name\": \"POSSAR Nunukan\",\n            \"latitude\": \"4.097222222222222\",\n            \"longitude\": \"117.70027777777777\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR KUPANG\",\n            \"office_name\": \"POSSAR Maumere\",\n            \"latitude\": \"-8.602777777777778\",\n            \"longitude\": \"122.19777777777777\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR KUPANG\",\n            \"office_name\": \"POSSAR Mabar Labuan Bajo\",\n            \"latitude\": \"-8.491111111111111\",\n            \"longitude\": \"119.89333333333333\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR KENDARI\",\n            \"office_name\": \"POSSAR Kolaka\",\n            \"latitude\": \"-4.065277777777778\",\n            \"longitude\": \"121.60833333333333\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR KENDARI\",\n            \"office_name\": \"POSSAR Bau-bau\",\n            \"latitude\": \"-5.5119444444444445\",\n            \"longitude\": \"122.56111111111112\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR BIAK\",\n            \"office_name\": \"POSSAR Serui\",\n            \"latitude\": \"-1.8666666666666667\",\n            \"longitude\": \"136.225\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        },\n        {\n            \"office_code\": \"KANTOR SAR BIAK\",\n            \"office_name\": \"POSSAR Nabire\",\n            \"latitude\": \"-3.3\",\n            \"longitude\": \"135.56694444444443\",\n            \"picture_list\": null,\n            \"contact_list\": []\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 UnAuthorized\n{\n    \"response_code\": \"UA\",\n    \"response_message\": \"Invalid/expired access token.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./possar.js",
    "groupTitle": "API_V_1"
  },
  {
    "type": "get",
    "url": "/kritikdansaran",
    "title": "Get Kritik Dan saran.",
    "version": "0.1.0",
    "group": "API_V_1",
    "name": "getSaran",
    "description": "<p>digunakan untuk mendapatkan kritik dan saran.</p>",
    "examples": [
      {
        "title": "Cara penggunaan:",
        "content": "http://apps.prosia.co.id:8072/sarcore/kritikdansaran",
        "type": "json"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"response_code\": \"00\",\n    \"response_message\": \"Success.\",\n    \"data\": [\n        {\n            \"kritik_dan_saranId\": \"7\",\n            \"personnelId\": null,\n            \"kritik_dan_saran\": \"Tessss.....2\"\n        },\n        {\n            \"kritik_dan_saranId\": \"8\",\n            \"personnelId\": null,\n            \"kritik_dan_saran\": \"Tessss.....2\"\n        },\n        {\n            \"kritik_dan_saranId\": \"17\",\n            \"personnelId\": null,\n            \"kritik_dan_saran\": \"Jumlah personel sar \"\n        },\n        {\n            \"kritik_dan_saranId\": \"15\",\n            \"personnelId\": null,\n            \"kritik_dan_saran\": \"Jumlah personel sar di daerah terpencil harus di perbanyak mengingat kurangnya sumber daya manusia pada daerah-daerah tersebut\"\n        },\n        {\n            \"kritik_dan_saranId\": \"16\",\n            \"personnelId\": null,\n            \"kritik_dan_saran\": \"Jumlah personel sar di daerah terpencil harus di perbanyak\"\n        },\n        {\n            \"kritik_dan_saranId\": \"10\",\n            \"personnelId\": null,\n            \"kritik_dan_saran\": null\n        },\n        {\n            \"kritik_dan_saranId\": \"12\",\n            \"personnelId\": null,\n            \"kritik_dan_saran\": \"rv\"\n        },\n        {\n            \"kritik_dan_saranId\": \"1\",\n            \"personnelId\": null,\n            \"kritik_dan_saran\": \"SARAN\"\n        },\n        {\n            \"kritik_dan_saranId\": \"2\",\n            \"personnelId\": null,\n            \"kritik_dan_saran\": \"KRITIK\"\n        },\n        {\n            \"kritik_dan_saranId\": \"3\",\n            \"personnelId\": null,\n            \"kritik_dan_saran\": null\n        },\n        {\n            \"kritik_dan_saranId\": \"4\",\n            \"personnelId\": null,\n            \"kritik_dan_saran\": \"loren ipsum.....\"\n        },\n        {\n            \"kritik_dan_saranId\": \"5\",\n            \"personnelId\": null,\n            \"kritik_dan_saran\": \"Tessss.....\"\n        },\n        {\n            \"kritik_dan_saranId\": \"9\",\n            \"personnelId\": null,\n            \"kritik_dan_saran\": \"okee\"\n        },\n        {\n            \"kritik_dan_saranId\": \"11\",\n            \"personnelId\": null,\n            \"kritik_dan_saran\": \"sangat baik\"\n        },\n        {\n            \"kritik_dan_saranId\": \"13\",\n            \"personnelId\": null,\n            \"kritik_dan_saran\": \"Coba2\"\n        },\n        {\n            \"kritik_dan_saranId\": \"14\",\n            \"personnelId\": null,\n            \"kritik_dan_saran\": \"Jumlah personel sar di daerah terpencil harus di perbanyak mengingat kurangnya sumber daya manusia pada daerah-daerah tersebut\"\n        },\n        {\n            \"kritik_dan_saranId\": \"6\",\n            \"personnelId\": null,\n            \"kritik_dan_saran\": \"Tessss.....lagi\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 UnAuthorized\n{\n    \"response_code\": \"UA\",\n    \"response_message\": \"Invalid/expired access token.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./kritikSaran.js",
    "groupTitle": "API_V_1"
  },
  {
    "type": "get",
    "url": "/asset",
    "title": "Get asset.",
    "version": "0.1.0",
    "group": "API_V_1",
    "name": "getasset",
    "description": "<p>digunakan untuk mendapatkan List asset.</p>",
    "examples": [
      {
        "title": "Cara penggunaan:",
        "content": "http://apps.prosia.co.id:8072/sarcore/asset",
        "type": "json"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"response_code\": \"00\",\n    \"response_message\": \"Success.\",\n    \"data\": [\n        {\n            \"asset_name\": \"Yonif 744\",\n            \"sar_office\": null,\n            \"latitude\": \"5.555833333333333\",\n            \"longitude\": \"95.32027777777778\",\n            \"picture_list\": [],\n            \"contact_list\": null\n        },\n        {\n            \"asset_name\": \"Ambulance\",\n            \"sar_office\": null,\n            \"latitude\": \"-08.6746944\",\n            \"longitude\": \"115.2015000\",\n            \"picture_list\": [\n                \"http://192.168.195.148:8080/sarcore/document/asset/45\",\n                \"http://192.168.195.148:8080/sarcore/document/asset/46\",\n                \"http://192.168.195.148:8080/sarcore/document/asset/42\"\n            ],\n            \"contact_list\": null\n        },\n        {\n            \"asset_name\": \"Ambulance\",\n            \"sar_office\": null,\n            \"latitude\": \"-08.6756667\",\n            \"longitude\": \"115.2118889\",\n            \"picture_list\": [\n                \"http://192.168.195.148:8080/sarcore/document/asset/45\",\n                \"http://192.168.195.148:8080/sarcore/document/asset/46\",\n                \"http://192.168.195.148:8080/sarcore/document/asset/42\"\n            ],\n            \"contact_list\": null\n        },\n        {\n            \"asset_name\": \"Ambulance\",\n            \"sar_office\": null,\n            \"latitude\": \"-08.6756667\",\n            \"longitude\": \"115.2118889\",\n            \"picture_list\": [\n                \"http://192.168.195.148:8080/sarcore/document/asset/45\",\n                \"http://192.168.195.148:8080/sarcore/document/asset/46\",\n                \"http://192.168.195.148:8080/sarcore/document/asset/42\"\n            ],\n            \"contact_list\": null\n        },\n        {\n            \"asset_name\": \"Ambulance\",\n            \"sar_office\": null,\n            \"latitude\": \"-08.6756667\",\n            \"longitude\": \"115.2118889\",\n            \"picture_list\": [\n                \"http://192.168.195.148:8080/sarcore/document/asset/45\",\n                \"http://192.168.195.148:8080/sarcore/document/asset/46\",\n                \"http://192.168.195.148:8080/sarcore/document/asset/42\"\n            ],\n            \"contact_list\": null\n        },\n        {\n            \"asset_name\": \"Ambulance\",\n            \"sar_office\": null,\n            \"latitude\": \"-08.6756667\",\n            \"longitude\": \"115.2118889\",\n            \"picture_list\": [\n                \"http://192.168.195.148:8080/sarcore/document/asset/45\",\n                \"http://192.168.195.148:8080/sarcore/document/asset/46\",\n                \"http://192.168.195.148:8080/sarcore/document/asset/42\"\n            ],\n            \"contact_list\": null\n        },\n        {\n            \"asset_name\": \"Ambulance\",\n            \"sar_office\": null,\n            \"latitude\": \"-08.6756667\",\n            \"longitude\": \"115.2118889\",\n            \"picture_list\": [\n                \"http://192.168.195.148:8080/sarcore/document/asset/45\",\n                \"http://192.168.195.148:8080/sarcore/document/asset/46\",\n                \"http://192.168.195.148:8080/sarcore/document/asset/42\"\n            ],\n            \"contact_list\": null\n        },\n        {\n            \"asset_name\": \"Ambulance\",\n            \"sar_office\": null,\n            \"latitude\": \"-08.6747500\",\n            \"longitude\": \"115.2014444\",\n            \"picture_list\": [\n                \"http://192.168.195.148:8080/sarcore/document/asset/45\",\n                \"http://192.168.195.148:8080/sarcore/document/asset/46\",\n                \"http://192.168.195.148:8080/sarcore/document/asset/42\"\n            ],\n            \"contact_list\": null\n        },\n        {\n            \"asset_name\": \"Ambulance\",\n            \"sar_office\": null,\n            \"latitude\": \"-08.6746944\",\n            \"longitude\": \"115.2015000\",\n            \"picture_list\": [\n                \"http://192.168.195.148:8080/sarcore/document/asset/45\",\n                \"http://192.168.195.148:8080/sarcore/document/asset/46\",\n                \"http://192.168.195.148:8080/sarcore/document/asset/42\"\n            ],\n            \"contact_list\": null\n        },\n        {\n            \"asset_name\": \"Ambulance\",\n            \"sar_office\": null,\n            \"latitude\": \"-08.6746944\",\n            \"longitude\": \"115.2015000\",\n            \"picture_list\": [\n                \"http://192.168.195.148:8080/sarcore/document/asset/45\",\n                \"http://192.168.195.148:8080/sarcore/document/asset/46\",\n                \"http://192.168.195.148:8080/sarcore/document/asset/42\"\n            ],\n            \"contact_list\": null\n        },\n        {\n            \"asset_name\": \"HELI BASARNAS\",\n            \"sar_office\": null,\n            \"latitude\": \"6.12638888\",\n            \"longitude\": \"106.655555\",\n            \"picture_list\": [],\n            \"contact_list\": null\n        },\n        {\n            \"asset_name\": \"Ambulance\",\n            \"sar_office\": null,\n            \"latitude\": \"-08.6746944\",\n            \"longitude\": \"115.2015000\",\n            \"picture_list\": [\n                \"http://192.168.195.148:8080/sarcore/document/asset/45\",\n                \"http://192.168.195.148:8080/sarcore/document/asset/46\",\n                \"http://192.168.195.148:8080/sarcore/document/asset/42\"\n            ],\n            \"contact_list\": null\n        },\n        {\n            \"asset_name\": \"Ambulance\",\n            \"sar_office\": null,\n            \"latitude\": \"-08.6746944\",\n            \"longitude\": \"115.2015000\",\n            \"picture_list\": [\n                \"http://192.168.195.148:8080/sarcore/document/asset/45\",\n                \"http://192.168.195.148:8080/sarcore/document/asset/46\",\n                \"http://192.168.195.148:8080/sarcore/document/asset/42\"\n            ],\n            \"contact_list\": null\n        },\n        {\n            \"asset_name\": \"Ambulance\",\n            \"sar_office\": null,\n            \"latitude\": \"-08.6746944\",\n            \"longitude\": \"115.2015000\",\n            \"picture_list\": [\n                \"http://192.168.195.148:8080/sarcore/document/asset/45\",\n                \"http://192.168.195.148:8080/sarcore/document/asset/46\",\n                \"http://192.168.195.148:8080/sarcore/document/asset/42\"\n            ],\n            \"contact_list\": null\n        },\n        {\n            \"asset_name\": \"Ambulance\",\n            \"sar_office\": null,\n            \"latitude\": \"-08.6827778\",\n            \"longitude\": \"115.3994444\",\n            \"picture_list\": [\n                \"http://192.168.195.148:8080/sarcore/document/asset/45\",\n                \"http://192.168.195.148:8080/sarcore/document/asset/46\",\n                \"http://192.168.195.148:8080/sarcore/document/asset/42\"\n            ],\n            \"contact_list\": null\n        },\n        {\n            \"asset_name\": \"dxa\",\n            \"sar_office\": \"KANTOR SAR JAMBI\",\n            \"latitude\": \"10.341666666666667\",\n            \"longitude\": \"40.85\",\n            \"picture_list\": [],\n            \"contact_list\": [\n                {\n                    \"pic\": \"a\",\n                    \"email\": null,\n                    \"cellphone_number\": null\n                },\n                {\n                    \"pic\": \"x\",\n                    \"email\": null,\n                    \"cellphone_number\": null\n                },\n                {\n                    \"pic\": \"Atho\",\n                    \"email\": null,\n                    \"cellphone_number\": null\n                },\n                {\n                    \"pic\": \"z\",\n                    \"email\": null,\n                    \"cellphone_number\": null\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 UnAuthorized\n{\n    \"response_code\": \"UA\",\n    \"response_message\": \"Invalid/expired access token.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./asset.js",
    "groupTitle": "API_V_1"
  },
  {
    "type": "get",
    "url": "/potency",
    "title": "Get Potensi.",
    "version": "0.1.0",
    "group": "API_V_1",
    "name": "getpotensi",
    "description": "<p>digunakan untuk mendapatkan List Potensi.</p>",
    "examples": [
      {
        "title": "Cara penggunaan:",
        "content": "http://apps.prosia.co.id:8072/sarcore/potency",
        "type": "json"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"response_code\": \"00\",\n    \"response_message\": \"Success.\",\n    \"data\": [\n        {\n            \"potency_name\": \"Brimob SAT II Pelopor Kedung Alang\",\n            \"potency_address\": \"Bogor\",\n            \"latitude\": \"5.555833333333333\",\n            \"longitude\": \"95.32027777777778\",\n            \"potency_phone_number\": \"62216882023\",\n            \"province\": \"Bengkulu\",\n            \"contact_list\": [\n                {\n                    \"pic\": \"Letda Yanuar\",\n                    \"email\": \"dedi_blesak@yahoo.com\",\n                    \"potency_cellphone_number\": \"6281381555480\"\n                }\n            ],\n            \"picture_list\": []\n        },\n        {\n            \"potency_name\": \"Dedi\",\n            \"potency_address\": \"Bbbbbbb\",\n            \"latitude\": \"12.203333333333333\",\n            \"longitude\": \"22.03388888888889\",\n            \"potency_phone_number\": \"021009091\",\n            \"province\": \"Bali\",\n            \"contact_list\": [],\n            \"picture_list\": []\n        },\n        {\n            \"potency_name\": null,\n            \"potency_address\": null,\n            \"latitude\": null,\n            \"longitude\": null,\n            \"potency_phone_number\": null,\n            \"province\": null,\n            \"contact_list\": [],\n            \"picture_list\": []\n        },\n        {\n            \"potency_name\": \"test071117\",\n            \"potency_address\": \"test 01\",\n            \"latitude\": null,\n            \"longitude\": null,\n            \"potency_phone_number\": null,\n            \"province\": \"Bali\",\n            \"contact_list\": [\n                {\n                    \"pic\": \"xx\",\n                    \"email\": null,\n                    \"potency_cellphone_number\": null\n                }\n            ],\n            \"picture_list\": []\n        },\n        {\n            \"potency_name\": \"nama\",\n            \"potency_address\": \"alamat\",\n            \"latitude\": \"1.0341666666666667\",\n            \"longitude\": \"4.085\",\n            \"potency_phone_number\": null,\n            \"province\": \"Bali\",\n            \"contact_list\": [],\n            \"picture_list\": []\n        },\n        {\n            \"potency_name\": \"Coba\",\n            \"potency_address\": \"Jalan\",\n            \"latitude\": null,\n            \"longitude\": null,\n            \"potency_phone_number\": \"123\",\n            \"province\": \"Jawa Barat\",\n            \"contact_list\": [],\n            \"picture_list\": []\n        },\n        {\n            \"potency_name\": \"Kesbanglinmas Kab. Nias\",\n            \"potency_address\": \"Jl. Soekarno No .3 Gusit\",\n            \"latitude\": \"-1.386388888888889\",\n            \"longitude\": \"97.71055555555556\",\n            \"potency_phone_number\": null,\n            \"province\": \"Sumatera Utara\",\n            \"contact_list\": [\n                {\n                    \"pic\": \"Zainul Arifin Zega\",\n                    \"email\": null,\n                    \"potency_cellphone_number\": \"6281370341298\"\n                }\n            ],\n            \"picture_list\": []\n        },\n    \n        {\n            \"potency_name\": \"Bemo\",\n            \"potency_address\": \"Jakarta\",\n            \"latitude\": null,\n            \"longitude\": null,\n            \"potency_phone_number\": null,\n            \"province\": \"Bengkulu\",\n            \"contact_list\": [\n                {\n                    \"pic\": \"Atho\",\n                    \"email\": null,\n                    \"potency_cellphone_number\": \"0864213579\"\n                }\n            ],\n            \"picture_list\": [\n                {\n                    \"picture\": \"http://192.168.195.148:8080/sarcore/document/potency/101\"\n                },\n                {\n                    \"picture\": \"http://192.168.195.148:8080/sarcore/document/potency/114\"\n                }\n            ]\n        }\n        \n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 UnAuthorized\n{\n    \"response_code\": \"UA\",\n    \"response_message\": \"Invalid/expired access token.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./potensi.js",
    "groupTitle": "API_V_1"
  },
  {
    "type": "get",
    "url": "/planning/trapezium/{incidentid}",
    "title": "Get trapezium.",
    "version": "0.1.0",
    "group": "API_V_1",
    "name": "gettrapezium",
    "description": "<p>digunakan untuk mendapatkan List trapezium.</p>",
    "examples": [
      {
        "title": "Cara penggunaan:",
        "content": "http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014",
        "type": "json"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "oks",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 UnAuthorized\n{\n    \"response_code\": \"UA\",\n    \"response_message\": \"Invalid/expired access token.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./trapesium.js",
    "groupTitle": "API_V_1"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "D__apidoc_doc_main_js",
    "groupTitle": "D__apidoc_doc_main_js",
    "name": ""
  }
] });
