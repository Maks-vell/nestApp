import { Body, Controller, Post, UploadedFile, UseInterceptors, NestInterceptor } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Post as PostModel } from './posts.model';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {
  }

  @ApiOperation({ summary: 'create new post' })
  @ApiResponse({ status: 200, type: [PostModel] })
  @Post()
  @UseInterceptors(FileInterceptor("image"))
  async createPost(@Body() dto: CreatePostDto,
                   @UploadedFile() image) {
    return await this.postsService.create(dto, image);
  }
}
