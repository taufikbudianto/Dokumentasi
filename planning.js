/**
* @api {get} /planning/{incidentid} Get Planning.
 * @apiVersion 0.1.0
  * @apiGroup API V-1
 * @apiName getPlanning
 * @apiDescription digunakan untuk mendapatkan List Planning.
  * @apiExample Cara penggunaan:
http://apps.prosia.co.id:8072/sarcore/planning/BSN-1711-0014
  * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ"
 *     }
  * @apiParam {String} name     name.
   * @apiParam {String} deskripsi     dibuat_oleh.
    * @apiParam {String} tanggal_operasi     Tanggal Operasi.
	 * @apiParam {String} metode     metode.
	  * @apiParam {String} dibuat_oleh     dibuat_oleh.
	  * @apiParam {String} trapezium     Url Untuk trapezium.
	  * @apiParam {String} driftcalculation     Url untuk driftcalculation.

 * @apiSuccessExample Success-Response
{
    "response_code": "00",
    "response_message": "Success.",
    "data": [
        {
            "name": "test",
            "deskripsi": "null",
            "tanggal_operasi": "null",
            "metode": "Custom",
            "dibuat_oleh": "null",
            "tanggal_modifikasi": "null",
            "driftcalculation": "http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014",
            "trapezium": "http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014"
        },
        {
            "name": "ws1",
            "deskripsi": "null",
            "tanggal_operasi": "2017-11-29 15:04:00.0",
            "metode": "Drift Calculation",
            "dibuat_oleh": "null",
            "tanggal_modifikasi": "null",
            "driftcalculation": "http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014",
            "trapezium": "http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014"
        },
        {
            "name": "ws1-a",
            "deskripsi": "null",
            "tanggal_operasi": "2017-12-13 05:00:00.0",
            "metode": "Drift Calculation",
            "dibuat_oleh": "superadmin",
            "tanggal_modifikasi": "null",
            "driftcalculation": "http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014",
            "trapezium": "http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014"
        },
        {
            "name": "aaaa",
            "deskripsi": "ddddd",
            "tanggal_operasi": "2017-12-19 00:00:00.0",
            "metode": "Drift Calculation",
            "dibuat_oleh": "superadmin",
            "tanggal_modifikasi": "null",
            "driftcalculation": "http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014",
            "trapezium": "http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014"
        },
        {
            "name": "angga",
            "deskripsi": "gggg",
            "tanggal_operasi": "2017-12-19 10:13:00.0",
            "metode": "Drift Calculation",
            "dibuat_oleh": "superadmin",
            "tanggal_modifikasi": "null",
            "driftcalculation": "http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014",
            "trapezium": "http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014"
        },
        {
            "name": "ws1-b",
            "deskripsi": "null",
            "tanggal_operasi": "2017-11-30 09:00:00.0",
            "metode": "Drift Calculation",
            "dibuat_oleh": "superadmin",
            "tanggal_modifikasi": "null",
            "driftcalculation": "http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014",
            "trapezium": "http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014"
        },
        {
            "name": "test6",
            "deskripsi": "null",
            "tanggal_operasi": "null",
            "metode": "Trapesium Search Area",
            "dibuat_oleh": "superadmin",
            "tanggal_modifikasi": "2017-12-08 10:48:32.0",
            "driftcalculation": "http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014",
            "trapezium": "http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014"
        },
        {
            "name": "test7",
            "deskripsi": "null",
            "tanggal_operasi": "null",
            "metode": "Trapesium Search Area",
            "dibuat_oleh": "superadmin",
            "tanggal_modifikasi": "2017-12-08 13:56:42.0",
            "driftcalculation": "http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014",
            "trapezium": "http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014"
        },
        {
            "name": "test8",
            "deskripsi": "null",
            "tanggal_operasi": "null",
            "metode": "Trapesium Search Area",
            "dibuat_oleh": "superadmin",
            "tanggal_modifikasi": "2017-12-08 14:08:04.0",
            "driftcalculation": "http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014",
            "trapezium": "http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014"
        },
        {
            "name": "tt1",
            "deskripsi": "null",
            "tanggal_operasi": "null",
            "metode": "Trapesium Search Area",
            "dibuat_oleh": "superadmin",
            "tanggal_modifikasi": "2017-12-13 14:50:09.0",
            "driftcalculation": "http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014",
            "trapezium": "http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014"
        },
        {
            "name": "test5",
            "deskripsi": "null",
            "tanggal_operasi": "null",
            "metode": "Trapesium Search Area",
            "dibuat_oleh": "superadmin",
            "tanggal_modifikasi": "2017-12-08 10:21:29.0",
            "driftcalculation": "http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014",
            "trapezium": "http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014"
        },
        {
            "name": "test4",
            "deskripsi": "null",
            "tanggal_operasi": "null",
            "metode": "Trapesium Search Area",
            "dibuat_oleh": "superadmin",
            "tanggal_modifikasi": "2017-12-08 10:16:15.0",
            "driftcalculation": "http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014",
            "trapezium": "http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014"
        },
        {
            "name": "test3",
            "deskripsi": "null",
            "tanggal_operasi": "null",
            "metode": "Trapesium Search Area",
            "dibuat_oleh": "superadmin",
            "tanggal_modifikasi": "2017-12-08 09:58:51.0",
            "driftcalculation": "http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014",
            "trapezium": "http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014"
        },
        {
            "name": "tt2",
            "deskripsi": "null",
            "tanggal_operasi": "null",
            "metode": "Trapesium Search Area",
            "dibuat_oleh": "superadmin",
            "tanggal_modifikasi": "2017-12-13 14:52:02.0",
            "driftcalculation": "http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014",
            "trapezium": "http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014"
        },
        {
            "name": "test1",
            "deskripsi": "null",
            "tanggal_operasi": "null",
            "metode": "Trapesium Search Area",
            "dibuat_oleh": "superadmin",
            "tanggal_modifikasi": "2017-12-07 20:04:01.0",
            "driftcalculation": "http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014",
            "trapezium": "http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014"
        },
        {
            "name": "TA1-2",
            "deskripsi": "null",
            "tanggal_operasi": "null",
            "metode": "Trapesium Search Area",
            "dibuat_oleh": "superadmin",
            "tanggal_modifikasi": "null",
            "driftcalculation": "http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014",
            "trapezium": "http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014"
        },
        {
            "name": "test2",
            "deskripsi": "null",
            "tanggal_operasi": "null",
            "metode": "Trapesium Search Area",
            "dibuat_oleh": "superadmin",
            "tanggal_modifikasi": "2017-12-08 09:52:22.0",
            "driftcalculation": "http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014",
            "trapezium": "http://apps.prosia.co.id:8072/sarcore/planning/trapezium/BSN-1711-0014"
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