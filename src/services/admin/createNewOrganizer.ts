import type { AxiosError } from 'axios';
import type { apiResponseError } from '../../server/apiResponse';
import api from '../../server/api';
import ApiRoutesName from '../../constants/apiRoutesName';
import { getLocalStorageToken } from '../../utils/localStorageToken';
import type { User } from '../../types/User';

type createNewOrganizerDTO = {
    name: 'Joaozinho da feira';
    cpf: '00000000000';
    email: 'joazin@dafeira.com';
    password: 'password';
    password_confirmation: 'password';
};

type CreatedOrganizerResponseAPI = {
    message: string;
    user: User;
};

export async function createNewOrganizer(
    newOrganizerData: createNewOrganizerDTO
) {
    try {
        const response = await api.post(
            ApiRoutesName.admin.createNewOrganizerUser,
            {
                ...newOrganizerData,
            },
            {
                headers: {
                    Authorization: getLocalStorageToken(),
                },
            }
        );

        return response.data as CreatedOrganizerResponseAPI;
    } catch (err) {
        const error = err as AxiosError<apiResponseError>;
        throw error;
    }
}
