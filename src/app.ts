import * as http from 'http';
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller';
import { Routes } from './routes/routes';
import { HttpMethods } from './utils/http-methods';

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {
    //querystring (texto para consulta)
    //http://localhost:3636/api/filter?p=flow
    const [baseUrl, queryString] = req.url?.split("?") || ["", ""]

    //listando os podcasts
    if (req.method === HttpMethods.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(req, res);
    } else if (req.method === HttpMethods.GET && baseUrl === Routes.FILTER) {
        await getFilterEpisodes(req, res);
    }
}