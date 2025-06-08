import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';

@Controller('uploads')
export class UploadsController {
  @Post('image')
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(
    FileInterceptor('image', {
      // 'image' adalah nama field yang akan dikirim dari frontend
      storage: diskStorage({
        destination: join(process.cwd(), 'uploads'), // Pastikan ini path yang benar
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          callback(null, `${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
      fileFilter: (req, file, callback) => {
        // Hanya izinkan file gambar
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
          return callback(
            new Error(
              'Hanya file gambar (jpg, jpeg, png, gif) yang diizinkan!',
            ),
            false,
          );
        }
        callback(null, true);
      },
      limits: {
        fileSize: 5 * 1024 * 1024, // Batas ukuran file 5MB
      },
    }),
  )
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      return { success: false, message: 'Tidak ada file yang diupload.' };
    }

    const imageUrl = `${process.env.PROD_BASE_URL || 'http://localhost:' + (process.env.NEST_DEV_PORT ?? 3000)}/uploads/${file.filename}`;
    return { success: true, imageUrl };
  }
}
