import { BaseEntity } from 'src/database/typeorm/base-entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class CharAbility extends BaseEntity {
  @Column({ type: 'text' })
  abilityName: string;
}
