import { Migration } from '@mikro-orm/migrations';

export class Migration20221227121046 extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table "event_entity" drop constraint "event_entity_group_id_foreign";');

    this.addSql('alter table "event_entity" add column "description" varchar(255) null;');
    this.addSql('alter table "event_entity" drop column "group_id";');
  }

  async down(): Promise<void> {
    this.addSql('alter table "event_entity" add column "group_id" int null;');
    this.addSql(
      'alter table "event_entity" add constraint "event_entity_group_id_foreign" foreign key ("group_id") references "group_entity" ("id") on update cascade on delete set null;',
    );
    this.addSql('alter table "event_entity" drop column "description";');
  }
}
