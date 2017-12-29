/**
 * @api {post} /authenticate Generate token.
 * @apiVersion 0.1.0
 * @apiName GetUser
 * @apiGroup API V-1
 * @apiDescription digunakan untuk mengenerate Token.
 *
 * @apiParam {String} username  Username of the User.
 * @apiParam {String} password  Password of the User.
 *
 * @apiExample Cara penggunaan:
* http://apps.prosia.co.id:8072/sarcore/authenticate
 * @apiSuccessExample Post-Example Body:
 Post Example
 
 *     {
 *       "username" : "198611232010121001",
 *       "password": "123"
 *     }
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "response_code": "00",
    "access_token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ",
    "menu_list": [
        "PROFILE",
        "SETTING",
        "POLICY",
        "FEEDBACK"
    ]
}
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 UnAuthorized
{
    "response_code": "UA",
    "response_message": "Username or password not match."
}
 */
 
 /**
 * @api {get} /profile Get Profile.
 * @apiVersion 0.1.0
  * @apiGroup API V-1
 * @apiName GetUserDetail
 * @apiDescription digunakan untuk mendapatkan detail user.
  * @apiExample Cara penggunaan:
  http://apps.prosia.co.id:8072/sarcore/profile
  * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTg2MTEyMzIwMTAxMjEwMDEiLCJleHAiOjE1MTQ2MDYzMjN9.HN4IRCb_PMrqT26lbw3dZkvmwTjqg33l5ybRh1GFoWnt0BIqj0BigBjnZ_fd1D3ad4htbUcRzq23L7hp1awgPQ"
 *     }
 * @apiSuccessExample Success-Response
 {
    "response_code": "00",
    "response_message": "Success.",
    "data": {
        "personel_id": "UPG-1201-0111",
        "nrp": "198611232010121001",
        "name": "nama personel",
        "email": "test@test.com",
        "username": "198611232010121001",
        "address": "Tes lagi ya",
        "identity_number": null,
        "telephone_1": null,
        "telephone_2": "123456",
        "birthdate": null,
        "sar_office": "KANTOR PUSAT",
        "status": null,
        "blood_type": null,
        "information": null,
        "religion": null,
        "division": null,
        "position": null,
        "class": null,
        "gender": "M",
        "passport_number": null,
        "image": null
    }
}
* @apiErrorExample Error-Response:
 *     HTTP/1.1 401 UnAuthorized
{
    "response_code": "UA",
    "response_message": "Invalid/expired access token."
}
 */