import { useSelector } from "react-redux";
import { UserType } from "../redux/slices/userSlice";

export const useAuth = () => {
  const { email, token, id } = useSelector((state: UserType) => state.user);
  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
};
