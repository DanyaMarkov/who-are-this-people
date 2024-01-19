import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useAppSelector } from "../../hooks/redux-hooks";
import style from "./Statistic.module.scss";
import { convertDataForAgeAndCountStatistic } from "./utils";

const Statistic = () => {
    const peopleList = useAppSelector((state) => state.people.peopleList);

    const data = convertDataForAgeAndCountStatistic(peopleList);

    console.log("data", data);

    return (
        <div className={style.statistic}>
            <ResponsiveContainer width="100%" height={300}>
                <span>Общее количество людей: {peopleList?.length}</span>

                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="ageGroup" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="male" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="female" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistic;
