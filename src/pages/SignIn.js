import { Login } from "@mui/icons-material";
import React from "react";
import { Route } from "react-router-dom";
import LogInSide from "./LogInSide";

export default function SingIn() {
    return (
        <Route>
            <Route path="/signin" element={<LogInSide />} />
        </Route>
    );
}
