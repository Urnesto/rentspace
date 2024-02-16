import { ReactNode } from 'react';
import styles from "../../styles/components/common/layout.module.scss"
import Header from '../header/header';
import Footer from '../footer/footer';
type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <div className={styles.layout}>
                <div className={styles.layout__margin}>
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Layout;
