import { Navigate, Route,Routes } from "react-router-dom"
import HomePage from "./pages/HomePage";
import Layout from "./layouts/layout";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";

const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path="auth-callback" element={<AuthCallbackPage/>}/>
            <Route path="/" element={<Layout showHero><HomePage/></Layout>} /> //anything i add in layout tag is considered as children prop.
            <Route element={<ProtectedRoute/>}>
            <Route path="/user" element={<Layout><UserProfilePage/></Layout>} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;