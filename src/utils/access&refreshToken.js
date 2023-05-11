"use strict";
exports.__esModule = true;
exports.verifyJWT = exports.signJWT = void 0;
//@ts-nocheck
var jsonwebtoken_1 = require("jsonwebtoken");
var privateKey = "\n-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAgdiT8NgjsgoFDhMsmNRoatJEytq7JgFhziIK+77EHCHH/GR1\n4bMZlMAlsQ51IQR8RIPLCYlTPFSgTcP/DjCyadIWJ0LPmNCJHec+I5vc7gMLzsTo\nGkizFjdVjUErReR+H1PCkexch4DXZYbOiyRDF0T1qdnrPt+FHmOyu1NDs2QkuWff\nn6H//Q8fqlQOCORlmxcJviPZNf1rrLiuJCorLRNBBwe/NScw5Cdc8sUZnFAM05ng\nErMKYLo01RmUMq71SHzteRtTQGRs0T8W4LOEV0fX5tBqh1hZp0XcmBqmv+QKWrrc\ndew1vwJM9HzXX4+BW77FSozFNWhoNvXEUhuACQIDAQABAoIBADjWI5PmGGHjbukF\nTZ0sRPSVS9V7vzXYnwZK8oHVtCQYSWDaXJtJ+WWaYiVJjc3BF+ApzGNFQDEFXhIM\nPAXrHP2jH11aKmLazVpQkWum2yM4JCADIxH2RqXv3LvzDc0PQoHV+TJEww/xPtfL\nFXfkjJWP8vTBVe70imGOBHto7BaGnJt8WhYG7o4v3hgK0HOG4S+G8XUbii1jRKWc\nDSxdhpAz+iaX07c6ZnOSb6jLHimw0bQueKpIhMqNN6A8hE+mgXp0Z5AAY4HmBGHR\n3z1DYaeEmI+m+jpOsLBSIpaSJKshi988i36A19AheAmwJiV0zBtFG/Av4wjY9LPa\nN9ow7YECgYEAv2LcbIhXKBJY5T5e/kctkawNijcmTh40r+cm3X87kxAzgMCPmp3Z\ncw4B1oBWrJpwXurV/5Vt7aR0wh3fK7GPjiyHfep+LLy+n4yaNPWZnM7WtzodcIRa\n1aJtSAGPCcybRMLLkAnQryLG0MNFq3NHyWRjNhlvW26U7Y9xtXyNsHECgYEAra7r\nIq7oyEo/UtjkZW6aWGfLUQiHoRdKETpnbayprO9G6IIQNmA5bLfuZnGfCyrX8p1G\nur5QjVGaklaHCGtSvadQwQB+AqoUBwHa9fgbUKzgP1N0jhMUsOyFYjlkIbDhLJqi\njixVlPgVZXrBd359aKHUPESvw2JKG8uD/TuMFRkCgYEArgrrRM+f4tL8gEx9+mMk\nL4r1LTIF5ZhWdXiRwW/I724WSAnVDdhqPNUKGtTO/VvcwJRyU2DCfQ/HFhgwMP3h\n/HrGJF2wrGJgP5uPSIXoUc9PN4Tj7MSQDiMNmiPAvjqRILC8iZpDamEHyCUsIERP\njfd6uWHcAJvJV1fRIifIeiECgYEAoHpAlHlcaMQBooD496esQQcWWzcwam3kZ+q4\n6iNhW4Jy2B5k8HkUVhnU0x8kvuLFSUx8r8ttDkZaNeBxQBw6BTZ1bP8Rb1DK1Hao\nZCDszCwPvzNTPHrw4VCJJeq1VFPkmpv+mrLoGI7o5iz4WXqsUWNFgLJOXI+Svf/b\nYr4EfvECgYBUPA6O1JMFGRKwr1Jum6lo+Hrt5vd7oFHZTNso43/dB7g3UgGzlp0u\nNO1o5oJi2PxnFlZ4TAH4KFltbZ+8UuVuAmqHFuVfve42z40x++FZ3jMr7Aujrik7\nO6Q++fd5qZ4ttMCj3HfBu0I2QKKOr+RnfdluGh6yriQEn9HlDuf4Sg==\n-----END RSA PRIVATE KEY-----";
var publicKey = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgdiT8NgjsgoFDhMsmNRo\natJEytq7JgFhziIK+77EHCHH/GR14bMZlMAlsQ51IQR8RIPLCYlTPFSgTcP/DjCy\nadIWJ0LPmNCJHec+I5vc7gMLzsToGkizFjdVjUErReR+H1PCkexch4DXZYbOiyRD\nF0T1qdnrPt+FHmOyu1NDs2QkuWffn6H//Q8fqlQOCORlmxcJviPZNf1rrLiuJCor\nLRNBBwe/NScw5Cdc8sUZnFAM05ngErMKYLo01RmUMq71SHzteRtTQGRs0T8W4LOE\nV0fX5tBqh1hZp0XcmBqmv+QKWrrcdew1vwJM9HzXX4+BW77FSozFNWhoNvXEUhuA\nCQIDAQAB\n-----END PUBLIC KEY-----";
// sign jwt
function signJWT(payload, expiresIn) {
    return jsonwebtoken_1["default"].sign(payload, privateKey, { algorithm: "RS256", expiresIn: expiresIn });
}
exports.signJWT = signJWT;
// verify jwt
function verifyJWT(token) {
    try {
        var decoded = jsonwebtoken_1["default"].verify(token, privateKey);
        return { payload: decoded, expired: false };
    }
    catch (error) {
        return { payload: null, expired: error.message.includes("jwt expired") };
    }
}
exports.verifyJWT = verifyJWT;
