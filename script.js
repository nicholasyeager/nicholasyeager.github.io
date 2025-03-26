function buttonFunc() {
    const newImage = document.createElement('img'); // Create image element
    const location = document.querySelector('.header'); // Select the header div

    newImage.src = "https://oyster.ignimgs.com/mediawiki/apis.ign.com/final-fantasy-7-rebirth/7/7d/Final_Fantasy_VII_Rebirth_Sephiroth.png"; 
    newImage.alt = "Sephiroth Image"; // Alt text for accessibility
    newImage.style.width = "800px"; // Optional styling
    newImage.style.height = "auto";
    newImage.style.display = "block"; // Ensures it's on a new line

    location.appendChild(newImage); // Append image inside .header div

    /*
    // Create and play the audio(currently not working)
    const audio = new Audio("https://soundcloud.com/pamero/one-winged-angel-1?si=332746ef5a3040818f425a099f5d8e55&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing");
    audio.play();
    */

    // Stop audio and remove image after 10 seconds
    setTimeout(() => {
        //audio.pause();
        //audio.currentTime = 0; // Reset audio
        newImage.remove(); // Remove the image
    }, 10000);
}
