/**
 * Environment for STAGING
 */
import {Routes} from "./routes";

export const environment = {
    environment_name: 'staging',
    production: false,
    api: {
        base: `https://${location.hostname}`,
        baseMicrosite: '/MucinexFastMax',
        redirectUri: `https://${location.hostname}/`,
        routes: Routes,
    },
    basicAuth: {
        username: 'MucinexFastMax',
        password: '6MtuRVpAJ%@R0*%q6FljDMM%Ocdt!#-LOCAL'
    }
};

