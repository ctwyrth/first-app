import axios from 'axios';

class UserService {
   static getAllUsers() {
      let dataUrl = 'https://jsonplaceholder.typicode.com/users';

      return axios.get(dataUrl);
   }
}

export default UserService;