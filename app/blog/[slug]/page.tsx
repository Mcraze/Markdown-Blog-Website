import Section from "@/app/components/Section";
import { getAllPosts, getPostData } from "../../lib/posts";

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostData(slug);

    return (
        <>
            <article className="max-w-4xl p-4 mx-auto">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl lg:text-center md:leading-snug">{post.title}</h1>
                {post.image && <img src={post.image} alt={post.title} className="rounded-lg my-6 md:my-10 max-w-4xl w-full mx-auto" />}
                <p className="text-sm text-gray-500">{post.date}</p>
                <section className="article-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            </article>
        </>
    );
}
