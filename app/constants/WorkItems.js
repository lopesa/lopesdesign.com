var WorkItems = [
	// Team Ted Tile
	{
		type: 'web',
		image: 'teamtedtile_sm.jpg',
		title: 'Team Ted Tile',
		copy: 'Design and development',
		slide: {
			image: 'teamtedtile.png',
			longCopy: `A complete design and development project. Team Ted Tile is a Bay Area tilesetting business who needed a website to show off their amazing work. Their needs were simply these: convey a sense of Ted's amazing work via photography and give interested viewers a way to get in touch to start the conversation about their project. With straightforward visual goals, the most important thing technically was to make sure the loading time was as small as possible and managed throughout. After all, it being such an image heavy site, it has the potential to be a loader curmudgeon. So I really got into image loading technique on this one. Every image's download timing is considered, and designed to be as transparent to the user as possible, and we're conscious to give the user something to be feasting their eyes on while more visuals get delivered. Ted's work is the star and holds attention well.

I also spent time on the slideshow on this project. Slideshows tend to live somewhere in most projects I do, so over time I've been zeroing in on my perfect implementation of one. (I tend to avoid plug-ins in favor of diy, and I've been d'ing my y (o) slideshow for a while now). Anyway this one turned out really well. I got it most of the way there and then ended up following a tutorial by a squarespace guy for the sweet mobile slide action.

Finally, this site is also built in a truly progressively enhanced way. Go ahead, turn off javascript, it'll still work fine! It just uses a bunch of, you know, going back and forth to the server, old school style. It's built using simple technologies, other than languages themselves, just jQuery really.`,
			linkOut: 'http://teamtedtile.com'
		}
	},
	// Virgin America
	{
		type: 'web',
		image: 'virgin_sm.jpg',
		title: 'Virgin America',
		copy: 'Enterprise web work',
		slide: {
			image: 'virgin.png',
			longCopy: `Enterprise web work. I worked for two years at Virgin America as the marketing department web developer. The work encompassed digital marketing, email, and web production, design and development, all wrapped up in different ways at different times. The bottom line of course being to take care of the awesome brand that is Virgin America.

My time with VX also encompassed the complete revision of the website for which I served as the producer of the change for all things content related (as differentiated from the ticket booking 'machine').`,
			linkOut: 'whatever'
		}
	},
	// Free Code Camp
	{
		type: 'web',
		image: 'fcc_sm.png',
		title: 'Free Code Camp',
		copy: 'Skill building fun school',
		slide: {
			longCopy: `[Free Code Camp](http://freecodecamp.com) is an outstanding, free, opensource resource that I've been using since late 2015 to solidify my core javascript skills, and to build out their curriculum's skillset, which is React, Express, Mongo, Node, and d3 for good measure. Coming at web development from the visual side I never, say, wrote many algorithms. And I had been realizing over time that that was something that was keeping me from being as strong a web dev as I wanted. So it was looking like dev boot camp for me, but then I found fcc, and I really can't say enough good things about it. I'm so glad I found it.

Here are embeds or links to most of the projects I've made so far:

#### [Algorithms](https://github.com/lopesa/freecodecamp-projects/blob/master/algorithms.js)

#### Front End Projects  
Calculator 

"Pomodoro Clock", to make sure you don't take too many facebook breaks. So it's a work-break timer thing. I worked on a UI that reflected that we are looking at the **relationship** between work periods and break periods 

<iframe height='398' scrolling='no' src='//codepen.io/lopesa/embed/aNNzrR/?height=398&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/lopesa/pen/aNNzrR/'>Pomodoro Clock - FCC</a> by Tony Lopes (<a href='http://codepen.io/lopesa'>@lopesa</a>) on <a href='http://codepen.io'>CodePen</a>.</iframe>

"Random" (ok, so it picks from, like, 10) quote generator, which I include mostly because I found a pretty hilarious bunch of programmers' code comments

<iframe height='377' scrolling='no' src='//codepen.io/lopesa/embed/qbeKOY/?height=377&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/lopesa/pen/qbeKOY/'>Random Quote Machine - FCC</a> by Tony Lopes (<a href='http://codepen.io/lopesa'>@lopesa</a>) on <a href='http://codepen.io'>CodePen</a>.</iframe>

#### React.js Projects

Markdown Translator. Type **here**, watch it update **there**.

<iframe height='486' scrolling='no' src='//codepen.io/lopesa/embed/BKxroB/?height=486&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/lopesa/pen/BKxroB/'>React.js Markdown Translator — FCC</a> by Tony Lopes (<a href='http://codepen.io/lopesa'>@lopesa</a>) on <a href='http://codepen.io'>CodePen</a>.</iframe>

Free Code Camp Brownie Points leader board. (Brownie Points are awarded for answering questions on the gitter boards.) Consumes an api from here: https://fcctop100.herokuapp.com/api/fccusers/top/recent (or /allTime, instead of /recent)

<iframe height='461' scrolling='no' src='//codepen.io/lopesa/embed/VagvgK/?height=461&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/lopesa/pen/VagvgK/'>React.js api consumption — FCC Leaderboard </a> by Tony Lopes (<a href='http://codepen.io/lopesa'>@lopesa</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

#### Api builds  
Built with Node.js and Express. These are on heroku on their sandbox servers, so they take a moment to "Wake up". That's a good exercise of course, in using all public servers instead of setting up from a linux box like I usually do. Scaling and whatnot.  

[unix time converter](http://timestamp-microsvc.herokuapp.com/)  
[url shortener](http://url-shortify.herokuapp.com/)`,
			linkOut: 'whatever'
		}
	},
	{
		type: 'photo',
		image: 'photography_sm.jpg',
		title: 'My Photography',
		copy: 'This life through a lens',
		slide: {
			image: 'photography.png',
			longCopy: `I've been taking photos most of my life. Photography is one of the mediums I've been with the longest and I love it because it's so accessible. And yet deceptively so. While it's fairly easy to get a good photo, it can be very challenging to get something that goes beyond that. (It can be magically simple too, but that's a different story.)

At the moment I find myself taking shots of travel, nature, food, things at macro level and sometimes when I'm really feeling transcendent, abstract shots and textural things.`,
			linkOut: 'https://www.flickr.com/photos/57613898@N08/'
		}
	},
	{
		type: 'photo',
		image: 'on-photography_sm.jpg',
		title: 'Old Navy Photography',
		copy: 'Core work',
		slide: {
			image: 'on-photography.jpg',
			// longCopy: `![](../img/on-denim-wall.jpg)`,
			longCopy: ``,
			linkOut: null
		}
	},
	{
		type: 'video',
		image: 'studiospotlight_sm.jpg',
		title: 'Motion and Animation',
		copy: 'Just plain fun!',
		slide: {
			longCopy: `<iframe width="560" height="315" src="https://www.youtube.com/embed/GXYYGAYln-w" frameborder="0" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/K4rPWKc46oM" frameborder="0" allowfullscreen></iframe>`,
			// longCopy: `<p>some p</p>`,
			linkOut: 'whatever'
		}
	},
	{
		type: 'video',
		image: 'videos_sm.jpg',
		title: 'Short Videos',
		copy: 'Putting it all together',
		slide: {
			longCopy: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Y5zMdyJ5lLQ" frameborder="0" allowfullscreen></iframe>  

<iframe width="560" height="315" src="https://www.youtube.com/embed/G-j2Gycr9WY" frameborder="0" allowfullscreen></iframe>`,
			linkOut: 'whatever'
		}
	}

]




module.exports = WorkItems;