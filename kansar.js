/**
* @api {get} /office Get List Office Sar.
 * @apiVersion 0.1.0
  * @apiGroup API V-1
 * @apiName getKansar
 * @apiDescription digunakan untuk mendapatkan List Office Sar.
  * @apiExample Cara penggunaan:
 http://apps.prosia.co.id:8072/sarcore/office
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
            "office_code": "BKS",
            "office_name": "KANTOR SAR BENGKULU",
            "office_address": "Jl. Suprapto Dalam No. 10 RT 17/ RW 04 Betungan, Bengkulu",
            "latitude": "-6.157222222222222",
            "longitude": "106.83416666666666",
            "pic": null,
            "number": "627365500666",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "PGK",
            "office_name": "KANTOR SAR PANGKAL PINANG",
            "office_address": "Jl. Pulau Pelepas, Kel. Beluluk Kec. Pangkalan Baru Kab. Bangka Tengah Prov. Kepulauan Bangka Belitung",
            "latitude": "-2.1166666666666667",
            "longitude": "106.10527777777777",
            "pic": null,
            "number": "627174261338",
            "picture_list": [],
            "contact_list": [
                {
                    "name": "JUMARIL",
                    "position": "KAKANSAR",
                    "email": null,
                    "number": "085397704118"
                }
            ]
        },
        {
            "office_code": "DJB",
            "office_name": "KANTOR SAR JAMBI",
            "office_address": "Jl Jawa RT.07 Kel. Talang Bakung Kec. Jambi Selatan - 36135",
            "latitude": "0.0",
            "longitude": "0.0",
            "pic": null,
            "number": "62741571111",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "PLW",
            "office_name": "KANTOR SAR PALU",
            "office_address": "Jl. Elang No. 12 Kel. Tanah Mudindi, Kec. Palu Selatan, Kodya Palu",
            "latitude": "-0.9005555555555556",
            "longitude": "119.885",
            "pic": null,
            "number": "62451481110",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "BSN",
            "office_name": "KANTOR PUSAT",
            "office_address": "Jl. Angkasa Blok B 15  Kav. 2 - 3, Kemayoran Jakarta Pusat",
            "latitude": "-6.157222222222225",
            "longitude": "106.84194444444434",
            "pic": null,
            "number": null,
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "BPN",
            "office_name": "KANTOR SAR BALIKPAPAN",
            "office_address": "Jl. Marsma R. Iswahyudi No.3 RT. 11 SepingganRaya, Balikpapan Selatan, Balikpapan, Kalimantan Timur 76115",
            "latitude": "-1.26",
            "longitude": "116.89833333333333",
            "pic": null,
            "number": "6254762111",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "KDI",
            "office_name": "KANTOR SAR KENDARI",
            "office_address": "Jl. Kapten Pierre Tendean No. 91, Kec. Baruga, Kendari 93117 ",
            "latitude": "-4.040555555555556",
            "longitude": "122.4888888888889",
            "pic": null,
            "number": "624013196557",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "PKU",
            "office_name": "KANTOR SAR PEKANBARU",
            "office_address": "Jl. Jend. Sudirman Ujung Simpang Tiga (arah TNI AU), Pekanbaru - 28284",
            "latitude": "0.4697222222222222",
            "longitude": "101.45166666666667",
            "pic": null,
            "number": "62761679991",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "BTJ",
            "office_name": "KANTOR SAR BANDA ACEH",
            "office_address": "Jl. Sultan Malikusaleh No. 108, Lhong Raya-Banda Aceh, 23238",
            "latitude": "5.52",
            "longitude": "95.32277777777777",
            "pic": null,
            "number": "6265133876",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "MES",
            "office_name": "KANTOR SAR MEDAN",
            "office_address": "Jl. Jamin Ginting No. 99 Kec. Medan Tuntungan Kel. Sidomulyo, MEdan 20136",
            "latitude": "3.5369444444444444",
            "longitude": "98.63888888888889",
            "pic": null,
            "number": "62618368111",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "BIK",
            "office_name": "KANTOR SAR BIAK",
            "office_address": "Jl. Bosnik Raya No. 111 Biak -Papua 98111",
            "latitude": "-1.1883333333333335",
            "longitude": "136.11888888888888",
            "pic": null,
            "number": "6298121111",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "TIM",
            "office_name": "KANTOR SAR TIMIKA",
            "office_address": "Jl. Yos Sudardo KM.5 Timika 99910",
            "latitude": "-4.525",
            "longitude": "136.86888888888888",
            "pic": null,
            "number": "629013125089",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "UPG",
            "office_name": "KANTOR SAR MAKASSAR",
            "office_address": "Bandara Sultan Hasanuddin Makasar 90552",
            "latitude": "-5.071944444444444",
            "longitude": "119.54444444444445",
            "pic": null,
            "number": "62411550024",
            "picture_list": [],
            "contact_list": [
                {
                    "name": "Mz",
                    "position": "Karang Taruna",
                    "email": null,
                    "number": "aku"
                }
            ]
        },
        {
            "office_code": "CGK",
            "office_name": "KANTOR SAR JAKARTA",
            "office_address": "Jl. Marsekal Suryadharma RT. 02 RW. 04 No. 115, Selapanjang, Neglasari, Tangerang 15127",
            "latitude": "-6.126111111111111",
            "longitude": "106.65555555555555",
            "pic": null,
            "number": "622155727115",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "DJJ",
            "office_name": "KANTOR SAR JAYAPURA",
            "office_address": "Jl. Raya Hawai Sentani No. 115, Jayapura - 99352",
            "latitude": "-2.736388888888889",
            "longitude": "140.53277777777777",
            "pic": null,
            "number": "62967591093",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "PLM",
            "office_name": "KANTOR SAR PALEMBANG",
            "office_address": "Jl. Gubernur H. Asnawi Mangku Alam/Akses Bandara Internasional Sultan Mahmud Badaruddin II, Palembang ",
            "latitude": "-2.8986111111111112",
            "longitude": "104.71583333333334",
            "pic": null,
            "number": "62711357494",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "AMQ",
            "office_name": "KANTOR SAR AMBON",
            "office_address": "Jl. Dr. J. Leimena, Hative Besar - Kec. Teluk Ambon 97234",
            "latitude": "-3.705",
            "longitude": "128.09027777777777",
            "pic": null,
            "number": "62911323774",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "DPS",
            "office_name": "KANTOR SAR DENPASAR",
            "office_address": "JL. Raya Uluwatu no.201 Jimbaran - Badung - Bali 80361",
            "latitude": "-8.79",
            "longitude": "115.16333333333333",
            "pic": null,
            "number": "62361703300",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "KPG",
            "office_name": "KANTOR SAR KUPANG",
            "office_address": "JL. Adisucipto - Penfui Kupang - NTT 85361 ",
            "latitude": "-10.171944444444444",
            "longitude": "123.65527777777778",
            "pic": null,
            "number": "62380881573",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "MDC",
            "office_name": "KANTOR SAR MANADO",
            "office_address": "Jl. Worang By Pass Manado-Bitung, Desa Kaasar Kecamatan Kauditan Kabupaten Minahasa Utara, Sulawesi Utara",
            "latitude": "1.4013888888888888",
            "longitude": "125.01444444444445",
            "pic": null,
            "number": "6243852052",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "MKB",
            "office_name": "KANTOR SAR PADANG",
            "office_address": "Jl. By Pass Km. 25 Anak Air Kecamatan. Koto Tangah Padang Sumatera Barat - 25139",
            "latitude": "-0.8080555555555555",
            "longitude": "100.32555555555555",
            "pic": null,
            "number": "62751484534",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "PNK",
            "office_name": "KANTOR SAR PONTIANAK",
            "office_address": "Jl. Adisucipto KM. 15,6 Desa Arang Limbung Kec. Sungai Raya Kab. Kubu Raya Pontianak, Kalimantan Barat 78391 A",
            "latitude": "-0.13583333333333333",
            "longitude": "109.41",
            "pic": null,
            "number": "62561721234",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "SUB",
            "office_name": "KANTOR SAR SURABAYA",
            "office_address": "Jl. Raya Bandara Juanda Baru 61253-A, Kec. Sedati, Kab. Sidoarjo, Jawa Timur.",
            "latitude": "-7.370833333333334",
            "longitude": "112.77805555555555",
            "pic": null,
            "number": "62318666611",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "SRG",
            "office_name": "KANTOR SAR SEMARANG",
            "office_address": "Jl.Bukit Barisan A.IV No. 09 Perum Permata Puri Ngaliyan Semarang - 50189",
            "latitude": "-7.0008333333333335",
            "longitude": "110.33972222222222",
            "pic": null,
            "number": "62247629192",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "SOQ",
            "office_name": "KANTOR SAR SORONG",
            "office_address": "Jl. Avignam No.115 KM.10 Klawuyuk, Sorong",
            "latitude": "-0.8897222222222222",
            "longitude": "131.32305555555556",
            "pic": null,
            "number": "629513102316",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "TTE",
            "office_name": "KANTOR SAR TERNATE",
            "office_address": "Jl. Depot Pertamina Kel. Jambula, Ternate Selatan, 97751",
            "latitude": "0.7619444444444444",
            "longitude": "127.3175",
            "pic": null,
            "number": "629213120069",
            "picture_list": [],
            "contact_list": [
                {
                    "name": "JUMARIL",
                    "position": "KAKANSAR",
                    "email": null,
                    "number": "085397704118"
                },
                {
                    "name": "AMIRUDDIN",
                    "position": "KAKANSAR",
                    "email": null,
                    "number": null
                }
            ]
        },
        {
            "office_code": "TKG",
            "office_name": "KANTOR SAR LAMPUNG",
            "office_address": "Jl. Alamsyah Ratu Perwira Negara KM 27 Branti Raya, Kecamatan Natar, Lampung Selatan 35362",
            "latitude": "-5.25",
            "longitude": "105.18166666666667",
            "pic": null,
            "number": "627217697027",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "GTO",
            "office_name": "KANTOR SAR GORONTALO",
            "office_address": "Jl. Pangeran Hidayat II, Kota Gorontalo",
            "latitude": "0.5558333333333334",
            "longitude": "123.06666666666666",
            "pic": null,
            "number": "624358521161",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "MKW",
            "office_name": "KANTOR SAR MANOKWARI",
            "office_address": "Jl. Drs. Esau sessa, Souwi Gunung, Manokwari 98315, Papua Barat",
            "latitude": "-0.8972222222222223",
            "longitude": "134.04305555555555",
            "pic": null,
            "number": "62986213263",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "BDO",
            "office_name": "KANTOR SAR BANDUNG",
            "office_address": "Jl. Raya Bandung - Garut KM. 27, Desa Sindang Pakuon, Kab. Sumedang - Jawa Barat 45364",
            "latitude": "6.966111111111111",
            "longitude": "107.99194444444444",
            "pic": null,
            "number": "62227780437",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "TNJ",
            "office_name": "KANTOR SAR TANJUNG PINANG",
            "office_address": "Jl. RH. Fisabilillah No 2 Km 6,5 Atas Tanjungpinang Provinsi Kepulauan Riau - 29125",
            "latitude": "0.9025",
            "longitude": "104.48666666666666",
            "pic": null,
            "number": "62771319300",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "AMI",
            "office_name": "KANTOR SAR MATARAM",
            "office_address": "Jl. TGH. Lopan Kec. Labuapi Kab. Lombok Barat Nusa Tenggara Barat",
            "latitude": "-8.631388888888889",
            "longitude": "116.12638888888888",
            "pic": null,
            "number": "62370633253",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "BDJ",
            "office_name": "KANTOR SAR BANJARMASIN",
            "office_address": "Jl. A.Yani KM.28,2 Kec. Landasan Ulin, Kel. Landasan Ulin, Timur Banjarbaru, Kalsel",
            "latitude": "-3.45",
            "longitude": "114.76666666666667",
            "pic": null,
            "number": "625114707911",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "MKQ",
            "office_name": "KANTOR SAR MERAUKE",
            "office_address": "Jl. R.E Marthadinata, Kel. Rimba Jaya, Kec. Merauke, Merauke , Papua 99611",
            "latitude": "-8.518611111111111",
            "longitude": "140.4125",
            "pic": null,
            "number": "62971321158",
            "picture_list": [],
            "contact_list": []
        },
        {
            "office_code": "JOG",
            "office_name": "KANTOR SAR YOGYAKARTA",
            "office_address": "Jl. Raya Jogja - Wates Km. 11,5 Kec. Sedayu, Kab. Bantul, Yogyakarta 55752",
            "latitude": null,
            "longitude": null,
            "pic": null,
            "number": "622747485111",
            "picture_list": [],
            "contact_list": []
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