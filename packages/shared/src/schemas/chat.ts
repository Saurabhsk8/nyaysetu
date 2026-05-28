import { z } from "zod";

export const ChatRequestSchema = z.object({
  message: z.string().min(1).max(4000),
  session_id: z.string().uuid().optional(),
});

export const ChatResponseSchema = z.object({
  reply: z.string(),
  session_id: z.string().uuid(),
});

export type ChatRequest = z.infer<typeof ChatRequestSchema>;
export type ChatResponse = z.infer<typeof ChatResponseSchema>;
