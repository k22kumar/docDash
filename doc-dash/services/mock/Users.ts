import { IUser } from "@/Interfaces/IUser";
// import { IUser } from "../../core/interfaces/IUser"
import { Roles } from "@/Constants/UserInfo";

export const users: IUser[] = [
    {
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        role: Roles.Admin,
    },
    {
        name: "Bob Smith",
        email: "bob.smith@example.com",
        role: Roles.Doctor,
    },
    {
        name: "Charlie Evans",
        email: "charlie.evans@example.com",
        role: Roles.Patient,
    }
];