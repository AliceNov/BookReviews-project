import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';
import { hasRoles } from 'src/auth/decorator/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { UserRole } from 'src/user/model/user.interface';
import { DeleteResult } from 'typeorm';
import { Book } from '../model/book.interface';
import { BookService } from '../service/book.service';

@Controller('book')
export class BookController {

    constructor(private bookService: BookService) {}

    @Post()
    create(@Body() book: Book): Observable<Book> {
        return this.bookService.create(book);
    }

    @Get()
    findAll(): Observable<Book[]> {
        return this.bookService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Observable<Book> {
        return this.bookService.findOne(id)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @hasRoles(UserRole.ADMIN)
    @Put(':id')
    updateOne(@Param('id') id: number, @Body() book: Book): Observable<Book> {
        return this.bookService.updateOne(Number(id), book);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @hasRoles(UserRole.ADMIN)
    @Delete(':id')
    deleteOne(@Param('id') id: number): Observable<DeleteResult> {
        return this.bookService.deleteOne(id)
    }
}
