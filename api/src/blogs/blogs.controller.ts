import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Put,
  Param,
  Delete,
  NotFoundException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { BlogInterface, FindOneParams } from './interface/blogs';
import { Blogs } from './entities/blogs.entities';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Get()
  async findAll(): Promise<Blogs[]> {
    return await this.blogsService.findAll();
  }

  @Get('detail/:id')
  async findOne(@Param() params: FindOneParams): Promise<Blogs> {
    return await this.findOneOrFail(params.id);
  }

  @Post()
  async create(@Body() createBlogDto: CreateBlogDto): Promise<Blogs> {
    return await this.blogsService.create(createBlogDto);
  }

  @Put(':id')
  async update(
    @Param() params: FindOneParams,
    @Body() UpdateBlogDto: UpdateBlogDto,
  ): Promise<Blogs> {
    const blog = await this.findOneOrFail(params.id);
    return await this.blogsService.update(blog, UpdateBlogDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param() params: FindOneParams): Promise<void> {
    const blog = await this.findOneOrFail(params.id);
    await this.blogsService.delete(blog);
  }

  private async findOneOrFail(id: string): Promise<Blogs> {
    const blog = await this.blogsService.findOne(id);
    if (!blog) {
      throw new NotFoundException(`Blog with id ${id} not found`);
    }
    return blog;
  }
}
