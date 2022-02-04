import { Body, Controller, Delete, Get, Param, Post, Put, Query, Request, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { Book } from 'src/book/model/book.interface';
import { User } from 'src/user/model/user.interface';
import { DeleteResult } from 'typeorm';
import { AuthorGuard } from '../guards/author.guard';
import { Review } from '../model/review.interface';
import { ReviewService } from '../service/review.service';

@Controller('reviews')
export class ReviewController {

    constructor(private reviewService: ReviewService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() review: Review, @Request() req, @Param() params): Observable<Review> {
        const user: User = req.user.user;
        const book: Book = params.book;
        return this.reviewService.create(user, book, review);
    }

    @Get()
    findReviews(@Query('userId') userId: number, @Query('bookId') bookId: number): Observable<Review[]> {
        if(userId == null && bookId == null) {
            return this.reviewService.findAll();
        } else if (userId) {
            return this.reviewService.findByUser(userId)
        } else {
            return this.reviewService.findByBook(bookId);
        }
    }

    @Get(':id')
    findOne(@Param('id') id: number): Observable<Review> {
        return this.reviewService.findOne(id);
    }

    @UseGuards(JwtAuthGuard, AuthorGuard)
    @Put(':id')
    updateOne(@Param('id') id: number, @Body() review: Review): Observable<Review> {
        return this.reviewService.updateOne(Number(id), review);
    }
    
    @UseGuards(JwtAuthGuard, AuthorGuard)
    @Delete(':id')
    deleteOne(@Param('id') id: number): Observable<DeleteResult> {
        return this.reviewService.deleteOne(id)
    }
}
