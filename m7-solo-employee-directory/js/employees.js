const employees = [
  {
    name: "Jeremy Durant",
    title: "CEO",
    team: "leadership",
    bio: "<p>Jeremy developed an interest in computers at an early age. He graduated with a computer science and electrical engineering degree.</p> <p>He was an early founder of successful companies like BlueSpace, Eazybit, and Drifly.</p>",
    image: "jeremy.jpg",
    social: {
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Abdulkareem Jalal",
    title: "CTO",
    team: "leadership",
    bio: "<p>Abdulkareem got a PhD in Computer Science from Stanford. He loves coding.</p> <p>When he’s not coding he spends time in his cabin with his wife and two daughters.</p>",
    image: "abdulkareem.jpg",
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Susan Wójcik",
    title: "CPO",
    team: "leadership",
    bio: "<p>Susan spent her school years running a web hosting business from her room in Seattle, Washington.</p> <p>Susan loves to read, hike, cook and bird watching. Not necessarily in that order.</p>",
    image: "susan.jpg",
    social: {
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "Juanita Gonzalez",
    title: "COO",
    team: "leadership",
    bio: "<p>Juanita grew up in Mexico. She later moved to Canada to get her bachelors at McGill and masters in Business Administration at the University of Toronto.</p> <p>Juanita loves her two cats.</p>",
    image: "juanita.jpg",
    social: {
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Carmen Zhao",
    title: "CFO",
    team: "leadership",
    bio: "<p>Carmen did a double major in Math and Finance at Harvard.</p> <p>She lives in Boston with her husband Cliff and two kids.</p> <p>Fun fact about Carmen: She can juggle with 5 balls!</p>",
    image: "carmen.jpg",
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Howard Paul",
    title: "Chairman",
    team: "leadership",
    bio: "<p>Howard is an investor in several companies. He serves as chairman.</p> <p>Howard is a big fan of movies. His favorite director is Martin Scorsese and his favorite movie is Goodfellas.</p>",
    image: "howard.jpg",
    social: {
      linkedin: "https://www.linkedin.com/",
    },
  },

  {
    name: "Michael Stromburger",
    title: "Sales Director",
    team: "sales",
    bio: "<p>Michael is has been working in sales for the last 25 years.</p> <p>He’s sold insurance, cars, software and much more.</p> <p>He loves to meet new customers.</p>",
    image: "michael.jpg",
    social: {
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Alexa Bobek",
    title: "Account Executive",
    team: "sales",
    bio: "<p>Alexa has lived in 7 countries.</p> <p>She loves to work with customers and improve their life using our product.</p> <p>Alexa lives with her wife and daughter.</p>",
    image: "alexa.jpg",
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Remi Peterson",
    title: "Account Executive",
    team: "sales",
    bio: "<p>Remi finished his bachelors in Physics from the University of Oslo.</p> <p>In a strange turn of events Remi changed his field from Physics to Sales. A choice he doesn’t regret... so far.</p>",
    image: "remi.jpg",
    social: {
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Jansen Diaz",
    title: "SDR",
    team: "sales",
    bio: "<p>Jansen is from Argentina and he loves Football.</p> <p>His favorite player is Lionel Messi.</p> <p>Jansen likes to read fiction in his free time.</p>",
    image: "jansen.jpg",
    social: {
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "Maria Santos",
    title: "Customer Success",
    team: "customer service",
    bio: "<p>Maria loves to support her customers. She loves to make herself coffee in the morning and start running through support tickets.</p> <p>In her free time, Maria likes to hang out with her friends and do karaoke.</p>",
    image: "maria.jpg",
    social: {
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Muhammad Adel",
    title: "Customer Success",
    team: "customer service",
    bio: "<p>Muhammad Adel has worked in customer service for the last 30 years.</p> <p>It was his first job after high school and he’s still working in customer service all these later!</p>",
    image: "muhammad.jpg",
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Alexander Smith",
    title: "Customer Success",
    team: "customer service",
    bio: "<p>Alexander finished his bachelors from the University of Pennsylvania in Economics.</p> <p>Alexander loves skateboarding and snowboarding.</p>",
    image: "alexander.jpg",
    social: {
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Naomi Harris",
    title: "Software Engineer",
    team: "product",
    bio: "<p>Naomi has been working in tech for the last 35 years. Jeremy’s interest in computers started when his mom brought home a Commodore 64.</p> <p>Jeremy has a bachelor and masters from University of Wisconsin-Madison.</p>",
    image: "naomi.jpg",
    social: {
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Paulo Dinsen",
    title: "Software Engineer",
    team: "product",
    bio: "<p>Paulo got a PhD in Computer Science from UCF. He loves coding.</p> <p>When he’s not coding he spends time in his cabin with his dog and two cats.</p>",
    image: "paulo.jpg",
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Adam Tesfaye",
    title: "Software Engineer",
    team: "product",
    bio: "<p>Adam spent their school years running a freelance coding business from their apartment in Atlanta, Georgia.</p> <p>Adam loves to cook, play soccer, and watch movies. Not necessarily in that order.</p>",
    image: "adam.jpg",
    social: {
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "Liu Zhang",
    title: "Software Engineer",
    team: "product",
    bio: "<p>Liu grew up in New York. She later moved to Miami to get her bachelors at FIU and masters in Business Administration at the University of Miami.</p> <p>Liu loves her two pugs.</p>",
    image: "liu.jpg",
    social: {
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "Jessica Albertson",
    title: "Designer",
    team: "product",
    bio: "<p>Jessica did a double major in Art and Industrial Design at Carnegie Mellon University.</p> <p>She currently lives in Philadelphia  with her husband Sej and two kids.</p>",
    image: "jessica.jpg",
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Caroline Salamanca",
    title: "Designer",
    team: "product",
    bio: "<p>Caroline is one of the creative forces behind several tech companies.</p> <p>She is a big fan of watching movies, surfing, and visiting art museums.</p>",
    image: "caroline.jpg",
    social: {
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Solveig Rønning",
    title: "Graphic Designer",
    team: "product",
    bio: "<p>Solveig was a former chef and discovered a love for graphic design after creating logos and menu designs for her colleagues.</p> <p>She lives in Sweden and enjoys looking for adventures in the mountains.</p>",
    image: "solveig.jpg",
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Anders Wiig",
    title: "UX Designer",
    team: "product",
    bio: "<p>Anders is a designer and writer, with a passion for technology and design.</p> <p>He enjoys water sports, exploring new foods, and is currently living in Spain to  become fluent in Spanish.</p>",
    image: "anders.jpg",
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "James McGill",
    title: "Video Producer",
    team: "product",
    bio: "<p>James grew up in New York City and started his career directing music videos for local bands.</p> <p>He currently lives in Los Angeles, CA. with his wife and 4 children.</p>",
    image: "james.jpg",
    social: {
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "Lydia White",
    title: "Marketing",
    team: "product",
    bio: '<p>Lydia is a world traveler, photographer and runs the popular blog "Hey, Lydia!".</p> <p>Fun fact: Her favorite marketing campaign for the company is "Rocket Turtle".</p>',
    image: "lydia.jpg",
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
]