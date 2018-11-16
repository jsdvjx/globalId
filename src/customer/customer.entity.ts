import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    type: number;
    @Column({
        type: 'varchar',
        length: 20,
        unique: true,
    })
    name: string;
    @Column({
        type: 'text',
    })
    description: string;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
}