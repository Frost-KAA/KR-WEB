import {useRouter} from "next/router"
import { NavDropdown } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import Link from "next/link"
import styles from "../../styles/Navbar.module.css"

const MenuItem = ({item}) => {
    const {pathname} = useRouter();

    return (
        <>
        {item.submenu ? (
           <NavDropdown id={item.id} title={item.title} className={styles.none} menuVariant="blue">
                {item.submenu.map((sub) => (
                    <NavDropdown.Item key={sub.id} className={styles.navItem}>
                        <Link key={sub.id} href={sub.path} legacyBehavior>
                            <a className={pathname === sub.path ? styles.subactive : styles.subnone}>{sub.title}</a>
                        </Link>
                    </NavDropdown.Item>
                ))}
            </NavDropdown>
        ) : (
            <Link key={item.id} href={item.path} legacyBehavior>
                <a className={pathname === item.path ? styles.active : styles.none}>{item.title}</a>
            </Link>
        )}
        </>
    );
}
export default MenuItem;