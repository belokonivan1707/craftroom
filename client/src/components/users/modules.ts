export type RefsMap = Record<string, { ref: React.MutableRefObject<HTMLDivElement | null>; active: boolean }>;

export interface IUser {
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
    address: {
        city: string;
        geo: { lat: string; lng: string };
        street: string;
        suite: string;
        zipcode: string;
    };
    company: {
        bs: string;
        catchPhrase: string;
        name: string;
    };
}
