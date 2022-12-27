export const useDateFormat = (date: Date): string => {
  return new Intl.DateTimeFormat('fr-FR').format(date);
};
