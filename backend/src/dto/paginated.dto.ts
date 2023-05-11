import { ApiProperty } from '@nestjs/swagger';

export class PaginatedDto<TData> {
  @ApiProperty()
  count: number;

  @ApiProperty({ isArray: true })
  data: TData[];
}
