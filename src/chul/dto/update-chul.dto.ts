import { PartialType } from '@nestjs/mapped-types';
import { CreateChulDto } from './create-chul.dto';

export class UpdateChulDto extends PartialType(CreateChulDto) {}
