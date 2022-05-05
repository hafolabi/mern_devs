import { useState } from "react";
import Post from "../post/Post";
import "./posts.css";
import ReactPaginate from 'react-paginate'

export default function Posts({ posts }) {

  const paginate = posts.slice(0, 100)
  const [pageNumber, setPageNumber] = useState(0)
  const postPerPage = 8
  const pageVisited = pageNumber * postPerPage
  const displayPosts = paginate.slice(pageVisited, pageVisited + postPerPage).map((p)=>(
    <Post key={p._id} post={p} />))
  
  const pageCount = Math.ceil(paginate.length / postPerPage)

  const changePage = ({selected})=>{
      setPageNumber(selected)
    }


  return (
    <div className="posts">
       {displayPosts}
        <ReactPaginate
          previousLabel= {"Previous"}
          nextLabel={"next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'paginationBttns'}
          previousLinkClassName ={'previousBttn'}
          nextLinkClassName = {'nextBttn'}
          disabledClassName = {'paginationDisabled'}
          activeClassName = {'paginationActive'}
        />

      {/* {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))} */}
    </div>
  );
}
