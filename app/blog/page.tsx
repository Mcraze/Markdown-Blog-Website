import { getAllPosts } from "../lib/posts";
import BlogList from "../components/BlogList";
import Section from "../components/Section";

export default function BlogPage() {
    const posts = getAllPosts(); // runs only on server
    return (
        <Section>
            <h1 className="mb-6 text-5xl">All Blogs</h1>
            <BlogList posts={posts} />
        </Section>
    )
}
