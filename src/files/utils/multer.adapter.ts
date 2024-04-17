import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface'
import { UnprocessableEntityException } from '@nestjs/common';

export const MulterAdapter: MulterOptions = {
  fileFilter: (_, file: Express.Multer.File, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/))
      return cb(
        new UnprocessableEntityException(
          "Error with file"
        ),
        false
      )

    return cb(null, true)
  },
  limits: { fileSize: 4194304 }
}