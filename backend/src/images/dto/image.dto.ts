import { ApiProperty } from '@nestjs/swagger';

export class ImageDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  albumId: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  thumbnailUrl: string;
}
