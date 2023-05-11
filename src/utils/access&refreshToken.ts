//@ts-nocheck
import jwt, { JwtPayload } from "jsonwebtoken";
import { decode } from "punycode";

const privateKey = `
-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAgdiT8NgjsgoFDhMsmNRoatJEytq7JgFhziIK+77EHCHH/GR1
4bMZlMAlsQ51IQR8RIPLCYlTPFSgTcP/DjCyadIWJ0LPmNCJHec+I5vc7gMLzsTo
GkizFjdVjUErReR+H1PCkexch4DXZYbOiyRDF0T1qdnrPt+FHmOyu1NDs2QkuWff
n6H//Q8fqlQOCORlmxcJviPZNf1rrLiuJCorLRNBBwe/NScw5Cdc8sUZnFAM05ng
ErMKYLo01RmUMq71SHzteRtTQGRs0T8W4LOEV0fX5tBqh1hZp0XcmBqmv+QKWrrc
dew1vwJM9HzXX4+BW77FSozFNWhoNvXEUhuACQIDAQABAoIBADjWI5PmGGHjbukF
TZ0sRPSVS9V7vzXYnwZK8oHVtCQYSWDaXJtJ+WWaYiVJjc3BF+ApzGNFQDEFXhIM
PAXrHP2jH11aKmLazVpQkWum2yM4JCADIxH2RqXv3LvzDc0PQoHV+TJEww/xPtfL
FXfkjJWP8vTBVe70imGOBHto7BaGnJt8WhYG7o4v3hgK0HOG4S+G8XUbii1jRKWc
DSxdhpAz+iaX07c6ZnOSb6jLHimw0bQueKpIhMqNN6A8hE+mgXp0Z5AAY4HmBGHR
3z1DYaeEmI+m+jpOsLBSIpaSJKshi988i36A19AheAmwJiV0zBtFG/Av4wjY9LPa
N9ow7YECgYEAv2LcbIhXKBJY5T5e/kctkawNijcmTh40r+cm3X87kxAzgMCPmp3Z
cw4B1oBWrJpwXurV/5Vt7aR0wh3fK7GPjiyHfep+LLy+n4yaNPWZnM7WtzodcIRa
1aJtSAGPCcybRMLLkAnQryLG0MNFq3NHyWRjNhlvW26U7Y9xtXyNsHECgYEAra7r
Iq7oyEo/UtjkZW6aWGfLUQiHoRdKETpnbayprO9G6IIQNmA5bLfuZnGfCyrX8p1G
ur5QjVGaklaHCGtSvadQwQB+AqoUBwHa9fgbUKzgP1N0jhMUsOyFYjlkIbDhLJqi
jixVlPgVZXrBd359aKHUPESvw2JKG8uD/TuMFRkCgYEArgrrRM+f4tL8gEx9+mMk
L4r1LTIF5ZhWdXiRwW/I724WSAnVDdhqPNUKGtTO/VvcwJRyU2DCfQ/HFhgwMP3h
/HrGJF2wrGJgP5uPSIXoUc9PN4Tj7MSQDiMNmiPAvjqRILC8iZpDamEHyCUsIERP
jfd6uWHcAJvJV1fRIifIeiECgYEAoHpAlHlcaMQBooD496esQQcWWzcwam3kZ+q4
6iNhW4Jy2B5k8HkUVhnU0x8kvuLFSUx8r8ttDkZaNeBxQBw6BTZ1bP8Rb1DK1Hao
ZCDszCwPvzNTPHrw4VCJJeq1VFPkmpv+mrLoGI7o5iz4WXqsUWNFgLJOXI+Svf/b
Yr4EfvECgYBUPA6O1JMFGRKwr1Jum6lo+Hrt5vd7oFHZTNso43/dB7g3UgGzlp0u
NO1o5oJi2PxnFlZ4TAH4KFltbZ+8UuVuAmqHFuVfve42z40x++FZ3jMr7Aujrik7
O6Q++fd5qZ4ttMCj3HfBu0I2QKKOr+RnfdluGh6yriQEn9HlDuf4Sg==
-----END RSA PRIVATE KEY-----`;

const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgdiT8NgjsgoFDhMsmNRo
atJEytq7JgFhziIK+77EHCHH/GR14bMZlMAlsQ51IQR8RIPLCYlTPFSgTcP/DjCy
adIWJ0LPmNCJHec+I5vc7gMLzsToGkizFjdVjUErReR+H1PCkexch4DXZYbOiyRD
F0T1qdnrPt+FHmOyu1NDs2QkuWffn6H//Q8fqlQOCORlmxcJviPZNf1rrLiuJCor
LRNBBwe/NScw5Cdc8sUZnFAM05ngErMKYLo01RmUMq71SHzteRtTQGRs0T8W4LOE
V0fX5tBqh1hZp0XcmBqmv+QKWrrcdew1vwJM9HzXX4+BW77FSozFNWhoNvXEUhuA
CQIDAQAB
-----END PUBLIC KEY-----`;

// sign jwt
export function signJWT(payload: object, expiresIn: string | number) {
  return jwt.sign(payload, privateKey, { algorithm: "RS256", expiresIn });
}

// verify jwt
export function verifyJWT(token: string) {
  try {
    const decoded = jwt.verify(token, privateKey);

    return { payload: decoded as JwtPayload, expired: false };
  } catch (error) {
    return { payload: null, expired: error.message.includes("jwt expired") };
  }
}
