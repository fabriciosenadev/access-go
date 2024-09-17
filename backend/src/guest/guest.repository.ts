import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Guest } from "./guest.entity";

@Injectable()
export class GuestRepository extends Repository<Guest> {

}