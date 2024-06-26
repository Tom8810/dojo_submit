const outputData = (dataArray) => {
    const table = document.createElement("table");
    table.style.border = "1px solid black"
    dataArray.forEach((data) => {
        const row = document.createElement("tr");
        const dayTd = document.createElement("td");
        const categoryTd = document.createElement("td");
        const titleTd = document.createElement("td");
        const link = document.createElement("a");
        dayTd.textContent = data.day.value;
        categoryTd.textContent = data.category.value;
        link.textContent = data.content.value.length > 30 ? data.content.value.substring(0, 30) + "..." : data.content.value;
        link.href = data.url.value;
        link.target = data.target.value;
        if (data.category.value === "製品") {
            categoryTd.style.backgroundColor = "lightgreen";
        } else if (data.category.value === "IR 情報") {
            categoryTd.style.backgroundColor = "pink";
        } else {
            categoryTd.style.backgroundColor = "lightblue";
        }
        [dayTd, categoryTd, titleTd].forEach(ele => {ele.style.border = "1px solid black"})

        titleTd.appendChild(link);
        row.append(dayTd, categoryTd, titleTd);
        table.append(row)
    })
    document.getElementById("table").appendChild(table);   
}

axios.get("https://oykh3vmu623yt5rufrstzlyxyi0kitod.lambda-url.ap-northeast-1.on.aws/", {
    params: {
        id: "dojo",
        query: "order by day desc limit 3",
    }
})
.then(
    (res) => {outputData(res.data)}
).catch(
    () => window.alert("情報を取得できませんでした。")
)