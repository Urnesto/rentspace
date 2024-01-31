import { ReactNode } from 'react';
import styles from "../../styles/components/common/layout.module.scss"

type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <div className={styles.layout}>
                <div className={styles.layout__margin}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout;
