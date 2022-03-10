import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { PATH } from './app.routes.const.js';
import { Error, Movie, ListMovies, User } from './pages';
import { Container } from './layout';
import InitialPage from './pages/Initial/InitialPage.jsx';
import { Search, SearchBar } from './pages/Search/Search.jsx';

const _routes = ({ isLogged, user }) => {
  //   const GuardedRoute = ({ component: Component, access, ...rest }) => {
  //     return (
  //       <Route
  //         {...rest}
  //         render={props =>
  //           isLogged === true ? (
  //             !access || (user && user.access & access) ? (
  //               <Component {...props} />
  //             ) : (
  //               // Unathrorized
  //               <Error />
  //             )
  //           ) : (
  //             <Redirect to={`${PATH.AUTHENTICATION.LOGIN}?returnUrl=${rest.location.pathname}`} />
  //           )
  //         }
  //       />
  //     );
  //   };
  return (
    <Switch>
      <Route exact path={'/test'} component={Container(<Search />)} />
      <Route exact path={'/'} component={Container(<InitialPage />)} />
      <Route exact path={PATH.ERROR} component={Container(<Error />)} />
      <Route exact path={PATH.MOVIE.LIST} component={Container(<ListMovies />)} />
      <Route exact path={PATH.MOVIE.EDIT} component={Container(<Movie />)} />
      <Route exact path={PATH.USER.EDIT} component={Container(<User isProfile={true} />)} />
      <Route exact path={PATH.USER.VIEW} component={Container(<User isProfile={false} />)} />

      <Route path={'/'} component={Container(<InitialPage />)}>
        <Route path={'*'} component={Container(<Error type={'notFound'} />)} />
      </Route>
    </Switch>
  );
};

export const Routes = React.memo(_routes);

_routes.propTypes = {
  isLogged: PropTypes.bool,
  user: PropTypes.object
};
