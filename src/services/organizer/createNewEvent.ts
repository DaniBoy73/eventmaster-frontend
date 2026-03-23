import type { AxiosError, AxiosResponse } from 'axios';
import ApiRoutesName from '../../constants/apiRoutesName';
import api from '../../server/api';
import { getLocalStorageToken } from '../../utils/localStorageToken';
import type { apiResponse, apiResponseError } from '../../server/apiResponse';
import type { EventInformationAPI } from '../../types/EventInformationAPI';

// REQUEST SIMULATION

// "id_category":1,
// "id_local":1,
// "name":"O maior evento de todos os tempos",
// "description":"Esse evento vai ser muito louco",
// "date":"11/12/2003",
// "time":"23:00",
// "max_tickets_per_cpf":5

export type createNewEventDTO = {
    id_category: number;
    id_local: number;
    name: string;
    description: string;
    date: string;
    time: string;
    max_tickets_per_cpf: number;
};

export type newEventAPIResponse = {
    message: string;
    event: EventInformationAPI;
};

export async function createNewEvent(newEvent: createNewEventDTO) {
    try {
        const response = await api.post(
            ApiRoutesName.events.create,
            {
                ...newEvent,
            },
            {
                headers: {
                    Authorization: getLocalStorageToken(),
                },
            }
        );
        return response.data as AxiosResponse<apiResponse>;
    } catch (err) {
        const error = err as AxiosError<apiResponseError>;
        throw error;
    }
}
