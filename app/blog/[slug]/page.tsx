import getPostMetaData from "@/components/getPostMetaData";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, 'utf-8');
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPostMetaData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <div>
            <div className="my-6">
                <h1 className="font-bold text-3xl text-slate-700">{post.data.title}</h1>
            </div>
            <article className="prose lg:prose-x1 max-w-4xl">
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    );
};

export default PostPage;