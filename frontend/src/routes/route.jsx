import { BrowserRouter as Router, useMatch, useRoutes, useParams } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CreateNotePage from '../pages/CreateNotePage';
import UpdateNotePage from '../pages/UpdateNotePage';
import { useState, useEffect } from 'react';
import noteServices from '../services/noteServices';

function Routes() {

  const Path = () => {
    let routes = useRoutes([
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/create',
        element: <CreateNotePage />,
      },
      {
        path: '/update/:id',
        element: <UpdateNotePage  />,
      },
    ]);
    return routes;
  };

  return (
    <Router>
      <Path />
    </Router>
  );
}

export default Routes;
