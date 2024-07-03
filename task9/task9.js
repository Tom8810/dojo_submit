(() => {
    "use strict";
    kintone.events.on(["app.record.create.submit", "app.record.edit.submit"], async (event) => {
        let returnValue = true;
        await kintone.api(kintone.api.url("/k/v1/records.json"), "GET", {app: 28})
        .then(
            (res) => {
            const duplicateCheckArray = res.records.map((record) => record.重複禁止項目.value);
            if (duplicateCheckArray.includes(event.record.重複禁止項目.value)) {
                if (!window.confirm("レコードが重複しています。このまま保存しますか？")) returnValue = false;
            };
            }
        )
        return returnValue;
    })
})();