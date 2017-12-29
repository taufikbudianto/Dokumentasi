/**
* @api {get} /incident/:id Get Incident Detail.
 * @apiVersion 0.1.0
  * @apiGroup API V-1
 * @apiName getIncidentDetail
 * @apiDescription digunakan untuk mendapatkan detail incident berdasarkan incident_id.
		 * @apiParam {String} id     id->incident_id (required).
		  
  * @apiExample Cara penggunaan:
 http://apps.prosia.co.id:8072/sarcore/incident/CGK-1303-0003
  * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ"
 *     }
 * @apiSuccessExample Success-Response
{
    "response_code": "00",
    "response_message": "Success.",
    "data": {
        "incident_name": "VESSEL IN DISTRESS",
        "incident_number": "CGK-PLY-201303241740G",
        "sar_office": "KANTOR SAR JAKARTA",
        "incident_time": "2013-03-24 00:00:00.0",
        "general": {
            "incident_scala": "0",
            "sar_office": "KANTOR SAR JAKARTA",
            "icident_type": "Kecelakaan Laut",
            "incident_number": "CGK-PLY-201303241740G",
            "location": "INDIAN OCEAN",
            "latitude": "-7.639722222222222",
            "longitude": "105.3013888888889",
            "smc": "KAKANSAR JKT",
            "start_date": "2013-03-24 00:00:00.0",
            "close_date": "2013-03-24 00:00:00.0",
            "close_ops_date": null,
            "start_ops_date": "2013-03-24 08:26:00.0",
            "timezone_start_date": "GMT+07:00",
            "timezone_end_date": "GMT+07:00",
            "timezone_start_ops_date": "GMT+07:00",
            "timezone_end_ops_date": null,
            "survivor_number": 0,
            "lost_number": 0,
            "light_injured_number": 0,
            "heavy_injured_number": 0,
            "death_number": 0,
            "owner_name": null,
            "owner_address": null,
            "owner_email": null,
            "owner_phone_number": null,
            "owner_cellphone_number": null,
            "owner_fax": null,
            "object_call_sign": null,
            "object_length": null,
            "object_colour": null,
            "object_home_base": null
        },
        "SH": [
            {
                "date": "2012-05-10 07:35:00.0",
                "location": "GN SALAK",
                "object": "Pesawat",
                "description": null,
                "latitude": "6.718611111111111",
                "longitude": "106.72111111111111",
                "status": "Belum Diproses"
            },
            {
                "date": "2012-02-08 21:30:00.0",
                "location": "TENGGELAM",
                "object": "Orang",
                "description": "MUSIBAH TUG BOAT SINAR MAS 09 BSG 61 TENGGELAM BERANGKAT DARI BANJARMASIN TUJUAN AMBON PADA KOORDINAT 03 53 00 S 114 32 00 E DI SEKITAR TAKISUNG KMA 6 ORG SELAMAT DAN 4 ORANG BELUM DIKETEMUKAN ",
                "latitude": "-3.8833333333333333",
                "longitude": "114.53333333333333",
                "status": "Belum Diproses"
            }
        ],
        "SRU": [
            {
                "asset_type": "SRU Laut",
                "name": "Imporr",
                "potency_name": null,
                "distance": null,
                "angle": null,
                "tanggal": "null",
                "kecepatan": "null",
                "endurance": "null"
            },
            {
                "asset_type": "SRU Udara",
                "name": "anaks",
                "potency_name": null,
                "distance": null,
                "angle": null,
                "tanggal": "null",
                "kecepatan": "null",
                "endurance": "null"
            },
            {
                "asset_type": "SRU Udara",
                "name": "araajkk",
                "potency_name": null,
                "distance": null,
                "angle": null,
                "tanggal": "null",
                "kecepatan": "null",
                "endurance": "null"
            },
            {
                "asset_type": "SRU Darat",
                "name": "DDD",
                "potency_name": "Brimob SAT II Pelopor Kedung Alang",
                "distance": "5739.3039",
                "angle": "281.3118",
                "tanggal": "null",
                "kecepatan": "12.0",
                "endurance": "10.0"
            },
            {
                "asset_type": "SRU Udara",
                "name": "rendddd",
                "potency_name": null,
                "distance": null,
                "angle": null,
                "tanggal": "null",
                "kecepatan": "0.0",
                "endurance": "0.0"
            },
            {
                "asset_type": "SRU Udara",
                "name": "Pekanbaru 03",
                "potency_name": null,
                "distance": "543.2327",
                "angle": "334.7591",
                "tanggal": "null",
                "kecepatan": "0.0",
                "endurance": "0.0"
            }
        ],
        "resource": {
            "personnel": [],
            "potency": [
                {
                    "potency_name": "Ditpol Air POLRI",
                    "office_name": "KANTOR SAR JAKARTA",
                    "potency_type": "0",
                    "phone_number": "6221492124"
                },
                {
                    "potency_name": "Kecamatan",
                    "office_name": "KANTOR SAR JAKARTA",
                    "potency_type": "0",
                    "phone_number": "081319988082"
                },
                {
                    "potency_name": "ADPEL Tg.Priok",
                    "office_name": "KANTOR SAR JAKARTA",
                    "potency_type": "2",
                    "phone_number": null
                },
                {
                    "potency_name": "Brimob SAT II Pelopor Cikarang",
                    "office_name": "KANTOR SAR JAKARTA",
                    "potency_type": "0",
                    "phone_number": "62214563221"
                },
                {
                    "potency_name": "KPLP Sunda Kelapa",
                    "office_name": "KANTOR SAR JAKARTA",
                    "potency_type": "0",
                    "phone_number": null
                },
                {
                    "potency_name": "Dinas Kebakaran DKI Jakarta",
                    "office_name": "KANTOR SAR JAKARTA",
                    "potency_type": "1",
                    "phone_number": null
                },
                {
                    "potency_name": "Armada PLP. Tj. Priok",
                    "office_name": "KANTOR SAR JAKARTA",
                    "potency_type": "0",
                    "phone_number": null
                },
                {
                    "potency_name": "Kesbang Pol, Linmas Kab. Bogor",
                    "office_name": "KANTOR SAR JAKARTA",
                    "potency_type": "0",
                    "phone_number": null
                },
                {
                    "potency_name": "KPLP Tj. Priok",
                    "office_name": "KANTOR SAR JAKARTA",
                    "potency_type": "0",
                    "phone_number": "62214922124"
                },
                {
                    "potency_name": "Kesehatan Pelabuhan",
                    "office_name": "KANTOR SAR JAKARTA",
                    "potency_type": "2",
                    "phone_number": null
                },
                {
                    "potency_name": "Kodam Jayakarta",
                    "office_name": "KANTOR SAR JAKARTA",
                    "potency_type": "0",
                    "phone_number": null
                },
                {
                    "potency_name": "Koramil Sukamantri",
                    "office_name": "KANTOR SAR JAKARTA",
                    "potency_type": "0",
                    "phone_number": "08561609523"
                },
                {
                    "potency_name": "Korps Marinir Cilandak",
                    "office_name": "KANTOR SAR JAKARTA",
                    "potency_type": "0",
                    "phone_number": null
                },
                {
                    "potency_name": "Lantamal II",
                    "office_name": "KANTOR SAR JAKARTA",
                    "potency_type": "0",
                    "phone_number": null
                },
                {
                    "potency_name": "Lanud Halim Perdana Kusuma",
                    "office_name": "KANTOR SAR JAKARTA",
                    "potency_type": "0",
                    "phone_number": null
                },
                {
                    "potency_name": "Lanud Sulaiman Bandung",
                    "office_name": "KANTOR SAR JAKARTA",
                    "potency_type": "0",
                    "phone_number": null
                },
                {
                    "potency_name": "PKPPK Bandara Soekarno Hatta",
                    "office_name": "KANTOR SAR JAKARTA",
                    "potency_type": "0",
                    "phone_number": null
                },
                {
                    "potency_name": "PMI BOGOR",
                    "office_name": "KANTOR SAR JAKARTA",
                    "potency_type": "0",
                    "phone_number": "0251-8359040"
                },
                {
                    "potency_name": "PMI DKI Jakarta ",
                    "office_name": "KANTOR SAR JAKARTA",
                    "potency_type": "0",
                    "phone_number": null
                },
                {
                    "potency_name": "Pangkalan Armada Bea Cukai Tj. Priok",
                    "office_name": "KANTOR SAR JAKARTA",
                    "potency_type": "0",
                    "phone_number": null
                },
                {
                    "potency_name": "Polsek Sukamantri",
                    "office_name": "KANTOR SAR JAKARTA",
                    "potency_type": "0",
                    "phone_number": "085733361333"
                },
                {
                    "potency_name": "Posko Relawan",
                    "office_name": "KANTOR SAR JAKARTA",
                    "potency_type": "0",
                    "phone_number": "0817356168"
                },
                {
                    "potency_name": "Sub Dit Pol Udara",
                    "office_name": "KANTOR SAR JAKARTA",
                    "potency_type": "1",
                    "phone_number": null
                },
                {
                    "potency_name": "Wing 3 Paskhas Bandung",
                    "office_name": "KANTOR SAR JAKARTA",
                    "potency_type": "0",
                    "phone_number": null
                },
                {
                    "potency_name": "DVI Pusdokes POLRI",
                    "office_name": "KANTOR SAR JAKARTA",
                    "potency_type": "0",
                    "phone_number": null
                }
            ],
            "asset": [
                {
                    "asset_name": "ccc",
                    "office_name": "KANTOR SAR JAKARTA",
                    "quantity": null
                },
                {
                    "asset_name": "Kantong Mayat",
                    "office_name": "KANTOR SAR JAKARTA",
                    "quantity": null
                },
                {
                    "asset_name": "Kantong Mayat",
                    "office_name": "KANTOR SAR JAKARTA",
                    "quantity": null
                },
                {
                    "asset_name": "SPEED",
                    "office_name": "KANTOR SAR JAKARTA",
                    "quantity": null
                },
                {
                    "asset_name": "Kapal Selam 01",
                    "office_name": "KANTOR SAR JAMBI",
                    "quantity": null
                },
                {
                    "asset_name": "Ambulance",
                    "office_name": "KANTOR SAR JAKARTA",
                    "quantity": null
                },
                {
                    "asset_name": "AMBULANCE BOGOR",
                    "office_name": "KANTOR SAR JAKARTA",
                    "quantity": null
                },
                {
                    "asset_name": "Ambulance",
                    "office_name": "KANTOR SAR JAKARTA",
                    "quantity": null
                },
                {
                    "asset_name": "Ambulance",
                    "office_name": "KANTOR SAR JAKARTA",
                    "quantity": null
                },
                {
                    "asset_name": "Pal Radio",
                    "office_name": "KANTOR SAR JAKARTA",
                    "quantity": null
                },
                {
                    "asset_name": "Pal Radio",
                    "office_name": "KANTOR SAR JAKARTA",
                    "quantity": null
                },
                {
                    "asset_name": "Pal Radio",
                    "office_name": "KANTOR SAR JAKARTA",
                    "quantity": null
                },
                {
                    "asset_name": "SSB",
                    "office_name": "KANTOR SAR JAKARTA",
                    "quantity": null
                },
                {
                    "asset_name": "SSB",
                    "office_name": "KANTOR SAR JAKARTA",
                    "quantity": null
                },
                {
                    "asset_name": "Pal Radio",
                    "office_name": "KANTOR SAR JAKARTA",
                    "quantity": null
                },
                {
                    "asset_name": "Handy Talky",
                    "office_name": "KANTOR SAR JAKARTA",
                    "quantity": null
                },
                {
                    "asset_name": "aaaaxxx",
                    "office_name": "KANTOR SAR JAKARTA",
                    "quantity": null
                },
                {
                    "asset_name": "Eskavator",
                    "office_name": "KANTOR SAR JAKARTA",
                    "quantity": null
                }
            ]
        },
        "planning": null,
        "log": [
            {
                "subject_log": "this is a subject test save 23-12-2017",
                "content": "this is a content",
                "date": "2017-12-05",
                "time": "16:05:30",
                "initiator": "nama personel",
                "latitude": "0.418263",
                "longitude": "0.478122",
                "picture": []
            },
            {
                "subject_log": "gsgs",
                "content": "fsfsf",
                "date": "1999-12-31",
                "time": "10:00:00",
                "initiator": "nama personel",
                "latitude": "6262",
                "longitude": "62626",
                "picture": []
            },
            {
                "subject_log": "ffffff",
                "content": "ffffff",
                "date": "1999-12-30",
                "time": "10:00:00",
                "initiator": "nama personel",
                "latitude": "-1",
                "longitude": "111",
                "picture": []
            },
            {
                "subject_log": null,
                "content": "ini content test",
                "date": "2017-12-05",
                "time": "16:05:30",
                "initiator": "nama personel",
                "latitude": null,
                "longitude": null,
                "picture": []
            },
            {
                "subject_log": null,
                "content": "ini content test",
                "date": "2017-12-05",
                "time": "16:05:30",
                "initiator": "nama personel",
                "latitude": null,
                "longitude": null,
                "picture": []
            }
        ],
        "pob": [],
        "drift_calculation": null
    }
}
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 UnAuthorized
{
    "response_code": "UA",
    "response_message": "Invalid/expired access token."
}
*/