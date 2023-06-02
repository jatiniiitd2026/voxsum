module.exports = {
    purge: {
        enabled: true,
        content: ["./src/**/*.{html,ts,json}"]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            maxWidth: {
                '200': '200px',
                '1235': '1245px',
                '1440': '1440px'
            },
            container: {
                padding: '1rem',
                center: true
            },
            fontFamily: {
                'NeutraText-Bold': ['NeutraText-Bold'],
                'NeutraText-BoldItalic': ['NeutraText-BoldItalic'],
                'NeutraText-Regular': ['NeutraText-Regular'],
                'NeutraText-RegularItalic': ['NeutraText-RegularItalic'],
                'TrimPosterCompressed': ['TrimPosterCompressed']
            },
            colors: {
                'primary-color': '#009fde',
                'secondary-color': '#8A2742',
                'tertiary-color': '#009fde',
                'plain-color': '#FFFFFF',
                'Rosewood-color': '#4d0304',
                'Vivid-Burgundy-color': '#a60835',
                'Space-Cadet-color': '#332b58',
                'Silver-color': '#c4c4c4',
                'Dark-Orange-color': '#ff8e1c',
                'dark-grey-color' : '#262223',
                'black-color' : '#000000',
                'faq-color': '#ffffffc7',
                'asterisk-color': '#ff0000',
                'hover-color': '#e6b436',
            },
        },
        screens: {
            'zero': '0px',
            'mob': '426px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
            'full': '1920px',
        },
        borderWidth: {
            '1': '1px',
            '5': '5px'
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
