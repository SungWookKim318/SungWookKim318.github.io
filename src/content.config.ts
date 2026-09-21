import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 미디어 한 점. src는 public/ 기준 절대 경로.
// kind: image = 정지 이미지, loop = 원래 GIF였던 것(자동 재생 무한 반복),
//       video = 일반 영상(포스터 두고 클릭 재생)
const media = z.object({
  src: z.string(),
  kind: z.enum(['image', 'loop', 'video']).default('image'),
  caption: z.string().optional(),
  poster: z.string().optional(),
  width: z.number(),
  height: z.number(),
});

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
  media: z.array(media).default([]),
  links: z.array(link).default([]),
  draft: z.boolean().default(false),
});

const collection = (dir: string) =>
  defineCollection({
    loader: glob({ pattern: '**/*.md', base: `./src/content/${dir}` }),
    schema: base,
  });

export const collections = {
  career: collection('career'),
  personal: collection('personal'),
  academic: collection('academic'),
};
