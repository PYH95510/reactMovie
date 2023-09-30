import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams();
  const [screen, setScreen] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setScreen(json.data.movie);
    setLoading(false);
  };
  
  


  useEffect(() => {
    getMovie();
    
  }, []);

  return (<div>
  {loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
        <Movie
          key={screen.id}
          id={screen.id}
          coverImg={screen.medium_cover_image}
          title={screen.title}
          summary={screen.summary}
          genres={screen.genres}
        />
      
    </div>
  )}
</div>);
}

export default Detail;