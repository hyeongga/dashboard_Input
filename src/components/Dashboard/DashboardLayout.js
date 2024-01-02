import styles from "./DashboardLayout.module.css";
import Sidebar from "./../Sidebar.js";

const DashboardLayout = ({ children, childrenLayout }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.main}>
        {childrenLayout === "home" ? (
          children
        ) : (
          <div className={styles.detail}>{children}</div>
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;
