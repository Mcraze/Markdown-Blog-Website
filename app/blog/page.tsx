import { getAllPosts } from "../lib/posts";
import BlogList from "../components/BlogList";
import Section from "../components/Section";

export default function BlogPage() {
    const posts = getAllPosts(); // runs only on server
    return (
        <>
            <BlogList posts={posts} />
        </>
    )
}
