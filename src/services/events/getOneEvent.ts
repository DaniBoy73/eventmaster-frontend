import type { AxiosError } from 'axios';
import ApiRoutesName from '../../constants/apiRoutesName';
import api from '../../server/api';
import { getLocalStorageToken } from '../../utils/localStorageToken';
import type { apiResponseError } from '../../server/apiResponse';
import type { EventInformationAPI } from '../../types/EventInformationAPI';

export async function getOneEvent(id: number) {
    try {
        const response = await api.get(ApiRoutesName.events.getOneEvent(id), {
            headers: {
                Authorization: getLocalStorageToken(),
            },
        });

        return response.data as EventInformationAPI;
    } catch (err) {
        const error = err as AxiosError<apiResponseError>;
        throw error;
    }
}

//SIMULATE REQUEST

// {
//   "id": 1,
//   "id_category": 1,
//   "id_local": 1,
//   "name": "O maior evento de todos os tempos",
//   "description": "Esse evento vai ser muito louco",
//   "date": "2003-11-12",
//   "time": "23:00:00",
//   "max_tickets_per_cpf": 5,
//   "category": {
//     "id": 1,
//     "name": "Concert"
//   },
//   "local": {
//     "id": 1,
//     "name": "Convention Center",
//     "street": "Av. Principal",
//     "number_street": "1000",
//     "neighborhood": "Centro",
//     "max_people": 5000
//   }
// }
