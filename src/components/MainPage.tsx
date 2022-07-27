import AppBar from "./AppBar";
import axios from "axios";

import "./MainPage.css"

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Post {
    body: string;
    id: number;
    title: string;
}

function MainPage() {
    const params = useParams<{ id: string }>();
    const navigate = useNavigate();

    // State
    const [posts, setPosts] = useState<Post[]>([]);
    const [currentPost, setCurrentPost] = useState<Post>();


    const handleClick = (post: Post) => () => {
        navigate(`/${post.id}`);
    }

    useEffect(() => {
        // Get post from api and set state
        const getPosts = async () => {
            try {
                const postList = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setPosts(postList.data);

                if (params?.id) {
                    const currentP = postList.data.find((p: Post) => p.id === Number(params.id));
                    setCurrentPost(currentP);
                } else {
                    // Sets initial currentPost to index 0
                    setCurrentPost(postList.data[0])
                }
            } catch (error) {
                console.log(`Sorry, we couldn't get your posts.`, error)
            }
        }
        getPosts();
    }, [params.id]);

    return (
        <>
            <header className="top-app-bar">
                <div className="top-app-bar-container">
                    <AppBar />
                </div>

            </header>
            <div className="main-page-wrapper">
                <div className="main-page-container">
                    <div className="item-1">
                        {posts.length > 0 && (
                            <ul className="numbered-list">
                                {posts.map((p, i) => (
                                        <li className="numbered-list-container ripple" key={p.id} onClick={handleClick(p)}  role="button">
                                            <div className="list-number">{i + 1}</div>
                                            <div className="list-text">
                                                <span className="list-style" >{p.title}</span>
                                            </div>
                                            <span className="span-list" role="button"></span>
                                        </li>

                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="item-2">
                        <div className="item-2-container">
                                <img className="img-container" src="https://picsum.photos/200/300" height="200" alt="Paella dish" />
                            <div className="item-2-title-container">
                                <div className="title-container">
                                    <span className="span-title">{ currentPost?.title }</span>
                                </div>
                            </div>
                            <div className="item-2-body-container">
                                { currentPost?.body }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage;