export interface NewsI{
    'id': number,
    'title': string,
    'points': number,
    'user': string,
    'time': number,
    'time_ago': string,
    'comments_count': number,
    comments?:NewsI[],
    content?:string,
    'type': string,
    'url': string,
    'domain': string,
}

export interface ComentsI{
   comment:NewsI[]
}
