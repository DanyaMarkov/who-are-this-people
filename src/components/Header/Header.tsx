import Logo from '@components/Logo/Logo';
import style from './Header.module.scss';

const Header = () => {
    return (
        <header className={style.header}>
            <Logo />
        </header>
    );
};

export default Header;
