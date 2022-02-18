import React from 'react'
import { MovieOverview } from '../Overview/MovieOverview'
import { NAME_SPACE } from './../../../i18n';
import { useTranslation } from 'react-i18next';

export function ListMovie({ movies = [] }) {

    const { t } = useTranslation(NAME_SPACE.MOVIE);

    const createTableFromArray = () => {
        return movies.map((movie)  => {
                return (
                    <MovieOverview key= {movie.id} movie={movie}/>
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
                    <th className="reWatchCount">{t("list.rewatch")}</th>
                </tr>
            </thead>
            {createTableFromArray()}
            {createTableFromArray()}
        </table>
    )
}
