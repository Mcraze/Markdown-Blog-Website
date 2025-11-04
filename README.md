# 🧾 BlogSite - Next Js and Tailwind

### About this Project:
BlogSite is a Next.js-based website built to explore how markdown files can be transformed into fully functional blog posts. The goal behind creating this project was to understand the process of working with static content, rendering markdown dynamically, and structuring a simple yet efficient blogging system using modern frontend tools.

The website is built with TypeScript and styled using Tailwind CSS, focusing on clean design, performance, and readability. Each post is generated from markdown files containing metadata like title, author, date, and categories. This setup makes it easy to create, organize, and manage blogs without the need for a database, keeping everything lightweight and developer-friendly.

### Tech Stack used:
[![My Skills](https://skillicons.dev/icons?i=vite,next,tailwindcss)](https://skillicons.dev)

### Website Features:
- Next.js App Router with static generation  
- Markdown-based posts using `gray-matter` and `remark`  
- Optimized images with `next/image`  
- Dynamic blogs listing with pagination
- Blog search feature - compatible with pagination
- Dark / Light Theme toggle for user comfort

### Live Demo Link:
https://markdown-blog-website.vercel.app

### Setup and Installation:

#### Clone this Repository
```
git clone https://github.com/Mcraze/Markdown-Blog-Website.git
git cd Markdown-Blog-Website
```

#### Install dependencies
```
npm install
```

#### Run the development server
```
npm run dev
```

### How it Works?
- All Markdown files in `/content/posts` are parsed using `gray-matter` and `remark`.
- The parsed metadata (title, date, image, etc.) populates the blog listing page.
- Each post is statically generated using its slug at build time.

### Author: Mitesh Adelkar  
Frontend Developer with 2+ years of experience building responsive user interfaces using React JS, HTML, CSS and JavaScript. Skilled in translating Figma designs into functional layouts, optimizing performance, and writing clean, maintainable code. Experienced in team collaboration and leading frontend projects.

Let's connect on [LinkedIn](https://www.linkedin.com/in/mitesh23/)