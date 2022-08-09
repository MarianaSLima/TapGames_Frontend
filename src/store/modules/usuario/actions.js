//credentials login e senha 

export const loginStart = (credentials) => ({
    type: '@usuario/LOGIN_START',
    credentials,
});

//objeto usuario

export const loginSuccess = (user) =>({
    type: '@usuario/LOGIN_SUCCESS',
    user,
});

export const loginFailure = (error) => ({
    type: '@usuario/LOGIN_FAILURE',
    error,
});


export const registerStart = (credentials)=> ({
    type: '@usuario/REGISTER_START',
    credentials,
});

export const registerSuccess = (user)=> ({
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

export const updateStart = (credentials)=> ({
    type: '@usuario/UPDATE_START',
    credentials,
});

export const updateSuccess = (user)=> ({
    type: '@usuario/UPDATE_SUCCESS',
    user,
});

export const updateFailure = (error)=> ({
    type: '@usuario/UPDATE_FAILURE',
    error,
});