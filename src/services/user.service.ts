import http from '@/utils/api/http';
import { API_ENDPOINTS } from '@/utils/api/endpoints';
import { CoreApi } from '@/utils/api/core.api';
import { User,UsersResponse } from '@/interfaces/user.interface';
class UserService extends CoreApi{
    async fetchUsers(page: number): Promise<UsersResponse> {
        const { data } = await http.get(API_ENDPOINTS.USERS, {
            params: { page },
        });
        return data;
    }

    async fetchUserDetail(slug: string): Promise<User> {
        const { data } = await http.get(`${API_ENDPOINTS.USERS}/${slug}`);
        return data;
    }
}

export const userService = new UserService(API_ENDPOINTS.USERS)
