import React, { useEffect, useContext } from "react";
import { ContainerWithRows } from "../styled-components/Reusables";
import DojoBasic from "./DojoBasic";
import { UserContext } from "../context/UserContextProvider";
import { DojoContext } from "../context/DojoContextProvider";
import { IBasicDojoInfo } from "../../static/util/interfaces";
import axios, { AxiosResponse } from "axios";

interface Props {}

const DojoList = (props: Props) => {
    const [dojos, setDojos] = useContext(DojoContext);
    const [user, setUser] = useContext(UserContext);

    useEffect(() => {
        axios.get("https://localhost:5001/api/dojo/list").then((response: AxiosResponse<IBasicDojoInfo>) => {
            setDojos(response.data);
        });
    }, []);

    const isDojoComplete = (id: number): boolean => {
        return user.completedDojos.includes(id);
    };

    return (
        <ContainerWithRows>
            {dojos &&
                dojos.map((dojo: IBasicDojoInfo) => {
                    return <DojoBasic key={dojo.id} dojo={dojo} isComplete={isDojoComplete(dojo.id)} />;
                })}
        </ContainerWithRows>
    );
};

export default DojoList;
