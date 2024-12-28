import jwt from "jsonwebtoken";

export const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d", 
    });

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // MS
        httpOnly: true, // prevents client-side JavaScript from accessing the cookie.
        sameSite: "strict", //cookie are sent to same site from which it is requested.
        secure: process.env.NODE_ENV !== "development",//if secure is true i.e it is in producton and cookies are transmitted over HTTPS not http
    });

    return token;
};