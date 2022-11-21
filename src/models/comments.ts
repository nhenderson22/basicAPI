export type comment = {
    comment_id?: number,
    post_id: number,
    user_id: number,
    parent_id?: number,
    body: string,
}