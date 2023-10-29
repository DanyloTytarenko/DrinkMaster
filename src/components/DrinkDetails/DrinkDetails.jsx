import { useEffect, useState } from 'react';
import {
  Container,
  Title,
  Glass,
  Description,
  Button,
} from './DrinkDetails.styled';
import data from './recipes';

// import { useState, useEffect, useRef, Suspense } from 'react';
// import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
// import { detailsMovies } from '../Api/JsonthemoviedbApi';
// import Button from '../button/Button';
// import ErrorWrapper from 'pages/Error/ErrorWrapper';
// import css from './MovieDetails.module.css';
// import Loader from 'components/Loader/Loader';

const DrinkDetails = () => {
  // const { id } = useParams();
  // const [movies, setMovies] = useState([]);
  // const [genres, setGenres] = useState([]);
  // const [isError, setIsError] = useState(false);
  // const location = useLocation();
  // const backLinkHref = useRef(location.state?.from ?? '/');

  const [favorite, setfavorite] = useState(true);
  // const favorite = true;

  // ***redax
  // const dispatch = useDispatch();
  // const handleAddToFavorite = (id) => dispatch(AddFavorite(id));
  // const handleRemoveToFavorite = (id) => dispatch(RemoveFavorite(id));

  useEffect(() => {
    function handleAddToFavorite() {
      setfavorite(false);
    }

    function handleRemoveToFavorite() {
      setfavorite(true);
    }
  }, [favorite]);
  // useEffect(() => {
  //   async function getMove() {
  //     try {
  //       const data = await detailsMovies(id);
  //       const movies = data;
  //       setMovies(movies);
  //       const genres = movies.genres;
  //       setGenres(genres);
  //     } catch (error) {
  //       setIsError(true);
  //       console.error(error);
  //     } finally {
  //     }
  //   }
  //   getMove();
  // }, [id]);

  const { drink, glass, alcoholic, description } = data;
  return (
    <Container>
      <Title>{drink}</Title>
      <Glass>
        {glass} / {alcoholic}
      </Glass>
      <Description>{description}</Description>
      {favorite ? (
        <Button type="button" onClick={() => handleAddToFavorite(id)}>
          Add to favorite drinks
        </Button>
      ) : (
        <Button type="button" onClick={() => handleRemoveToFavorite(id)}>
          Remove from favorites
        </Button>
      )}
      <div>
        {/* <img src={drinkThumb} alt="" height={400} /> */}
        <img
          src="https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg"
          alt=""
          height={400}
        />
      </div>
    </Container>
    // <main>
    //   <Button to={backLinkHref.current} />
    //   <ErrorWrapper isError={isError}>
    //     <div className={css.details}>
    //       <img
    //         src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
    //         alt=""
    //         height={360}
    //       />
    //       <div>
    //         <h2>{title}</h2>
    //         <p>{`User Score: ${vote_average}`}</p>
    //         <h4>Overview</h4>
    //         <p>{overview}</p>
    //         <h3>Genres</h3>
    //         {genres.map(({ id, name }) => (
    //           <span key={id}>{name}, </span>
    //         ))}
    //       </div>
    //     </div>
    //     <div className={css.addInform}>
    //       <h5>Additional information</h5>
    //       <ul>
    //         <li>
    //           <Link to="cast">Cast</Link>
    //         </li>
    //         <li>
    //           <Link to="reviews">Reviews</Link>
    //         </li>
    //       </ul>
    //     </div>
    //     <Suspense
    //       fallback={
    //         <div>
    //           <Loader />
    //         </div>
    //       }
    //     >
    //       <Outlet />
    //     </Suspense>
    //   </ErrorWrapper>
    // </main>
  );
};

export default DrinkDetails;
