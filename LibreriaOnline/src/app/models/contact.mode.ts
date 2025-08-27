export interface ContactInfo {
    id: number;
    type: 'linkedin' | 'infojobs' | 'email' | 'phone' | 'github' | 'website';
    title: string;
    value: string;
    icon: string;
    url?: string;
    description?: string;
}