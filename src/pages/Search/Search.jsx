import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchItem } from '.';
import { NAME_SPACE } from '../../i18n';
import { tmdb } from '../../services/tmdb';

export function Search() {
  const { t } = useTranslation(NAME_SPACE.SEARCH);
  const [baseUrl, setBaseUrl] = useState('');
  const defaultPoster = 'http://advancescreenings.com/img/posters/d/drunk_wedding_t.jpg';

  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);
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
    tmdb.searchMoviesByTitle(searchValue, page).then(resultsApi => setResults(resultsApi));
  }, [page, searchValue]);

  useEffect(() => {
    if (searchValue !== undefined && searchValue !== null && searchValue !== '') {
      tmdb.searchMoviesByTitle(searchValue).then(resultsApi => setResults(resultsApi));
    } else {
      setResults([]);
    }
    setPage(1);
  }, [searchValue]);

  function showResults() {
    if (searchValue) {
      if (results.length > 0) {
        return (
          <div className="wrapper-res">
            <div className="search-results">
              {results.map(({ id, title, overview, poster_path }) => (
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
                <button
                  id="prev-page"
                  style={{ display: page === 1 ? 'none' : 'flex' }}
                  onClick={e => handlePages('prev')}
                >
                  {t('prevPage')}
                </button>
                <span id="page">{page}</span>
                {/* TODO searchMovie return results to query AND MaxPages/MaxResults */}
                <button
                  id="next-page"
                  style={{ display: results.length < 20 ? 'none' : 'flex' }}
                  onClick={e => handlePages('next')}
                >
                  Next →
                </button>
              </div>
          </div>
        );
      } else {
        return <div className="wrapper-res">No content available</div>;
      }
    }
  }

  return (
    <div className='wrapper-search'>
      <div className="search-bar">
        <form action="#">
          <input
            type="text"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            placeholder={t('searchPlaceHolder')}
          />
        </form>
      </div>

      {showResults()}
    </div>
  );
}
