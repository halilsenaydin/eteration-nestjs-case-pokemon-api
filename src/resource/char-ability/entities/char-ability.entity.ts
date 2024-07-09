import { BaseEntity } from 'src/database/typeorm/base-entity';
import { AbilityOfChar } from 'src/resource/ability-of-char/entities/ability-of-char.entity';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity()
export class CharAbility extends BaseEntity {
  @Column({ type: 'text' })
  abilityName: string;

  @OneToMany(() => AbilityOfChar, abilityOfChar => abilityOfChar.ability)
  abilitiesOfChar: AbilityOfChar[];
}
