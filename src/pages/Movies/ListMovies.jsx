import React, { useState } from 'react'
import { MovieOverview } from './MovieOverview'
import { NAME_SPACE } from './../../i18n';
import { useTranslation } from 'react-i18next';

export function ListMovies() {

    const [movies, setMovies] = useState([
        { id: 0, status: "completed", image: "", title: "This is a Placeholder", reWatch: "1", comment: "" },
        { id: 733, status: "planned", image: "", title: "This is a Title", reWatch: "2" },
        { id: 103, status: "watching" , image: "", title: "This is a Text",},
      ]);

    const { t } = useTranslation(NAME_SPACE.MOVIE);

    const createTableFromArray = () => {
        return movies.map((movie)  => {
                return (
                    <MovieOverview key={movie.id} movieOverview={ {...movie}}/>
                )
            })
    }

    return (
        // TODO: lower image size
        <table className="movie-list">
            <thead>
                <tr className="list-head">
                    <th className="status">{t("list.status")}</th>
                    <th className="image">{t("list.image")}</th>
                    <th className="title">{t("list.title")}</th>
                    <th className="reWatch">{t("list.rewatch")}</th>
                    <th className="comment">{t("list.comment")}</th>
                </tr>
            </thead>
            {createTableFromArray()}
        </table>
    )
}
