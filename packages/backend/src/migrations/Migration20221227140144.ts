import { Migration } from '@mikro-orm/migrations';

export class Migration20221227140144 extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table "event_entity" add column "address" varchar(255) null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "event_entity" drop column "address";');
  }
}
