import styles from "./HeaderPage.module.scss";
import {AeonikFonoLight} from "@/fonts/AeonicFono";

export default function HeaderPage({title}: { title: string }) {
    return <header className={[styles.headerPage, AeonikFonoLight.className].join(' ')}>
        <h1>{title}</h1>
    </header>;
}