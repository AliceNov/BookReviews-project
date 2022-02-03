import { ReviewEntity } from "src/review/model/review.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
    cover: string;

    @OneToMany(type => ReviewEntity, reviewEntity => reviewEntity.book)
    review: ReviewEntity[];
}