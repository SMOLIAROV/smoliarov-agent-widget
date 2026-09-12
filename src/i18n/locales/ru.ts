import type { Dictionary } from "../types"

export const ru: Dictionary = {
    common: {
        back: "Назад",
    },

    header: {
        title: "SMOLIAROV Chat Agent",
        status: "онлайн · ответит быстро",
    },

    start: {
        label: "Перед началом",
        title: "Чем могу помочь?",
        description:
            "Войдите, чтобы сохранять историю и получать доступ к чатам с любого устройства. Можно продолжить анонимно.",
        login: "Войти по email",
        anonymous: "Продолжить анонимно",
        policies: {
            prefix: "Я принимаю",
            privacy: "Политику конфиденциальности",
            conjunction: "и",
            terms: "Пользовательское соглашение",
        },
    },

    auth: {
        emailStep: {
            label: "Авторизация",
            title: "Введите email",
            description:
                "Мы отправим на него код подтверждения для доступа к истории чатов.",
            send: "Отправить код",
            input: {
                label: "Email",
                placeholder: "you@example.com",
            },
        },
        emailVerificationStep: {
            label: "Подтверждение",
            title: "Введите код",
            description: "Код отправлен на",
            confirm: "Подтвердить код",
            resend: "Отправить код повторно",
            input: {
                labelGroup: "Код подтверждения",
                label: (index: number, length: number) =>
                    `Цифра ${index + 1} из ${length}`,
            },
        },
    },
}
