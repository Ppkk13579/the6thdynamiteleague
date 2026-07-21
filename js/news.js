const news = [

    {
        id: 1,
        date: "2026-07-21",
        title: "サイトを正式公開しました",
        text: "テスト期間を終えて、当サイトを正式公開しました。まだ試合等のデータはないので何も見れませんが、しばらくすれば見られるようになります。"
    },


];

news.sort((a, b) => new Date(b.date) - new Date(a.date));
