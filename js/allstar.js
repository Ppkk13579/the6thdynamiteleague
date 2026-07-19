const allStarMatch = {

    title: "オールスターゲーム",

    date: "2026年8月15日",

    time: "19:00",

    stadium: "市村最強パーク宮城",


    home: {

        name: "シティー オールスター",

        logo: "images/Cityallstarlogo.PNG",

        manager: "元彦",


        lineup: [

            {
                number:1,
                player:"宗像",
                position:"CF"
            },

            {
                number:2,
                player:"レノン",
                position:"LF"
            },

            {
                number:3,
                player:"滝川",
                position:"CF"
            },

            {
                number:4,
                player:"郷野",
                position:"DH"
            },

            {
                number:5,
                player:"桐野",
                position:"1B"
            },

            {
                number:6,
                player:"因幡",
                position:"2B"
            },

            {
                number:7,
                player:"甲本",
                position:"C"
            },

            {
                number:8,
                player:"西森",
                position:"SS"
            },

            {
                number:9,
                player:"新堂勇",
                position:"3B"
            },


]

    },



    away: {

        name: "ワイルド オールスター",

        logo: "images/Wildallstarlogo.PNG",

        manager: "はやと",


        lineup: [
            {
                number:1,
                player:"ヴェラスケス",
                position:"SS"
            },

            {
                number:2,
                player:"久野",
                position:"RF"
            },

            {
                number:3,
                player:"サザーランド",
                position:"LF"
            },

            {
                number:4,
                player:"武嶋",
                position:"2B"
            },

            {
                number:5,
                player:"島津",
                position:"3B"
            },

            {
                number:6,
                player:"宇賀神",
                position:"1B"
            },

            {
                number:7,
                player:"綱島",
                position:"CF"
            },

            {
                number:8,
                player:"伊吹",
                position:"DH"
            },

            {
                number:9,
                player:"片野坂",
                position:"C"
            },









        ]

    },



    score: {

        home: 3,

        away: 3

    },


    innings: {

        home: [
            0,1,0,0,2,0,0,0,0,2
        ],

        away: [
            0,0,1,0,0,2,0,0,0,"-"
        ]

    },


    hits: {

        home:10,

        away:8

    },


    status: "試合中-10回裏",

    mvp:"郷野",



    homeRuns:[

        "郷野（5回ソロ）"

    ],


    awayRuns:[

        "伊吹（6回2ラン）"

    ],



    homeSteals:[
        "滝川（4回）"
    ],

    awaySteals:[
        "島津（7回）"
    ],


    winPitcher:"渋谷",

    losePitcher:"南方",



    battery:{

        home:"渋谷、鳥羽、月岡、曽根、加賀屋ー甲本",

        away:"雑賀、笹原、三寺、南方ー片野坂"

    },



    scoreEvents:[

        "2回表 因幡 タイムリーヒット シティー 1-0 ワイルド",

        "5回表 郷野 ソロホームラン シティー 3-1 ワイルド",

        "6回裏 伊吹 2ランホームラン シティー 3-3 ワイルド"

    ],


    events: [
    {
        inning: "1回表",
        type: "play",
        text: "1番:宗像 中前安打"
    },

    {
        inning: "1回表",
        type: "play",
        text: "2番:レノン 三振"
    },

    {
    inning: "2回表",
    type: "scorePlay",
    text: "6番:因幡 タイムリーヒット シティー 1-0 ワイルド"
    },

    {
        inning: "5回裏",
        type: "change",
        text: "投手交代　渋谷→鳥羽"
    },

    {
        inning: "7回表",
        type: "change",
        text: "代打　西森"
    }
]

};