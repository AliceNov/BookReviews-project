import { type } from "os";
import { UserEntity } from "src/user/model/user.entity";
import { BeforeUpdate, Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('review')
export class ReviewEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: ''})
    body: string;

    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP"
    })
    created: Date;

    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP"
    })
    updated: Date;

    @BeforeUpdate()
    updateTimestam() {
        this.updated = new Date;
    }

    @Column()
    publishedDate: Date;

    @Column()
    isPublished: boolean;

    @ManyToOne(type => UserEntity, user => user.review)
    author: UserEntity;
}