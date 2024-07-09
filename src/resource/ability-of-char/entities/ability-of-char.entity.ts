import { BaseEntity } from 'src/database/typeorm/base-entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class AbilityOfChar extends BaseEntity {
  @Column({ type: 'text' })
  abilityId: string;

  @Column('text')
  charId: string;
}
