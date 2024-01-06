let videoPlayer = document.getElementById("video")
let BASE_URL = 'https://www.googleapis.com/youtube/v3'
let API_KEY = 'AIzaSyDHwyyi3A9fATTvu2lIV4XL6BvkvLqjPmM'

let Maintitle = document.getElementById("title")
let description = document.getElementById("description")
let Channel = document.getElementById("channel-name")
let channelLogo = document.getElementById("channel-logo")
let videoInfo = JSON.parse(localStorage.getItem("video"))
let likes = document.getElementById("likes")
let views = document.getElementById("views")
let comment = document.getElementById("comment")
let publish = document.getElementById("publish")
let publishTime = videoInfo.snippet.publishTime.slice(0,10)


console.log(videoInfo.snippet);


videoPlayer.src=`${videoInfo.snippet.thumbnails.high.url}`
Maintitle.innerText = `${videoInfo.snippet.title}`
description.innerText =`${videoInfo.snippet.description}`
let channel_Name = document.createElement("p")
Channel.innerText =`${videoInfo.snippet.channelTitle}`



channelLogo.src = `${videoInfo.snippet.thumbnails.medium.url}`




async function getVideoStats(videoId){
    // https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBmOfUnRNYc22e04ZmK79uRbPb6388K9AE&part=statistics&id=JhIBqykjzbs
    const response = await fetch(`${BASE_URL}/videos?key=${API_KEY}&part=statistics&id=${videoId}`);
    const data = await response.json();
    console.log(data);
    likes.innerText =`${data.items[0].statistics.likeCount}`
    views.innerText = `${data.items[0].statistics.viewCount}`
    comment.innerText = `${data.items[0].statistics.commentCount}`
 
}


getVideoStats(videoInfo.id.videoId)
console.log(videoInfo.snippet.publishTime.slice(0,10));

let publishText = (publishTime)=> {
     let Year = publishTime.slice(0,4)
     let Months = ["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]
    
     let Month = Months[( Number(publishTime.slice(5,7)) -1)]
     let Day = publishTime.slice(8)
     console.log(`${Year} ${Month} ${Day}` )
     publish.innerText = `${Month} ${Day},${Year}`
}
publishText(publishTime)