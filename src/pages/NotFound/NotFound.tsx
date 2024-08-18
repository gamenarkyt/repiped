import { Typography } from "yui-uikit"
import styles from './NotFound.module.css'


export const NotFound = () => {
    return (
        <div className={styles.notfoundpage}>
            <Typography>404</Typography>
            <Typography size="h2">Not Found</Typography>
        </div>
    )
}