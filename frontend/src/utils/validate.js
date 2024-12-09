import { object, string } from 'yup';

export const channelNamesShema = (channelNames) => object({
    name: string()
      .min(3, "От 3 до 20 символов")
      .max(20, "От 3 до 20 символов")
      .notOneOf(channelNames, "Такое имя уже есть"),
  });
