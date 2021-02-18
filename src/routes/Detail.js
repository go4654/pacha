import React, { Component } from "react";
import "../scss/main.scss";

class Detail extends Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    const { genres } = location.state;
    console.log(genres);
    if (location.state) {
      return (
        <section className="detail_section">
          <div className="container">
            <div
              className="detail_bg"
              style={{
                backgroundImage: `url(${location.state.detailBg})`,
              }}
            ></div>
            <div className="content_wrap">
              <h3>{location.state.title}</h3>
              <ul>
                <div className="small_title">장르</div>
                {genres.map((genre, index) => (
                  <li key={index}>{genre}</li>
                ))}
              </ul>
              <h3 className="year">
                <div className="small_title">개봉연도</div>
                {location.state.year}
              </h3>
              <p>
                <div className="small_title">줄거리</div>
                {location.state.summary}
              </p>
            </div>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
