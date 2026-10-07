import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 活動報告: src/content/news/*.md
const news = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['調査', '教育イベント', '地域連携', 'お知らせ']),
    summary: z.string(),
    cover: z.string().optional(), // public/images/ 以下のパス 例: 'images/news/xxx.jpg'
    coverAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// イベント: src/content/events/*.md
const events = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    audience: z.string(),
    status: z.enum(['準備中', '募集中', '受付終了', '開催済み']),
    date: z.coerce.date().optional(), // 並び順に使用。未定なら省略
    dateText: z.string().default('確定後に掲載'),
    venue: z.string().default('確定後に掲載'),
    capacity: z.string().default('確定後に掲載'),
    fee: z.string().default('確定後に掲載'),
    deadline: z.string().default('確定後に掲載'),
    applyUrl: z.string().optional(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// 生きもの図鑑: src/content/species/*.md
const species = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/species' }),
  schema: z.object({
    name: z.string(),
    scientificName: z.string().optional(),
    group: z.enum(['魚類', '昆虫', '貝類', '甲殻類', '両生類', '爬虫類', '鳥類', '植物', 'その他']),
    origin: z.enum(['在来', '国外外来', '国内外来', '判定保留']),
    endemic: z.enum(['日本固有', '固有ではない', '未確認']).default('未確認'),
    summary: z.string(),
    photo: z.string().optional(),
    photoCredit: z.string().optional(), // 撮影者・撮影日
    photoType: z.enum(['現地写真', '参考写真']).optional(),
    criteria: z.string().optional(), // 判定の基準（対象地域と分類根拠）
    records: z
      .object({
        period: z.string(), // 確認時期
        area: z.string(), // 確認した地域（公開可能な範囲）
        method: z.string(), // 目視・捕獲・環境DNA など
        source: z.string(), // 出典・確認者
      })
      .optional(),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = { news, events, species };
