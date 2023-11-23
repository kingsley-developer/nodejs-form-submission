import { Request, Response } from "express";
export declare function get_All_User(req: Request, res: Response, next: any): Promise<void>;
export declare function get_User(req: Request, res: Response, next: any): Promise<Response<any, Record<string, any>> | undefined>;
export declare function delete_Users(req: Request, res: Response, next: any): Promise<Response<any, Record<string, any>> | undefined>;
export declare function delete_User(req: Request, res: Response, next: any): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=middleware.d.ts.map