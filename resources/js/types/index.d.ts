export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    available_credits: number;
}

export interface Feature {
    id?:string;
    name: string;
    description: string;
    required_credits: number;
}
export interface Package {
    id?: string;
    name: string;
    price: string;
    credits: number;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};

export interface PackageProps extends Package {
    data: Package[];
}
export interface FeatureProps extends Feature {
    data: Feature[];
}


