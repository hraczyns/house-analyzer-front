import {useHistory} from "react-router-dom";

const Navigation = () => {
    const history = useHistory();
    return <nav className={"navigation"}>
        <li className={"navigation__list"}>
            <ul className={"navigation__list-element"} onClick={() => history.push('/')}>All offers</ul>
            <ul className={"navigation__list-element"} onClick={() => history.push('/stats')}>Statistics</ul>
            <ul className={"navigation__list-element"} onClick={() => history.push('/about')}>About authors</ul>
        </li>
    </nav>
}
export default Navigation;