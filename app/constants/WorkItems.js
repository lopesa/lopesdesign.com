var WorkItems = [
	// apps and features
	{
		type: '',
		image: 'apps_sm.png',
		title: 'Apps',
		copy: 'Dev',
		slide: {
			image: '',
			longCopy: `
<a href="http://bentoboard.co"><img src="/img/bento.png" class='image border'/></a>

<strong><a href="http://bentoboard.co" class="link-style">Bento</a></strong> is a modularized productivity app that I built with a team of three other engineers as my thesis project at Hack Reactor. We used React.js, Redux, Firebase, Node.js to build and we hosted on the Google Cloud platform. The app includes a handful of components that the user can choose add to their dashboard. I especially concentrated on a module for photgraphers that encourages the user to take a photo per day. It leverages the html5 camera api via the input form field and uses the canvas element to perform some manipulations on the image to ensure images taken on all devices are rotated properly. This app offers a highly responsive and customizable take on the productivity app form

<hr class='rule'></hr>

<a href="https://brandybucks.herokuapp.com/"><img src="/img/llama.jpg" class='image border'/></a>

<strong><a href="https://brandybucks.herokuapp.com/" class="link-style">Llama</a></strong> is an app to promote active student records in one source. We recognized a need in the community of students with special needs and their teachers and parents for a succinct record keeping app to address the quantity of mandatory records. We envision quick moments of in-the-moment notes to replace a daily chore of accumulated data entry.

<hr class='rule'></hr>

<a href="https://roast-log.herokuapp.com/"><img src="/img/roastlog.jpg" class='image border'/></a>

<strong><a href="https://roast-log.herokuapp.com/" class="link-style">Coffee roast logging app.</a></strong> Built using Angular and Angular Material, with an Express server and using Amazon s3 buckets for image uploads.`,
			linkOut: ''
		}
	},
	// Websites
	{
		type: '',
		image: 'teamtedtile_sm.jpg',
		title: 'Websites',
		copy: 'Design & Build',
		slide: {
			image: '',
			longCopy: `<a href='http://teamtedtile.com'><img src='/img/teamtedtile.png' class='image'></a>
			A complete design and development project. Team Ted Tile is a Bay Area tilesetting business who needed a website to show off their amazing work. I really just wanted to get the photos front and center asap. So then the most important thing technically was to make sure the loading time was as small as possible and managed throughout. After all, it being such an image heavy site, it has the potential to be a loader curmudgeon. So I really explored techniques to get image loading in the background.

I also spent time on the slideshow on this project. Slideshows tend to live somewhere in most projects I do, so over time I've been zeroing in on my perfect implementation of one. (I like to avoid plug-ins in favor of diy, except when I don't). Anyway this one turned out really well. I got it most of the way there and then ended up following a tutorial by a squarespace guy for the sweet mobile slide action.

Finally, this site is also built in a truly progressively enhanced way. Go ahead, turn off javascript, it'll still work fine! It just uses a bunch of, you know, going back and forth to the server, old school style. It's built using simple technologies, other than the html5 languages themselves, just jQuery really.

<hr class='rule'></hr>

<a href='http://alfredocaceres.com'><img src='/img/alfredocaceres.png' class='image'></a>

This was a Design and Development project, with the emphasis on design, of the promotional website for the multi-style guitarist Alfredo C${String.fromCharCode(225)}ceres. I used Zurb’s Foundation for the structure, and the main emphasis here was using the wealth of strong media Alfredo has made to create a story flow that reflects his amazing talent. Alfredo plays often in various groups around LA and if you’re there you should definitely go check him out.`,
			linkOut: ''
		}
	},
	//learning
	{
		type: '',
		image: 'learning.png',
		title: 'Learning',
		copy: 'work(skills) = fresh',
		slide: {
			longCopy: `
I'm always learning, I enjoy it. I'm concentrating on Engineering now.

Here's a few select projects and exercises I did at Hack Reactor and even a few from freecodecamp. For a more in depth look at what I've been up to please check out my <a href='https://github.com/lopesa/' class="link-style" target="_blank">github</a>

#### Hack Reactor

Data Structures: <a href='https://github.com/lopesa/data-structures' class="link-style" target="_blank">github.com/lopesa/data-structures</a>

A Twitter clone: <a href='https://github.com/lopesa/chatterbox-client' class="link-style" target="_blank">github.com/lopesa/chatterbox-client</a>

A YouTube clone using React: <a href='https://github.com/lopesa/recast.ly' class="link-style" target="_blank">github.com/lopesa/recast.ly</a>

#### FCC

Pomodoro Clock: <a href="http://codepen.io/lopesa/pen/aNNzrR" class="link-style" target="_blank">http://codepen.io/lopesa/pen/aNNzrR</a>

Markdown Translator: <a href="http://codepen.io/lopesa/pen/BKxroB" class="link-style" target="_blank">http://codepen.io/lopesa/pen/BKxroB</a>

"Random" quote generator (pretty funny code comments): <a href="http://codepen.io/lopesa/pen/qbeKOY" class="link-style" target="_blank">http://codepen.io/lopesa/pen/qbeKOY</a>`,
			linkOut: ''
		}
	},
	// photography
	{
		type: '',
		image: 'photography_sm.jpg',
		title: 'Photography',
		copy: 'Perspective',
		slide: {
			image: '',
			longCopy: `
<img src='/img/photography.png' class='image'/>

I've been taking photos most of my life, so it's one of the mediums I've been with the longest and I love it because it's so accessible. And yet deceptively so. While it's fairly easy to get a good photo, it can be very challenging to get something that goes beyond that. (It can be magically simple too, but that's a different story.)

At the moment I find myself taking shots of travel, nature, food, things at macro level and sometimes when I'm really feeling transcendent, abstract shots and textural things.

I have many of my last 5 years of photos up on flickr. I hope you'll <a href="https://www.flickr.com/photos/57613898@N08/" class="link-style" target="_blank">have a look!</a>`,
			linkOut: 'https://www.flickr.com/photos/57613898@N08/'
		}
	},
	// motion
	{
		type: '',
		image: 'studiospotlight_sm.jpg',
		title: 'Motion',
		copy: 'Emotion',
		slide: {
// 		longCopy: `<object class="facebookFlash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="520" height="540" id="facebook_top5_MAY_F_WITHLOADER" align="middle">
// <param name="allowScriptAccess" value="sameDomain" />
// <param name="allowFullScreen" value="false" />
// <param name="movie" value="facebook_top5_MAY_F_WITHLOADER.swf" /><param name="quality" value="high" /><param name="bgcolor" value="#ffffff" />	<embed src="../img/facebook_top5_MAY_F_WITHLOADER.swf" quality="high" bgcolor="#ffffff" width="520" height="540" name="facebook_top5_MAY_F_WITHLOADER" align="middle" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer" />
// </object>

// <p class="facebookFlash">This is a collaboration with another Graphic Artist, I did the animations. These lived on facebook and were meant to highlight some fun stuff happening each month at Old Navy. It was kind of a random project that didn't last too long but it was really fun to do. I got to put all my studies of the particle generator in After Effects to use to make the BBQ smoke and explode.</p>
			longCopy: `

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/GXYYGAYln-w" frameborder="0" allowfullscreen></iframe> -->

<div id="playerIntroOutro"></div>

The intro and outros for Old Navy Studio Spotlight videos.

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/K4rPWKc46oM" frameborder="0" allowfullscreen></iframe> -->

<div id="playerClothingAnim"></div>

More Studio Spotlight animation. Clothing stop-motion.`,
			// longCopy: `<p>some p</p>`,
			linkOut: null
		}
	},
	{
		type: '',
		image: 'virgin_sm.jpg',
		title: 'Enterprise Dev',
		copy: 'Team Work',
		slide: {
			image: 'virgin.png',
			longCopy: `Enterprise web work. I worked for two years at Virgin America as the marketing department web developer. First I built emails and intergrated them into Oracle's Responsys system. Then I supported campaigns with landing pages and I produced the weekly 'fare' sale. The bottom line with all of it being, of course, to take care of the awesome brand that is Virgin America.

The real project of my work with Virgin was helping move them from their v2.0 website to their v3.0. I led the content port both to the newly designed look, as well as into a newly implemented cms. We moved from posting files on an ftp server, to a cms that fed data into an Angular front end.`,
			linkOut: 'https://virginamerica.com'
		}
	},
	{
		type: '',
		image: 'on-photography_sm.jpg',
		title: 'Enterprise Visual',
		copy: 'Look!s',
		slide: {
			image: '',
			longCopy: `
<img src="/img/on-photography.jpg" class='image' />

I worked at Old Navy for quite a few years. I started as a graphic designer and was doing  some drawing too for them. Then we moved the communication to photography and I had the opportunity to really practice photography, mostly in the product photography context, for years. And of course my personal photography grew during this time too. There was time for it even to grow into some motion and video work, which I have on another panel.

Of course it wasn't limited to only the capturing of the photos but to the whole workflows to get images generated efficiently. There was even a funny quirk in the architecture of our mock store space that had me photoshopping walls

<hr class='rule'></hr>

These videos are for social media and were for supporting an Old Navy initiative called Studio Spotlight that was an internal designer's personal line produced for select stores by ON. So we made videos to introduce the designers. These are a couple of my favorites, we made four total.

<div id="playerSSSarah"></div>

<p></p>

<div id="playerSSKim"></div>`,
			linkOut: null
		}
	},

]

module.exports = WorkItems;