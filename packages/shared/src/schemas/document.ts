import { z } from "zod";

export const DocumentSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  url: z.string().url(),
  size: z.number().positive(),
  mime_type: z.string(),
  uploaded_at: z.string().datetime(),
});

export type Document = z.infer<typeof DocumentSchema>;
