import styles from "./LoaderFullPage.module.css";
function LoaderFullPage() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
    </div>
  );
}

export default LoaderFullPage;
