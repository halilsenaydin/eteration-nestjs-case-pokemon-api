import { BaseEntity } from 'src/database/typeorm/base-entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class Char extends BaseEntity {
  @Column({ type: 'text' })
  name: string;

  @Column('int')
  weight: number;

  @Column('int')
  height: number;

  @Column('boolean')
  isDefault: boolean;
}
