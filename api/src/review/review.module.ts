import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';
import { ReviewEntity } from './model/review.entity';

@Module({
    imports:[
        TypeOrmModule.forFeature([ReviewEntity]),
        UserModule,
        AuthModule
    ]
})
export class ReviewModule {}
