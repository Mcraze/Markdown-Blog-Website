# 🧾 BlogSite - Next Js and Tailwind

### About this Project:
A modern, minimal, and fast blog website built using **Next.js 14+ (App Router)**, **TypeScript**, and **Tailwind CSS**.  
It reads Markdown files with frontmatter and generates statically rendered blog pages with responsive design and smooth UI.

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

### Author Information
🧑‍💻 Mitesh Adelkar  
Frontend Developer passionate about building clean, performant, and dynamic UIs.

Connect on [LinkedIn]("https://www.linkedin.com/in/mitesh23/")