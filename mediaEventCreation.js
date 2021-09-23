const MediaSession = require("./mp-web-media-sdk.js");

const mediaSession = new MediaSession(
    mParticle,
    '1234567',
    'Funny Internet cat video',
    120000,
    'Video',
    'OnDemand',
    true,
    true
)

const generateSummary = () => {
    const mpInstance = mParticle.getInstance();
    if (!mediaSession.mediaSessionEndTimestamp) {
        mediaSession.mediaSessionEndTimestamp = Date.now();
    }

    // media session summary event
    var summaryAttributes = {};
    summaryAttributes[ValidMediaAttributeKeys.mediaSessionIdKey] = mediaSession.sessionId;
    summaryAttributes[ValidMediaAttributeKeys.startTimestampKey] = mediaSession.mediaSessionStartTimestamp;
    summaryAttributes[ValidMediaAttributeKeys.endTimestampKey] = mediaSession.mediaSessionEndTimestamp;
    summaryAttributes[ValidMediaAttributeKeys.contentIdKey] = mediaSession.contentId;
    summaryAttributes[ValidMediaAttributeKeys.contentTitleKey] = mediaSession.title;
    summaryAttributes[ValidMediaAttributeKeys.mediaTimeSpentKey] = mediaSession.mediaTimeSpent();
    summaryAttributes[ValidMediaAttributeKeys.contentTimeSpentKey] = mediaSession.mediaContentTimeSpent();
    summaryAttributes[ValidMediaAttributeKeys.contentCompleteKey] = mediaSession.mediaContentComplete;
    summaryAttributes[ValidMediaAttributeKeys.totalSegmentsKey] = mediaSession.mediaSessionSegmentTotal;
    summaryAttributes[ValidMediaAttributeKeys.totalAdTimeSpentKey] = mediaSession.mediaTotalAdTimeSpent;
    summaryAttributes[ValidMediaAttributeKeys.adTimeSpentRateKey] = mediaSession.mediaAdTimeSpentRate();
    summaryAttributes[ValidMediaAttributeKeys.totalAdsKey] = mediaSession.mediaSessionAdTotal;
    summaryAttributes[ValidMediaAttributeKeys.adIDsKey] = mediaSession.mediaSessionAdObjects;

    var summaryOptions = {
        currentPlayheadPosition: mediaSession.currentPlayheadPosition,
        customAttributes: summaryAttributes
    };

    var summaryEvent = mediaSession.createMediaEvent(MediaEventType.SessionSummary, summaryOptions);
    var summaryEventPage = summaryEvent.toPageEvent();
    var summaryEventObject = mpInstance._ServerModel.createEventObject(summaryEventPage);
    window.summaryEventBeacon = mpInstance._ServerModel.convertEventToDTO(summaryEventObject);

    // media session end event
    var endAttributes = {};
    endAttributes[ValidMediaAttributeKeys.mediaSessionIdKey] = mediaSession.sessionId;
    endAttributes[ValidMediaAttributeKeys.contentIdKey] = mediaSession.contentId;
    endAttributes[ValidMediaAttributeKeys.contentTitleKey] = mediaSession.title;
    endAttributes["playhead_position"] = mediaSession.currentPlayheadPosition;

    var endOptions = {
        currentPlayheadPosition: mediaSession.currentPlayheadPosition,
        customAttributes: endAttributes
    };

    var endEvent = mediaSession.createMediaEvent(MediaEventType.SessionEnd, endOptions);
    var endEventPage = endEvent.toPageEvent();
    var endEventObject = mpInstance._ServerModel.createEventObject(endEventPage);
    window.endEventBeacon = mpInstance._ServerModel.convertEventToDTO(endEventObject);
};

// we should do this every ten seconds
generateSummary();

document.addEventListener('visibilitychange', function logData() {
    if (document.visibilityState === 'hidden' && !mediaSession.sessionSummarySent) { // don't want to double-send the media session summary (check the media session object "sessionSummarySent" flag)
        const mpInstance = mParticle.getInstance();
        const path = mpInstance._Helpers.createServiceUrl(mpInstance._Store.SDKConfig.v2SecureServiceUrl, mpInstance._Store.devToken) + '/Events';
        navigator.sendBeacon(path, JSON.stringify(window.summaryEventBeacon));
        navigator.sendBeacon(path, JSON.stringify(window.endEventBeacon));
    }
});
