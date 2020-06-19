import React, { useContext, Fragment } from "react";
import { UserDataContext } from "../context/UserDataContextProvider";
import { CustomLink } from "../styled-components/Reusables";

interface Props {}

const AdminMenu = (props: Props) => {
    const { user } = useContext(UserDataContext);

    return (
        <Fragment>
            {user && user.isAdmin && (
                <div className="menu">
                    <div className="title">ADMIN</div>
                    <ul className="nav">
                        <li>
                            <CustomLink to="/admin/new-dojo">Add dojo</CustomLink>
                        </li>
                        <li>
                            <CustomLink to="/admin/statistics">Statistics</CustomLink>
                        </li>
                    </ul>
                </div>
            )}
        </Fragment>
    );
};

export default AdminMenu;
