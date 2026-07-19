console.log("spreadsheet.js 読み込みOK");

const sheetURL =
"https://docs.google.com/spreadsheets/d/1nv3A-VtvRjM_UiAIIt7NdgQxzUb88PtPM9MIuUX24hg/gviz/tq?tqx=out:json&sheet=matches";


fetch(sheetURL)
.then(res => {
    console.log("fetch成功");
    return res.text();
})
.then(data => {

    console.log(data);

    const json = JSON.parse(
        data.substring(47).slice(0,-2)
    );

    console.log(json);

})
.catch(error => {
    console.error(error);
});
