import Link from "next/link";
import Section from "../components/Section"
import { getAllPosts } from "../lib/posts"
import Image from "next/image";
import { ArrowUpRight, User } from "lucide-react";

const page = () => {

    const posts = getAllPosts();

    return (
        <>
            <Section>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {
                        posts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`}>
                                <article className="overflow-clip group">
                                    <div className="overflow-hidden border rounded-lg max-h-60 min-h-60">
                                        {
                                            post.image && <img src={post.image} alt={post.title} width="100%" className="h-60 object-cover w-full group-hover:scale-105 transition-transform" />
                                        }
                                    </div>
                                    <div className="py-4 grid gap-2">
                                        <div>Mitesh Adelkar | {post.date}</div>
                                        <div className="flex gap-4">
                                            <h2 className="text-xl sm:line-clamp-2">{post.title}</h2>
                                            <ArrowUpRight className="shrink-0 group-hover:scale-120 group-hover:text-blue-500 transition-transform" />
                                        </div>
                                        <p className="text-zinc-500 line-clamp-3">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corporis, nemo maiores veniam quibusdam quasi laborum
                                        </p>
                                        <div>
                                            <span className="inline-block px-2 py-1 rounded-2xl border text-xs">React Js</span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))
                    }
                </div>
            </Section>
        </>
    )
}

export default page