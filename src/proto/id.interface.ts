import { Observable } from 'rxjs';

export interface IdService{
    register(registerParam: RegisterParam): Observable<RegisterResponse>;
    generate(generateParam: GenerateParam): Observable<GlobalId>;
    info(id: GlobalId): Observable<RegisterResponse>;
    types(TypeSearch): Observable<TypesResponse>;
}
export interface TypeSearch{
    name: string;
}
export interface RegisterParam{
    name: string;
    description: string;
}
export interface RegisterResponse{
    type: number;
    name: string;
    description: string;
}
export interface TypesResponse{
    data: {[k: number]: RegisterResponse};
}
export interface GenerateParam {
    type: number;
}
export interface GlobalId{
    id: number;
}