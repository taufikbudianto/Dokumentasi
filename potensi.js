/**
* @api {get} /potency Get Potensi.
 * @apiVersion 0.1.0
  * @apiGroup API V-1
 * @apiName getpotensi
 * @apiDescription digunakan untuk mendapatkan List Potensi.
  * @apiExample Cara penggunaan:
http://apps.prosia.co.id:8072/sarcore/potency
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
            "potency_name": "Brimob SAT II Pelopor Kedung Alang",
            "potency_address": "Bogor",
            "latitude": "5.555833333333333",
            "longitude": "95.32027777777778",
            "potency_phone_number": "62216882023",
            "province": "Bengkulu",
            "contact_list": [
                {
                    "pic": "Letda Yanuar",
                    "email": "dedi_blesak@yahoo.com",
                    "potency_cellphone_number": "6281381555480"
                }
            ],
            "picture_list": []
        },
        {
            "potency_name": "Dedi",
            "potency_address": "Bbbbbbb",
            "latitude": "12.203333333333333",
            "longitude": "22.03388888888889",
            "potency_phone_number": "021009091",
            "province": "Bali",
            "contact_list": [],
            "picture_list": []
        },
        {
            "potency_name": null,
            "potency_address": null,
            "latitude": null,
            "longitude": null,
            "potency_phone_number": null,
            "province": null,
            "contact_list": [],
            "picture_list": []
        },
        {
            "potency_name": "test071117",
            "potency_address": "test 01",
            "latitude": null,
            "longitude": null,
            "potency_phone_number": null,
            "province": "Bali",
            "contact_list": [
                {
                    "pic": "xx",
                    "email": null,
                    "potency_cellphone_number": null
                }
            ],
            "picture_list": []
        },
        {
            "potency_name": "nama",
            "potency_address": "alamat",
            "latitude": "1.0341666666666667",
            "longitude": "4.085",
            "potency_phone_number": null,
            "province": "Bali",
            "contact_list": [],
            "picture_list": []
        },
        {
            "potency_name": "Coba",
            "potency_address": "Jalan",
            "latitude": null,
            "longitude": null,
            "potency_phone_number": "123",
            "province": "Jawa Barat",
            "contact_list": [],
            "picture_list": []
        },
        {
            "potency_name": "Kesbanglinmas Kab. Nias",
            "potency_address": "Jl. Soekarno No .3 Gusit",
            "latitude": "-1.386388888888889",
            "longitude": "97.71055555555556",
            "potency_phone_number": null,
            "province": "Sumatera Utara",
            "contact_list": [
                {
                    "pic": "Zainul Arifin Zega",
                    "email": null,
                    "potency_cellphone_number": "6281370341298"
                }
            ],
            "picture_list": []
        },
    
        {
            "potency_name": "Bemo",
            "potency_address": "Jakarta",
            "latitude": null,
            "longitude": null,
            "potency_phone_number": null,
            "province": "Bengkulu",
            "contact_list": [
                {
                    "pic": "Atho",
                    "email": null,
                    "potency_cellphone_number": "0864213579"
                }
            ],
            "picture_list": [
                {
                    "picture": "http://192.168.195.148:8080/sarcore/document/potency/101"
                },
                {
                    "picture": "http://192.168.195.148:8080/sarcore/document/potency/114"
                }
            ]
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