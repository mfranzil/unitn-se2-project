const winston = require('winston');

const config = require('@app/config');

// Read more about winston at https://github.com/winstonjs/winston

const transports = [];

if (process.env.NODE_ENV !== 'development') {
    transports.push(
        new winston.transports.Console({
            format: winston.format.simple()
        })
    );
} else {
    transports.push(
        new winston.transports.Console({
            format: winston.format.combine(winston.format.cli(), winston.format.splat())
        })
    );
}

const LoggerInstance = winston.createLogger({
    level: config.logs.level,
    silent: process.env.NODE_ENV === 'test',
    levels: winston.config.npm.levels,
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json()
    ),
    transports
});

module.exports = LoggerInstance;
