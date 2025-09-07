export interface ArticleMeta {
    title: string;
    slug: string;
    date: string;     // ISO yyyy-mm-dd
    summary?: string;
    file: string;     // original filename
}