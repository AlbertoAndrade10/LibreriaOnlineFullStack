export interface UserLogin {
    email: string;
    password: string;
}

export interface UserRegister {
    email: string;
    password: string;
    fullName: string;
}

export interface LoginResponse {
    token: string;
    expiresIn: number;
}