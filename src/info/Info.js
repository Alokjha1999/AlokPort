import DP from "../img/DP.png"
import p1 from "../img/p1.png"
import p2 from "../img/p2.png"
import p3 from "../img/p3.png"
import p4 from "../img/p4.png"
import p5 from "../img/p5.png"


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Alok",
    lastName: "Jha",
    initials: "js", 
    position: "a Front-End Developer",
    DPPortrait: DP, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        
        {
            emoji: '🌎',
            text: 'Banglore India'
        },
        {
            emoji: "💼",
            text: "Software Engineer at Tech"
        },
        {
            emoji: "📧",
            text: "jhalok305@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/alokkashyap1828",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Alokjha1999",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/ak28/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://www.youtube.com/@Thenextgenboyo",
            icon: "fa fa-youtube",
            label: 'youtube'
        }


    ],
    bio: "Hello! I'm Alok. I'm a Software engineer for Tech. I studied MCA at VIT, I'm not the most creative person in the world, but I'm always coming up with new ideas. And I'm a great problem solver, so I can help you find solutions to your problems. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        }

    ],
    portfolio: [ 
        {
            title: "Project 1",
            source: "https://github.com/Alokjha1999/Shop-Easy-App", 
            image: p1
        },
        {
            title: "Project 2",
            
            source: "https://github.com/Alokjha1999/Online_Learning_EduHub",
            image: p4
        },
        {
            title: "Project 3",
            
            source: "https://github.com/Alokjha1999/LivingLuxe",
            image: p2
        },
        {
            title: "Project 4",
        
            source: "https://github.com/Alokjha1999/Amazon-Clone-App",
            image: p5
        },
        {
            title: "Project 5",
        
            source: "https://github.com/Alokjha1999/CineStream-application",
            image: p3
        }
    ]
}