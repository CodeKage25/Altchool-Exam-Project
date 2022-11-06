// import React, { useState, useEffect } from "react";
// import User from "../pages/User";
// import Pagination from "../pages/Pagination";





// const Fetch = () => {

//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage] = useState(10);
  
//   let getData = function() {
//     fetch(`https://api.github.com/users/codekage25/repos`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(
//             `This is an HTTP error: The status is ${response.status}`
//           );
//         }
//         return response.json();
//       })
//       .then((actualData) => {
//         setData(actualData);
//         setError(null);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setData(null);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }

//   useEffect(() => {
//     getData()
//   }, []);
    
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//     const currentPosts = data?.slice(indexOfFirstPost, indexOfLastPost);
    

//   const paginate = pageNumber => setCurrentPage(pageNumber);
    

//     return (
      
//       <div className="main">
       
//       <h1>GIT Repo</h1>
//       {loading && <div>A moment please...</div>}
//       {error && (
//                 <div>{`There is a problem fetching the post data - ${error}`}</div>
                
//             )}
//         <User data={currentPosts} />
//         {/* <Users data={data} /> */}
//             <Pagination
//         postsPerPage={postsPerPage}
//         totalPosts={data?.length}
//         paginate={paginate}
//       />
          
//     </div>
//   );
// }

// export default Fetch;


