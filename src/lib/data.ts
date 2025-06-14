// src/lib/data.ts

export const projects = [
    {
        slug: 'weather-app',
        title: 'Weather App',
        description: 'Real-time Weather Forecast allows users to get real-time weather data by entering any location in the world.',
        imageUrl: '/projects/weather-color.png',
        technologies: ['Vanilla CSS', 'Vanilla JS', 'HTML5'],
        liveUrl: 'https://weatherapp.balkancode.ro',
        githubUrl: 'https://github.com/paulcureu/WeatherApp',
    },
    {
        slug: 'digital-library',
        title: 'Digital Library',
        description: 'A full-stack project for managing a library',
        imageUrl: '/projects/library-color.png',
        technologies: ['Node.js', 'Express', 'PostgreSQL', 'React'],
        liveUrl: 'https://library.balkancode.ro',
        githubUrl: 'https://github.com/paulcureu/Library',
    },
    {
        slug: 'site-bonjour',
        title: 'Restaurant Website',
        description: 'A full-stack web project for Restaurants businesses (Back-end done, Front-end in progress)',
        imageUrl: '/projects/site-web.png',
        technologies: ['Express', 'PostgreSQL', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Docker', 'Redis'],
        liveUrl: '',
        githubUrl: 'https://github.com/paulcureu/Site-Bonjour',
    },
];