import { useEffect, useState } from "react";

export function useSetLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      if (typeof window === "undefined") return initialValue;
      const stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      throw new Error(err.message);
    }
  }, [key, value]);

  return [value, setValue];
}
export function useGetLocalStorage(key) {
  const data = localStorage.getItem(key);
  if (!data) throw new Error("No data found with this Key!");
  return JSON.parse(data);
}
export function useDeleteLocalStorage(key) {
  const data = localStorage.removeItem(key);
  if (!data) throw new Error("No data found with this Key!");
  return "Item has been removed successfully";
}
