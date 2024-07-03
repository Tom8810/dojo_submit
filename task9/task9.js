(() => {
    "use strict";
    const body = {
        app: 28,
        fields: ["重複禁止項目", "レコード番号"]
    }
    kintone.events.on(["app.record.create.submit", "app.record.edit.submit"], async (event) => {
        let returnValue = true;
        const promises = [kintone.app.record.getId() ?? -1, kintone.api(kintone.api.url("/k/v1/records.json"), "GET", body)]
        await Promise.all(promises)
        .then(
            ([id, recordsData]) => {
            const duplicateCheckArray = recordsData.records.filter((record => Number(record.レコード番号.value) !== id)).map((record) => record.重複禁止項目.value);
            if (duplicateCheckArray.includes(event.record.重複禁止項目.value)) {
                if (!window.confirm("レコードが重複しています。このまま保存しますか？")) returnValue = false;
            };
            }
        )
        return returnValue;
    })
})();