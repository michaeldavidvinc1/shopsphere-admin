export interface Auth {
    name: string,
    email: string,
    role: string,
    token: string
}

export interface Image {
    id:   string;
    url:  string;
    type: string;
}

export interface Category {
    id:   string;
    name: string;
    slug: string;
    image: Image
}
