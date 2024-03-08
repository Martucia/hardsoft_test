import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { StageType } from 'src/common/types';

export class CreateTaskDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsOptional()
  stage?: StageType;
}

export class UpdateTaskDto {
  @ApiProperty()
  @IsOptional()
  title?: string;

  @ApiProperty()
  @IsOptional()
  stage?: StageType;
}

export class TaskDto {
  id: number;
  title: string;
  stage: StageType;
}
