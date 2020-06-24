export const environment = {
    production: false,
    apiBaseUrl: "https://nclqbot.azurewebsites.net/api/Request/",
    selfUrl: "https://nclqbot-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "7520da05-6887-4d9d-9876-45bbf886ac78",
        clientId: "e976602e-4e43-4d96-ab82-fc98742bc4d0",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
