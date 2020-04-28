import React, { useContext, useEffect, Fragment } from "react";
import { DojoContext } from "../context/DojoContextProvider";
import { UserContext } from "../context/UserContextProvider";
import { IBasicDojoInfo } from "../../static/util/interfaces";
import axios, { AxiosResponse } from "axios";
import DojoList from "./DojoList";

interface Props {}

const DojoListContainer = (props: Props) => {
    const [dojos, setDojos] = useContext(DojoContext);
    const [user, setUser] = useContext(UserContext);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/dojo/list?id=${user.id}`)
            .then((response: AxiosResponse<IBasicDojoInfo>) => {
                setDojos(response.data);
            });
    }, [user]);

    return (
        <Fragment>
            {""}
            {dojos && <DojoList dojos={dojos} />}
        </Fragment>
    );
};

export default DojoListContainer;
