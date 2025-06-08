import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { BlogInterface } from './interface/blogs';
import { InjectRepository } from '@nestjs/typeorm';
import { Blogs } from './entities/blogs.entities';
import { Repository } from 'typeorm';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blogs) private BlogRepository: Repository<Blogs>,
  ) {}

  async findAll(): Promise<Blogs[]> {
    return await this.BlogRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async findOne(id: string): Promise<Blogs | null> {
    return await this.BlogRepository.findOne({ where: { id: id } });
  }

  async create(createBlogDto: CreateBlogDto): Promise<Blogs> {
    return await this.BlogRepository.save(createBlogDto);
  }

  async update(
    blogs: BlogInterface,
    updateBlogDto: UpdateBlogDto,
  ): Promise<Blogs> {
    Object.assign(blogs, updateBlogDto);
    return await this.BlogRepository.save(blogs);
  }

  async delete(blogs: BlogInterface): Promise<void> {
    await this.BlogRepository.delete(blogs.id);
  }
}
