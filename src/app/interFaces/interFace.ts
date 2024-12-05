export interface blogsTypes {
    title: string;
    body: string;
    id: number;
}

export interface paramsType {
    blogId?: number;
    myBlogId: number;
};

export interface blogsTypes {
    head: string;
    title: string;
    body: string;
    id: number;
}

export interface deleteType {
    id?: number;
    blogId?: number;
}