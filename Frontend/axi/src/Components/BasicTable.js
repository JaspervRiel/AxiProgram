import React from 'react'
import {useState} from 'react'
import {useTable} from 'react-table'
import {COLUMNS} from './columns'
import {useMemo} from 'react'
function BasicTable(){
    const [producten, setProducten] = useState([])
    fetch('https://localhost:7157/api/Product').then(response => response.json())
    .then(json => setProducten(json));

    const columns = useMemo(() => COLUMNS,[])
    const tableInstance = useTable({
        columns: columns,
        data: producten
    })

    const{getTableProps, GetTableBodyProps, headerGroups, rows, prepareRows} = tableInstance

    return( 
        <table {...getTableProps()}>
            <thead>
                <tr>
                    <th>

                    </th>
                </tr>
            </thead>
            <tbody {...GetTableBodyProps()}>
                <tr>
                    <th>

                    </th>
                </tr>
            </tbody>

        </table>
    )
}
export default BasicTable