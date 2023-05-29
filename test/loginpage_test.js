import LoginPage from "../Pages/LoginPage.js";
import dotenv from "dotenv";

describe("Testing Login ...", function(){
    const env = dotenv ? dotenv.config() : {};
    const login = new LoginPage();
    const credentials = {
        user:"admin@email.com",
        password: "password"
    }
    const tool = "ADMIN";

    before(function(){
        //console.log("BEFORE",env.parsed.loginurl)
    });

    it('Go to the URL', async function(){
        await login.enter_url(env.parsed.loginurl);
    });

    it('Enter Login and Password', async function(){
        await login.login_process(credentials);
    });

    it('Select ADMIN tool', async function(){
        await login.select_tool(tool);
        await login.click_logout();
    });

    after(async function(){
        await login.close_url();
    })
})