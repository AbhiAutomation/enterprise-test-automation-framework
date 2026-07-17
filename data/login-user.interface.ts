/**
 * Represents the login credentials used by the framework.
 *
 * Interface ensures every user object contains
 * email and password.
 *
 * Used by:
 * login2.spec.ts
 * - Login tests
 */

export interface User {
    /** Login Email     */
    email: string;
    /** Login Password  */
    password: string;
} 