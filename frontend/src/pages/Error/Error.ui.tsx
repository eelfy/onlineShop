import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../shared/routes";

export const Error = () => {
  const redirect = useNavigate();

  useEffect(() => {
    redirect(Routes.Main)
  }, []);

  return null
}