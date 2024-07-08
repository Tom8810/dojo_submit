(() => {
    "use strict";
    kintone.events.on(["app.record.create.submit", "app.record.edit.submit"], (event) => {
        const body = {
            app: 28,
            query: `重複禁止項目 = "${event.record.重複禁止項目.value}" and レコード番号 != "${kintone.app.record.getId() ?? -1}"`,
            totalCount: true
        }
        let returnValue = false;
        kintone.api(kintone.api.url("/k/v1/records.json"), "GET", body).then(
            (res) => {
                if (res.totalCount) {
                    if (!window.confirm("レコードが重複しています。このまま保存しますか？")) returnValue = false;
                };
            }
        )
        return returnValue;
    })
})();