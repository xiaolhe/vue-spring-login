module.exports = {
        devServer: {
            port: 8067,
            https: false,
            hotOnly: false,
            disableHostCheck: true,
            proxy: {
                '/admin': {
                    target: 'http://192.168.1.15:8088',
                    changeOrigin: true,
                }
            }
        }
    }

