const outputData = (array) => {
    const sortedArray = array.sort((a, b) => new Date(b.day.value) - new Date(a.day.value))
    sortedArray.forEach((data) => {
        const day = document.createElement("p");
        const category = document.createElement("p");
        const link = document.createElement("a");
        const tableRow = document.createElement("div");
        day.textContent = data.day.value;
        category.textContent = data.category.value;
        link.textContent = data.content.value.length > 30 ? data.content.value.substring(0, 30) + "..." : data.content.value;
        link.href = data.url.value;
        link.target = data.target.value;
        tableRow.classList.add("table-row");
        [day, category, link].forEach((ele, i) => {
            const tableBox = document.createElement("div");
            tableBox.classList.add(`table-box`);
            tableBox.classList.add(`col${i + 1}`);
            tableBox.appendChild(ele);
            tableRow.appendChild(tableBox);
            if (i === 1) {
                if (data.category.value === "製品") {
                    tableBox.style.backgroundColor = "lightgreen";
                } else if (data.category.value === "IR 情報") {
                    tableBox.style.backgroundColor = "pink";
                } else {
                    tableBox.style.backgroundColor = "lightblue";
                }
            }
        });
        document.getElementById("table").appendChild(tableRow);
    })
}

axios.get("https://oykh3vmu623yt5rufrstzlyxyi0kitod.lambda-url.ap-northeast-1.on.aws/", {
    params: {
        id: "dojo",
        query: "limit 3",
    }
})
.then(
    (res) => {outputData(res.data)}
).catch(
    () => window.alert("情報を取得できませんでした")
)