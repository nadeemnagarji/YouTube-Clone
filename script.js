let base_url = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=sandeepmaheswari&key='
let api_key = 'AIzaSyDHwyyi3A9fATTvu2lIV4XL6BvkvLqjPmM'
let base_url2 = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q='
let main_base_rul =   'https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&maxResults=25&key='
let id=1;
const videosContainer = document.getElementById('videos')

const Storedata = [{
  "kind": "youtube#searchListResponse",
  "etag": "Vz5ftOIStnCCGViueQY5zxE1DN4",
  "nextPageToken": "CBkQAA",
  "regionCode": "IN",
  "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 25
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "g5WpRBi1napI7pOQsv_ssvSkN1o",
      "id": {
        "kind": "youtube#channel",
        "channelId": "UCt2JXOLNxqry7B_4rRZME3Q"
      },
      "snippet": {
        "publishedAt": "2012-08-03T08:37:23Z",
        "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
        "title": "ICC",
        "description": "This is the official YouTube channel of the International Cricket Council.",
        "thumbnails": {
          "default": {
            "url": "https://yt3.ggpht.com/3K6h6gpMPf4mK9qh6SXTl0W3PLxnOMzUnFHc2lbS9t-ucS-b4JGcR8nW7ja9XDYkHM-kAnijk2c=s88-c-k-c0xffffffff-no-rj-mo"
          },
          "medium": {
            "url": "https://yt3.ggpht.com/3K6h6gpMPf4mK9qh6SXTl0W3PLxnOMzUnFHc2lbS9t-ucS-b4JGcR8nW7ja9XDYkHM-kAnijk2c=s240-c-k-c0xffffffff-no-rj-mo"
          },
          "high": {
            "url": "https://yt3.ggpht.com/3K6h6gpMPf4mK9qh6SXTl0W3PLxnOMzUnFHc2lbS9t-ucS-b4JGcR8nW7ja9XDYkHM-kAnijk2c=s800-c-k-c0xffffffff-no-rj-mo"
          }
        },
        "channelTitle": "ICC",
        "liveBroadcastContent": "upcoming",
        "publishTime": "2012-08-03T08:37:23Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "k8WudgXj26kGwsUh6aWcDTNx9xM",
      "id": {
        "kind": "youtube#channel",
        "channelId": "UCAIUeduIUX1E6sTIoW-vbUQ"
      },
      "snippet": {
        "publishedAt": "2012-04-18T13:58:39Z",
        "channelId": "UCAIUeduIUX1E6sTIoW-vbUQ",
        "title": "ICC TV",
        "description": "Impact Centre Chrétien (ICC) est une église où l'amour de Dieu transforme les gens ordinaires en disciples de Jésus. La famille ...",
        "thumbnails": {
          "default": {
            "url": "https://yt3.ggpht.com/MtBS1MmqJQO_m-yN2duWX8nraXjzKJSrjwPvXoWajkvrd58bqKs4YN8a6odTyYOYNHRhaboWNNU=s88-c-k-c0xffffffff-no-rj-mo"
          },
          "medium": {
            "url": "https://yt3.ggpht.com/MtBS1MmqJQO_m-yN2duWX8nraXjzKJSrjwPvXoWajkvrd58bqKs4YN8a6odTyYOYNHRhaboWNNU=s240-c-k-c0xffffffff-no-rj-mo"
          },
          "high": {
            "url": "https://yt3.ggpht.com/MtBS1MmqJQO_m-yN2duWX8nraXjzKJSrjwPvXoWajkvrd58bqKs4YN8a6odTyYOYNHRhaboWNNU=s800-c-k-c0xffffffff-no-rj-mo"
          }
        },
        "channelTitle": "ICC TV",
        "liveBroadcastContent": "live",
        "publishTime": "2012-04-18T13:58:39Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "FpcvD0U4OpdXuIqwfxx-yKaxsaw",
      "id": {
        "kind": "youtube#video",
        "videoId": "AFEZzf9_EHk"
      },
      "snippet": {
        "publishedAt": "2019-06-16T19:03:56Z",
        "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
        "title": "Rohit Sharma Hits 140! | India v Pakistan - Match Highlights | ICC Cricket World Cup 2019",
        "description": "Watch full highlights of the India vs Pakistan match at Old Trafford, Game 22 of the 2019 Cricket World Cup. The home of all the ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/AFEZzf9_EHk/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/AFEZzf9_EHk/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/AFEZzf9_EHk/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "ICC",
        "liveBroadcastContent": "none",
        "publishTime": "2019-06-16T19:03:56Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "h_kB7N965I4UBARv7s-tHH92_xA",
      "id": {
        "kind": "youtube#video",
        "videoId": "8L3QSt6f3dM"
      },
      "snippet": {
        "publishedAt": "2023-12-07T07:07:30Z",
        "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
        "title": "The ICC T20 World Cup gets a brand new makeover",
        "description": "Created from the three things that define T20I cricket – Bat, Ball, and Energy! A striking new look for the ICC T20 World Cup ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/8L3QSt6f3dM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/8L3QSt6f3dM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/8L3QSt6f3dM/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "ICC",
        "liveBroadcastContent": "none",
        "publishTime": "2023-12-07T07:07:30Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "kE432FuQgDwTNgLT0-Ws44EekU8",
      "id": {
        "kind": "youtube#video",
        "videoId": "JhIBqykjzbs"
      },
      "snippet": {
        "publishedAt": "2023-09-20T06:31:35Z",
        "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
        "title": "Dil Jashn Bole | ICC Men&#39;s Cricket World Cup 2023 Official Anthem | Pritam",
        "description": "Description : Check out the #CWC23 Official Anthem. Join Ranveer Singh and Pritam on the One Day Xpress and be part of the ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/JhIBqykjzbs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/JhIBqykjzbs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/JhIBqykjzbs/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "ICC",
        "liveBroadcastContent": "none",
        "publishTime": "2023-09-20T06:31:35Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "8v1-GQwnQ_UbsLC2_CWJZMal_nI",
      "id": {
        "kind": "youtube#video",
        "videoId": "amMJfaB5dXo"
      },
      "snippet": {
        "publishedAt": "2019-06-05T18:21:12Z",
        "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
        "title": "Rohit Hundred Seals Win | South Africa vs India - Match Highlights | ICC Cricket World Cup 2019",
        "description": "Watch full highlights of the South Africa vs India match at the Hampshire Bowl, Game 8 of the 2019 Cricket World Cup. The home ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/amMJfaB5dXo/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/amMJfaB5dXo/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/amMJfaB5dXo/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "ICC",
        "liveBroadcastContent": "none",
        "publishTime": "2019-06-05T18:21:12Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "_eMDYgj90WncbsSNpFU_4Vlilfw",
      "id": {
        "kind": "youtube#video",
        "videoId": "fn9AioaIOfI"
      },
      "snippet": {
        "publishedAt": "2023-09-14T09:36:53Z",
        "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
        "title": "The ICC Men&#39;s Cricket World Cup 2023 Trophy Tour had an eventful visit to South Africa! #CWC23",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/fn9AioaIOfI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/fn9AioaIOfI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/fn9AioaIOfI/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "ICC",
        "liveBroadcastContent": "none",
        "publishTime": "2023-09-14T09:36:53Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "clhYEFmnTdFBtHbknDsNVH3Z3Uo",
      "id": {
        "kind": "youtube#video",
        "videoId": "NB1oucqQ0g8"
      },
      "snippet": {
        "publishedAt": "2019-07-02T18:07:18Z",
        "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
        "title": "Rohit Hits Ton &amp; Bumrah Masterclass | Bangladesh vs India - Highlights | ICC Cricket World Cup 2019",
        "description": "Watch full highlights of the Bangladesh vs India match at Edgbaston, Game 40 of the 2019 Cricket World Cup. The home of all the ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/NB1oucqQ0g8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/NB1oucqQ0g8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/NB1oucqQ0g8/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "ICC",
        "liveBroadcastContent": "none",
        "publishTime": "2019-07-02T18:07:18Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "KaV92Eb0turhlKdFpOZVpd1XQ2U",
      "id": {
        "kind": "youtube#video",
        "videoId": "Kwu1yIC-ssg"
      },
      "snippet": {
        "publishedAt": "2019-07-14T19:17:34Z",
        "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
        "title": "England Win CWC After Super Over! | England vs New Zealand - Highlights | ICC Cricket World Cup 2019",
        "description": "Watch full highlights of the England vs New Zealand match at Lord's, the Final of the 2019 Cricket World Cup. The home of all the ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Kwu1yIC-ssg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Kwu1yIC-ssg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Kwu1yIC-ssg/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "ICC",
        "liveBroadcastContent": "none",
        "publishTime": "2019-07-14T19:17:34Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "_y-8whtmr2C0JouIRT1f1xhj7QE",
      "id": {
        "kind": "youtube#video",
        "videoId": "F0_aypvtW8Y"
      },
      "snippet": {
        "publishedAt": "2019-06-27T16:49:02Z",
        "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
        "title": "The Best Yorkers of the 2019 CWC! | Unplayable Deliveries | ICC Cricket World Cup 2019",
        "description": "The Best Yorkers of the ICC Cricket World Cup 2019! Which one of these has been your favorite? The home of all the highlights ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/F0_aypvtW8Y/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/F0_aypvtW8Y/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/F0_aypvtW8Y/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "ICC",
        "liveBroadcastContent": "none",
        "publishTime": "2019-06-27T16:49:02Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "c6Qn-MefLfqt_3ziEcofuSDWres",
      "id": {
        "kind": "youtube#video",
        "videoId": "ynG6tkLO3SQ"
      },
      "snippet": {
        "publishedAt": "2019-06-22T18:06:54Z",
        "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
        "title": "Afghanistan SO Close To Upset! | India v Afghanistan - Match Highlights | ICC Cricket World Cup 2019",
        "description": "Watch full highlights of the India vs Afghanistan match at Hampshire Bowl, Game 28 of the 2019 Cricket World Cup. The home of ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/ynG6tkLO3SQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/ynG6tkLO3SQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/ynG6tkLO3SQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "ICC",
        "liveBroadcastContent": "none",
        "publishTime": "2019-06-22T18:06:54Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "e6hjHAbQzM12UPdmV3ybG2tFInw",
      "id": {
        "kind": "youtube#video",
        "videoId": "HNXhdo5j914"
      },
      "snippet": {
        "publishedAt": "2019-07-10T14:29:32Z",
        "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
        "title": "India Stunned By Boult &amp; Henry | India vs New Zealand - Highlights | ICC Cricket World Cup 2019",
        "description": "Watch full highlights of the India vs New Zealand at Old Trafford Cricket Ground, Game 46 of the 2019 Cricket World Cup.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/HNXhdo5j914/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/HNXhdo5j914/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/HNXhdo5j914/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "ICC",
        "liveBroadcastContent": "none",
        "publishTime": "2019-07-10T14:29:32Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "0Jtc_2MIhyyVYlU8_OTL7OjM2gY",
      "id": {
        "kind": "youtube#video",
        "videoId": "FxdRfTf1pZc"
      },
      "snippet": {
        "publishedAt": "2019-07-06T17:29:23Z",
        "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
        "title": "Rohit Breaks Centuries Record In Win | Sri Lanka vs India - Highlights | ICC Cricket World Cup 2019",
        "description": "Watch full highlights of the Sri Lanka vs India at Headingley Carnegie, Game 44 of the 2019 Cricket World Cup. The home of all ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/FxdRfTf1pZc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/FxdRfTf1pZc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/FxdRfTf1pZc/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "ICC",
        "liveBroadcastContent": "none",
        "publishTime": "2019-07-06T17:29:23Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "Or1Hgz3H6TCiOa_iU8N65XltwkM",
      "id": {
        "kind": "youtube#video",
        "videoId": "HqUl4nwlT4k"
      },
      "snippet": {
        "publishedAt": "2019-06-30T18:05:04Z",
        "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
        "title": "Bairstow Leads England To Victory | England vs India - Match Highlights | ICC Cricket World Cup 2019",
        "description": "Watch full highlights of the England vs India match at Edgbaston, Game 38 of the 2019 Cricket World Cup. The home of all the ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/HqUl4nwlT4k/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/HqUl4nwlT4k/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/HqUl4nwlT4k/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "ICC",
        "liveBroadcastContent": "none",
        "publishTime": "2019-06-30T18:05:04Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "bDSwSuCiJdevxppnhfOZZ5SrS0k",
      "id": {
        "kind": "youtube#video",
        "videoId": "jm2r5xzYx-A"
      },
      "snippet": {
        "publishedAt": "2019-06-27T17:33:08Z",
        "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
        "title": "India March On With Easy Win | West Indies vs India - Match Highlights | ICC Cricket World Cup 2019",
        "description": "Watch full highlights of the West Indies vs India match at Old Trafford, Game 34 of the 2019 Cricket World Cup. The home of all the ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/jm2r5xzYx-A/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/jm2r5xzYx-A/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/jm2r5xzYx-A/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "ICC",
        "liveBroadcastContent": "none",
        "publishTime": "2019-06-27T17:33:08Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "47GeiHDqxoIdKmD4W-8E3FgPFTg",
      "id": {
        "kind": "youtube#video",
        "videoId": "CE_iOr_qb-E"
      },
      "snippet": {
        "publishedAt": "2019-07-08T14:52:00Z",
        "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
        "title": "Best Catches So Far! | ICC Cricket World Cup 2019",
        "description": "We have seen some cracking catches this tournament, but what is your favourite so far? The home of all the highlights from the ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/CE_iOr_qb-E/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/CE_iOr_qb-E/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/CE_iOr_qb-E/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "ICC",
        "liveBroadcastContent": "none",
        "publishTime": "2019-07-08T14:52:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "5D5wCS_tYcuoGEMYRRlB-j328aU",
      "id": {
        "kind": "youtube#video",
        "videoId": "fBIqzpkaIy8"
      },
      "snippet": {
        "publishedAt": "2019-07-08T14:01:08Z",
        "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
        "title": "Biggest Sixes! | 2019 Cricket World Cup Biggest Sixes So Far | ICC Cricket World Cup 2019",
        "description": "Take a look at these mammoth sixes. Which one is your favourite? The home of all the highlights from the ICC Men's Cricket World ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/fBIqzpkaIy8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/fBIqzpkaIy8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/fBIqzpkaIy8/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "ICC",
        "liveBroadcastContent": "none",
        "publishTime": "2019-07-08T14:01:08Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "LtxdJ3HwAU-KQ7IzY0cm7iFLQNk",
      "id": {
        "kind": "youtube#video",
        "videoId": "95Ia6yBcnXI"
      },
      "snippet": {
        "publishedAt": "2019-05-30T17:09:16Z",
        "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
        "title": "Stokes Stars In Opener! | England vs South Africa - Match Highlights | ICC Cricket World Cup 2019",
        "description": "Watch full highlights of the England vs South Africa match at the Oval, Game 1 of the 2019 Cricket World Cup. The home of all the ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/95Ia6yBcnXI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/95Ia6yBcnXI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/95Ia6yBcnXI/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "ICC",
        "liveBroadcastContent": "none",
        "publishTime": "2019-05-30T17:09:16Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "ffLzIpyJDClRcAnBIGiuZSIoYXU",
      "id": {
        "kind": "youtube#video",
        "videoId": "Itb-3pISKt8"
      },
      "snippet": {
        "publishedAt": "2019-07-15T18:54:31Z",
        "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
        "title": "The Incredible World Cup Final Finish | ICC Cricket World Cup 2019",
        "description": "Watch the incredible World Cup final finish. Breath. The home of all the highlights from the ICC Men's Cricket World Cup 2019.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Itb-3pISKt8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Itb-3pISKt8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Itb-3pISKt8/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "ICC",
        "liveBroadcastContent": "none",
        "publishTime": "2019-07-15T18:54:31Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "VFamGP9NXifvyN9wxCtL9PQIDeM",
      "id": {
        "kind": "youtube#video",
        "videoId": "MaqoEmrBPq8"
      },
      "snippet": {
        "publishedAt": "2019-06-12T17:51:39Z",
        "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
        "title": "Warner Hits Hundred! | Australia vs Pakistan - Match Highlights | ICC Cricket World Cup 2019",
        "description": "Watch full highlights of the Australia vs Pakistan match in Taunton, Game 17 of the 2019 Cricket World Cup. The home of all the ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/MaqoEmrBPq8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/MaqoEmrBPq8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/MaqoEmrBPq8/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "ICC",
        "liveBroadcastContent": "none",
        "publishTime": "2019-06-12T17:51:39Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "BOQhHkRLJRcBY3yBCOGDJlLCNCs",
      "id": {
        "kind": "youtube#video",
        "videoId": "dtCS0WGZH4k"
      },
      "snippet": {
        "publishedAt": "2019-07-14T23:45:00Z",
        "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
        "title": "Incredible Final Over of England&#39;s Innings! | Stokes Forces Super Over | ICC Cricket World Cup 2019",
        "description": "Watch the final over of England's innings in the ICC Cricket World Cup final 2019 before the super over. The home of all the ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/dtCS0WGZH4k/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/dtCS0WGZH4k/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/dtCS0WGZH4k/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "ICC",
        "liveBroadcastContent": "none",
        "publishTime": "2019-07-14T23:45:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "mH5ip_sxpINerzpHJS3H2e_-Acs",
      "id": {
        "kind": "youtube#video",
        "videoId": "vDEKLisu4Yg"
      },
      "snippet": {
        "publishedAt": "2024-01-02T04:54:53Z",
        "channelId": "UCxU424G80okt2NdPuJ5skKg",
        "title": "ICC T20 World Cup 2024 Schedule, All Teams, Venues, Date, Host Nations | T20 World Cup 2024 Details",
        "description": "ICC T20 World Cup 2024 Schedule, All Teams, Venues, Date, Host Nations | T20 World Cup 2024 Details Welcome to Sports ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/vDEKLisu4Yg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/vDEKLisu4Yg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/vDEKLisu4Yg/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Sports Glamour",
        "liveBroadcastContent": "none",
        "publishTime": "2024-01-02T04:54:53Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "DFGKfo6vz2TSI2qQJFF5cszJtgs",
      "id": {
        "kind": "youtube#video",
        "videoId": "2e7tEWijl2E"
      },
      "snippet": {
        "publishedAt": "2019-07-04T17:48:37Z",
        "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
        "title": "Gayle&#39;s Last CWC Match! | Afghanistan v West Indies - Highlights | ICC Cricket World Cup 2019",
        "description": "Watch full highlights of the Afghanistan vs West Indies match at Emerald Headingley, Game 42 of the 2019 Cricket World Cup.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/2e7tEWijl2E/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/2e7tEWijl2E/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/2e7tEWijl2E/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "ICC",
        "liveBroadcastContent": "none",
        "publishTime": "2019-07-04T17:48:37Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "gnk-JZ4WDw2HAT5QlIJSlCEMm74",
      "id": {
        "kind": "youtube#video",
        "videoId": "MMU3-nsKhEs"
      },
      "snippet": {
        "publishedAt": "2019-06-21T17:44:30Z",
        "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
        "title": "Malinga Stars In Big Upset! | England v Sri Lanka - Match Highlights | ICC Cricket World Cup 2019",
        "description": "Watch full highlights of the England v Sri Lanka match at Headingley, Game 24 of the 2019 Cricket World Cup. The home of all the ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/MMU3-nsKhEs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/MMU3-nsKhEs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/MMU3-nsKhEs/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "ICC",
        "liveBroadcastContent": "none",
        "publishTime": "2019-06-21T17:44:30Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "AEJcjndewdSPR3haFbG0-Xow9hk",
      "id": {
        "kind": "youtube#video",
        "videoId": "GU5dTDkLcQs"
      },
      "snippet": {
        "publishedAt": "2021-09-23T08:30:35Z",
        "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
        "title": "ICC T20 World Cup 2021 anthem: Live The Game",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/GU5dTDkLcQs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/GU5dTDkLcQs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/GU5dTDkLcQs/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "ICC",
        "liveBroadcastContent": "none",
        "publishTime": "2021-09-23T08:30:35Z"
      }
    }
  ]
}]
async function initialPageVideos(){
   try {
    localStorage.clear()
       const response = await fetch(`${base_url}${api_key}`)
       const data = await response.json()
       console.log(data.items[0].snippet.channelTitle
        );

       data.items.map((item)=>{
        console.log(item);
        Storedata.push(item)
        let video = htmlForVideoSection(item)
        videosContainer.appendChild(video)
       
       })
   } catch (error) {
       
   }
}

initialPageVideos()

/* the elow code will fetch videos according to search input  */

let Input = document.getElementById("search-input")
let searchBtn = document.getElementById("search")
searchBtn.addEventListener("click",()=>{
  console.log(Input.value);
  fetchVideos(Input.value)
})

 async function fetchVideos(searchQuery){
  try {
    
      let response = await fetch(`${base_url2}${searchQuery}&key=${api_key}`)
      const data = await response.json()
      console.log(data.items[0].snippet.channelTitle);
 
 
      videosContainer.innerHTML = ""
      data.items.map((item)=>{
       console.log(item);
       Storedata.push(item)
       let video = htmlForVideoSection(item)
       videosContainer.appendChild(video)
      
      })
      
  } catch (error) {
    console.log(error);
  }
 }

// document.addEventListener("DOMContentLoaded", function () {
//     // Simulate fetching data (replace this with your actual data fetching logic)
//     setTimeout(function () {
//         // Assuming your data is loaded; hide the loader
//         document.getElementById('loader-wrapper').style.display = 'none';
//     }, 2000); // Adjust the time as needed
// });
function htmlForVideoSection(video_data){

     let thumbnail = video_data.snippet.thumbnails.medium.url
     let videoThumbnail = video_data.snippet.thumbnails.high.url
     let title =  video_data.snippet.title
     let titletoadd = title.slice(0,20)
     let channelName = video_data.snippet.channelTitle
    //  console.log(titletoadd);

   const videoContainer = document.createElement('div');
  videoContainer.className = 'video-container';

  // Create video element
  const videoElement = document.createElement('img');
  videoElement.id = 'video-1';
  videoElement.src = `${videoThumbnail}`
  // videoElement.autoplay = true;

  // Create duration element
  const durationElement = document.createElement('div');
  durationElement.className = 'duration';
  durationElement.textContent = '23.15';

  // Create video info container
  const videoInfoContainer = document.createElement('div');
  videoInfoContainer.className = 'video-info';

  // Create channel logo
  const channelLogo = document.createElement('div');
  channelLogo.className = 'channel-logo';
  const channelLogoImg = document.createElement('img');
  channelLogoImg.src = `${thumbnail}`
  channelLogo.appendChild(channelLogoImg);

  // Create video title container
  const videoTitleContainer = document.createElement('div');
  videoTitleContainer.className = 'video-title';
  const titleParagraph = document.createElement('p');
  titleParagraph.id = 'title';
  titleParagraph.textContent = `${title}`
  const channelNameParagraph = document.createElement('p');
  channelNameParagraph.id = 'channel-name';
  channelNameParagraph.textContent =`${channelName}`
  videoTitleContainer.appendChild(titleParagraph);
  videoTitleContainer.appendChild(channelNameParagraph);

  // Create views and time container
  const viewsTimeContainer = document.createElement('div');
  viewsTimeContainer.className = 'views-time';
  const viewsParagraph = document.createElement('p');
  viewsParagraph.textContent = '15K views';
  const timeParagraph = document.createElement('p');
  timeParagraph.textContent = '1 week ago';
  viewsTimeContainer.appendChild(viewsParagraph);
  viewsTimeContainer.appendChild(timeParagraph);
videoTitleContainer.appendChild(viewsTimeContainer)
  // Append elements to video info container
  videoInfoContainer.appendChild(channelLogo);
  videoInfoContainer.appendChild(videoTitleContainer);
  

  // Append elements to video container
  videoContainer.appendChild(videoElement);
  videoContainer.appendChild(durationElement);
  videoContainer.appendChild(videoInfoContainer);

  videoContainer.addEventListener("click",()=>{
    window.location.href = 'video.html';
    id++
    let video_Data = JSON.stringify(video_data)
    localStorage.setItem(`video`,video_Data)
    console.log(localStorage.getItem(video));
  })
  // Append video container to the body
 return videoContainer

  
}








// function dataInsert(){
// Storedata[0].items.map((item)=>{
//   console.log(item)
//   const video = htmlForVideoSection(item)
//   videosContainer.appendChild(video)
//   console.log(video);
// })


// }
//dataInsert()

