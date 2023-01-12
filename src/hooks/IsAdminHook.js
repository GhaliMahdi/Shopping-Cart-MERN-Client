import { useContext } from "react";
import { UserContext } from "../App";

export const IsAdminHook = () => {
    const [user] = useContext(UserContext);
    return user.user?.token === 'admin';
}