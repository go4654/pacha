import React, { Component } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "../scss/main.scss";
import MainBg from "../components/MainBg";
import Loading from "../components/Loading";

class Home extends Component {
  state = {
    isLoading: true,
    movies: [],
    mainBg: "",
    mainTitle: "",
    mainSummary: "",
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json");
    this.setState({
      movies,
      isLoading: false,
      mainBg: movies[0].background_image,
      mainTitle: movies[0].title,
      mainSummary: movies[0].summary,
    });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies, mainBg, mainTitle, mainSummary } = this.state;

    return (
      <section>
        <MainBg bg={mainBg} mainTitle={mainTitle} mainSummary={mainSummary} />
        {isLoading ? (
          <Loading />
        ) : (
          <div className="con_wrap">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                genres={movie.genres}
                img={movie.medium_cover_image}
                detailBg={movie.large_cover_image}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
