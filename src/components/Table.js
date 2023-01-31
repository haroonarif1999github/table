import React from "react";
import './Table.css'
import data from './../data/TableData';
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdExpandMore } from 'react-icons/md'
function Table() {
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th className="data">ID<MdExpandMore /></th>
                        <th className="data">NAME<MdExpandMore /></th>
                        <th className="data">USERNAME<MdExpandMore /></th>
                        <th className="data">EMAIL<MdExpandMore /></th>
                        <th className="data">PASSWORD<MdExpandMore /></th>
                        <th className="data">ADDRESS<MdExpandMore /></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr key={user.id}>
                            <td className="data">{user.id}</td>
                            <td className="data">{user.name}</td>
                            <td className="data">{user.username}</td>
                            <td className="data">{user.email} </td>
                            <td className="data">{user.password} </td>
                            <td className="data">{user.address} <BsThreeDotsVertical /></td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
