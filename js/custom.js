$(document).ready(function(){

    //Define our event listener
    $("#find-lyrics").on("submit", function(e){
        e.preventDefault();
        $(".lyric-container").text("loading...");
    
        //listening fot a submit event, need to prevent the default
        //Declare variables to store the artist and song, aka the form inputs
    var artist = $("#artist").val();
    var song = $("#song").val();
    var url = "https://api.lyrics.ovh/v1/" + artist +"/" + song + "";
    
    
    fetch(url).then(response => {
        var processedLyrics = response.json();
        return processedLyrics;
    }).then(processedLyrics => {
        $(".lyric-container").html("<p>" + processedLyrics.lyrics + "</p>");
    
    }).catch(error => {
        console.log(error);
        alert("Please enter a valid song/artist")
    });

    // $.ajax({
    //     type: "GET",
    //     url: "https://api.lyrics.ovh/v1/" + artist +"/" + song + "", 
    //     success: function(data){
    //         $(".lyric-container").html("<p>" + data .lyrics + "</p>");
    //     },
    //     error: function(xhr, status, e){
    //         console.log(status, e);
    //         $(".lyric-container").html("<p>Please enter a valid song/artist</p>")
        
    //     }
    // });

    //Ajax call
    //GET request
    //Input url: two strings from the form, concatonate with our created variables
    //Callback success -> console.log the response
    //Callback: error -> console.log the error

    });



});