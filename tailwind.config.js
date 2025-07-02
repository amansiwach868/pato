module.exports = {
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.leading-trim-cap': {
                    'leading-trim': 'cap',
                    'text-edge': 'cap',
                },
            })
        },
    ],
}
  