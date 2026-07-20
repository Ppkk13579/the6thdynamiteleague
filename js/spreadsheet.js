console.log("spreadsheet.js 読み込みOK");

console.log("URL設定前");

const sheetURL =
"https://docs.google.com/spreadsheets/d/1nv3A-VtvRjM_UiAIIt7NdgQxzUb88PtPM9MIuUX24hg/gviz/tq?tqx=out:json&sheet=matches";
const eventSheetURL =
"https://docs.google.com/spreadsheets/d/1nv3A-VtvRjM_UiAIIt7NdgQxzUb88PtPM9MIuUX24hg/gviz/tq?tqx=out:json&gid=1189417424";
const inningSheetURL =
"https://docs.google.com/spreadsheets/d/1nv3A-VtvRjM_UiAIIt7NdgQxzUb88PtPM9MIuUX24hg/gviz/tq?tqx=out:json&gid=223940296";

let sheetMatches = [];
let sheetEvents = [];
let sheetInnings = [];

console.log("fetch直前");

// まず events を読む
fetch(eventSheetURL)
.then(res => {
    console.log("fetch開始", res.status);
    return res.text();
})
.then(data => {

    console.log("取得したデータ", data);

    const json = JSON.parse(
        data.substring(47).slice(0,-2)
    );


    const rows = json.table.rows;

    sheetEvents = rows.map(row => {

        const c = row.c;

        return {
            id: c[0]?.v,
            team: c[1]?.v,
            player: c[2]?.v,
            eventType: c[3]?.v
        };

    });

    console.log("events読み込みOK", sheetEvents);

    // 次に matches を読む
    return fetch(sheetURL);

})
.then(res => res.text())
.then(data => {

    const json = JSON.parse(
        data.substring(47).slice(0,-2)
    );

    console.log("matches raw", json);

    const rows = json.table.rows;

    sheetMatches = rows.map(row => {

        const c = row.c;

        return {
            id: c[0].v,
            stage: c[1].v,
            league: c[2].v,

            set: c[3]?.v ?? "",
            game: c[4].v,
            seasonGame: c[5].v,

            date: c[6].f,
            time: c[7].f,

            home: c[8].v,
            away: c[9].v,

            homeScore: c[10].v,
            awayScore: c[11].v,

            status: c[12].v,
            mvp: c[13]?.v ?? "",

            homeManager: c[14]?.v ?? "",
            awayManager: c[15]?.v ?? "",

            homeStarter: c[16]?.v ?? "",
            awayStarter: c[17]?.v ?? ""
        };

    });
    
/*
    // events を各試合に合体
    sheetMatches.forEach(match => {

        const matchEvents = sheetEvents.filter(
            e => Number(e.id) === Number(match.id)
        );

        console.log(
    "match", match.id,
    "events", matchEvents
);


        match.homeRuns = matchEvents.filter(
            e => e.team === match.home && e.eventType === "homeRun"
        );

        match.awayRuns = matchEvents.filter(
            e => e.team === match.away && e.eventType === "homeRun"
        );

        match.homeSteals = matchEvents.filter(
            e => e.team === match.home && e.eventType === "steal"
        );

        match.awaySteals = matchEvents.filter(
            e => e.team === match.away && e.eventType === "steal"
        );

    });
*/

        // 3枚目のinningsシートを読む
    return fetch(inningSheetURL);

})
.then(res => res.text())
.then(data => {

    const json = JSON.parse(
        data.substring(47).slice(0,-2)
    );

    console.log("innings raw", json);

    const rows = json.table.rows;

    sheetInnings = rows.map(row => {

        const c = row.c;

        return {
            id: c[0]?.v,
            team: c[1]?.v,

            innings: [
                c[2]?.v ?? 0,
                c[3]?.v ?? 0,
                c[4]?.v ?? 0
            ],

            hits: c[5]?.v ?? 0
        };

    });

    console.log("innings読み込みOK", sheetInnings);

    sheetMatches.forEach(match => {

    const matchEvents = sheetEvents.filter(
        e => Number(e.id) === Number(match.id)
    );

    match.homeRuns = matchEvents.filter(
        e => e.team === match.home && e.eventType === "homeRun"
    );

    match.awayRuns = matchEvents.filter(
        e => e.team === match.away && e.eventType === "homeRun"
    );

    match.homeSteals = matchEvents.filter(
        e => e.team === match.home && e.eventType === "steal"
    );

    match.awaySteals = matchEvents.filter(
        e => e.team === match.away && e.eventType === "steal"
    );

});

    console.log("ID一覧", sheetMatches.map(m => m.id));
    
    window.matches = sheetMatches;
    console.log("matches読み込みOK", sheetMatches);

    console.log(
    "1試合目イベント確認",
    sheetMatches[0].homeRuns,
    sheetMatches[0].awayRuns,
    sheetMatches[0].homeSteals,
    sheetMatches[0].awaySteals
);

    window.dispatchEvent(new Event("matchesLoaded"));

});
