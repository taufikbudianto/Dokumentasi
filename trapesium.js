/**
* @api {get} /planning/trapezium/{incidentid} Get trapezium.
 * @apiVersion 0.1.0
  * @apiGroup API V-1
 * @apiName gettrapezium
 * @apiDescription digunakan untuk mendapatkan List trapezium.
  * @apiExample Cara penggunaan:
http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014
  * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ"
 *     }


 * @apiSuccessExample Success-Response
oks
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 UnAuthorized
{
    "response_code": "UA",
    "response_message": "Invalid/expired access token."
}
*/