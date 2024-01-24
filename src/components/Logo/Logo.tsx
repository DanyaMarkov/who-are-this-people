import style from './Logo.module.scss';

const Logo = () => {
    return (
        <div className={style.logo}>
            <div className={style.icon} />
            <span className={style.title}>Who are this people?</span>
        </div>
    );
};

export default Logo;
