export class API {
    static PROTOCOL = 'http';
    static PORT = 3000;
    static HOST = 'localhost';
    static SERVER = `${API.PROTOCOL}://${API.HOST}:${API.PORT}`;

    static user = {
        get: `${API.SERVER}/user/`,
        save: `${API.SERVER}/user/save`,
        delete: `${API.SERVER}/user/delete`,
        login: `${API.SERVER}/user/login`,
        logput: `${API.SERVER}/user/logout`
    };
    static product = {
        get: `${API.SERVER}/product/`,
        save: `${API.SERVER}/product/save`,
        delete: `${API.SERVER}/product/delete`
    };
    static category = {
        get: `${API.SERVER}/category/`,
        save: `${API.SERVER}/category/save`,
        delete: `${API.SERVER}/category/delete`
    };
}