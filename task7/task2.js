(() => {
    "use strict";
    // イベント発火時の処理
    const setString = (event) => {
        let product;
        switch (event.record.サイボウズ製品.value) {
            case "kintone":
                product = "KN";
                break; 
            case "Garoon":
                product = "GR";
                break;
            case "サイボウズ Office":
                product = "OF";
                break;
            default:
                product = "MW";
                break; 
        }
        event.record.重複禁止項目_文字列.value = `${dateFns.format(event.record.日付.value, "yyyyMMdd")}-${product}-${event.record.管理番号.value}`;
    }

    // イベントの一括登録
    const fields = ["日付", "サイボウズ製品", "管理番号"]
    const targetEvents = [
        "app.record.edit.show",
        ...fields.map((field) => `app.record.create.change.${field}`),
        ...fields.map((field) => `app.record.edit.change.${field}`),
    ]
    kintone.events.on(targetEvents, (event) => {
        setString(event);
        event.record["重複禁止項目_文字列"].disabled = event.record["重複禁止項目_文字列"].disabled || true;
        return event;
    })
})();