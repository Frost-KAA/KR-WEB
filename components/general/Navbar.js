import styles from "../../styles/Navbar.module.css"
import Image from "next/image"
import MenuItem from "./MenuItem"


const navigation = [
    {id:1, title:"Главная", path: "/"},
    {id:2, title:"Новости", path: "/news"},
    {id:3, title:"Команда", path: "/team",
    submenu:[
        {id:6, title:"Состав", path:"/players"},
        {id:7, title:"Тренеры", path:"/trainers"}
    ]},
    {id:4, title:"Расписание", path: "/schedule"},
    {id:5, title:"Турнирная таблица", path: "/table"}
]

const Navbar = () => {

    return(
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Image src="/logo.png" width="50" height="50" alt="logo"/>
                </div>
                <div className={styles.links}>
                    {navigation.map((menu) => (
                        <MenuItem  item={menu} />
                    ))}
                </div>
            </nav>
    )
}

export default Navbar