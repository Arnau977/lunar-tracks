import React from 'react'
import { useEffect } from 'react/cjs/react.development';
import { NAME_SPACE } from '../../i18n';
import { useTranslation } from 'react-i18next';

export function MovieOverview({ movieOverview }) {

    const defaultPoster = "http://advancescreenings.com/img/posters/d/drunk_wedding_t.jpg";
    const { t } = useTranslation(NAME_SPACE.MOVIE);

    useEffect(() => {
        console.log('useEffect MovieOverview');
        //movieOverview = tmdb.searchMovieById(movieId)
    }, []);

    function handleComment() {

    };

    const createRowWithOverview = () => {
        return (
            Object.entries(movieOverview).map((field) => {
                switch (field[0]) {
                    case 'status':
                        return <td key={field[0]} className={`${field[0]} ${field[1]} tooltip`}>
                            <span className="tooltiptext">{t('list.statuses.' + field[1])}</span>
                        </td>;

                    case 'title':
                        return <td key={field[0]} className={field[0]}>
                            {t(field[1])}
                        </td>;

                    // TODO if no image is passed, no image it's displayed
                    case 'image':
                        return <td key={field[0]} className={field[0]}>
                            <img alt={movieOverview.title} src={field[1] === "" ? defaultPoster : field[1]} />
                        </td>;

                    case 'id':
                        break;

                    case 'comment':
                        return <td key={field[0]} className={field[0]}>
                            <input type='text' value={field[1] || ''} onChange={handleComment} />
                        </td>;

                    default:
                        return <td key={field[0]} className={field[0]}>
                            {field[1]}
                        </td>;
                }
            })
        )
    }

    return (
        <tbody>
            <tr className="single-movie">
                {createRowWithOverview()}
            </tr>
        </tbody>
    );
}
