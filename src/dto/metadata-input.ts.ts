import { IsNumber, Length } from "class-validator";

export class MetaData_Input {
    id: number;	//	Meta ID.READ-ONLY
    key: string;	//	Meta key.
    value: string;	//	Meta value.
}    
