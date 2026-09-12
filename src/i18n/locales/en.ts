export const en = {
    common: {
        back: "Back",
    },

    header: {
        title: "SMOLIAROV Chat Agent",
        status: "online · replies quickly",
    },

    start: {
        label: "Before you start",
        title: "How can I help?",
        description:
            "Sign in to save your history and access your chats from any device. You can also continue anonymously.",
        login: "Sign in with email",
        anonymous: "Continue anonymously",
        policies: {
            prefix: "I accept the",
            privacy: "Privacy Policy",
            conjunction: "and",
            terms: "Terms of Service",
        },
    },

    auth: {
        emailStep: {
            label: "Authorization",
            title: "Enter email",
            description:
                "We will send a confirmation code to it to access your chat history.",
            send: "Send code",
            input: {
                label: "Email",
                placeholder: "you@example.com",
            },
        },
        emailVerificationStep: {
            label: "Confirmation",
            title: "Enter the code",
            description: "Code sent to",
            confirm: "Confirm code",
            resend: "Resend code",
            input: {
                labelGroup: "Verification code",
                label: (index: number, length: number) =>
                    `Digit ${index + 1} of ${length}`,
            },
        },
    },
}
