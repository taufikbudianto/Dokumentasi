/**
* @api {get} /incident Get Incident.
 * @apiVersion 0.1.0
  * @apiGroup API V-1
 * @apiName getIncident
 * @apiDescription digunakan untuk mendapatkan list incident berdasarkan user login.
  * @apiExample Cara penggunaan:
 http://apps.prosia.co.id:8072/sarcore/incident
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
            "incident_id": "CGK-1303-0003",
            "incident_name": "VESSEL IN DISTRESS",
            "incident_number": "CGK-PLY-201303241740G",
            "location": "INDIAN OCEAN",
            "latitude": "-7.639722222222222",
            "longitude": "105.3013888888889",
            "incident_time": "2013-03-24 00:00:00.0",
            "gmt": "GMT+07:00",
            "incident_type": "Kecelakaan Laut",
            "saroffice_list": [
                {
                    "name": "KANTOR SAR JAKARTA",
                    "address": "Jl. Marsekal Suryadharma RT. 02 RW. 04 No. 115, Selapanjang, Neglasari, Tangerang 15127",
                    "number": "622155727115"
                }
            ],
            "picture_list": []
        },
        {
            "incident_id": "BKS-1304-0001",
            "incident_name": "ORANG TERSERET OMBAK",
            "incident_number": "BKS-DLL-201304131135G",
            "location": "PANTAI PANJANG",
            "latitude": "-3.85",
            "longitude": "102.2975",
            "incident_time": "2013-04-13 00:00:00.0",
            "gmt": "GMT+07:00",
            "incident_type": "Musibah [Lain-lain]",
            "saroffice_list": [
                {
                    "name": "KANTOR SAR BENGKULU",
                    "address": "Jl. Suprapto Dalam No. 10 RT 17/ RW 04 Betungan, Bengkulu",
                    "number": "627365500666"
                }
            ],
            "picture_list": []
        },
        {
            "incident_id": "PLM-1312-0001",
            "incident_name": "ORANG TENGGELAM",
            "incident_number": "PLM-DLL-201312100600G",
            "location": "SUNGAI",
            "latitude": "-3.3894444444444445",
            "longitude": "104.8338888888889",
            "incident_time": "2013-01-10 00:00:00.0",
            "gmt": "GMT+07:00",
            "incident_type": "Musibah [Lain-lain]",
            "saroffice_list": [
                {
                    "name": "KANTOR SAR PALEMBANG",
                    "address": "Jl. Gubernur H. Asnawi Mangku Alam/Akses Bandara Internasional Sultan Mahmud Badaruddin II, Palembang ",
                    "number": "62711357494"
                }
            ],
            "picture_list": []
        },
        {
            "incident_id": "BIK-1407-0002",
            "incident_name": "KAPAL TENGGELAM",
            "incident_number": "BIK-PLY-201407280940G",
            "location": "PERAIRAN NABIRE",
            "latitude": "3.3105555555555557",
            "longitude": "135.36694444444444",
            "incident_time": "2014-07-28 09:50:00.0",
            "gmt": "GMT+07:00",
            "incident_type": "Kecelakaan Laut",
            "saroffice_list": [
                {
                    "name": "KANTOR SAR BIAK",
                    "address": "Jl. Bosnik Raya No. 111 Biak -Papua 98111",
                    "number": "6298121111"
                }
            ],
            "picture_list": []
        },
        {
            "incident_id": "TNJ-1707-0001",
            "incident_name": "DISTRESS ALERT CORPAS SARSAT",
            "incident_number": "TNJ-DLL-201209142255G",
            "location": "Perairan Utara Pulau Sembur",
            "latitude": "0.6916666666666667",
            "longitude": "104.28416666666666",
            "incident_time": "2017-07-25 10:02:46.0",
            "gmt": "GMT+07:00",
            "incident_type": "Musibah [Lain-lain]",
            "saroffice_list": [
                {
                    "name": "KANTOR SAR TANJUNG PINANG",
                    "address": "Jl. RH. Fisabilillah No 2 Km 6,5 Atas Tanjungpinang Provinsi Kepulauan Riau - 29125",
                    "number": "62771319300"
                }
            ],
            "picture_list": []
        },
        {
            "incident_id": "BDO-1708-0003",
            "incident_name": "SJH",
            "incident_number": "BDO-BCA-201708211719Z",
            "location": null,
            "latitude": null,
            "longitude": null,
            "incident_time": "2017-08-21 00:00:00.0",
            "gmt": "GMT+00:00",
            "incident_type": "Bencana",
            "saroffice_list": [
                {
                    "name": "KANTOR SAR BANDUNG",
                    "address": "Jl. Raya Bandung - Garut KM. 27, Desa Sindang Pakuon, Kab. Sumedang - Jawa Barat 45364",
                    "number": "62227780437"
                }
            ],
            "picture_list": []
        },
        {
            "incident_id": "BSN-1708-0001",
            "incident_name": "kapal tenggelam",
            "incident_number": "BSN-PLY-201708221500Z",
            "location": null,
            "latitude": null,
            "longitude": null,
            "incident_time": "2017-08-22 15:02:55.0",
            "gmt": "GMT+00:00",
            "incident_type": "Kecelakaan Laut",
            "saroffice_list": [
                {
                    "name": "KANTOR PUSAT",
                    "address": "Jl. Angkasa Blok B 15  Kav. 2 - 3, Kemayoran Jakarta Pusat",
                    "number": null
                }
            ],
            "picture_list": []
        },
        {
            "incident_id": "BDO-1708-0002",
            "incident_name": "GBLA",
            "incident_number": "BDO-PNB-201708211642I",
            "location": null,
            "latitude": null,
            "longitude": null,
            "incident_time": "2017-08-21 00:00:00.0",
            "gmt": "GMT+09:00",
            "incident_type": "Kecelakaan Udara",
            "saroffice_list": [
                {
                    "name": "KANTOR SAR BANDUNG",
                    "address": "Jl. Raya Bandung - Garut KM. 27, Desa Sindang Pakuon, Kab. Sumedang - Jawa Barat 45364",
                    "number": "62227780437"
                }
            ],
            "picture_list": []
        },
        {
            "incident_id": "BSN-1708-0002",
            "incident_name": "Tabrakan Kapal",
            "incident_number": "BSN-PLY-201708301215G",
            "location": "Roxy",
            "latitude": "10.0",
            "longitude": "10.000833333333333",
            "incident_time": "2017-08-30 12:16:04.0",
            "gmt": "GMT+07:00",
            "incident_type": "Kecelakaan Laut",
            "saroffice_list": [
                {
                    "name": "KANTOR PUSAT",
                    "address": "Jl. Angkasa Blok B 15  Kav. 2 - 3, Kemayoran Jakarta Pusat",
                    "number": null
                }
            ],
            "picture_list": []
        },
        {
            "incident_id": "BDO-1708-0005",
            "incident_name": "Tabrakan Dokar",
            "incident_number": "BDO-PLY-201708301408G",
            "location": "PVJ",
            "latitude": "10.169444444444444",
            "longitude": "10.175555555555556",
            "incident_time": "2017-08-30 14:11:54.0",
            "gmt": "GMT+07:00",
            "incident_type": "Kecelakaan Laut",
            "saroffice_list": [
                {
                    "name": "KANTOR SAR SEMARANG",
                    "address": "Jl.Bukit Barisan A.IV No. 09 Perum Permata Puri Ngaliyan Semarang - 50189",
                    "number": "62247629192"
                }
            ],
            "picture_list": []
        },
        {
            "incident_id": "PGK-1709-0001",
            "incident_name": "AAA",
            "incident_number": "PGK-PLY-201709061142G",
            "location": null,
            "latitude": null,
            "longitude": null,
            "incident_time": "2017-09-06 11:43:02.0",
            "gmt": "GMT+07:00",
            "incident_type": "Kecelakaan Laut",
            "saroffice_list": [
                {
                    "name": "KANTOR SAR PANGKAL PINANG",
                    "address": "Jl. Pulau Pelepas, Kel. Beluluk Kec. Pangkalan Baru Kab. Bangka Tengah Prov. Kepulauan Bangka Belitung",
                    "number": "627174261338"
                }
            ],
            "picture_list": []
        },
        {
            "incident_id": "BSN-1709-0001",
            "incident_name": "UFO Down",
            "incident_number": "BSN-PNB-201709191140G",
            "location": "Jakarta",
            "latitude": "6.07091424",
            "longitude": "106.821441",
            "incident_time": "2017-09-19 11:41:43.0",
            "gmt": "GMT+07:00",
            "incident_type": "Kecelakaan Udara",
            "saroffice_list": [
                {
                    "name": "KANTOR PUSAT",
                    "address": "Jl. Angkasa Blok B 15  Kav. 2 - 3, Kemayoran Jakarta Pusat",
                    "number": null
                }
            ],
            "picture_list": []
        },
        {
            "incident_id": "BSN-1709-0002",
            "incident_name": "Insiden1",
            "incident_number": "BSN-PLY-201709271517G",
            "location": "Roxy",
            "latitude": "10.169444444444444",
            "longitude": "10.319444444444445",
            "incident_time": "2017-09-27 15:19:17.0",
            "gmt": "GMT+07:00",
            "incident_type": "Kecelakaan Laut",
            "saroffice_list": [
                {
                    "name": "KANTOR PUSAT",
                    "address": "Jl. Angkasa Blok B 15  Kav. 2 - 3, Kemayoran Jakarta Pusat",
                    "number": null
                }
            ],
            "picture_list": []
        },
        {
            "incident_id": "BSN-1709-0004",
            "incident_name": "Kecelakaan kegencet mobil Truk",
            "incident_number": "BSN-PLY-201709281639G",
            "location": "Roxy",
            "latitude": "10.169444444444444",
            "longitude": "10.169444444444444",
            "incident_time": "2017-09-28 16:39:55.0",
            "gmt": "GMT+07:00",
            "incident_type": "Kecelakaan Laut",
            "saroffice_list": [
                {
                    "name": "KANTOR PUSAT",
                    "address": "Jl. Angkasa Blok B 15  Kav. 2 - 3, Kemayoran Jakarta Pusat",
                    "number": null
                }
            ],
            "picture_list": []
        },
        {
            "incident_id": "PLW-1708-0001",
            "incident_name": "hard code",
            "incident_number": "PLW-DLL-201708221700H",
            "location": null,
            "latitude": null,
            "longitude": null,
            "incident_time": "2017-08-22 17:01:14.0",
            "gmt": "GMT+08:00",
            "incident_type": "Musibah [Lain-lain]",
            "saroffice_list": [
                {
                    "name": "KANTOR SAR PALU",
                    "address": "Jl. Elang No. 12 Kel. Tanah Mudindi, Kec. Palu Selatan, Kodya Palu",
                    "number": "62451481110"
                }
            ],
            "picture_list": []
        },
        {
            "incident_id": "BSN-1708-0003",
            "incident_name": "test dari beacon",
            "incident_number": "BSN-PLY-201303041624G",
            "location": "test",
            "latitude": "6.913",
            "longitude": "122.069",
            "incident_time": "2017-08-30 13:46:54.0",
            "gmt": "GMT+07:00",
            "incident_type": "Kecelakaan Laut",
            "saroffice_list": [
                {
                    "name": "KANTOR PUSAT",
                    "address": "Jl. Angkasa Blok B 15  Kav. 2 - 3, Kemayoran Jakarta Pusat",
                    "number": null
                }
            ],
            "picture_list": []
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