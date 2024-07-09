import { BaseEntity } from 'src/database/typeorm/base-entity';
import { CharAbility } from 'src/resource/char-ability/entities/char-ability.entity';
import { Char } from 'src/resource/char/entities/char.entity';
import { Entity, Column, ManyToOne } from 'typeorm';

@Entity()
export class AbilityOfChar extends BaseEntity {
  @Column({ type: 'text' })
  abilityId: string;

  @Column('text')
  charId: string;

  @ManyToOne(() => Char, char => char.abilitiesOfChar)
  char: Char;

  @ManyToOne(() => CharAbility, charAbility => charAbility.abilitiesOfChar)
  ability: CharAbility;
}
