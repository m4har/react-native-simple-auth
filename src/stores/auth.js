import create from 'zustand';
import axios from 'axios';

const authStore = create(set => ({
  token: '',
  loading: false,
  postLogin: async payload => {
    try {
      set({loading: true});
      const response = await axios.post('https://reqres.in/api/login', payload);
      set({token: response.data.token, loading: false});
    } catch (error) {
      alert(error?.response?.data?.error || error);
      set({loading: false});
    }
  },
  postLogout: () => set({token: ''}),
}));

export default authStore;
