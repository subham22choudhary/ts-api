
export interface ApiProvider {
    name: string;
    url: string;
}

export interface ApiService {
    name: string;
    description: string;
}

export interface ApiProviderResponse {
    [key: string]: ApiProvider;
}

export interface ApiServiceResponse {
    apis: {
        [key: string]: ApiService;
    };
}
