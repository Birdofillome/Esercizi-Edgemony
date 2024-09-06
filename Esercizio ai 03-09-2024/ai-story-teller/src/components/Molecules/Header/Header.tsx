import Button from "@/components/Atoms/Button/Button";
import style from "./Header.module.scss";
import { Dispatch, SetStateAction } from "react";
import Hamburger from "@/components/Atoms/Hamburger/Hamburger";

interface HeaderProps {
    title: string;
    showHamburger: boolean;
    setShowHamburger: Dispatch<SetStateAction<boolean>>;
}

const Header = (props: HeaderProps) => {
    const {title, showHamburger, setShowHamburger } = props;
return (

    <div className={style.main}>
        <h1>{title}</h1>
        <Hamburger active={showHamburger} setActive={setShowHamburger} />
        <Button label="Login"/>
    </div>
);
};

export default Header;