import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import LoaderFullPage from "../components/LoaderFullPage";
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen grid-cols-1 items-center justify-center font-rubik">
      {isLoading && <LoaderFullPage />}
      <Header />
      <div className="mx-auto w-full max-w-340">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
