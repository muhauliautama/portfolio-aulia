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
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { BlogInterface, FindOneParams } from './interface/blogs';
import { Blogs } from './entities/blogs.entities';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

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
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          callback(null, `${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async create(
    @Body() createBlogDto: CreateBlogDto,
    @UploadedFile() photo: Express.Multer.File,
  ): Promise<Blogs> {
    if (photo) {
      createBlogDto.photo = photo.filename;
    }
    return await this.blogsService.create(createBlogDto);
  }

  @Put(':id')
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          callback(null, `${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async update(
    @Param() params: FindOneParams,
    @Body() UpdateBlogDto: UpdateBlogDto,
    @UploadedFile() photo: Express.Multer.File,
  ): Promise<Blogs> {
    const blog = await this.findOneOrFail(params.id);
    if (photo) {
      UpdateBlogDto.photo = photo.filename;
    }
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
