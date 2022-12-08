import { Migration } from '@mikro-orm/migrations';

export class Migration20221206203229 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "event_entity" ("id" serial primary key, "name" varchar(255) not null);',
    );

    this.addSql(
      'create table "group_entity" ("id" serial primary key, "name" varchar(255) not null);',
    );
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "event_entity" cascade;');

    this.addSql('drop table if exists "group_entity" cascade;');
  }
}
