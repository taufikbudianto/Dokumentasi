/**
* @api {post} /placemark Add Penanda Lokasi.
 * @apiVersion 0.1.0
  * @apiGroup API V-1-post
 * @apiName AddPlacemark
 * @apiDescription digunakan untuk menambahkan lokasi ==>Menggunakan MultiPart.
		 * @apiParam {String} name     Nama Lokasi.
		  * @apiParam {String} description     Deskripsi Lokasi.
		   * @apiParam {String} latitude     Latitude Lokasi(required).
		    * @apiParam {String} longitude     Latitude Lokasi (required).
			 * @apiParam {String} incident_id     incident id.
			 * @apiParam {File} uploadfile     File Upload (Max 5MB).
  * @apiExample Cara penggunaan:
 http://apps.prosia.co.id:8072/sarcore/placemark
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
* @api {get} /placemark Get PlaceMark.
 * @apiVersion 0.1.0
  * @apiGroup API V-1
 * @apiName getPlaceMark
 * @apiDescription digunakan untuk mendapatkan List PlaceMark.
  * @apiExample Cara penggunaan:
 http://apps.prosia.co.id:8072/sarcore/placemark
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
            "placemarkName": "C",
            "description": "SEARCH AREA TW 0113",
            "latitude": "-7.005509577496602",
            "longitude": "121.60454806857639",
            "incidentId": "BSN-1301-0001",
            "image_icon": "default_placemark.png"
        },
        {
            "placemarkName": "B",
            "description": "SEARCH AREA TW 0113",
            "latitude": "-6.387382548929091",
            "longitude": "121.60462131076389",
            "incidentId": "BSN-1301-0001",
            "image_icon": "default_placemark.png"
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