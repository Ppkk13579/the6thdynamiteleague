const news = [

    {
        id: 1,
        date: "2026-07-10",
        title: "試合日程を公開しました",
        text: "レギュラーシーズンの試合日程を公開しました。"
    },

    {
        id: 2,
        date: "2026-07-13",
        title: "ホームページを公開しました",
        text: "ダイナマイトリーグ公式サイトを公開しました。"
    },

    {
        id: 3,
        date: "2026-08-30",
        title: "表彰が行われました",
        text: `
            チーム、監督、選手の各種表彰が行われました。<br>
            <a href="awards.html" class="news-link-button">
            表彰一覧はこちら
            </a>
        `
    }

];

news.sort((a, b) => new Date(b.date) - new Date(a.date));