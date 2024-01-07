let videoPlayer = document.getElementById("video")
let BASE_URL = 'https://www.googleapis.com/youtube/v3'
let base_url2 = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q='
let API_KEY = 'AIzaSyDHwyyi3A9fATTvu2lIV4XL6BvkvLqjPmM'

//  we get the data for that particular video from local storage 
let videoInfo = JSON.parse(localStorage.getItem("video"))

let Maintitle = document.getElementById("title")
let description = document.getElementById("description")
let Channel = document.getElementById("channel-name")
let channelLogo = document.getElementById("channel-logo")
let likes = document.getElementById("likes")
let views = document.getElementById("views")
let comment = document.getElementById("comment")
let publish = document.getElementById("publish")
let videoContainer = document.getElementById("suggestions")
let searchQuery = videoInfo.snippet.channelTitle


let publishTime = videoInfo.snippet.publishTime.slice(0,10)  
let channelId = videoInfo.id.channelId

window.addEventListener("load",()=>{
    
    // we added this if statement because sometimes API does not provides us with the videoID so to handle that error
    if(videoInfo.id.videoId){
        videoId = videoInfo.id.videoId
        if(YT){
            new YT.Player("video",{
                height:"500",
                width:"1000",
                videoId
            })
        }
    }
   
})


console.log(videoInfo.snippet);


videoPlayer.src=`${videoInfo.snippet.thumbnails.high.url}`
Maintitle.innerText = `${videoInfo.snippet.title}`
description.innerText =`${videoInfo.snippet.description}`
let channel_Name = document.createElement("p")
Channel.innerText =`${videoInfo.snippet.channelTitle}`



channelLogo.src = `${ localStorage.getItem("Thumbnail")}`







async function getVideoStats(videoId){
    // https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBmOfUnRNYc22e04ZmK79uRbPb6388K9AE&part=statistics&id=JhIBqykjzbs
    const response = await fetch(`${BASE_URL}/videos?key=${API_KEY}&part=statistics&id=${videoId}`);
    const data = await response.json();
    console.log(data);
    if(data.items.length>0){
        likes.innerText =`${data.items[0].statistics.likeCount}`
    views.innerText = `${data.items[0].statistics.viewCount}`
    comment.innerText = `${data.items[0].statistics.commentCount}`
    }
    
 
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


let render_Side_Video = (data)=>{
    const videoContainer = document.createElement('div');
    videoContainer.className = 'video-container';
  
    // Create video element
    const videoElement = document.createElement('div');
    videoElement.className = 'video';
    const videoImage = document.createElement('img');
    
    videoImage.src = data.snippet.thumbnails.medium.url; // You can set the image source dynamically if needed
    videoElement.appendChild(videoImage);
  
    // Create duration element
    // const durationElement = document.createElement('div');
    // durationElement.className = 'duration';
    // durationElement.textContent = '23.15';
  
    // Create video info container
    const videoInfoContainer = document.createElement('div');
    videoInfoContainer.className = 'video-info';
  
    // Create video title container
    const videoTitleContainer = document.createElement('div');
    videoTitleContainer.className = 'video-Title';
    const titleParagraph = document.createElement('p');
    titleParagraph.id = 'side-title';
    titleParagraph.textContent = data.snippet.title; // Replace with actual title
    const channelNameParagraph = document.createElement('p');
    channelNameParagraph.id = 'channel-name';
    channelNameParagraph.textContent = data.snippet.channelTitle; // Replace with actual channel name
    videoTitleContainer.appendChild(titleParagraph);
    videoTitleContainer.appendChild(channelNameParagraph);
  
    // Create views and time container
    // const viewsTimeContainer = document.createElement('div');
    // viewsTimeContainer.className = 'views-time';
    // const viewsParagraph = document.createElement('p');
    // viewsParagraph.textContent = "15 k" // Replace with actual views
    // const timeParagraph = document.createElement('p');

    // timeParagraph.textContent = "time"; // Replace with actual time
    // viewsTimeContainer.appendChild(viewsParagraph);
    // viewsTimeContainer.appendChild(timeParagraph);
  
    // videoTitleContainer.appendChild(viewsTimeContainer);
  
    // Append elements to video info container
    videoInfoContainer.appendChild(videoTitleContainer);
  
    // Append elements to video container
    videoContainer.appendChild(videoElement);
    // videoContainer.appendChild(durationElement);
    videoContainer.appendChild(videoInfoContainer);
  
    return videoContainer;


}


async function fetchVideos(searchQuery){
    try {
      
        let response = await fetch(`${base_url2}${searchQuery}&key=${API_KEY}`)
        const data = await response.json()
        console.log(data.items[0]);
        videoContainer.innerHTML=""
        // const channel_thumbnail_url = await getChannelLogo(`${data.items[0].snippet.channelId}`)
        data.items.map((item)=>{
            let video = render_Side_Video(item)
           
            videoContainer.appendChild(video)

        })
        
        
    } catch (error) {
      console.log(error);
    }
   }
   fetchVideos(searchQuery)

