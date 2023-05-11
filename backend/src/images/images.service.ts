import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { PaginatedDto } from '../dto/paginated.dto';
import { FETCH_IMAGES_ERROR, FETCH_PHOTOS_ERROR } from '../constants';
import { ImageDto, CreateImageDto, UpdateImageDto } from './dto';

@Injectable()
export class ImagesService {
  constructor(
    private configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  private readonly photosEndpoint = this.configService.get<string>(
    'app.apiEndpoints.photos',
  );
  private readonly imagesEndpoint = this.configService.get<string>(
    'app.apiEndpoints.images',
  );

  private readonly logger = new Logger(ImagesService.name);

  create(createImageDto: CreateImageDto) {
    return 'This action adds a new image';
  }

  async findAll(): Promise<PaginatedDto<ImageDto>> {
    const [[photos], [images]] = await Promise.all([
      this.getPhotos(),
      this.getImages(),
    ]);
    const data = [...photos, ...images];
    return {
      count: data.length,
      data,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} image`;
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }

  async getPhotos(): Promise<ImageDto[][]> {
    const { data } = await firstValueFrom(
      this.httpService.get<ImageDto[][]>(this.photosEndpoint).pipe(
        catchError((error: AxiosError) => {
          this.logger.error('[getPhotos]', JSON.stringify(error));
          throw new HttpException(
            {
              status: error.code,
              error: FETCH_PHOTOS_ERROR,
            },
            error.status,
          );
        }),
      ),
    );

    this.logger.log('[getPhotos]', JSON.stringify(data));

    return data;
  }

  async getImages(): Promise<ImageDto[][]> {
    const { data } = await firstValueFrom(
      this.httpService.get<ImageDto[][]>(this.imagesEndpoint).pipe(
        catchError((error: AxiosError) => {
          this.logger.error('[getImages]', JSON.stringify(error));
          throw new HttpException(
            {
              status: error.code,
              error: FETCH_IMAGES_ERROR,
            },
            error.status,
          );
        }),
      ),
    );

    this.logger.log('[getImages]', JSON.stringify(data));

    return data;
  }
}
