import { Queue } from "bullmq";
import Redis from "ioredis";

const conn = new Redis(process.env.REDIS_URL!);

export const queue = new Queue("roasts", {
  connection: conn,
});