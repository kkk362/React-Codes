import React from 'react'
import NameList from './NameList'

export default function App1() {
const myLists=["Raj","Abhay","Kumar","Subham"];
const Empid=[101,102];

const data=[
{"id":101,"name":"raj","salary":100000},
{"id":102,"name":"rajee","salary":1000050},
{"id":103,"name":"raj kumar","salary":1040000},
{"id":104,"name":"abhay","salary":1030000}

]




  return (
    <div>App1

        <NameList Name={myLists}  EmpId={Empid} Employee={data} ></NameList>
        {/* <NameList ></NameList> */}
    </div>

  )
}
