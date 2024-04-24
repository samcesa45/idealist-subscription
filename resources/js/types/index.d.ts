export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    available_credits: number;
}

export interface FeatureProps {
    name: string;
    description: string;
    required_credits: number;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};
