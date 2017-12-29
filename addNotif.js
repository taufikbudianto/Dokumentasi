/**
* @api {Post} /notifikasi Add Notifikasi.
 * @apiVersion 0.1.0
  * @apiGroup API V-1-post
 * @apiName addNotifNull
 * @apiDescription digunakan untuk menambahkan Notifikasi apabila belum ada.
  * @apiExample Cara penggunaan:
 http://apps.prosia.co.id:8072/sarcore/notifikasi
 * @apiParam {String} notifjudul     Judul Notifikasi
  * @apiParam {String} notifkonten     Konten Notifikasi
   * @apiParam {Boolean} [tanggapi=false]     apabila tanggapi=false maka notifikasi tidak bisa ditanggapi
    * @apiParam {String} listpersonilid     Apabila Personilnya lebih dari 1 maka gunakan pemisah ",".(Required)
  * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ"
 *     }
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
/**
* @api {get} /notif/count Count Notif.
 * @apiVersion 0.1.0
  * @apiGroup API V-1
 * @apiName addNotifCount
 * @apiDescription digunakan untuk mengitung notif.
  * @apiExample Cara penggunaan:
 http://apps.prosia.co.id:8072/sarcore/notif/count
  * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ"
 *     }
 * @apiSuccessExample Success-Response
	  3
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 UnAuthorized
{
    "response_code": "UA",
    "response_message": "Invalid/expired access token."
}
*/