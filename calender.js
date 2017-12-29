/**
* @api {get} /calendar?start=17082017&to=17122017 Get Kalender.
 * @apiVersion 0.1.0
  * @apiGroup API V-1
 * @apiName GetCalender
 * @apiDescription digunakan untuk mendapatkan List Kalender.
 * @apiParam {String} [start]     Optional start format date ='ddMMYYYY'.
 * @apiParam {String} [to]     Optional to with format date ='ddMMYYYY'.
  * @apiExample Cara penggunaan:
 http://apps.prosia.co.id:8072/sarcore/calendar?start=17082017&to=17122017
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
            "title": "judul",
            "all_day": true,
            "start_date": "2017-11-28 13:27:29.636",
            "end_date": "2017-11-28 13:27:29.636",
            "repeat": "no repeat",
            "reminder": 10
        },
        {
            "title": "Senam Pagi yang ke 100",
            "all_day": true,
            "start_date": "2017-11-24 17:40:00.0+07",
            "end_date": "2017-11-24 17:40:00.0+07",
            "repeat": "monthly",
            "reminder": 10
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