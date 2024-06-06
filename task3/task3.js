"use strict";

// 使う変数
const obj = {
    f001: {
        folderName: "情報システム部",
        viewAuth: "Everyone",
        editAuth: "情報システム部",
        deleteAuth: "情報システム部",
    },
    f002: {
        folderName: "経営管理部",
        viewAuth: "経営管理部",
        editAuth: "経営管理部",
        deleteAuth: "経営管理部",
    },
    f003: {
        folderName: "営業部",
        viewAuth: "Everyone",
        editAuth: "営業部",
        deleteAuth: "営業部",
    }
}
const folders = Object.keys(obj);
const folderProps = Object.keys(obj.f001);
const list = document.getElementById("list");

// 手順1
console.log(obj);

// 手順2
folders.forEach((e) => {
    folderProps.forEach((ele) => {
        document.getElementById(`${e}-${ele}`).textContent = obj[`${e}`][`${ele}`]
    })
})

// 手順3
folders.forEach((e) => {
   if (obj[`${e}`]["viewAuth"] === "Everyone") {
    const li = document.createElement("li");
    li.textContent = obj[`${e}`]["folderName"];
    list.appendChild(li);
   }
})