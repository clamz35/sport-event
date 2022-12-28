export interface EventCreateForm {
  id?: number;
  name: string;
  nameError?: string;
  dateBegin: Date | null;
  dateEnd: Date | null;
  description: string;
}
