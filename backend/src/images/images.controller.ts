import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  ApiExtraModels,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ImagesService } from './images.service';
import { ImageDto, CreateImageDto, UpdateImageDto } from './dto';
import { PaginatedDto } from '../dto/paginated.dto';

@ApiTags('Images')
@Controller('images')
@ApiExtraModels(PaginatedDto)
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post()
  create(@Body() createImageDto: CreateImageDto) {
    return this.imagesService.create(createImageDto);
  }

  @Get()
  @ApiOperation({ description: 'Get all images' })
  @ApiOkResponse({ type: PaginatedDto<ImageDto> })
  findAll(): Promise<PaginatedDto<ImageDto>> {
    return this.imagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto) {
    return this.imagesService.update(+id, updateImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagesService.remove(+id);
  }
}
