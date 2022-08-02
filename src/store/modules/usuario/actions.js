//credentials login e senha 

export const loginStart = (credentials) => ({
    type: '@usuario/LOGIN_START',
    credentials,
});

//objeto usuario

export const loginSuccess =(user) =>({
    type: '@usuario/LOGIN_SUCCESS',
    user,
});

export const loginFailure =(error) => ({
    type: '@usuario/LOGIN_FAILURE',
    error,
});


export const registerStart = (credentials)=> ({
    type: '@usuario/REGISTER_START',
    credentials,
});

export const registerSuccss = (user)=> ({
    type: '@usuario/REGISTER_SUCCESS',
    user,
});

export const registerFailure = (error)=> ({
    type: '@usuario/REGISTER_FAILURE',
    error,
});

export const logOut = () =>({
    type: '@usuario/LOG_OUT',
});