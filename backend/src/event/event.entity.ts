import { Guest } from "src/guest/guest.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("Guests")
export class Event {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    guest_id: string;

    @OneToOne(() => Guest)
    @JoinColumn({ name: 'guest_id' })
    guest: Guest;

    @Column()
    source_barcode: string;

    @Column({ nullable: true })
    check_in_date: Date;

    @Column({ nullable: true })
    check_out_date: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}