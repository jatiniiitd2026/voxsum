/**
 * Environment for Development (LOCAL)
 */
import {Routes} from "./routes";

export const environment = {
    environment_name: 'local/development',
    production: false,
    api: {
        base: 'http://localhost:8000',
        baseMicrosite: '/MucinexFastMax',
        redirectUri: `https://${location.hostname}/`,
        routes: Routes,
    },
    basicAuth: {
        username: 'MucinexFastMax',
        password: '6MtuRVpAJ%@R0*%q6FljDMM%Ocdt!#-LOCAL'
    }
};

