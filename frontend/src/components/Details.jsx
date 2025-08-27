import { useContext, useState } from "react";
import { APIContext } from "./Context";
import { useParams } from "react-router-dom"

function Details() {
  const { id } = useParams()
  return (
    <>
    <div>test{id}</div>
    </>
  );
}

export default Details;
