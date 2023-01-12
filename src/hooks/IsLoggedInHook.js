import { useContext } from "react";
import { UserContext } from "../App";

export const IsLoggedIn = () => {
    const [user] = useContext(UserContext);
    return !!user.token;
}