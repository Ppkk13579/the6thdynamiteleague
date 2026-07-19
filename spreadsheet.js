const sheetURL =
"https://docs.google.com/spreadsheets/d/1nv3A-VtvRjM_UiAIIt7NdgQxzUb88PtPM9MIuUX24hg/gviz/tq?tqx=out:json&sheet=matches";


fetch(sheetURL)
.then(res => res.text())
.then(data => {

    const json = JSON.parse(
        data.substring(47).slice(0,-2)
    );

    console.log(json);

});
