export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    available_credits: number;
}

export interface Feature {
    id?: string;
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

export interface UsedFeature {
    id?: string;
    credits: number;
    feature?: Feature;
    users?: User;
    created_at?: string;
    updated_at?: string;
    data: {
        number1: number;
        number2: number;
    };
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
export interface UsedFeatureProps extends UsedFeature {
    data: UsedFeature[];
}
