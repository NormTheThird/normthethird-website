import Mock from "../mock";

const database = {
  information: {
    name: 'Trey Norman',
    phone: '(605) 323-8026',
    email: 'WilliamRNorman@Hotmail.com',
    address: 'Corpus Christi, Texas',
    socialLinks: {
      facebook: 'https://www.facebook.com/NormTheThird',
      twitter: 'https://twitter.com/NormanTheThird',
      linkedin: 'https://www.linkedin.com/in/normthethird/',
      github: 'https://github.com/NormTheThird'
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/resume.pdf'
  },
  services: [
    {
      title: "Desktop Development",
      icon: 'code-alt',
      details: "WPF MVVM"
    },
    {
      title: "Web Development",
      icon: 'code',
      details: "Asp.NET MVC, HTML, CSS, Javascript, Knockout"
    },
    {
      title: "Mobile Application",
      icon: 'mobile',
      details: "React Native, Cordova, Ionic"
    }
  ],
  skills: [
    {
      title: "C#",
      value: 85
    },
    {
      title: "SQL Server",
      value: 85
    },
    {
      title: "JavaScript / Knockout.js",
      value: 75
    },
    {
      title: "HTML / CSS / Bootstrap",
      value: 75
    },
    {
      title: "React / React Native",
      value: 65
    },
    {
      title: "GraphQL / MongoDB",
      value: 50
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 2,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 3,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2015 - Present",
        position: "Senior Software Developer / Remote",
        company: "EPS Software",
        details: "Lead developer with active role in technical direction, architecture, code review and site-level implementations.  Currently work a cross " +
                 "functional team on continuous business improvements and enhancements.  Created a parking management platform that was designed to help automate billing.  " + 
                 "I work full stack on this platform which is built using ASP.NET MVC in C#, Entity Framework, Knockout.JS, Bootstrap CSS, and SQL Server on Azure.  " + 
                 "The platform is completely hosted in Azure utilizing storage for images and webjobs that run asynchronously."
      },
      {
        id: 2,
        year: "2016 - 2017",
        position: "Owner and Senior Software Developer",
        company: "Flavor Mob",
        details: "Co-owned a company that performed custom web development.  I was responsible for technical direction, architecture, code reviews and full stack development " + 
                 "of websites, business web applications and API's for customers.  Completed projects using ASP.NET, MVC, Knockout.JS, Bootstrap CSS, Entity Framework and SQL Server " +
                 "on Azure. We also created custom API's for clients. Completed multiple shopify data migrations as well."
      },
      {
        id: 3,
        year: "2011 - 2016",
        position: "Team Lead and Senior Software Developer",
        company: "Premier Bankcard",
        details: "Created and maintained multiple ASP.Net MVC pages built in C# and VB.Net with a SQL Server backend. These pages were used for internal processing " + 
                 "and reporting by departments in the company.  Active leadership role in designing and developing a new collections application in WPF.  New Application " + 
                 "replaced an outdated system that was neither efficient nor effective.  Cost savings to the organization is $1M+ yearly.  Reliable integration with banks " + 
                 "and merchants was a core requirement for the business. I lead the dev team to build a robust set of APIs with C#, WCF and SQL Server.  Extensive expertise " + 
                 "in designing and developing new applications/process that reduce cost and build efficiencies."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2005 - 2009",
        graduation: "Bachelor of Science – Computer Science with a Minor in Applied Mathematics",
        university: "University of Houston - Downtown",
        details: ""
      }
    ]
  },
  contactInfo: {
    phoneNumbers: ['(605) 323-8026'],
    emailAddress: ['WilliamRNorman@Hotmail.com'],
    address: "Corpus Christi, Texas"
  }
}

Mock.onGet("/api/information").reply(config => { const response = database.information; return [200, response]; });
Mock.onGet("/api/services").reply(config => { const response = database.services; return [200, response]; });
Mock.onGet("/api/skills").reply(config => { const response = database.skills; return [200, response]; });
Mock.onGet("/api/portfolios").reply(config => { const response = database.portfolios; return [200, response]; });
Mock.onGet("/api/experience").reply(config => { const response = database.experience; return [200, response]; });
Mock.onGet("/api/contactinfo").reply(config => { const response = database.contactInfo; return [200, response]; });