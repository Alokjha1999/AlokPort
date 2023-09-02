# React Portfolio

## a portfolio for developers

![screenshot](https://drive.google.com/file/d/1RUfh30WUMx5u4ab5xGdnC02H6_UpMQFk/view?usp=drive_link)



## features

🌑 Dark Mode Toggler

📖 Multiple Pages 

📱 Fully Responsive

🎨 Modern Design


## getting started

### prerequisites

- have [Git](https://git-scm.com/) installed on your machine
- have [Node.js](https://nodejs.org/en/download/) installed on your machine
- basic familiarity with your machine's command line
- basic understanding of JSON data outline 

## how to use

- fork the repository and clone locally
- cd into the project and run `npm install` to install dependencies
- once installation is complete, run `npm run start` to get your local copy running in the browser.

## template instructions

### 1. replace the images

- open the project in your file explorer, and navigate to `src/img`. there, you will see a bunch of images. these need
  to be replaced with your own images.

#### DP.png

- add an image of yourself with the background removed, and cropped into a square. i know this seems picky, but the
  template is set up in a way that this is how it will look best : I recommend using https://remove.bg to remove the
  background from your image. If this website wants to charge you for some reason, try searching "Remove Background AI"
  on Google, there are some free ones there :)
- Once you add it to this img folder, rename it to `DP.png` 
- if background removal is not an option for you, any image you use will automatically be made into a circle. for this
  reason, square images without too tall of an aspect-ratio work best.
- example with background removed:



### 2. edit `Info.js`

Next, open the project in your code editor. Navigate to `src/info/Info.js`. There are some instructions written in the
comments there, but I will go over it all here as well:

#### Color Scheme

near the top of the file, you will find a line that looks like this:

```
export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
```

There are the colors being used to determine the "accents" throughout the site - the circle behind your self portrait,
the color of your name, the labels on the about page, and the underline for the navigation.

You can pick any colors you like for this, just play around with it and make sure to check the colors against both light
mode and dark mode to make sure it looks good on both :)

#### Your Information

going further down the Info.js file, you can start replacing the default information with your own information, such as
first name, last name, initials, position, etc. Some of the values in this file should remain untouched -- be sure to
read the comments to see what to edit.

if you're not sure how to get emojis for the miniBio and hobbies, on Mac you should be able to access the emoji keyboard
with ctrl+cmd+space, and on Windows with windows+period('.')

Otherwise, use [Emojipedia](https://emojipedia.org/) to find and copy-paste what you like.

For the 'socials' section, be sure to replace the links with your own social profile links.

For the 'portfolio' section, update the titles to whatever you want. The `live` link should be a link to the of your project. The `source` link should be a link to the **repository where the *code* of the project is hosted**,
such as GitHub.

Note: If you have more than 5 projects, you will need to add more objects to the portfolio array. Just copy from the
opening bracket to the comma of *one* object and continue pasting as many as you need. If you need help with this, feel
free to reach out.

And that's it! If you save the file and check your live server, you should see that the information has been updated and
the portfolio has been customized.

Now, you can commit and push your changes to your forked repository, and deploy however you like.
And you're done!



