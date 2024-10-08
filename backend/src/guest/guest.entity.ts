import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("Guests")
export class Guest{
    @PrimaryColumn()
    readonly id: string;

    @Column()
    full_name: string;

    @Column()
    email: string;

    @Column()
    phone_number: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
