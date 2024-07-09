import { BaseEntity } from 'src/database/typeorm/base-entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class TypeOfChar extends BaseEntity {
  @Column({ type: 'text' })
  typeId: string;

  @Column('text')
  charId: string;
}
