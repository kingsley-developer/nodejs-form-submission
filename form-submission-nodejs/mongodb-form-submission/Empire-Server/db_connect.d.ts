import mongoose from "mongoose";
export declare function add_Data_DB(firstName: string, lastName: string, age: number, password: string, country: string, alive: boolean, occupation: string): Promise<boolean>;
export declare function update_Data_DB(firstName: string, lastName: string, age: number, password: string, country: string, alive: string, occupation: string, beforefirstName: string, beforelastName: string): Promise<void>;
export declare function get_All_User(): Promise<void>;
export declare function get_Specific_User(user_id: string): Promise<(mongoose.Document<unknown, any, {
    firstName: string;
    lastName: string;
    age: number;
    password: string;
    country: string;
    alive: boolean;
    occupation: string;
}> & {
    firstName: string;
    lastName: string;
    age: number;
    password: string;
    country: string;
    alive: boolean;
    occupation: string;
} & {
    _id: mongoose.Types.ObjectId;
}) | null | undefined>;
export declare function delete_All_User(): Promise<boolean>;
export declare function delete_Specific_User(user_id: string): Promise<boolean>;
//# sourceMappingURL=db_connect.d.ts.map