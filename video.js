let videoPlayer = document.getElementById("video")
let Maintitle = document.getElementById("title")
let description = document.getElementById("description")
let Channel = document.getElementById("channel-name")
let channelLogo = document.getElementById("channel-logo")
let videoInfo = JSON.parse(localStorage.getItem("video"))

console.log(videoInfo.snippet);


videoPlayer.src=`${videoInfo.snippet.thumbnails.high.url}`
Maintitle.innerText = `${videoInfo.snippet.title}`
description.innerText =`${videoInfo.snippet.description}`
let channel_Name = document.createElement("p")
Channel.innerText =`${videoInfo.snippet.channelTitle}`



channelLogo.src = `${videoInfo.snippet.thumbnails.medium.url}`



