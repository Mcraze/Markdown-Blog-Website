import Section from "@/app/components/Section";
import { getAllPosts, getPostData } from "../../lib/posts";

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params; // ✅ await here
    const post = await getPostData(slug);

    return (
        <>
            <Section>
                <article>
                    <h1>{post.title}</h1>
                    <p className="text-sm text-gray-500">{post.date}</p>
                    <section dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
                </article>
            </Section>
        </>
    );
}
