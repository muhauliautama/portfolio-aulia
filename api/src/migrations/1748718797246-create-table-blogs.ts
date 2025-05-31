import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableBlogs1748718797246 implements MigrationInterface {
    name = 'CreateTableBlogs1748718797246'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`blogs\` CHANGE \`createdAt\` \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`blogs\` CHANGE \`updatedAt\` \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`blogs\` CHANGE \`updatedAt\` \`updatedAt\` datetime(0) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`blogs\` CHANGE \`createdAt\` \`createdAt\` datetime(0) NOT NULL`);
    }

}
