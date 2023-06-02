/**
 * Environment for PRODUCTION
 */
import {Routes} from "./routes";

export const environment = {
    environment_name: 'production',
    production: true,
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
