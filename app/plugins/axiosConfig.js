let allowRegister = true;

export default function ({app, $axios, redirect, error}) {
  if (allowRegister) {
    $axios.onError(error => {
      const code = parseInt(error.response && error.response.status);
      if (code === 401 && app.$auth.loggedIn) {
        app.$cookies.remove('expTokenTime');
        app.$auth.logout().finally(()=>{
          redirect('/login');
        });
      }
    });
    allowRegister = false
  }
}