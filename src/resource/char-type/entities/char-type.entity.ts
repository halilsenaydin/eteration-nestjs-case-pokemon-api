import { BaseEntity } from 'src/database/typeorm/base-entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class CharType extends BaseEntity {
  @Column({ type: 'text' })
  typeName: string;
}
