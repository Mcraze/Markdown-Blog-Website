'use client';

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const POSTS_PER_PAGE = 6;

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
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search blogs..."
                    value={search}
                    onChange={e => {
                        setSearch(e.target.value);
                        setCurrentPage(1);
                    }}
                    className="w-full sm:w-1/2 border rounded-lg px-4 py-2"
                />
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {paginatedPosts.map(post => (
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
                                    <ArrowUpRight className="shrink-0 group-hover:scale-120 group-hover:text-amber-500 transition-transform" />
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
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-10 gap-2">
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-amber-500 text-white" : ""
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            )}
        </>
    );
}
