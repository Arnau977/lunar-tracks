import React, { useState, useEffect } from 'react';
import { tmdb } from '../../services/tmdb/tmdb';
import { SearchItem } from './SearchItem';
import { NAME_SPACE } from './../../i18n';
import { useTranslation } from 'react-i18next';

export function SearchResults({ searchString }) {
  const { t } = useTranslation(NAME_SPACE.SEARCH);
  const [res, setRes] = useState([]);
  const [baseUrl, setBaseUrl] = useState('');
  const defaultPoster = 'http://advancescreenings.com/img/posters/d/drunk_wedding_t.jpg';

  const [page, setPage] = useState(1);

  const handlePages = direction => {
    if (direction === 'next') {
      setPage(page + 1);
    } else {
      setPage(page - 1);
    }
    window.scroll(0, 0);
  };

  useEffect(() => {
    tmdb.getImageBaseUrl().then(base => setBaseUrl(base));
  }, []);

  useEffect(() => {
    tmdb.searchMoviesByTitle(searchString, page).then(resultsApi => setRes(resultsApi));
  }, [page, searchString]);

  useEffect(() => {
    if (searchString !== undefined && searchString !== null && searchString !== '') {
      tmdb.searchMoviesByTitle(searchString).then(resultsApi => setRes(resultsApi));
    } else {
      setRes([]);
    }
    setPage(1);
  }, [searchString]);

  if (Array.isArray(res) && res.length > 0) {
    return (
      <div className="wrapper-res" style={{ display: searchString !== '' ? 'flex' : 'none' }}>
        <div className="search-results" style={{ display: res.length ? 'flex' : 'none' }}>
          {res.map(({ id, title, overview, poster_path }) => (
            <SearchItem
              key={id}
              id={id}
              title={title}
              overview={overview}
              image={poster_path == null ? defaultPoster : baseUrl + poster_path}
            />
          ))}
        </div>

        <div className="page-control">
          <button id="prev-page" style={{ display: page === 1 ? 'none' : 'flex' }} onClick={e => handlePages('prev')}>
            {t('prevPage')}
          </button>
          <span id="page">{page}</span>
          {/* TODO searchMovie return results to query AND MaxPages/MaxResults */}
          <button
            id="next-page"
            style={{ display: res.length < 20 ? 'none' : 'flex' }}
            onClick={e => handlePages('next')}
          >
            Next →
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="wrapper-res" style={{ display: searchString ? 'flex' : 'none' }}>
        No content available
      </div>
    );
  }
}
