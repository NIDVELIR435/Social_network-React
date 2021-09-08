import * as axios from "axios";

const instance = axios.create({                                   //? создали базовые параметры для запросов axios
   withCredentials: false,                                        //? отключил передачу куки
   baseURL: 'http://localhost:3000/UsersPage__List',              //? базовый адрес
})

export const UserAPI = {                                          //? обьект у которого методы дают запросы на сервер, в ветку списка пользователей

   getUsersList(currentPage, pageSize) {
      return instance.get(`?_page=${currentPage}&_limit=${pageSize}`)
         .then(response => { return response })              //*убираем с ответа всю информацию кроме данных
   },
   followStatus(id, status) {                                             //* запрашивает оприделенного пользователя
      return instance.patch(`/${id}`, { followed: status })
         .then(response => { return response.data })              //*убираем с ответа всю информацию кроме данных
   },
   getUsersFromMemberPage(id) {                                             //* запрашивает оприделенного пользователя
      return instance.get(`/${id}`)
         .then(response => (response.data))                          //*убираем с ответа всю информацию кроме данных
   },
};