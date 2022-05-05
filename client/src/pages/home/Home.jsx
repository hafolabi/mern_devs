import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import { axiosInstance } from "../../config";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get("/posts" + search);
      setPosts(res.data.sort((p1,p2)=>{
        return new Date (p2.createdAt) - new Date (p1.createdAt)
      }))
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        {posts.length === 0 ? (
          <span className="oops"> Oops!!!</span>
        ) : (
          <Posts posts={posts} />
        )}
        <Sidebar />
      </div>
    </>
  );
}
