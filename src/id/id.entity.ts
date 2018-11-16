import { Entity, PrimaryGeneratedColumn, Column, Index, AfterUpdate, BeforeUpdate } from 'typeorm';

@Entity()
@Index(['stub'], {unique: true})
export class Id{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        type: 'char',
        length: 1,
        default: '',
        nullable: false,
    })
    stub: string;
}