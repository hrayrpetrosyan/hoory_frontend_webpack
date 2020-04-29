export const errorMessages = {
    firstName: 'First name must containt at least 3 chars!',
    lastName: 'Last name must contain at least 3 chars!',
    email: 'Email is invalid!',
    password: 'Password must contain at least 8 chars and include at least one number',
};

export const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
