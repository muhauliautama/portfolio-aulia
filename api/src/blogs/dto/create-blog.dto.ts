import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { BlogStatus } from '../interface/blogs';
export class CreateBlogDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  @IsEnum(BlogStatus)
  status: BlogStatus;

  tags: string[];
}
