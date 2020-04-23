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
        console.log("this is being called");
        axios
            .get(`http://localhost:5000/api/dojo/list?id=${user.id}`)
            .then((response: AxiosResponse<IBasicDojoInfo>) => {
                setDojos(response.data);
            });
    }, [user]);

    return (
        <ContainerWithRows>
            {dojos &&
                dojos.map((dojo: IBasicDojoInfo) => {
                    return <DojoBasic key={dojo.id} dojo={dojo} />;
                })}
        </ContainerWithRows>
    );
};

export default DojoList;
