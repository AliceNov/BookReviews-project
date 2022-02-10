export const validation = {
    patternsValidators : {
        "email" : "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",
        "cyrillicLatinNumbers": "^[а-яА-ЯёЁa-zA-Z0-9]+$",
    },

    errorMessage : {
        "username" : [
            { type: "required", message: "Введите имя пользователя" },
            { type: "minlength", message: "Имя пользователя должно быть больше 4 символов" },
            { type: "maxlength", message: "Имя пользователя не может содержать больше 15 символов" },
        ],
        "name" : [
            { type: "required", message: "Введите имя" },
            { type: "minlength", message: "Имя должно содержать хотя бы 2 символа" },
            { type: "maxlength", message: "Имя не может содержать больше 20 символов" },
        ],
        "email" : [
            { type: "required", message: "Введите электронную почту" },
            { type: "email", message: "Неправильный формат почты" },
        ],
        "password": [
            { type: "required", message: "Введите пароль" },
            { type: "minlength", message: "Пароль долженсодержать больше 4 символов" },
            { type: "maxlength", message: "Пароль не может содержать больше 15 символов" },
            { type: "pattern", message: "Пароль должен содержать хотя бы одну строчную, одну заглавную буквы, и одну цифру" },
        ],
          "cpassword": [
            { type: "required", message: "Подтвердите пароль" },
            { type: "passwordNotMatch", message: "Пароли не совпадают" },
          ],
    },
};
