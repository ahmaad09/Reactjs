import React, { useState } from "react";
import axios from "axios";
import Forgot from "../Button/Forgot";
import InputForm from "../Input/Index";
import Button from "../Button/Index";

const FormLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        window.location.href = "/dashboard";

        // setLoading(true);
        // setError(null);

        // try {
        //     const response = await axios.post("http://localhost:4000/users)", {
        //         username,
        //         password,
        //     });

        //     console.log("Login berhasil:", response.data);
        //     alert("Login berhasil!");

        //     localStorage.setItem("user", JSON.stringify(response.data.users));
        //     // window.location.href = "/dashboard"; 
        // } catch (err) {
        //     console.error("Error saat login:", err);
        //     setError(err.response?.data?.message || "Terjadi kesalahan saat login.");
        // } finally {
        //     setLoading(false);
        // }
    };

    return (
        <form onSubmit={handleLogin} className="flex flex-col" method="POST">
            <InputForm
                type="text"
                name="username"
                placeholder="Username"
                htmlFor="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <InputForm
                type="password"
                name="password"
                placeholder="Password"
                htmlFor="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500 text-center">{error}</p>}

            <Forgot>Forgot Account?</Forgot>

            <div className="flex justify-center w-full mt-4">
                <Button
                    classname="bg-yellow-500 text-white w-1/3 hover:bg-yellow-600"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Sign In"}
                </Button>
            </div>
        </form>
    );
};

export default FormLogin;