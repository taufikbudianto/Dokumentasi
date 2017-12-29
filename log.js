/**
* @api {Post} /incident/:incidentid/log Add Log Incident.
 * @apiVersion 0.1.0
  * @apiGroup API V-1-post
 * @apiName addLogIncident
 * @apiDescription digunakan untuk menambahkan Log Incident ==>MultiPart
 .
  * @apiExample Cara penggunaan:
http://apps.prosia.co.id:8072/sarcore/incident/CGK-1303-0003/log
 * @apiParam {String} subject_log     Subject Log.
 * @apiParam {String} content     content Log.
 * @apiParam {String} date     date Log.
 * @apiParam {String} time     time Log.
 * @apiParam {String} initiator     initiator Log.
 * @apiParam {String} latitude     latitude Log.
 * @apiParam {String} longitude     longitude Log.
  * @apiParam {File} uploadfile     Upload Log file max 5mb.
 
 
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