import * as axios from "axios";

const instance = axios.create({                                            //? создали базовые параметры для запросов axios
   withCredentials: false,                                                 //? отключил передачу куки
   baseURL: 'http://localhost:3000/UsersPage__List',                       //? базовый адрес
})

export const UserAPI = {                                                   //? обьект у которого методы дают запросы на сервер, в ветку списка пользователей

    async getUsersList(currentPage, pageSize) {
      let response = await instance.get(`?_page=${currentPage}&_limit=${pageSize}`)
         return response;                                                  //*убираем с ответа всю информацию кроме данных
   },
   async followStatus(id, status) {                                        //* запрашивает оприделенного пользователя
      let response = await instance.patch(`/${id}`, { followed: status })
         return response.data                                              //*убираем с ответа всю информацию кроме данных
   },
   async getUsersFromMemberPage(id) {                                      //* запрашивает оприделенного пользователя
      let response = await instance.get(`/${id}`)
         return response.data;                                             //*убираем с ответа всю информацию кроме данных
   },
   async patchStatusMember(id, status) {                                   //*отправляем новый статус определенного пользователя                    //* запрашивает оприделенного пользователя
      return instance.patch(`/${id}`, { status: status })
   },
};