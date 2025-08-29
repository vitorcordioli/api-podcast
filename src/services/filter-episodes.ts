import { repoPodcast } from "../repositories/podcasts-repository";
import { FilterPodcastModel } from "../models/filter-podcast";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<FilterPodcastModel> => {
    let responseFormat: FilterPodcastModel = {
        statusCode: StatusCode.OK,
        body: []
    };

    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repoPodcast(queryString);

    if (data.length > 0) {
        responseFormat.statusCode = StatusCode.OK;
    } else {
        responseFormat.statusCode = StatusCode.NO_CONTENT;
    }

    responseFormat.body = data;
    return responseFormat;
};
