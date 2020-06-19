import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

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

    return (
        <AdminLinkWrapper onMouseEnter={() => setSpin(true)} onMouseLeave={() => setSpin(false)}>
            <FontAwesomeIcon icon={faCog} size="3x" spin={spin} />
        </AdminLinkWrapper>
    );
};

export default AdminPageLink;
