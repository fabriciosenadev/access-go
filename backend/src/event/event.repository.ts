import { Injectable } from "@nestjs/common";
import { Event } from "./event.entity";
import { Repository } from "typeorm";

@Injectable()
export class EventRepository extends Repository<Event>{

}