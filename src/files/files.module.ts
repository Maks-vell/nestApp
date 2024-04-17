import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { MulterModule } from '@nestjs/platform-express';
import { MulterAdapter } from './utils/multer.adapter';

@Module({
  providers: [FilesService],
  exports: [FilesService],
  imports: [MulterModule.register(MulterAdapter)]
})
export class FilesModule {}
