let matches = [];

fetch(sheetURL)
.then(res => res.text())
.then(data => {

    const json = JSON.parse(
        data.substring(47).slice(0,-2)
    );

    const rows = json.table.rows;

    matches = rows.map(row => {

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

    console.log(matches);

});
