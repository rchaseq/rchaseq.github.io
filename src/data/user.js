const INFO = {
	main: {
		title: "Rowan's Portfolio",
		name: "Rowan Q",
		email: "rchasequinn@gmail.com",
		logo: "logo.png",
	},

	socials: {
		linkedin: "https://www.linkedin.com/in/rchaseq/",
		github: "https://github.com/rchaseq/",
		stackoverflow: "https://stackoverflow.com/users/5339956/r-chase",
	},

	homepage: {
		title: "Full-stack web developer and aspiring software engineer",
		description:
			"I am a full-stack JavaScript developer (MERN) and software engineer with expertise in ReactJS. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills! I am always looking for new challenges and opportunities to grow as an engineer.",
	},

	about: {
		title: "Hi! I'm Rowan.",
		description: [
			"I am an aspiring web/software developer and lifelong resident of New York's Hudson Valley.",
			"I have always loved computers, and as a kid I used to play with the MS-DOS command line on an old, internet-incapable IBM PC that was given to my family in the late 90s.",
			"Growing up, money was tight — so we were late joining the home computer party, but we got there! I began my journey in earnest by teaching myself how to code about 10 years ago.",
			"I was encouraged by a great long-time friend, a Senior Software Architect, who convinced me of my own potential. I learned just enough C# to be dangerous but wanted to formally learn another object-oriented language I could apply to diverse projects.",
			"JavaScript, with its rich ecosystem and libraries, became my choice. I wanted formal feedback to grow, so in 2022 I enrolled in and successfully completed the full-stack JavaScript (MERN) development program from MIT xPro.",
			"When I am not coding, I enjoy playing video games, roasting coffee, brewing beer, creating unique wines, and sharing all of these with family and friends.",
			"Hobbies aside, I am married to my best friend Nicki, and together we spoil our two beloved cats immensely. :)"
		],
	},

	projects: [

		{
			title: "PurrfectScore",
			description:
				"PurrfectScore is a full-stack AI-powered web app that lets users upload cat photos to be rated for cuteness by a custom-trained TensorFlow model, enhanced with GPT-4-generated fun commentary. Built with ReactJS and Firebase, it features user authentication, image uploads, AI-powered scoring, leaderboard rankings, and playful social sharing. The backend, branded 'PURR-C,' integrates a cat detection classifier (built with TensorFlow's MobileNetV2) and a cat rating regression model, deployed through a FastAPI service on Render.",
			logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
			linkText: "View Project",
			link: "https://purrfectscore.app/",
		},

		{
			title: "Turky",
			description:
				"A complete mobile-first progressive web app (PWA) that can be installed on a non-Apple device as a standalone app. Turky is a potluck app that allows isolated groups of users to assign dishes to themselves to bring to a potluck and see what everyone else is bringing as well. Vanilla JavaScript frontend and Firebase hosting and backend that handles authentication, cloud functions, and the database itself. SendGrid is integrated as the email server.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://turky.app/",
		},

		{
			title: "Stogy",
			description:
				"A complete progressive web app (PWA) that can be installed on a non-Apple device as a standalone app. Stogy is an app for cigar enthusiasts as an alternative to Cigar Scanner, mainly to keep inventory of a user's cigar humidor. There are many features, including rating, a journal section, and a built-in calendar reminder to alert a user when a cigar has rested a preset amount of time. Vanilla JavaScript frontend and Firebase hosting and backend that handles authentication, storage of user items, and realtime database.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://stogy.app/",
		},

		{
			title: "Mouse Runner",
			description:
				"An endless runner game that I created with Phaser 3. It utilizes object pooling to generate platforms on the fly.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "http://rchaseq.github.io/mouse-runner/",
		},

		{
			title: "Potato Clicker",
			description:
				"A clicker game engine that I created with vanilla JavaScript. I also utilized JS Cookie and Swarm Number Format.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "http://rchaseq.github.io/potato-clicker/",
		},

		{
			title: "Bus Route Tracker",
			description:
				"This is a bus tracker that tracks my local UCAT bus line. I created it with GeoJSON and Mapbox Studio. It demonstrates manipulation of the CSS grid.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: "http://rchaseq.github.io/bus-tracker/",
		},


	],
};

export default INFO;
