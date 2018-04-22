# Music Website Template

Free website template built for musicians / artists wishing to promote their music and connect to their audience. Website features a homepage hero image, mailing list form, local music player, album hero image, YouTube video player, and a responsive picture modal.

To view a live demo of this website, go to: http://waldronmatthew.com/websites/music/index.html

## Getting Started

To edit the mailing list:

1) Create your own Google Sheets mailing list by following the tutorial by David McCoy: https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175
2) Replace your newly created google sheets link via "url" in mailingList.js
3) Substitute your picture name in class "hero" in style.css

To edit the about section: 

1) Change the social media links to your own
2) Edit class "About" in index.html 

To edit the music section:

1) Edit class "Music" in index.html
2) Change the music links to your own
3) Substitute your picture name in class "music-hero" in style.css

To add featured songs:
1) Edit your song using a DAW into a 30 second clip preview to optomize load and streaming time
2) Place the songs in dir /music
3) Edit array var "files" in musPlayer.js 
4) To add a song in the array, use the following format: "Your Song Title.mp3"

To edit the press section:

Edit class "Press" in index.html.

To edit the video section:

1) Navigate to the YoutTube video you want featured
2) Copy the text after "v=" in the youtube link
3) Paste the data-id text in class "youtube-player" in class "Video" in index.html 

To edit the shows section:

Edit class "Shows" in index.html.

To edit the pictures section:

1) Copy your pictures to dir /pictures/gallery
2) Substitute your picture name in classes ".a, .b, .c", ect... in style.css
3) Substitute your picture name in class "grid" in index.html

To edit the footer:
1) Change the footer links to your own
2) Replace with your artist / band name in terms.html

## Built With

* HTML5
* CSS3
* JQuery / Javascript

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with Matthew Waldron before making a change.

## Versioning

Version 1.0.0

## Authors

* **Matthew Waldron** - (http://waldronmatthew.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

Please abide by the Terms of Use and Website Credits pages.

## Acknowledgments

A HUGE thank you to all developers whom I used MIT licensed code from. They are listed on the "Website Credits" page. 

