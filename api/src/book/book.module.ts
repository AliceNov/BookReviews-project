import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewModule } from 'src/review/review.module';
import { BookEntity } from './model/book.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([BookEntity]),
        ReviewModule
    ]
})
export class BookModule {}
