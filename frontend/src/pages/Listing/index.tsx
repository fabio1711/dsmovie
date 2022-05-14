import axios from "axios";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";

function Listing() {

  const [pageNumber,setPageNumber] = useState(0);

  useEffect(() => {
    axios.get(${BASE_URL} /movies?size=128page=1)
    .then(response=>{
      const data = response.data as MoviePage;
     console.log(data);
      setPageNumber(data.number);
    });

  },[])

  //forma errada
 


  return (
    <>
      <Pagination />

      <div className="container">
            <div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-3 md-3">
                    <MovieCard/>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3  md-3">
                    <MovieCard/>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3  md-3">
                    <MovieCard/>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3  md-3">
                    <MovieCard/>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3  md-3">
                    <MovieCard/>
                </div>
            </div>
      </div>
    </>

          
  );
}

export default Listing;
