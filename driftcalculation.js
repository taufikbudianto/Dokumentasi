/**
* @api {get} /planning/drift/{incidentid} Get Driftcalculation.
 * @apiVersion 0.1.0
  * @apiGroup API V-1
 * @apiName getDrift
 * @apiDescription digunakan untuk mendapatkan List Driftcalculation.
  * @apiExample Cara penggunaan:
http://apps.prosia.co.id:8072/sarcore/planning/drift/BSN-1711-0014
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
            "worksheet1": [
                {
                    "worksheet_name": "ws1",
                    "description": null,
                    "latitude": "-5.81890491",
                    "longitude": "106.80583333333334",
                    "incident_time": "2017-11-28 15:01:28.0",
                    "operation_time": "2017-11-29 15:04:00.0",
                    "safety_factor": 1.1,
                    "unit": "0.0",
                    "sea_current_angle": 0.2,
                    "sea_current_speed": 0.4,
                    "sea_current_distance": 0.187,
                    "surface_wind_angle": 0.2,
                    "wind_current_angle": 0.2,
                    "wind_current_speed": null,
                    "wind_current_distance": 0.0144,
                    "leeway_divergence_angle": 6.4983,
                    "leeway_distance": 6.4983,
                    "leeway_speed": 0.2702,
                    "leeway_left_angle": 329.2,
                    "leeway_right_angle": 31.2,
                    "drift_left_distance": 6.6717,
                    "drift_right_distance": 6.6717,
                    "drif_left_to_right_distance": 6.6937,
                    "drift_error": 4.1808,
                    "drift_error_percentage": 12.5,
                    "distress_craft_error": 0.1,
                    "search_craft_error": 0.1,
                    "probable_error_total": 4.1832,
                    "drift_left_latitude": "-5.722689",
                    "drift_left_longitude": "106.750211",
                    "drift_right_latitude": "-5.723078",
                    "drift_right_longitude": "106.862130",
                    "datum_latitude": "-5.722886",
                    "datum_longitude": "106.806170",
                    "search_radius": 5,
                    "search_area": 100,
                    "drift_left_to_right_angle": 90.2,
                    "wind_current_speed_cal_distance": 0.03086667,
                    "incident_to_datum_angle": 0.2,
                    "search_area_on_map": {
                        "overlays": [
                            {
                                "position": {
                                    "lng": 106.88979371325608,
                                    "lat": -5.639844061979793
                                },
                                "type": "Marker",
                                "title": "Poin A"
                            },
                            {
                                "position": {
                                    "lng": 106.88921193802022,
                                    "lat": -5.806509713256083
                                },
                                "type": "Marker",
                                "title": "Poin B"
                            },
                            {
                                "position": {
                                    "lng": 106.72254628674392,
                                    "lat": -5.8059279380202105
                                },
                                "type": "Marker",
                                "title": "Poin C"
                            },
                            {
                                "position": {
                                    "lng": 106.72312806197979,
                                    "lat": -5.639262286743921
                                },
                                "type": "Marker",
                                "title": "Poin D"
                            },
                            {
                                "paths": [
                                    {
                                        "lng": 106.88979371325608,
                                        "lat": -5.639844061979793
                                    },
                                    {
                                        "lng": 106.88921193802022,
                                        "lat": -5.806509713256083
                                    },
                                    {
                                        "lng": 106.72254628674392,
                                        "lat": -5.8059279380202105
                                    },
                                    {
                                        "lng": 106.72312806197979,
                                        "lat": -5.639262286743921
                                    }
                                ],
                                "strokeWeight": 3,
                                "type": "Polyline",
                                "strokeColor": "#FF0000"
                            }
                        ]
                    },
                    "search_pattern": null,
                    "search_task_area": {
                        "overlays": [
                            {
                                "paths": [
                                    {
                                        "lng": 106.72312806197979,
                                        "lat": -5.6392622867439135
                                    },
                                    {
                                        "lng": 106.80646088761793,
                                        "lat": -5.63955317436185
                                    },
                                    {
                                        "lng": 106.80599546742926,
                                        "lat": -5.772885695382889
                                    },
                                    {
                                        "lng": 106.72266264179109,
                                        "lat": -5.7725948077649525
                                    },
                                    {
                                        "lng": 106.72312806197979,
                                        "lat": -5.6392622867439135
                                    }
                                ],
                                "strokeWeight": 3,
                                "fillOpacity": 0.1,
                                "strokeOpacity": 3,
                                "type": "Polygon",
                                "strokeColor": "#000000",
                                "fillColor": "#000000"
                            }
                        ]
                    }
                },
                {
                    "worksheet_name": "aaaa",
                    "description": null,
                    "latitude": "-5.81890491",
                    "longitude": "106.80583333333334",
                    "incident_time": "2017-11-28 15:01:28.0",
                    "operation_time": "2017-12-19 00:00:00.0",
                    "safety_factor": 1.1,
                    "unit": "0.0",
                    "sea_current_angle": 10,
                    "sea_current_speed": 4,
                    "sea_current_distance": 38.0203,
                    "surface_wind_angle": 6,
                    "wind_current_angle": 6,
                    "wind_current_speed": null,
                    "wind_current_distance": 1.0269,
                    "leeway_divergence_angle": 0.5868,
                    "leeway_distance": 0.5868,
                    "leeway_speed": 0.0012,
                    "leeway_left_angle": 351,
                    "leeway_right_angle": 21,
                    "drift_left_distance": 39.6004,
                    "drift_right_distance": 39.6207,
                    "drif_left_to_right_distance": 0.3038,
                    "drift_error": 5.1032,
                    "drift_error_percentage": 12.5,
                    "distress_craft_error": 0.1,
                    "search_craft_error": 0.1,
                    "probable_error_total": 5.1052,
                    "drift_left_latitude": "-5.169335",
                    "drift_left_longitude": "106.916378",
                    "drift_right_latitude": "-5.169863",
                    "drift_right_longitude": "106.921424",
                    "datum_latitude": "-5.169601",
                    "datum_longitude": "106.918922",
                    "search_radius": 6,
                    "search_area": 144,
                    "drift_left_to_right_angle": 96,
                    "wind_current_speed_cal_distance": 0.10803333,
                    "incident_to_datum_angle": 9.84102274,
                    "search_area_on_map": {
                        "overlays": [
                            {
                                "position": {
                                    "lng": 106.88979371325608,
                                    "lat": -5.639844061979793
                                },
                                "type": "Marker",
                                "title": "Poin A"
                            },
                            {
                                "position": {
                                    "lng": 106.88921193802022,
                                    "lat": -5.806509713256083
                                },
                                "type": "Marker",
                                "title": "Poin B"
                            },
                            {
                                "position": {
                                    "lng": 106.72254628674392,
                                    "lat": -5.8059279380202105
                                },
                                "type": "Marker",
                                "title": "Poin C"
                            },
                            {
                                "position": {
                                    "lng": 106.72312806197979,
                                    "lat": -5.639262286743921
                                },
                                "type": "Marker",
                                "title": "Poin D"
                            },
                            {
                                "paths": [
                                    {
                                        "lng": 106.88979371325608,
                                        "lat": -5.639844061979793
                                    },
                                    {
                                        "lng": 106.88921193802022,
                                        "lat": -5.806509713256083
                                    },
                                    {
                                        "lng": 106.72254628674392,
                                        "lat": -5.8059279380202105
                                    },
                                    {
                                        "lng": 106.72312806197979,
                                        "lat": -5.639262286743921
                                    }
                                ],
                                "strokeWeight": 3,
                                "type": "Polyline",
                                "strokeColor": "#FF0000"
                            }
                        ]
                    },
                    "search_pattern": null,
                    "search_task_area": {
                        "overlays": [
                            {
                                "paths": [
                                    {
                                        "lng": 106.72312806197979,
                                        "lat": -5.6392622867439135
                                    },
                                    {
                                        "lng": 106.80646088761793,
                                        "lat": -5.63955317436185
                                    },
                                    {
                                        "lng": 106.80599546742926,
                                        "lat": -5.772885695382889
                                    },
                                    {
                                        "lng": 106.72266264179109,
                                        "lat": -5.7725948077649525
                                    },
                                    {
                                        "lng": 106.72312806197979,
                                        "lat": -5.6392622867439135
                                    }
                                ],
                                "strokeWeight": 3,
                                "fillOpacity": 0.1,
                                "strokeOpacity": 3,
                                "type": "Polygon",
                                "strokeColor": "#000000",
                                "fillColor": "#000000"
                            }
                        ]
                    }
                },
                {
                    "worksheet_name": "ws1-a",
                    "description": null,
                    "latitude": "-5.81890491",
                    "longitude": "106.80583333333334",
                    "incident_time": "2017-11-28 15:01:28.0",
                    "operation_time": "2017-12-13 05:00:00.0",
                    "safety_factor": 1.1,
                    "unit": "0.0",
                    "sea_current_angle": 0.1,
                    "sea_current_speed": 0.5,
                    "sea_current_distance": 3.4016,
                    "surface_wind_angle": 0.3,
                    "wind_current_angle": 0.3,
                    "wind_current_speed": null,
                    "wind_current_distance": 0.175,
                    "leeway_divergence_angle": 94.5655,
                    "leeway_distance": 94.5655,
                    "leeway_speed": 0.2702,
                    "leeway_left_angle": 329.3,
                    "leeway_right_angle": 31.3,
                    "drift_left_distance": 97.6545,
                    "drift_right_distance": 97.6427,
                    "drif_left_to_right_distance": 97.4097,
                    "drift_error": 60.9109,
                    "drift_error_percentage": 12.5,
                    "distress_craft_error": 0.1,
                    "search_craft_error": 0.1,
                    "probable_error_total": 60.9111,
                    "drift_left_latitude": "-4.406099",
                    "drift_left_longitude": "106.000428",
                    "drift_right_latitude": "-4.414565",
                    "drift_right_longitude": "107.625640",
                    "datum_latitude": "-4.410868",
                    "datum_longitude": "106.813017",
                    "search_radius": 68,
                    "search_area": 18496,
                    "drift_left_to_right_angle": 90.3,
                    "wind_current_speed_cal_distance": 0.02572222,
                    "incident_to_datum_angle": 0.29146247,
                    "search_area_on_map": {
                        "overlays": [
                            {
                                "position": {
                                    "lng": 106.88979371325608,
                                    "lat": -5.639844061979793
                                },
                                "type": "Marker",
                                "title": "Poin A"
                            },
                            {
                                "position": {
                                    "lng": 106.88921193802022,
                                    "lat": -5.806509713256083
                                },
                                "type": "Marker",
                                "title": "Poin B"
                            },
                            {
                                "position": {
                                    "lng": 106.72254628674392,
                                    "lat": -5.8059279380202105
                                },
                                "type": "Marker",
                                "title": "Poin C"
                            },
                            {
                                "position": {
                                    "lng": 106.72312806197979,
                                    "lat": -5.639262286743921
                                },
                                "type": "Marker",
                                "title": "Poin D"
                            },
                            {
                                "paths": [
                                    {
                                        "lng": 106.88979371325608,
                                        "lat": -5.639844061979793
                                    },
                                    {
                                        "lng": 106.88921193802022,
                                        "lat": -5.806509713256083
                                    },
                                    {
                                        "lng": 106.72254628674392,
                                        "lat": -5.8059279380202105
                                    },
                                    {
                                        "lng": 106.72312806197979,
                                        "lat": -5.639262286743921
                                    }
                                ],
                                "strokeWeight": 3,
                                "type": "Polyline",
                                "strokeColor": "#FF0000"
                            }
                        ]
                    },
                    "search_pattern": null,
                    "search_task_area": {
                        "overlays": [
                            {
                                "paths": [
                                    {
                                        "lng": 106.72312806197979,
                                        "lat": -5.6392622867439135
                                    },
                                    {
                                        "lng": 106.80646088761793,
                                        "lat": -5.63955317436185
                                    },
                                    {
                                        "lng": 106.80599546742926,
                                        "lat": -5.772885695382889
                                    },
                                    {
                                        "lng": 106.72266264179109,
                                        "lat": -5.7725948077649525
                                    },
                                    {
                                        "lng": 106.72312806197979,
                                        "lat": -5.6392622867439135
                                    }
                                ],
                                "strokeWeight": 3,
                                "fillOpacity": 0.1,
                                "strokeOpacity": 3,
                                "type": "Polygon",
                                "strokeColor": "#000000",
                                "fillColor": "#000000"
                            }
                        ]
                    }
                },
                {
                    "worksheet_name": "ws1-b",
                    "description": null,
                    "latitude": "-5.81890491",
                    "longitude": "106.80583333333334",
                    "incident_time": "2017-11-28 15:01:28.0",
                    "operation_time": "2017-11-30 09:00:00.0",
                    "safety_factor": 1.1,
                    "unit": "0.0",
                    "sea_current_angle": 0.1,
                    "sea_current_speed": 0.5,
                    "sea_current_distance": 0.408,
                    "surface_wind_angle": 2.4,
                    "wind_current_angle": 2.4,
                    "wind_current_speed": null,
                    "wind_current_distance": 0.1343,
                    "leeway_divergence_angle": 11.3859,
                    "leeway_distance": 11.3859,
                    "leeway_speed": 0.2712,
                    "leeway_left_angle": 331.4,
                    "leeway_right_angle": 33.4,
                    "drift_left_distance": 11.8619,
                    "drift_right_distance": 11.8457,
                    "drif_left_to_right_distance": 11.7283,
                    "drift_error": 7.3459,
                    "drift_error_percentage": 12.5,
                    "distress_craft_error": 0.1,
                    "search_craft_error": 0.1,
                    "probable_error_total": 7.3473,
                    "drift_left_latitude": "-5.643565",
                    "drift_left_longitude": "106.714821",
                    "drift_right_latitude": "-5.651734",
                    "drift_right_longitude": "106.910724",
                    "datum_latitude": "-5.647658",
                    "datum_longitude": "106.812755",
                    "search_radius": 9,
                    "search_area": 324,
                    "drift_left_to_right_angle": 92.4,
                    "wind_current_speed_cal_distance": 0.16462222,
                    "incident_to_datum_angle": 2.30330046,
                    "search_area_on_map": {
                        "overlays": [
                            {
                                "position": {
                                    "lng": 106.88979371325608,
                                    "lat": -5.639844061979793
                                },
                                "type": "Marker",
                                "title": "Poin A"
                            },
                            {
                                "position": {
                                    "lng": 106.88921193802022,
                                    "lat": -5.806509713256083
                                },
                                "type": "Marker",
                                "title": "Poin B"
                            },
                            {
                                "position": {
                                    "lng": 106.72254628674392,
                                    "lat": -5.8059279380202105
                                },
                                "type": "Marker",
                                "title": "Poin C"
                            },
                            {
                                "position": {
                                    "lng": 106.72312806197979,
                                    "lat": -5.639262286743921
                                },
                                "type": "Marker",
                                "title": "Poin D"
                            },
                            {
                                "paths": [
                                    {
                                        "lng": 106.88979371325608,
                                        "lat": -5.639844061979793
                                    },
                                    {
                                        "lng": 106.88921193802022,
                                        "lat": -5.806509713256083
                                    },
                                    {
                                        "lng": 106.72254628674392,
                                        "lat": -5.8059279380202105
                                    },
                                    {
                                        "lng": 106.72312806197979,
                                        "lat": -5.639262286743921
                                    }
                                ],
                                "strokeWeight": 3,
                                "type": "Polyline",
                                "strokeColor": "#FF0000"
                            }
                        ]
                    },
                    "search_pattern": null,
                    "search_task_area": {
                        "overlays": [
                            {
                                "paths": [
                                    {
                                        "lng": 106.72312806197979,
                                        "lat": -5.6392622867439135
                                    },
                                    {
                                        "lng": 106.80646088761793,
                                        "lat": -5.63955317436185
                                    },
                                    {
                                        "lng": 106.80599546742926,
                                        "lat": -5.772885695382889
                                    },
                                    {
                                        "lng": 106.72266264179109,
                                        "lat": -5.7725948077649525
                                    },
                                    {
                                        "lng": 106.72312806197979,
                                        "lat": -5.6392622867439135
                                    }
                                ],
                                "strokeWeight": 3,
                                "fillOpacity": 0.1,
                                "strokeOpacity": 3,
                                "type": "Polygon",
                                "strokeColor": "#000000",
                                "fillColor": "#000000"
                            }
                        ]
                    }
                },
                {
                    "worksheet_name": "angga",
                    "description": null,
                    "latitude": "-5.81890491",
                    "longitude": "106.80583333333334",
                    "incident_time": "2017-11-28 15:01:28.0",
                    "operation_time": "2017-12-19 10:13:00.0",
                    "safety_factor": 1.1,
                    "unit": "0.0",
                    "sea_current_angle": 2,
                    "sea_current_speed": 2,
                    "sea_current_distance": 0,
                    "surface_wind_angle": 4,
                    "wind_current_angle": 0,
                    "wind_current_speed": null,
                    "wind_current_distance": 0,
                    "leeway_divergence_angle": 0,
                    "leeway_distance": 0,
                    "leeway_speed": 0,
                    "leeway_left_angle": 0,
                    "leeway_right_angle": 0,
                    "drift_left_distance": 0,
                    "drift_right_distance": 0,
                    "drif_left_to_right_distance": 0,
                    "drift_error": 0,
                    "drift_error_percentage": 12.5,
                    "distress_craft_error": 0.1,
                    "search_craft_error": 0.1,
                    "probable_error_total": 0,
                    "drift_left_latitude": "-5.722689",
                    "drift_left_longitude": "106.750211",
                    "drift_right_latitude": "-5.723078",
                    "drift_right_longitude": "106.862130",
                    "datum_latitude": "-5.722886",
                    "datum_longitude": "106.806170",
                    "search_radius": 0,
                    "search_area": 0,
                    "drift_left_to_right_angle": 90.2,
                    "wind_current_speed_cal_distance": 0,
                    "incident_to_datum_angle": 0.2,
                    "search_area_on_map": {
                        "overlays": [
                            {
                                "position": {
                                    "lng": 106.88979371325608,
                                    "lat": -5.639844061979793
                                },
                                "type": "Marker",
                                "title": "Poin A"
                            },
                            {
                                "position": {
                                    "lng": 106.88921193802022,
                                    "lat": -5.806509713256083
                                },
                                "type": "Marker",
                                "title": "Poin B"
                            },
                            {
                                "position": {
                                    "lng": 106.72254628674392,
                                    "lat": -5.8059279380202105
                                },
                                "type": "Marker",
                                "title": "Poin C"
                            },
                            {
                                "position": {
                                    "lng": 106.72312806197979,
                                    "lat": -5.639262286743921
                                },
                                "type": "Marker",
                                "title": "Poin D"
                            },
                            {
                                "paths": [
                                    {
                                        "lng": 106.88979371325608,
                                        "lat": -5.639844061979793
                                    },
                                    {
                                        "lng": 106.88921193802022,
                                        "lat": -5.806509713256083
                                    },
                                    {
                                        "lng": 106.72254628674392,
                                        "lat": -5.8059279380202105
                                    },
                                    {
                                        "lng": 106.72312806197979,
                                        "lat": -5.639262286743921
                                    }
                                ],
                                "strokeWeight": 3,
                                "type": "Polyline",
                                "strokeColor": "#FF0000"
                            }
                        ]
                    },
                    "search_pattern": null,
                    "search_task_area": {
                        "overlays": [
                            {
                                "paths": [
                                    {
                                        "lng": 106.72312806197979,
                                        "lat": -5.6392622867439135
                                    },
                                    {
                                        "lng": 106.80646088761793,
                                        "lat": -5.63955317436185
                                    },
                                    {
                                        "lng": 106.80599546742926,
                                        "lat": -5.772885695382889
                                    },
                                    {
                                        "lng": 106.72266264179109,
                                        "lat": -5.7725948077649525
                                    },
                                    {
                                        "lng": 106.72312806197979,
                                        "lat": -5.6392622867439135
                                    }
                                ],
                                "strokeWeight": 3,
                                "fillOpacity": 0.1,
                                "strokeOpacity": 3,
                                "type": "Polygon",
                                "strokeColor": "#000000",
                                "fillColor": "#000000"
                            }
                        ]
                    }
                }
            ],
            "worksheet2": [
                {
                    "search_object": "Ship > 91 (>300 ft)",
                    "search_platform": "Fixed Wing",
                    "search_platform_tas": 180,
                    "meteorlogical_visibility": 20,
                    "search_height": 1000,
                    "search_repeat": "First",
                    "windspeed": 5,
                    "fatigue_factor": false,
                    "uncorrected_sweep_width": 13.2,
                    "weather_correction_factor": 1,
                    "speed_correction_factor": 1,
                    "fatigue_correction_factor": 1,
                    "sweep_width_factor": 13.2,
                    "practical_track_spacing": 10,
                    "coverage_factor": 1.32,
                    "probability_detection": 100.7687,
                    "search_area": 50,
                    "search_hours": 0.0278,
                    "worksheet_name": "ws2a"
                },
                {
                    "search_object": "Power Boat 10 (33 ft)",
                    "search_platform": "Fixed Wing",
                    "search_platform_tas": 150,
                    "meteorlogical_visibility": 5,
                    "search_height": 1500,
                    "search_repeat": "First",
                    "windspeed": 4,
                    "fatigue_factor": true,
                    "uncorrected_sweep_width": 2.2,
                    "weather_correction_factor": 1,
                    "speed_correction_factor": 1,
                    "fatigue_correction_factor": 0.9,
                    "sweep_width_factor": 1.98,
                    "practical_track_spacing": 2,
                    "coverage_factor": 0.99,
                    "probability_detection": 80.9078,
                    "search_area": 0.002,
                    "search_hours": 0,
                    "worksheet_name": "test wrk 2"
                }
            ],
            "worksheet3": [
                {
                    "search_object": "Aircraft > 5700kg",
                    "worksheet_name": "ws3b",
                    "meteorlogical_visibility": 30,
                    "search_height": 1000,
                    "search_repeat": "First",
                    "vegetation": "<15%",
                    "fatigue_factor": false,
                    "uncorrected_sweep_width": 3,
                    "terrain_correction_factor": 1,
                    "fatigue_correction_factor": 1,
                    "sweep_width_factor": 3,
                    "practical_track_spacing": 5,
                    "coverage_factor": 0.6,
                    "probability_detection": 54.7216,
                    "search_area": 50,
                    "search_hours": 0.0833
                },
                {
                    "search_object": "Person",
                    "worksheet_name": "test wrk 3",
                    "meteorlogical_visibility": 30,
                    "search_height": 500,
                    "search_repeat": "Third",
                    "vegetation": "15-60%",
                    "fatigue_factor": true,
                    "uncorrected_sweep_width": 0.5,
                    "terrain_correction_factor": 0.5,
                    "fatigue_correction_factor": 0.9,
                    "sweep_width_factor": 0.225,
                    "practical_track_spacing": 10,
                    "coverage_factor": 0.0225,
                    "probability_detection": 6.7085,
                    "search_area": 10,
                    "search_hours": 0.0083
                }
            ],
            "worksheet8": []
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