import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blogs } from './entities/blogs.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Blogs])],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
