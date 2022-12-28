export interface Mapper<E, D> {
  toDto(entity: E, populate?: boolean): D;
  toEntity(dto: D, populate?: boolean): E;
}
