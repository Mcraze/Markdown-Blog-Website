'use client';

import Section from "./Section";
import Image from "next/image";
import DefaultImage from "@/public/default-image.webp";
import Link from "next/link";
import { useState, useMemo } from "react";
import { ArrowUpRight, Search } from "lucide-react";

const POSTS_PER_PAGE = 3;

export default function BlogList({ posts }: { posts: any[] }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");

    const filteredPosts = useMemo(() => {
        const q = search.toLowerCase();
        return posts.filter(p => p.title.toLowerCase().includes(q));
    }, [posts, search]);

    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    );

    return (
        <>
            <div className="bg-sky-100 dark:bg-neutral-800 px-4 py-20 flex flex-col justify-center items-center gap-8">
                <h1 className="text-5xl sm:text-7xl md:text-8xl text-center">Frontend Development</h1>

                <div className="max-w-lg w-full relative">
                    <input
                        type="text"
                        placeholder="Search blogs..."
                        value={search}
                        onChange={e => {
                            setSearch(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="w-full bg-neutral-100 dark:bg-zinc-800 p-4 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-blue-500"
                    />
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2" />
                </div>
            </div>
            <Section>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
                    {paginatedPosts.length !== 0 ? paginatedPosts.map(post => (
                        <Link key={post.slug} href={`/blog/${post.slug}`}>
                            <article className="overflow-clip group">
                                <div className="overflow-hidden border rounded-lg max-h-60 min-h-60">
                                    {
                                        post.image
                                            ? <Image src={post.image} alt={post.title} width={400} height={240} placeholder="blur" blurDataURL="/default-image-blurred.webp" loading="lazy" className="h-60 object-cover w-full group-hover:scale-105 transition-transform" />
                                            : <Image src={DefaultImage} alt="Default Image" placeholder="blur" loading="lazy" width={400} height={240} className="h-60 object-cover w-full group-hover:scale-105 transition-transform" />
                                    }
                                </div>
                                <div className="py-4 grid gap-2">
                                    <div>{post.author} | {post.date}</div>
                                    <div className="flex gap-4">
                                        <h2 className="text-xl sm:line-clamp-2">{post.title}</h2>
                                        <ArrowUpRight className="shrink-0 group-hover:scale-120 group-hover:text-blue-600 transition-transform" />
                                    </div>
                                    <p className="text-neutral-500 dark:text-neutral-400 line-clamp-3">
                                        {post.description}
                                    </p>
                                    <div className="flex gap-2">
                                        {post.categories?.map((cat: string) => (
                                            <span key={cat} className="inline-block px-2 py-1 rounded-2xl border border-neutral-500 text-xs">
                                                {cat}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        </Link>
                    )) : <div className="min-h-[475px] text-center col-span-3 text-red-600">No Blogs Available for your search.</div>}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center mt-10 gap-2">
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`cursor-pointer px-4 py-2 rounded-lg ${currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-neutral-200 dark:bg-neutral-700"
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                )}
            </Section>
        </>
    );
}
