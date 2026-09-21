import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const link = z.object({
  label: z.string(),
  url: z.string().url(),
});

// 세 컬렉션이 같은 스키마를 쓴다. 다른 건 소속 그룹과 URL prefix뿐.
const base = z.object({
  title: z.string(),
  subtitle: z.string().optional(),      // 팀명, 부제 ("The Strangers" 등)
  period: z.string(),                   // "2019.03 ~ 2019.07"
  order: z.number(),                    // 섹션 내 정렬 순서. 작을수록 위
  summary: z.string(),                  // 카드에 노출되는 한 줄
  company: z.string().optional(),       // career 전용
  role: z.string().optional(),
  platform: z.string().optional(),
  engine: z.string().optional(),
  teamSize: z.string().optional(),
  stack: z.array(z.string()).default([]),
  highlights: z.array(z.string()).default([]),  // 랜딩 카드에 보여줄 하위 프로젝트명
  links: z.array(link).default([]),
  draft: z.boolean().default(false),
});

const collection = (dir: string) =>
  defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: `./src/content/${dir}` }),
    schema: base,
  });

export const collections = {
  career: collection('career'),
  personal: collection('personal'),
  academic: collection('academic'),
};
