import { useContext } from "react";
import { UserContext } from "../App";

export const useIsAdminHook = () => {
    const [user] = useContext(UserContext);
    return user.user?.role === 'admin';
}