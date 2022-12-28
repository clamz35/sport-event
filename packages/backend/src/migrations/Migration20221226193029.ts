import { Migration } from '@mikro-orm/migrations';

export class Migration20221226193029 extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table "event_entity" drop constraint "event_entity_group_id_foreign";');

    this.addSql(
      'alter table "event_entity" add column "date_begin" timestamptz(0) not null, add column "date_end" timestamptz(0) not null;',
    );
    this.addSql(
      'alter table "event_entity" alter column "group_id" type int using ("group_id"::int);',
    );
    this.addSql('alter table "event_entity" alter column "group_id" drop not null;');
    this.addSql(
      'alter table "event_entity" add constraint "event_entity_group_id_foreign" foreign key ("group_id") references "group_entity" ("id") on update cascade on delete set null;',
    );
  }

  async down(): Promise<void> {
    this.addSql('alter table "event_entity" drop constraint "event_entity_group_id_foreign";');

    this.addSql(
      'alter table "event_entity" alter column "group_id" type int using ("group_id"::int);',
    );
    this.addSql('alter table "event_entity" alter column "group_id" set not null;');
    this.addSql('alter table "event_entity" drop column "date_begin";');
    this.addSql('alter table "event_entity" drop column "date_end";');
    this.addSql(
      'alter table "event_entity" add constraint "event_entity_group_id_foreign" foreign key ("group_id") references "group_entity" ("id") on update cascade;',
    );
  }
}
