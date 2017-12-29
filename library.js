/**
* @api {get} /library Get Library.
 * @apiVersion 0.1.0
  * @apiGroup API V-1
 * @apiName GetLibrary
 * @apiDescription digunakan untuk mendapatkan List Perpustakaan.
  * @apiExample Cara penggunaan:
 http://apps.prosia.co.id:8072/sarcore/library
  * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ"
 *     }
 * @apiSuccessExample Success-Response
 {
    "response_code": "00",
    "response_message": "Success.",
    "data": [
        {
            "url_image_lib": "http://apps.prosia.co.id:8072/sarcore/document/library/1",
            "downloadfile": "http://apps.prosia.co.id:8072/sarcore/download/1?name=ic_buku_sample.jpg",
            "lib_id": 1,
            "title": "judul edit",
            "created_by": "superadmin",
            "created_date": "2017-11-27 21:29:06.733",
            "lib_attachment": "ic_buku_sample.jpg",
            "book_content": "deskripsi edit"
        },
        {
            "url_image_lib": "http://apps.prosia.co.id:8072/sarcore/document/library/6",
            "downloadfile": "http://apps.prosia.co.id:8072/sarcore/download/6?name=Export-Import OracleDB.txt",
            "lib_id": 6,
            "title": "vvvv",
            "created_by": "superadmin",
            "created_date": "2017-11-28 17:09:17.641",
            "lib_attachment": "Export-Import OracleDB.txt",
            "book_content": "ddddd"
        },
        {
            "url_image_lib": "http://apps.prosia.co.id:8072/sarcore/document/library/7",
            "downloadfile": "http://apps.prosia.co.id:8072/sarcore/download/7?name=68529937-praise-wallpapers.jpg",
            "lib_id": 7,
            "title": "a123",
            "created_by": "superadmin2",
            "created_date": "2017-11-30 15:20:02.612",
            "lib_attachment": "68529937-praise-wallpapers.jpg",
            "book_content": "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla "
        }
    ]
}
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 UnAuthorized
{
    "response_code": "UA",
    "response_message": "Invalid/expired access token."
}
 */