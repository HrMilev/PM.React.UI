export const config = {
    authority: "https://localhost:5000",
    clientId: "React-Client",
    responseType: "code",
    redirectUri: "http://localhost:3000/",
    postLogoutRedirectUri: "http://localhost:3000/",
    scope: "openid PM.WebAPIAPI profile",
};
