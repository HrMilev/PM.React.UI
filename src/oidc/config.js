export const config = {
    onSignIn: async (user) => {
        alert("You just signed in, congratz! Check out the console!");
        console.log(user);
        window.location.hash = "";
    },
    authority: "https://localhost:5000",
    clientId: "React-Client",
    responseType: "code",
    redirectUri: "http://localhost:3000/",
    postLogoutRedirectUri: "http://localhost:3000/",
    scope: "openid PM.WebAPIAPI profile",
};
