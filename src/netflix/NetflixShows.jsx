import React from "react";
import { Link } from "react-router-dom";

export const NetflixShows = () => {
  const shows = [
    {
      id: 103,
      name: "Breaking Bad",
      description: "A high school chemistry teacher turned meth dealer",
    },
    {
      id: 104,
      name: "The Crown",
      description:
        "The Crown traces the life of Queen Elizabeth II from her wedding in 1947 through to the early 21st century.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#2a86d2", height: "600px", width: "100%" }}>
      <h1 style={{ textAlign: "center" }}>NETFLIX SHOWS</h1>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          textAlign: "center",
          margin: "10px",
          padding: "10px",
        }}
      >
        <div
          style={{ backgroundColor: "red", height: "200px", width: "200px" }}
        >
          <h1>Stranger Things</h1>
          <Link style={{ color: "black" }} to="/netflixshows/playshow/101">
            Stranger Things
          </Link>
        </div>
        <div
          style={{
            backgroundColor: "red",
            height: "200px",
            width: "200px",
            marginLeft: "10px",
          }}
        >
          <h1>Money Heist</h1>
          <Link style={{ color: "black" }} to="playshow/102">
            Money Heist
          </Link>
        </div>
      </div>

      <div
        style={{
          justifyContent: "center",
          display: "flex",
          textAlign: "center",
          margin: "10px",
          padding: "10px",
        }}
      >
        {shows.map((show) => {
          return (
            <div
              style={{
                backgroundColor: "red",
                height: "200px",
                width: "200px",
                marginLeft: "10px",
              }}
            >
              <h1>{show.name}</h1>
              <Link style={{ color: "black" }} to={`playshow/${show.id}`}>
                {show.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
