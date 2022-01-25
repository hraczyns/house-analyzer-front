import {useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import useWindowSize from "../hooks/useWindowSize";

const Navigation = () => {
    const history = useHistory();
    const [width] = useWindowSize();
    const [navigation, setNavigation] = useState({
        navigation: 'navigation',
        navigationList: 'navigation__list',
        navigationListElement: 'navigation__list-element',
    });
    const [hamburger, setHamburger] = useState(false);

    useEffect(() => {
        if (width < 768) {
            setHamburger(true);
        } else {
            setHamburger(false);
        }
        deleteFog();
    }, [width]);

    const deleteFog = () => {
        if (width < 768) {
            setNavigation({
                ...navigation,
                navigation: 'navigation-hamburger anim-out',
            });

            setTimeout(() => {
                if (width < 768) {
                    setNavigation({
                        ...navigation,
                        navigation: 'navigation-hamburger',
                    });
                    setHamburger(true)
                }else{
                    setHamburger(false);
                }
            }, 500);
        } else {
            setNavigation({
                navigation: 'navigation',
                navigationList: 'navigation__list',
                navigationListElement: 'navigation__list-element'
            });
            setHamburger(false)
        }
    }

    const showMenu = () => {
        setHamburger(false);
        setNavigation({
            navigation: 'navigation-hamburger anim-in',
            navigationList: 'navigation__list-hamburger',
            navigationListElement: 'navigation__list-element-hamburger'
        });
    }

    return hamburger ? (<nav className={"navigation navigation--hamburger "}>
        <div className={"hamburger"} onClick={showMenu}/>
        <span className={"navigation-name"}>House analyzer</span>
    </nav>) : <nav className={navigation.navigation}>
        <li className={navigation.navigationList} onClick={deleteFog}>
            <ul className={navigation.navigationListElement} onClick={() => history.push('/')}>All offers</ul>
            <ul className={navigation.navigationListElement} onClick={() => history.push('/stats')}>Statistics</ul>
            <ul className={navigation.navigationListElement} onClick={() => history.push('/about')}>About authors</ul>
        </li>
    </nav>
}
export default Navigation;