import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import LoaderFullPage from "../components/LoaderFullPage";
import styles from "./AppLayout.module.css";
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className={styles.container}>
      {isLoading && <LoaderFullPage />}
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
