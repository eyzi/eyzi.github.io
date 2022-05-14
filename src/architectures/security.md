# Introduction

Security procedures are in place to keep unauthorized access to
private information or actions.

One of the prime enemy of security is knowing who knows what.

## Password

simplest implementation.

problem: it's easy for someone intercept your request to know your
password

## Encrypted Password

even if someone intercepts your request, they wouldn't know what your
actual password is.

problem: they can just send the same request to pretend to be you

## Two Step Authentication

pick any two from the following:

- something you know (password, security questions)
- something you have (TOTP)
- something you are (biometrics)

problem: complicated, but not impossible to intercept

## OAuth2

eliminate user from exchange and allow server-to-server communication

## Proof Key of Code Exchange
