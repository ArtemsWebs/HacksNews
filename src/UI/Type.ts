export type News = {
  id: number;
  title: string;
  points: number;
  user: string;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url: string;
  domain: string;
};
export type Position = {
  start: number;
  end: number;
};

export interface NewsI extends News {
  comments?: NewsI[];
  content?: string;
}

export interface ComentsI {
  comment: NewsI[];
}
