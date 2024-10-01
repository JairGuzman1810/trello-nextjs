import { z } from "zod";

export const CreateBoard = z.object({
  title: z
    .string({
      required_error: "Title is requiered",
      invalid_type_error: "Title is requiered",
    })
    .min(3, {
      message: "Title is too short.",
    }),
});
