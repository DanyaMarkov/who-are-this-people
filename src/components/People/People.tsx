import style from './People.module.scss';
import { useGetPeopleQuery } from '@store/index';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import { IPeopleResult } from './types';
import { useEffect, useMemo, useState } from 'react';
import peopleSlice from '@store/people-slice';
import PersonItem from '@components/PersonItem/PersonItem';
import cn from 'classnames';
import { getObjectValueByPath } from './utils';
import { sortingOptions } from './variables';

const People = () => {
    const peopleLimit = useAppSelector((state) => state.app.peopleCount);
    const dispatch = useAppDispatch();

    const [currentSorting, setCurrentSorting] = useState(sortingOptions[0]);

    const { data = [], isLoading } = useGetPeopleQuery(peopleLimit);

    useEffect(() => {
        dispatch(peopleSlice.actions.setPeopleList(data?.results));
    }, [dispatch, data]);

    const sortedPeople = useMemo(() => {
        if (data?.results) {
            const peopleArray: IPeopleResult[] = [...data.results];

            return peopleArray.sort((a, b) =>
                getObjectValueByPath(currentSorting.property, a) >
                getObjectValueByPath(currentSorting.property, b)
                    ? 1
                    : -1,
            );
        }
    }, [data, currentSorting]);

    if (isLoading) return <h1>Loading..</h1>;

    return (
        <div className={style.people}>
            <div className={style.sort}>
                <span>Сортировать по</span>
                <ul className={style.list}>
                    {sortingOptions.map((sortElement) => {
                        return (
                            <li
                                key={sortElement.field}
                                className={cn({
                                    [style.active]: currentSorting.field === sortElement.field,
                                })}
                                onClick={() => setCurrentSorting(sortElement)}>
                                {sortElement.title}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <ul className={style.peopleList}>
                {sortedPeople?.map((item: IPeopleResult) => {
                    return <PersonItem layout key={item.login.uuid} personInfo={item} />;
                })}
            </ul>
        </div>
    );
};

export default People;
