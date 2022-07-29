var convertBtn = document.querySelector(".convert-button");
var URLinput = document.querySelector(".URL-input");

convertBtn.addEventListener("click", function() {
    console.log(`URL: : ${URLinput.value}`);
    sendURL(URLinput.value);
})

function sendURL(URL) {
    window.location.href = `http://yt-downloader-five.vercel.app:4000/download?URL=${URL}`;

}