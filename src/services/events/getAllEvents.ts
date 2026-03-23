import type { AxiosError } from 'axios';
import ApiRoutesName from '../../constants/apiRoutesName';
import api from '../../server/api';
import type { apiResponseError } from '../../server/apiResponse';
import { getLocalStorageToken } from '../../utils/localStorageToken';
import type { EventInformationAPI } from '../../types/EventInformationAPI';

type AllEventsInformationAPI = {
    current_page: number;
    data: EventInformationAPI[];
};

export async function getAllEvents() {
    try {
        const response = await api.get(ApiRoutesName.events.getAllEvents, {
            headers: {
                Authorization: getLocalStorageToken(),
            },
        });

        return response.data as AllEventsInformationAPI;
    } catch (err) {
        const error = err as AxiosError<apiResponseError>;
        throw error;
    }
}
