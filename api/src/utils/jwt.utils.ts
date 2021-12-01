import jwt from "jsonwebtoken"

const privateKey = `
-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQCYX6xRBQkp6NZUQJaqtpMOI6VLCcYedY/DQUOsQeb4kgJTdh3T
lflFa5zvgRxDUj7PN+1IidQaYCIEmLOzMFn47A2yhJW6NQgCdL5vBZXf/wqY9lCg
03gw+POuETUbjNigLQtp+OpckSQvAFxlYORjbWSuzCMfL81PgSpFnvx4vwIDAQAB
AoGAe7TY+mIjQXI2Z+qUJ/7YPxdzgAtsXJhHYldfML/EXDR2TPpNVtWgrdqja9Mf
dgyUz7lxHH5BxDQeCitLYYQ01l+Bwd+30xoNwV7lTS0+RjvgCvrsA65taBrPulfn
1fDrQX9bOeTMBIzJjDyFEpZwR8fmc28qcG8O4aFPYiO2mDkCQQDcHqsVwL80HUPx
9tX+KAmLd2ybYN6INme02XtlFlZtCPLS5tvlGDydNIeX1w6l+G35GRHfKJvCOuMA
qB41ZUoTAkEAsTYLHb37nX61ABqM+8TUjNy9fvlUq0IjwfqZyr5uoYaKuy4tNGO6
/wuRzgaBShDz3F/X4usl0KlCniutMpysJQJBAIgSSU6ULV6I7NSp8xU/KM9XTwMq
OcZYY3mPq9EMovaaPomTfsG7XtULgPqjTgHZdhoznjGmh8rk3iksxCfb6pMCQQCn
iUdzI/TozizC31cgg9LLJboFfCVfD9WMg6a4NdeT4AXyttJH8G2OyFpdZGsBIgva
8cXBo7yJjCwOK47ABbz9AkAuV1xYv2NRjzH96FK8ZwuqGRMFdlaKF2AuViP1+8rN
F0H5B92JMYRfoABrk5cjxS0SzjilUApqioI0LSMGxbsK
-----END RSA PRIVATE KEY-----`

const publicKey = `
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCYX6xRBQkp6NZUQJaqtpMOI6VL
CcYedY/DQUOsQeb4kgJTdh3TlflFa5zvgRxDUj7PN+1IidQaYCIEmLOzMFn47A2y
hJW6NQgCdL5vBZXf/wqY9lCg03gw+POuETUbjNigLQtp+OpckSQvAFxlYORjbWSu
zCMfL81PgSpFnvx4vwIDAQAB
-----END PUBLIC KEY-----`

export function signJWT(payload: object, expiresIn: string | number) {
  return jwt.sign(payload, privateKey,  { algorithm: "RS256", expiresIn })
}
export function verifyJWT(token: string) {
  try {
    const decode = jwt.verify(token, publicKey)
    return {
      payload: decode,
      expired: false
    }
  } catch (error) {
    return {
      payload: null,
      expired: error.message.includes("jwt expired")
    }
  }
}