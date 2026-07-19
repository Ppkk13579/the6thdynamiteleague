function formatDate(dateString){

    const date = new Date(dateString);

    return `${date.getMonth() + 1}月${date.getDate()}日`;

}


const matches = [

        {
            id: 8192,

            stage: "オープン戦",

            league: "オープン戦",

            set: "　",
            seasonGame: 1,

            date: "2026-07-21",
            time: "08:00",

            home: "リザーズ",
            away: "タートルズ",

            homeManager: "明菜",
            awayManager: "カーブが最強",

            homeStarter: "柿沢",
            awayStarter: "副島",

            homeScore: 2,
            awayScore: 0,

            status: "試合終了",

            mvp: "臼井",

            homeRuns: [
                { player: "米村" },
            ],

            awayRuns: [],

            homeSteals: [],

            awaySteals: [],

            innings: {
                away: [0, 0, 0],
                home: [2, 0, "X"],
            },

            hits: {
                away: 2,
                home: 3,
            },
        },
        {
            id: 1,

            stage: "レギュラーシーズン",

            league: "シティーリーグ",

            set: 1,
            game: 1,
            seasonGame: 1,

            date: "2026-07-30",
            time: "16:00",

            home: "タートルズ",
            away: "ライノス",

            homeManager: "つなしー",
            awayManager: "松尾形",

            homeStarter: "副島",
            awayStarter: "古渡",

            homeScore: 0,
            awayScore: 4,

            status: "試合終了",

            mvp: "赤城",

            homeRuns: [],

            awayRuns: [
                { player: "赤城" },
                { player: "宗像" },
                { player: "鬼塚" },
            ],

            homeSteals: [],

            awaySteals: [],

            innings: {
                away: [2, 1, 1],
                home: [0, 0, 0],
            },

            hits: {
                away: 5,
                home: 2,
            },
        },

        {
            id: 3,

            stage: "レギュラーシーズン",

            league: "シティーリーグ",

            set: 1,
            game: 1,
            seasonGame: 1,

            date: "2026-07-30",
            time: "16:00",

            home: "エレファンツ",
            away: "リザーズ",

            homeManager: "エセンシャル",
            awayManager: "ニセンシャル",

            homeStarter: "末長",
            awayStarter: "渋谷",

            homeScore: 3,
            awayScore: 6,

            status: "試合終了",

            mvp: "臼井",

            homeRuns: [
                { player: "韮崎" },
                { player: "郷野" },
            ],

            awayRuns: [],

            homeSteals: [],
            awaySteals: [],

            innings: {
                away: [2, 4, 0],
                home: [2, 0, 1],
            },

            hits: {
                away: 10,
                home: 5,
            },
        },

        {
            id: 5,

            stage: "レギュラーシーズン",

            league: "シティーリーグ",

            set: 1,
            game: 1,
            seasonGame: 1,

            date: "2026-07-30",
            time: "16:00",

            home: "ラビッツ",
            away: "モンキーズ",

            homeManager: "粉バナナ",
            awayManager: "ホームラン",

            homeStarter: "野尻",
            awayStarter: "北見",

            homeScore: 5,
            awayScore: 6,

            status: "試合終了",

            mvp: "町田",

            homeRuns: [
                { player: "ピータース" },
                { player: "徳田" },
            ],

            awayRuns: [],

            homeSteals: [],
            awaySteals: [],


            innings: {
                away: [2, 0, 4],
                home: [3, 0, 2],
            },

            hits: {
                away: 7,
                home: 5,
            },


        },

        {  
            id: 2,

            stage: "レギュラーシーズン",

            league: "ワイルドリーグ",

            set: 1,
            game: 1,
            seasonGame: 1,

            date: "2026-07-30",
            time: "21:00",

            home: "シャークス",
            away: "レパーズ",

            homeManager: "ソーセージ",
            awayManager: "するめゐか",

            homeStarter: "南方",
            awayStarter: "穂村",

            homeScore: 2,
            awayScore: 5,

            status: "試合終了",

            mvp: "穗村",

            homeRuns: [
                { player: "南方" },
            ],

            awayRuns: [],

            homeSteals: [
                { player: "仁科" },
            ],

            awaySteals: [],

            innings: {
                away: [4, 0, 1],
                home: [1, 1, 0],
            },

            hits: {
                away: 9,
                home: 4,
            },
        },    
        {
            id: 4,

            stage: "レギュラーシーズン",

            league: "ワイルドリーグ",

            set: 1,
            game: 1,
            seasonGame: 1,

            date: "2026-07-30",
            time: "21:00",

            home: "ファルコンズ",
            away: "クロウズ",

            homeManager: "実力の1表",
            awayManager: "141",

            homeStarter: "笹原",
            awayStarter: "柳瀬",

            homeScore: 6,
            awayScore: 2,

            status: "試合終了",

            mvp: "笹原",

            homeRuns: [
                { player: "カラーゾ" },
                { player: "柳沢" },
            ],

            awayRuns: [],

            homeSteals: [],
            awaySteals: [],

            innings: {
                away: [0, 0, 2],
                home: [2, 4, "X"],
            },

            hits: {
                away: 6,
                home: 7,
            },
        },    
        {
            id: 6,

            stage: "レギュラーシーズン",

            league: "ワイルドリーグ",

            set: 1,
            game: 1,
            seasonGame: 1,

            date: "2026-07-30",
            time: "21:00",

            home: "アリゲーターズ",
            away: "ドッグス",

            homeManager: "龍",
            awayManager: "21982",

            homeStarter: "室田",
            awayStarter: "深見",

            homeScore: 1,
            awayScore: 0,

            status: "試合終了",

            mvp: "室田",

            homeRuns: [
                { player: "大庭" },
            ],

            awayRuns: [],

            homeSteals: [],
            awaySteals: [],

            innings: {
                away: [0, 0, 0],
                home: [0, 1, "X"],
            },

            hits: {
                away: 2,
                home: 3,
            },
        },

        {
            id: 7,

            stage: "レギュラーシーズン",

            league: "シティーリーグ",

            set: 1,
            game: 2,
            seasonGame: 2,

            date: "2026-07-31",
            time: "10:00",

            home: "ライノス",
            away: "ラビッツ",

            homeManager: "あわね",
            awayManager: "粉バナナ",

            homeStarter: "月岡",
            awayStarter: "伊佐",

            homeScore: 3,
            awayScore: 6,

            status: "試合終了",

            mvp: "尾形",

            homeRuns: [
                { player: "サンディーノ" },
            ],

            awayRuns: [],

            homeSteals: [],

            awaySteals: [
                { player: "白戸" },
                { player: "因幡" },
                { player: "早乙女" },
            ],

            innings: {
                away: [3, 0, 3],
                home: [1, 2, 0],
            },

            hits: {
                away: 8,
                home: 6,
            },
        },

        {
            id: 9,

            stage: "レギュラーシーズン",

            league: "シティーリーグ",

            set: 1,
            game: 2,
            seasonGame: 2,

            date: "2026-07-31",
            time: "10:00",

            home: "モンキーズ",
            away: "エレファンツ",

            homeManager: "2691",
            awayManager: "ヒロカプ",

            homeStarter: "鷲尾",
            awayStarter: "羽田",

            homeScore: 7,
            awayScore: 5,

            status: "試合終了",

            mvp: "井上",

            homeRuns: [
                { player: "井上" },
                { player: "ボカネグラ" },
            ],

            awayRuns: [
                { player: "郷野" },
                { player: "郷野" },
                { player: "レノン" },
            ],

            homeSteals: [],

            awaySteals: [
                { player: "伊達" },
            ],

            innings: {
                away: [2, 1, 2],
                home: [5, 0, "2x"],
            },

            hits: {
                away: 5,
                home: 7,
            },
        },

        {
            id: 11,

            stage: "レギュラーシーズン",

            league: "シティーリーグ",

            set: 1,
            game: 2,
            seasonGame: 2,

            date: "2026-07-31",
            time: "10:00",

            home: "リザーズ",
            away: "タートルズ",

            homeManager: "明菜",
            awayManager: "カーブが最強",

            homeStarter: "柿沢",
            awayStarter: "飯田",

            homeScore: 6,
            awayScore: 5,

            status: "試合終了",

            mvp: "脇坂",

            homeRuns: [
                { player: "安東" },
                { player: "猪熊" },
                { player: "倉科" },
                { player: "脇坂" },
            ],

            awayRuns: [
                { player: "デュラン" },
                { player: "甲本" },
            ],

            homeSteals: [],

            awaySteals: [],

            innings: {
                away: [0, 0, 5],
                home: [5, 0, "1x"],
            },

            hits: {
                away: 10,
                home: 7,
            },
        },

        {
            id: 8,

            stage: "レギュラーシーズン",

            league: "ワイルドリーグ",

            set: 1,
            game: 2,
            seasonGame: 2,

            date: "2026-07-31",
            time: "14:00",

            home: "ドッグス",
            away: "ファルコンズ",

            homeManager: "吹上",
            awayManager: "広島東洋カープ",

            homeStarter: "日村",
            awayStarter: "雑賀",

            homeScore: 2,
            awayScore: 1,

            status: "試合終了",

            mvp: "日村",

            homeRuns: [
                { player: "池田" },
                { player: "ヘンドリクス" },
            ],

            awayRuns: [],

            homeSteals: [],

            awaySteals: [
                { player: "筧" },
            ],

            innings: {
                away: [0, 1, 0],
                home: [1, 0, "1x"],
            },

            hits: {
                away: 2,
                home: 2,
            },
        },

        {
            id: 10,

            stage: "レギュラーシーズン",

            league: "ワイルドリーグ",

            set: 1,
            game: 2,
            seasonGame: 2,

            date: "2026-07-31",
            time: "14:00",

            home: "クロウズ",
            away: "シャークス",

            homeManager: "Mrクロウズ",
            awayManager: "ソーセージ",

            homeStarter: "尾崎",
            awayStarter: "三島",

            homeScore: 1,
            awayScore: 8,

            status: "試合終了",

            mvp: "南方",

            homeRuns: [
                { player: "島津" },
            ],

            awayRuns: [
                { player: "ゲイナー" },
                { player: "ヴェラスケス" },
                { player: "藤代" },
            ],

            homeSteals: [],

            awaySteals: [],

            innings: {
                away: [3, 0, 5],
                home: [1, 0, 0],
            },

            hits: {
                away: 8,
                home: 3,
            },
        },

        {
            id: 12,

            stage: "レギュラーシーズン",
        
            league: "ワイルドリーグ",

            set: 1,
            game: 2,
            seasonGame: 2,

            date: "2026-07-31",
            time: "14:00",

            home: "レパーズ",
            away: "アリゲーターズ",

            homeManager: "≡守護神石狩≡",
            awayManager: "池川町",

            homeStarter: "大方",
            awayStarter: "鳴海",

            homeScore: 1,
            awayScore: 7,

            status: "試合終了",

            mvp: "長沼",

            homeRuns: [],

            awayRuns: [
                { player: "長沼" },
                { player: "宇賀神" },
                { player: "沢口" },
            ],

            homeSteals: [],

            awaySteals: [],

            innings: {
                away: [3, 0, 4],
                home: [1, 0, 0],
            },

            hits: {
                away: "-",
                home: "-",
            },
        },

        {
            id: 100,

            stage: "交流戦",

            league: "交流戦",

            set: "交流戦",
            game: 1,

            seasonGame: 6,

            date: "2026-08-10",
            time: "11:45",

            home: "ラビッツ",
            away: "クロウズ",

            homeManager: "大壕中学生",
            awayManager: "141",

            homeStarter: "鳥羽",
            awayStarter: "柳瀬",

            homeScore: 4,
            awayScore: 3,

            status: "試合終了",

            mvp: "グッドマン",

            homeRuns: [
                { player: "グッドマン" },
            ],

            awayRuns: [
                { player: "望月" },
                { player: "戸井田" },
            ],

            homeSteals: [],

            awaySteals: [],

            innings: {
                away: [1, 0, 2],
                home: [0, 4, "X"],
            },

            hits: {
                away: 5,
                home: 6,
            },
        },


        {
            id: 810,

            stage: "CS",

            league: "シティーリーグ",

            set: "ファーストステージ",
            game: 1,

            date: "2026-08-25",
            time: "19:19",

            home: "リザーズ",
            away: "タートルズ",

            homeManager: "明菜",
            awayManager: "カーブが最強",

            homeStarter: "柿沢",
            awayStarter: "副島",

            homeScore: 2,
            awayScore: 0,

            status: "試合終了",

            mvp: "臼井",

            homeRuns: [
                { player: "米村" },
            ],

            awayRuns: [],

            homeSteals: [],

            awaySteals: [],

            innings: {
                away: [0, 0, 0],
                home: [2, 0, "X"],
            },

            hits: {
                away: 2,
                home: 3,
            },
        },

        {
            id: 114514,

            stage: "CS",

            league: "ワイルドリーグ",

            set: "ファーストステージ",
            game: 1,

            date: "2026-08-25",
            time: "19:19",

            home: "ドッグス",
            away: "レパーズ",

            homeManager: "吹上",
            awayManager: "するめゐか",

            homeStarter: "日村",
            awayStarter: "穂村",

            homeScore: 5,
            awayScore: 9,

            status: "試合終了",

            mvp: "穂村",

            homeRuns: [
                { player: "有働" },
                { player: "山名" },
                { player: "片倉" },
            ],

            awayRuns: [
                { player: "武嶋" },
                { player: "北岡" },
                { player: "若山" },
            ],

            homeSteals: [],

            awaySteals: [],

            innings: {
                away: [5, 0, 4],
                home: [0, 2, 3],
            },

            hits: {
                away: 11,
                home: 8,
            },
        },

        {
            id: 334,

            stage: "CS",

            league: "ワイルドリーグ",

            set: "ファイナルステージ",
            game: 1,

            date: "2026-08-26",
            time: "11:45",

            home: "アリゲーターズ",
            away: "ドッグス",

            homeManager: "龍",
            awayManager: "Johnson",

            homeStarter: "鳴海",
            awayStarter: "深見",

            homeScore: 2,
            awayScore: 1,

            status: "試合終了",

            mvp: "沢口",

            homeRuns: [
                { player: "沢口" },
            ],

            awayRuns: [],

            homeSteals: [],

            awaySteals: [],

            innings: {
                away: [1, 0, 0],
                home: [0, 1, "1x"],
            },

            hits: {
                away: 5,
                home: 4,
            },
        },

        {
            id: 721,

            stage: "CS",

            league: "シティーリーグ",

            set: "ファイナルステージ",
            game: 1,

            date: "2026-08-26",
            time: "11:45",

            home: "モンキーズ",
            away: "リザーズ",

            homeManager: "たっつー",
            awayManager: "つよつよ",

            homeStarter: "北見",
            awayStarter: "渋谷",

            homeScore: 0,
            awayScore: 4,

            status: "試合終了",

            mvp: "渋谷",

            homeRuns: [],

            awayRuns: [
                { player: "桐野" },
                { player: "脇坂" },
                { player: "梶山" },
            ],

            homeSteals: [],

            awaySteals: [],

            innings: {
                away: [3, 0, 1],
                home: [0, 0, 0],
            },

            hits: {
                away: 7,
                home: 3,
            },
        },


        {
            id: 31415,

            stage: "ダイナマイトシリーズ",

            league: "ダイナマイトシリーズ",

            set: "　",
            game: 1,

            date: "2026-08-30",
            time: "12:00",

            home: "モンキーズ",
            away: "アリゲーターズ",

            homeManager: "Neko",
            awayManager: "うががみ",

            homeStarter: "鷲尾",
            awayStarter: "室田",

            homeScore: 3,
            awayScore: 7,

            status: "試合終了",

            mvp: "宇賀神",

            homeRuns: [
                { player: "松山" },
            ],

            awayRuns: [
                { player: "宇賀神" },
                { player: "宇賀神" },
                { player: "フィッシャー" },
            ],

            homeSteals: [],

            awaySteals: [],

            innings: {
                away: [2, 1, 4],
                home: [3, 0, 0],
            },

            hits: {
                away: 8,
                home: 5,
            },
        },

        
];






window.matches = matches;
