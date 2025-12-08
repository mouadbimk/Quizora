import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-[32px]">Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
    </div>
  );
}

export default Error;
