import LoginPage from "../Pages/LoginPage.js";
import dotenv from "dotenv";
import assert from 'assert';

describe("Testing Login ...", function(){
    const env = dotenv ? dotenv.config() : {};
    const login = new LoginPage();
    const credentials = {
        user:"admin@email.com",
        password: "password"
    }
    const tool = "ADMIN";

    before(async function(){
        await login.refresh_page();
    });

    it('should set URL and verify page title', async function(){
        await login.enter_url(env.parsed.loginUrl);
        const pageTitle = await login.get_page_title(); 
        //console.log(pageTitle)
        assert.strictEqual(pagetitle ? pagetitle.trim() : '', '<PageTitle>');
    });

    it('Should verify If Login and Password are isible', async function(){
        const sighinExists = await login.get_div_sigin(); 
        //console.log("EXISTE ", sighinExists)
        assert.equal(sighinExists, true);
    });

    it('Should enter login and password- credential - and verify cards tool', async function(){
        await login.login_process(credentials);
        const cardsTool = login.get_cards_tools();
        assert.equal(cardsTool, 'cards-tool');
    });

    it('Should select tool ADMIN and show dashboard admin', async function(){
        await login.select_tool(tool);
        const dashboardAdmin = login.get_dashboard_admin();
        assert.equal(dashboardAdmin, 'dashboard');  
    });

    it('Should logout and show logout page', async function(){
        await login.click_logout();
        const logoutPageTitle = login.get_logout_pageTitle();
        assert.equal(logoutPageTitle, 'logoutPageTitle');  
    });
    
    after(async function(){
        await login.close_url();
    })
})