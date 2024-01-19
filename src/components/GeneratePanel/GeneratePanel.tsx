import { useState } from "react";
import { useAppDispatch } from "../../hooks/redux-hooks";
import appSlice from "@store/app-slice";
import style from "./GeneratePanel.module.scss";

const GeneratePanel = () => {
    const dispatch = useAppDispatch();
    // const tasks = useAppSelector((state) => state.task.tasks);

    const [range, setRange] = useState(5);

    const onRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event?.target?.value) {
            setRange(Number(event?.target.value));
        }
    };

    const generatePeopleList = () => {
        dispatch(appSlice.actions.setCountPeople(range));
    };

    return (
        <div className={style.panel}>
            GeneratePanel
            <input type="range" min={5} max={50} value={range} onChange={onRangeChange} />
            <span>{range}</span>
            <button onClick={() => generatePeopleList()}>Сгенерировать</button>
        </div>
    );
};

export default GeneratePanel;
