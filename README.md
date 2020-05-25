<h1 align=center>
<img src="Logotype 1024 .svg" width=80%>
</h1>

Free website template built for musicians / artists to promote their music and connect with their audience. 

## Features

* Customizable hero images and responsive picture modal
* Javascript based music player and YouTube thumbnail generator optimzed for page loading
* Mailing list and contact form with validation and back-end integration
* Additional sections inlcuding an about, merch, news press, and shows section
* Project code meets HTML and CSS W3C validation compliance (excluding the black and white css skin)

## Getting Started

Note: It is recommended you use a local web server set up with php and a mail server for full testing functionality.

To edit the header and nav:
1) Replace with your artist / band name in id "logo"
2) Update the nav links to your own

To edit the home section:

1) Substitute your picture name in class "hero" in style.css
2) Edit your tagline, call-to-action (CTA), and CTA link in the class "home" in index.html

To edit the mailing list:

1) Create your own Google Sheets mailing list by following the tutorial by David McCoy: https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175
2) Replace your newly created google sheets link via "url" in mailingList.js
3) Substitute your call-to-action and tagline in the index.html

To edit the about section: 

1) Change the social media links to your own
2) Edit class "About" in index.html 

To edit the merch section:

1) Compress your pictures and reduce pixels to optimize load time
2) Copy your pictures to dir /pictures/merch
3) Substitute your picture name in classes ".a, .b, .c", ect... in style.css
4) Substitute your picture name in class "grid" in index.html

To edit the music section:

1) Edit class "Music" in index.html
2) Change the music links to your own
3) Substitute your picture name in class "music-hero" in style.css

To add featured songs:
1) Edit your song using a DAW into a 30 second clip preview to optimize load and streaming time
2) Place the songs in dir /music
3) Edit array var "files" in musPlayer.js 
4) To add a song in the array, use the following format: "Your Song Title.mp3"

To edit the news section:

1) Compress your pictures and reduce pixels to optimize load time
2) Copy your pictures to dir /pictures/blog
3) Substitute your picture name in classes ".a, .b, .c", ect... in style.css
4) Substitute your picture name and blog title in class "grid" in index.html
5) Write your blog post in the blog_(page) html pages.

To edit the press section:

Edit class "Press" in index.html.

To edit the video section:

1) Navigate to the YoutTube video you want featured
2) Copy the text after "v=" in the youtube link
3) Paste the data-id text in class "youtube-player" in class "Video" in index.html 

To edit the shows section:

Edit class "Shows" in index.html.

To edit the pictures section:

1) Compress your pictures to optimize load time
2) Copy your pictures to dir /pictures/gallery
3) Substitute your picture name in classes ".a, .b, .c", ect... in style.css
4) Substitute your picture name in class "grid" in index.html

To edit the contact form:

1) Enter your email address in form.php
2) Customize your response messages in form.php

To edit the footer:
1) Update the footer links to your own
2) Replace with your artist / band name in terms.html

## Customize with Skins!

New black and white theme available now.

1) Rename css/style_black_white.css to css/style_black_white

OR

1) Change the href link in the header to css/style_black_white.css for all html documents

## Built With

* HTML5
* CSS3
* jQuery/JavaScript/AJAX
* PHP5

## Contributing

When contributing to this repository, you may fork and submit a pull request. Add a description of what you are doing and I'll review it.

## Versioning

Version 2.3.0

## Authors

* **Matthew Waldron** - (http://waldronmatthew.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

Please abide by the Terms of Use and Website Credits pages.

## Acknowledgments

A HUGE thank you to all developers whom I used MIT licensed code from. They are listed on the "Website Credits" page. 

