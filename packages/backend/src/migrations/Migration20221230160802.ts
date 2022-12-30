import { Migration } from '@mikro-orm/migrations';

export class Migration20221230160802 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "player_entity" ("id" serial primary key, "username" varchar(255) not null, "email" varchar(255) null);',
    );

    this.addSql(
      'create table "event_entity_players" ("event_entity_id" int not null, "player_entity_id" int not null, constraint "event_entity_players_pkey" primary key ("event_entity_id", "player_entity_id"));',
    );

    this.addSql(
      'alter table "event_entity_players" add constraint "event_entity_players_event_entity_id_foreign" foreign key ("event_entity_id") references "event_entity" ("id") on update cascade on delete cascade;',
    );
    this.addSql(
      'alter table "event_entity_players" add constraint "event_entity_players_player_entity_id_foreign" foreign key ("player_entity_id") references "player_entity" ("id") on update cascade on delete cascade;',
    );
  }

  async down(): Promise<void> {
    this.addSql(
      'alter table "event_entity_players" drop constraint "event_entity_players_player_entity_id_foreign";',
    );

    this.addSql('drop table if exists "player_entity" cascade;');

    this.addSql('drop table if exists "event_entity_players" cascade;');
  }
}
