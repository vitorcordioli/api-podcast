import {IncomingMessage, ServerResponse} from 'http';
import {serviceListEpisodes} from '../services/list-episodes';
import { serviceFilterEpisodes } from '../services/filter-episodes';
import { FilterPodcastModel } from '../models/filter-podcast';

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content: FilterPodcastModel = await serviceListEpisodes();

    res.writeHead(content.statusCode, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(content.body));
    res.end();
};

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content: FilterPodcastModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(content.body));
    res.end();
};