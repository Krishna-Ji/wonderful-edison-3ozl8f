import React from 'react'
import MovieCard from '../components/MovieCard';
import styles from '../styles/common.module.css'

const Movie = async () => {

  const url = process.env.RAPID_KEY;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd64300a753mshdb566deae6ab5e5p112c1ajsn310a55e5027f',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  console.log(data)


  return (
    <>
    <section className={styles.movieSection}>
      <div className = {styles.container}>
        <h1>Series & Movie</h1>
        <div className={styles.card_section}>
        {
          main_data.map((curElem) => {
            return <MovieCard key={curElem.id} {...curElem} />
          })
        }
        </div>
      </div>
    </section>
    </>
  )
}

export default Movie