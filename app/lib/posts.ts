import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postDirectory = path.join(process.cwd(), "app/content/posts");

export function getAllPosts() {
    const posts = fs.readdirSync(postDirectory).map((file) => {
        const slug = file.replace(".md", "");
        const { data } = matter(fs.readFileSync(path.join(postDirectory, file), "utf8"));
        return { slug, ...data } as {
            slug: string,
            title: string,
            description: string,
            date: string,
            author: string,
            image: string
        };
    });

    return posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}


export async function getPostData(slug: string) {
    const file = path.join(postDirectory, `${slug}.md`);
    const { data, content } = matter(fs.readFileSync(file, "utf8"));
    const contentHtml = String(await remark().use(html).process(content));
    return {
        contentHtml,
        ...data
    } as {
        slug: string,
        title: string,
        description: string,
        date: string,
        author: string,
        image: string,
        categories: string[],
        contentHtml: string
    };
}
