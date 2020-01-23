const ffmpeg = require('ffmpeg-static');

module.exports = {
    async index(request, response) {

        response.download("./downloads/Katy-Perry  Roar Official.mp3");

    },
    async store(request, response) {
        
        const url = request.body.url;
        const helperUrl = url.split("watch?v=");
        const video = helperUrl[1];
        
        let responseMessage = '';
        var YoutubeMp3Downloader = require("youtube-mp3-downloader");
 
        //Configure YoutubeMp3Downloader with your settings
        var YD = new YoutubeMp3Downloader({
            "ffmpegPath": ffmpeg,        // Where is the FFmpeg binary located?
            "outputPath": "./downloads",    // Where should the downloaded and encoded files be stored?
            "youtubeVideoQuality": "highest",       // What video quality should be used?
            "queueParallelism": 2,                  // How many parallel downloads/encodes should be started?
            "progressTimeout": 2000                 // How long should be the interval of the progress reports
        });
        
        //Download video and save as MP3 file
        YD.download(video);
        
        YD.on("finished", function(err, data) {
            console.log(JSON.stringify(data));
            responseMessage = JSON.stringify(data);
            return response.json(responseMessage);
        });
        
        YD.on("error", function(error) {
            console.log(error);
            return response.json(error);
        });
        
        YD.on("progress", function(progress) {
            console.log(JSON.stringify(progress));
        });

    }
}