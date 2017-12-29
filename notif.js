/**
* @api {get} /notif?limit=10&start_from_id=1 Get Notif.
 * @apiVersion 0.1.0
  * @apiGroup API V-1
 * @apiName GetNotif
 * @apiDescription digunakan untuk mendapatkan List Notifikasi.
 * @apiParam {Number} [limit=10]     Optional limit with default 10.
 * @apiParam {Number} [start_from_id=1]     Optional start_from_id with default 1.
  * @apiExample Cara penggunaan:
 http://apps.prosia.co.id:8072/sarcore/notif?limit=10&start_from_id=1
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
            "notification_id": 1,
            "message": "Konten Digital",
            "created_date": "2017-11-23 16:49:59.45",
            "created_by": "superadmin",
            "flag_comment": false,
            "comment_list": [
                {
                    "comment": "aaaaaa",
                    "gender": "M",
                    "created_date": "2017-12-06 21:10:56.415",
                    "created_by": "198611232010121001"
                },
                {
                    "comment": "okeè..",
                    "gender": "M",
                    "created_date": "2017-12-20 19:26:05.234",
                    "created_by": "198611232010121001"
                }]
        }
}
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 UnAuthorized
{
    "response_code": "UA",
    "response_message": "Invalid/expired access token."
}
 */
 /**
* @api {post} /notif add notifiksi comment.
 * @apiVersion 0.1.0
  * @apiGroup API V-1-post
 * @apiName postnotifcomment
 * @apiDescription digunakan untuk Menambahkan comment notifikasi ke database.
  * @apiParam {number} notification_id     Notifikasi Id.
   * @apiParam {String} comment     Comment Notifikasi.
  * @apiExample Cara penggunaan:
 http://apps.prosia.co.id:8072/sarcore/notif
  * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ",
 "Content-Type":"application/json"
 *     }
  * @apiSuccessExample Post-Example Body:
 Post Example
{
"notification_id" : 1,
"comment" : "loren ipsum....."
}
 * @apiSuccessExample Success-Response
 {
    "response_code": "00",
    "response_message": "Save Succes"
}
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 UnAuthorized
{
    "response_code": "UA",
    "response_message": "Invalid/expired access token."
}
 */