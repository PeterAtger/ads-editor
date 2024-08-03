export const Ads = {
  AUTO: 'auto',
  STATIC: 'static',
  AB: 'a/b',
} as const;

export type AdsType = typeof Ads[keyof typeof Ads];

type AdsConfigTypeMap = {
  [Ads.AUTO]: {
    marker: number
  },
  [Ads.STATIC]: {
    marker: number
    url: string;
  },
  [Ads.AB]: {
    marker: number
    a: string;
    b: string;
  },
};
export type AdsConfigType = {
  [K in keyof typeof Ads]: { [P in (typeof Ads)[K]]: AdsConfigTypeMap[(typeof Ads)[K]] }
}[keyof typeof Ads];
