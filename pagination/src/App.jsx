import { useEffect, useState } from 'react'
import axios from 'axios';

import { Pagination } from './components/Pagination';
import { Posts } from './components/Posts';

import './App.css'

function App() {
  const [postsData, setPostsData] =useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage]= useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(()=>{
    const fetchData = async()=>{
      setLoading(true);
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      // const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");

      // console.log(response.data);
      // setCoinsData(res)
      setPostsData(response.data);
      setLoading(false);
      }
      

      fetchData();
  }, []);

  // console.log(postsData? postsData:"loading");

  const lastindex = currentPage * postPerPage;
  const firstIndex = lastindex - postPerPage;

  const currentPosts = postsData.slice(firstIndex, lastindex);

  return (
    <>
    <h1>Crypto Gallery</h1>
      <Posts posts= {currentPosts} loading = {loading}/>
      
     <Pagination
        totalPosts = {postsData.length}
        postPerPage ={postPerPage}
        currentPage={currentPage}
        setCurrentPage = {setCurrentPage}
     />
      
    </>
  )
}

export default App;
