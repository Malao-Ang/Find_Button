module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            animation: {
                'ping-ping': 'ping 3s linear 1',
            }
        },
    },
    plugins: [require("daisyui"), ],

}