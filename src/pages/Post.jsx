import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            appwriteService.deletePost(post.$id).then((status) => {
                if (status) {
                    appwriteService.deleteFile(post.featuredImage);
                    navigate("/");
                }
            });
        }
    };

    return post ? (
        <div className="py-10 bg-gray-50 min-h-screen">
            <Container>
                <article className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-10 space-y-8">

                    <div className="relative w-full overflow-hidden rounded-xl bg-gray-100 max-h-112.5 flex items-center justify-center">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />


                        {isAuthor && (
                            <div className="absolute top-4 right-4 flex gap-2 bg-black/40 backdrop-blur-md p-2 rounded-lg shadow-lg">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-emerald-600 hover:bg-emerald-700 transition-colors" className="text-sm font-semibold">
                                        Edit
                                    </Button>
                                </Link>
                                <Button
                                    bgColor="bg-rose-600 hover:bg-rose-700 transition-colors"
                                    onClick={deletePost}
                                    className="text-sm font-semibold"
                                >
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>


                    <header className="border-b border-gray-100 pb-6">
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                            {post.title}
                        </h1>
                    </header>


                    <section className="browser-css prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                        {parse(post.content)}
                    </section>

                </article>
            </Container>
        </div>
    ) : null;
}






