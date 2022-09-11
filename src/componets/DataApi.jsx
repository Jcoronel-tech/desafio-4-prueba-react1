import React, { useState, useEffect } from 'react'

const DataApi = () => {

    //Seteo de hooks de useState
    const [info, setinfo] = useState([]);
    const [search, setSearch] = useState("")
    const [filterDatos, setfilterDatos] = useState("");
    
    useEffect(() => {
        obtenerDatos();
    }, []);

    //Obtenemos Datos desde la api
    const obtenerDatos = async () => {
        const url = 'https://thronesapi.com/api/v2/Characters/';
        const res = await fetch(url);
        const data = await res.json();
        setinfo(data);
    }

    //Funcion de busqueda
    const searcher = (e) => {
        setSearch(e.target.value)
        setfilterDatos(e.target.value);
    } 
    //Metodo de filtrado
    let orderFilter = (e)=>{
    let listUpdate
    if ((e.target.value === "")){
        setinfo(info);
    }
    else if ((e.target.value) === "az"){
        listUpdate=[...info].sort((a,b)=>a.firstName > b.firstName ? 1 : -1,);
        setinfo(listUpdate);
    }
    else if ((e.target.value) === "za"){
        listUpdate=[...info].sort((a,b)=>a.firstName > b.firstName ? -1 : 1,);
        setinfo(listUpdate);
    }
    else if ((e.target.value) === "House Targaryen") {
        listUpdate=[...info].filter((dato) => dato.family.includes("House Targaryen"))
        setinfo(listUpdate);
    }
    else if ((e.target.value) === "House Stark") {
        listUpdate=[...info].filter((dato) => dato.family.includes("House Stark"))
        setinfo(listUpdate);
    }
    else if ((e.target.value) === "House Baratheon") {
        listUpdate=[...info].filter((dato) => dato.family.includes("House Baratheon"))
        setinfo(listUpdate);
    }
}

return (
    <div className='container'>  
        <div className="d-md-flex m-5">
            <div className="m-2 w-100 w-md-25">  
                <input      
                    type="text"
                    className="form-control"
                    placeholder="Busca tu personaje"
                    value={search}
                    onChange={searcher}
                />
            </div>
            <select className="form-select m-2 w-100 w-md-25" aria-label="Default select example" onChange={orderFilter}>
                <option value={-1}>Ordena por:</option>
                <option value="az">A - Z</option>
                <option value="za">Z - A</option>
            </select>
            <select className="form-select m-2 w-100 w-md-25" aria-label="Default select example" onChange={orderFilter}>
                <option value={-1}>Ordena por Casas</option>
                <option value="House Targaryen">House Targaryen</option>
                <option value="House Stark">House Stark</option>
                <option value="House Baratheon">House Baratheon</option>
            </select>
        </div>
            <div className='row'>
                {
                info.filter((dato)=> {
                    if(!search && !filterDatos){
                    return dato;
                    }
                    else if ((dato.firstName).toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                    {
                    return dato;
                    }
                    else{
                        console.log("sinFiltro");
                    }
                    }).map((item) => (
                    <div  key={item.id} className='col-12 col-md-3'>
                        <div  className="card">
                            <div className='card-inner'>
                                <div className='card-front'>
                                    <img src={item.imageUrl} alt='' />
                                </div>
                                <div className='card-back'>
                                    <h1>{item.fullName}</h1>
                                    <ul>                        
                                        <li>
                                            <strong>Title:</strong> {item.title}
                                        </li>
                                        <li>
                                            <strong>Family:</strong> {item.family}
                                        </li>                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    </div>
)}

export default DataApi