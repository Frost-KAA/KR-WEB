import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/404.module.css"

const Error = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 5000)
    }, [router])
    return (
        <div className={styles.wrapper}>
            <div>
                <h1>404</h1>
                <h2>Something is getting wrong</h2>
            </div>
        </div>
    )
}

export default Error;