import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('book')
export class BookEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column({default: ''})
    description: string;

    @Column({type:"date", default: ''})
    publishedDate: Date;

    @Column()
    image: string;
}