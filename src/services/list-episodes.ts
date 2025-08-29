import { FilterPodcastModel } from '../models/filter-podcast';
import { repoPodcast } from '../repositories/podcasts-repository';
import { StatusCode } from '../utils/status-code';

export const serviceListEpisodes = async (): Promise<FilterPodcastModel> => {
    //define contrato
    let responseFormat: FilterPodcastModel = {
        statusCode: StatusCode.OK,
        body: []
    };

    const data = await repoPodcast();

    //define o tipo de contrato
    if (data.length > 0) {
        responseFormat.statusCode = StatusCode.OK;
    } else {
        responseFormat.statusCode = StatusCode.NO_CONTENT;
    };

    responseFormat.body = data;
    return responseFormat;
};