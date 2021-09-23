import React from "react";
import Heroes from "../Components/Heroes";
import Navbar from "../Components/Navbar";
import SearchForm from "../Components/SearchForm";
import Team from "../Components/Team";

const Dashboard = () => {
    return (
        <main>
            <Navbar></Navbar>
            <Team></Team>
            <SearchForm></SearchForm>
            <Heroes></Heroes>
        </main>
    );
};

export default Dashboard;
