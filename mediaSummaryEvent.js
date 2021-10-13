{
    "name": "Media Session Summary",
    "eventType": 47,
    "messageType": 20,
    "contentTitle": "Funny Internet cat video",
    "contentId": "1234567",
    "duration": 120000,
    "contentType": "Video",
    "streamType": "OnDemand",
    "mediaSessionID": "",
    "options": {
        "customAttributes": {
            "media_session_id": "",
            "media_session_start_time": 1632324832192,
            "media_session_end_time": 1632324832192,
            "content_id": "1234567",
            "content_title": "Funny Internet cat video",
            "media_time_spent": 0,
            "media_content_time_spent": 0,
            "media_content_complete": false,
            "media_session_segment_total": 0,
            "media_total_ad_time_spent": 0,
            "media_ad_time_spent_rate": null,
            "media_session_ad_total": 0,
            "media_session_ad_objects": []
        }
    },
    "id": "b471e4c6-312e-4ad6-a3ff-7da0b75a0f8b",
    "customAttributes": {
        "media_session_id": "",
        "media_session_start_time": 1632324832192,
        "media_session_end_time": 1632324832192,
        "content_id": "1234567",
        "content_title": "Funny Internet cat video",
        "media_time_spent": 0,
        "media_content_time_spent": 0,
        "media_content_complete": false,
        "media_session_segment_total": 0,
        "media_total_ad_time_spent": 0,
        "media_ad_time_spent_rate": null,
        "media_session_ad_total": 0,
        "media_session_ad_objects": []
    }
}


// after using toPageEvent()
{
    "name": "Media Session Summary",
    "eventType": 9,
    "messageType": 4,
    "data": {
        "content_title": "Funny Internet cat video",
        "content_duration": 120000,
        "content_id": "1234567",
        "content_type": "Video",
        "stream_type": "OnDemand",
        "media_session_id": "",
        "media_session_start_time": 1632326394425,
        "media_session_end_time": 1632326394425,
        "media_time_spent": 0,
        "media_content_time_spent": 0,
        "media_content_complete": false,
        "media_session_segment_total": 0,
        "media_total_ad_time_spent": 0,
        "media_ad_time_spent_rate": null,
        "media_session_ad_total": 0,
        "media_session_ad_objects": []
    }
}

{
    "source_request_id": "8813538b-d9ca-4164-a134-763627ad3c26",
    "mpid": "264200868161219981",
    "timestamp_unixtime_ms": 1634061954606,
    "environment": "development",
    "events": [{
        "event_type": "custom_event",
        "data": {
            "custom_event_type": "media",
            "custom_flags": {},
            "event_name": "Media Session End",
            "timestamp_unixtime_ms": 1634061950211,
            "session_uuid": "CCEBA3DA-B2AA-4C80-BE3B-A34AC03BCE68",
            "session_start_unixtime_ms": 1634060497521,
            "custom_attributes": {
                "content_title": "Funny Internet cat video",
                "content_duration": 120000,
                "content_id": "1234567",
                "content_type": "Video",
                "stream_type": "OnDemand",
                "media_session_id": "f2c0cd0b-b733-4993-9b8d-0cbe98257c38"
            },
            "location": null,
            "source_message_id": "738c864d-3cb3-4580-8764-162fcec4daaa"
        }
    }, {
        "event_type": "custom_event",
        "data": {
            "custom_event_type": "media",
            "custom_flags": {},
            "event_name": "Media Session Summary",
            "timestamp_unixtime_ms": 1634061950213,
            "session_uuid": "CCEBA3DA-B2AA-4C80-BE3B-A34AC03BCE68",
            "session_start_unixtime_ms": 1634060497521,
            "custom_attributes": {
                "content_title": "Funny Internet cat video",
                "content_duration": 120000,
                "content_id": "1234567",
                "content_type": "Video",
                "stream_type": "OnDemand",
                "media_session_id": "f2c0cd0b-b733-4993-9b8d-0cbe98257c38",
                "media_session_start_time": 1634060600288,
                "media_session_end_time": 1634061950207,
                "media_time_spent": 1349919,
                "media_content_time_spent": 0,
                "media_content_complete": false,
                "media_session_segment_total": 0,
                "media_total_ad_time_spent": 0,
                "media_ad_time_spent_rate": null,
                "media_session_ad_total": 0
            },
            "location": null,
            "source_message_id": "8db6af43-2df4-4b91-b372-ca647a836eb5"
        }
    }],
    "mp_deviceid": "ec6085b6-91fc-43c1-b895-d65bca4c3cf0",
    "sdk_version": "2.14.1",
    "application_info": {},
    "device_info": {
        "platform": "web",
        "screen_width": 1920,
        "screen_height": 1080
    },
    "user_attributes": {},
    "user_identities": null,
    "consent_state": null,
    "integration_attributes": {},
    "context": {
        "data_plan": {
            "plan_id": "red_data_plan"
        }
    }
}