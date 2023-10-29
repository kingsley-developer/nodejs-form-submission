import mysql2 from "mysql2/promise";
export declare function add_Data_DB(firstName: string, lastName: string, age: number, password: string, country: string, alive: string, occupation: string): Promise<void>;
export declare function update_Data_DB(firstName: string, lastName: string, age: number, password: string, country: string, alive: string, occupation: string, beforefirstName: string, beforelastName: string): Promise<void>;
export declare function get_All_User(): Promise<mysql2.RowDataPacket[] | mysql2.RowDataPacket[][] | mysql2.OkPacket | mysql2.OkPacket[] | mysql2.ResultSetHeader>;
export declare function get_Specific_User(firstName: string, lastName: string, age: number): Promise<mysql2.RowDataPacket[] | mysql2.RowDataPacket[][] | mysql2.OkPacket | mysql2.OkPacket[] | mysql2.ResultSetHeader>;
export declare function delete_All_User(): Promise<void>;
export declare function delete_Specific_User(firstName: string, lastName: string, age: number): Promise<void>;
//# sourceMappingURL=db_connect.d.ts.map