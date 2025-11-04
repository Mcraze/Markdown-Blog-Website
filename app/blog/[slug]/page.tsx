import Section from "@/app/components/Section";
import { getAllPosts, getPostData } from "../../lib/posts";
import Image from "next/image";

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
                <div className="flex lg:justify-center mt-4 gap-2">
                    {post.categories?.map((cat: string) => (
                        <span key={cat} className="inline-block px-2 py-1 rounded-2xl border text-xs">
                            {cat}
                        </span>
                    ))}
                </div>
                {post.image && <Image src={post.image} alt={post.title} width={400} height={240} className="rounded-lg my-6 md:my-10 max-w-4xl w-full mx-auto" />}
                <section className="article-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
                <p className="text-sm text-gray-500">{post.date}</p>
            </article>
        </>
    );
}
