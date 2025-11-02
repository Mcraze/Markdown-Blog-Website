import Link from "next/link";
import Section from "../components/Section"
import { getAllPosts } from "../lib/posts"

const page = () => {

    const posts = getAllPosts();

    return (
        <>
            <Section>
                <div className="flex flex-col gap-4">
                    {posts.map((post) => (
                        <Link  key={post.slug} href={`/blog/${post.slug}`}>
                            <article className="border-b pb-4">
                                <h2 className="text-xl">{post.title}</h2>
                                <p className="text-zinc-500">{post.date}</p>
                            </article>
                        </Link>
                    ))}
                </div>
            </Section>
        </>
    )
}

export default page