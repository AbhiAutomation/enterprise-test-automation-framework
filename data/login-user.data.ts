/**
 * Reads login credentials from environment variables.
 *
 * Returns a User object.
 *
 * Advantage:
 * Credentials are never hardcoded in tests.
 */

/**
 * Returns application login credentials.
 */

import { User } from "./login-user.interface"
 export function getUserData() :User
{
    return {
        email: process.env.EMAIL || "",
        password: process.env.PASSWORD || ""
    }
}