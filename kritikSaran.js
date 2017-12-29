/**
* @api {Post} /kritiksaran Add Kritik Dan saran.
 * @apiVersion 0.1.0
  * @apiGroup API V-1-post
 * @apiName addSaran
 * @apiDescription digunakan untuk menambahkan kritik dan saran.
  * @apiExample Cara penggunaan:
 http://apps.prosia.co.id:8072/sarcore/kritiksaran
 * @apiParam {String} comment     Kritik Dan saran.
  * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ"
 *     }
  * @apiSuccessExample Post-Example Body:
 Post
 
 *     {
 *       "comment" : "Kritik dan saran di masukkan ke sini."
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
* @api {get} /kritikdansaran Get Kritik Dan saran.
 * @apiVersion 0.1.0
  * @apiGroup API V-1
 * @apiName getSaran
 * @apiDescription digunakan untuk mendapatkan kritik dan saran.
  * @apiExample Cara penggunaan:
 http://apps.prosia.co.id:8072/sarcore/kritikdansaran
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
            "kritik_dan_saranId": "7",
            "personnelId": null,
            "kritik_dan_saran": "Tessss.....2"
        },
        {
            "kritik_dan_saranId": "8",
            "personnelId": null,
            "kritik_dan_saran": "Tessss.....2"
        },
        {
            "kritik_dan_saranId": "17",
            "personnelId": null,
            "kritik_dan_saran": "Jumlah personel sar "
        },
        {
            "kritik_dan_saranId": "15",
            "personnelId": null,
            "kritik_dan_saran": "Jumlah personel sar di daerah terpencil harus di perbanyak mengingat kurangnya sumber daya manusia pada daerah-daerah tersebut"
        },
        {
            "kritik_dan_saranId": "16",
            "personnelId": null,
            "kritik_dan_saran": "Jumlah personel sar di daerah terpencil harus di perbanyak"
        },
        {
            "kritik_dan_saranId": "10",
            "personnelId": null,
            "kritik_dan_saran": null
        },
        {
            "kritik_dan_saranId": "12",
            "personnelId": null,
            "kritik_dan_saran": "rv"
        },
        {
            "kritik_dan_saranId": "1",
            "personnelId": null,
            "kritik_dan_saran": "SARAN"
        },
        {
            "kritik_dan_saranId": "2",
            "personnelId": null,
            "kritik_dan_saran": "KRITIK"
        },
        {
            "kritik_dan_saranId": "3",
            "personnelId": null,
            "kritik_dan_saran": null
        },
        {
            "kritik_dan_saranId": "4",
            "personnelId": null,
            "kritik_dan_saran": "loren ipsum....."
        },
        {
            "kritik_dan_saranId": "5",
            "personnelId": null,
            "kritik_dan_saran": "Tessss....."
        },
        {
            "kritik_dan_saranId": "9",
            "personnelId": null,
            "kritik_dan_saran": "okee"
        },
        {
            "kritik_dan_saranId": "11",
            "personnelId": null,
            "kritik_dan_saran": "sangat baik"
        },
        {
            "kritik_dan_saranId": "13",
            "personnelId": null,
            "kritik_dan_saran": "Coba2"
        },
        {
            "kritik_dan_saranId": "14",
            "personnelId": null,
            "kritik_dan_saran": "Jumlah personel sar di daerah terpencil harus di perbanyak mengingat kurangnya sumber daya manusia pada daerah-daerah tersebut"
        },
        {
            "kritik_dan_saranId": "6",
            "personnelId": null,
            "kritik_dan_saran": "Tessss.....lagi"
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