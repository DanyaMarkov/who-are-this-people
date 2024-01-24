import usePersonCard from '../../store/store';
import './PersonCard.css';

const PersonCard = () => {
    const [personCardInfo, setPersonCardInfo] = usePersonCard();

    if (!personCardInfo) {
        return <div>Выберите персонажа из списка</div>;
    }

    return (
        <div className="person-card">
            <div className="picture">
                <img src={personCardInfo.picture} alt="фото пользователя" />{' '}
            </div>
            <div className="name-block">
                <h2 className="full-name">
                    {personCardInfo.firstName} {personCardInfo.lastName}
                </h2>
                {/* @ts-ignore */}
                <button className="reset-button" onClick={() => setPersonCardInfo(null)}>
                    Сбросить
                </button>
            </div>
            <div className="personal-info">
                <h3 className="info-title">Основная информация</h3>
                <div>
                    Дата рождения: {personCardInfo.dobDate} ({personCardInfo.age})
                </div>
                <div>Пол: {personCardInfo.gender === 'male' ? 'Мужской' : 'Женский'}</div>
            </div>
            <div className="contacts">
                <h3 className="info-title">Контакты</h3>
                <div>
                    Локация: {personCardInfo.country}, {personCardInfo.city}
                </div>
                <div>Email: {personCardInfo.email}</div>
                <div>Телефон: {personCardInfo.phone}</div>
            </div>
        </div>
    );
};

export default PersonCard;
