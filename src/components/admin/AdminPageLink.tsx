import React, { useState, Fragment, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { UserDataContext } from "../context/UserDataContextProvider";

const AdminLinkWrapper = styled.div`
    position: fixed;
    top: 85%;
    left: 3%;
    color: #dc3545;

    & :hover {
        cursor: pointer;
    }
`;

interface Props {}

const AdminPageLink = (props: Props) => {
    const history = useHistory();

    const [spin, setSpin] = useState<boolean>(false);

    const { user } = useContext(UserDataContext);

    const redirect = () => {
        history.push("/admin");
    };

    return (
        <Fragment>
            {user && user.isAdmin && (
                <AdminLinkWrapper
                    onClick={redirect}
                    onMouseEnter={() => setSpin(true)}
                    onMouseLeave={() => setSpin(false)}
                >
                    <FontAwesomeIcon icon={faCog} size="3x" spin={spin} />
                </AdminLinkWrapper>
            )}
        </Fragment>
    );
};

export default AdminPageLink;
