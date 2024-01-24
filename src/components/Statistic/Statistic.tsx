import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import { useAppSelector } from '../../hooks/redux-hooks';
import style from './Statistic.module.scss';
import { convertDataForAgeAndCountStatistic } from './utils';

const Statistic = () => {
    const peopleList = useAppSelector((state) => state.people.peopleList);

    const data = convertDataForAgeAndCountStatistic(peopleList);

    return (
        <div className={style.statistic}>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="ageGroup" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="male"
                        name="Мужчины"
                        stroke="#8882dd"
                        activeDot={{ r: 6 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="female"
                        name="Женщины"
                        stroke="#82ca9d"
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistic;
