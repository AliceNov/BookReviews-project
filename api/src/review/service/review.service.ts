import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable, switchMap } from 'rxjs';
import { Book } from 'src/book/model/book.interface';
import { User } from 'src/user/model/user.interface';
import { UserService } from 'src/user/service/user.service';
import { DeleteResult, Repository } from 'typeorm';
import { ReviewEntity } from '../model/review.entity';
import { Review } from '../model/review.interface';

@Injectable()
export class ReviewService {

    constructor(
        @InjectRepository(ReviewEntity) private readonly reviewRepository: Repository<ReviewEntity>,
        private userService: UserService
    ) {}

    create(user: User, book: Book, review: Review): Observable<Review> {
        review.author = user;
        review.book= book;
        return from(this.reviewRepository.save(review));
    }

    findAll(): Observable<Review[]> {
        return from(this.reviewRepository.find({
            relations:['author', 'book']
        }));
    }

    findByUser(userId: number): Observable<Review[]> {
        return from(this.reviewRepository.find({
            where: {
                author: userId
            },
            relations: ['author']
        }))
    }

    findByBook(bookId: number): Observable<Review[]> {
        return from(this.reviewRepository.find({
            where: {
                book: bookId
            },
            relations: ['book']
        }))
    }

    findOne(id: number): Observable<Review> {
        return from(this.reviewRepository.findOne(
                {id},
                {relations: ['author', 'book']}
            ))
    }

    updateOne(id: number, review: Review): Observable<Review> {
        return from(this.reviewRepository.update(id, review)).pipe(
            switchMap(() => this.findOne(id))
        )
    }

    deleteOne(id: number): Observable<DeleteResult> {
        return from(this.reviewRepository.delete(id));
    }
}
