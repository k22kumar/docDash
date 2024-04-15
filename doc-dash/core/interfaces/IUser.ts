import { Roles } from "../constants/UserInfo";

export interface IUser {
    name: string;
    email: string;
    role: Roles;
}
