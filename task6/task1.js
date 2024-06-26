(() => {
    "use strict";
    kintone.events.on("app.record.create.show", (event) => {
        event.record.Table.value.shift();
        [
            "あくなき探求",
            "不屈の心体",
            "理想への共感",
            "心を動かす",
            "知識を増やす",
            "公明正大",
        ]
        .forEach((action, i) => {
            event.record.Table.value.push({
                id: i,
                value: {
                    Action5: {
                        type: "DROP_DOWN",
                        value: `${action}`
                    },
                    状況: {
                        type: "CHECK_BOX",
                        value: ['未振り返り']
                    },
                    課題: {
                        type: "MULTI_LINE_TEXT",
                        value: ""
                    }
                }
            })
        })
        return event;
    })
})();