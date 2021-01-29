module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: "HafizhLab",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: "HafizhLab Frontend",
            },
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Scheherazade:wght@400;700&display=swap",
            },
        ],
    },
    /*
     ** Customize the progress bar color
     */
    loading: { color: "#3B8070" },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: "pre",
                    test: /\.(js|vue)$/,
                    loader: "eslint-loader",
                    exclude: /(node_modules)/,
                });
            }
        },
    },
    modules: ["@nuxtjs/pwa", "bootstrap-vue/nuxt", "@nuxtjs/axios"],
    axios: {
        BaseUrl: process.env.APP_BASE_API,
    },
    bootstrapVue: {
        icons: true,
    },
    css: ["~/assets/fonts/montserrat.css", "~/assets/fonts/kitab.css"],
};