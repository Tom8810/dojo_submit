"use strict";
const wanted = window.prompt("何をお求めですか?");
const message = wanted === "りんご" ? "1つ150円です" : wanted === "ばなな" ? "1つ100円です" : "品切れです";
console.log(message);