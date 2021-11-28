import React,{useState} from "react";
import AplicacionCrudForm from "./AplicacionCrudForm";
import AplicacionCrudTable from "./AplicacionCrudTable";



const inicialDb = [
    {
        "nombre": "Cynthia",
        "apellido": "Impini",
        "localidad": "Concepcion del Uruguay",
        "id": 1
      },
      {
        "nombre": "Goñi ",
        "apellido": " Martin",
        "localidad": "Caseros",
        "id": 2
      },
      {
        "nombre": "Tomas ",
        "apellido": "Ungefug",
        "localidad": " Capital Federal",
        "id": 3
      }
];

const AplicacionCrudApp = () => {
    const [db,setDb] = useState(inicialDb);
    
    const [dataToEdit, setDataToEdit] = useState(null);
    //si es null, inserta, sino edita
    
    const createData = (data) => {
        data.id = Date.now();
        setDb([...db, data]);
      };

    const updateData =(data)=>{
        let newData= db.map(el=>el.id ===data.id? data:el);
        setDb(newData);
    };

    const deleteData =(id) => {
        let isDelete = window.confirm(`"Esta seguro que quiere eliminar el ${id}`);

        if (isDelete){
            let newData = db.filter((el)=>el.id!==id);
            setDb(newData);
        }else{
            return;
        }
    };


   
  return (
    <div>
      <h2>CRUD App</h2>
        <AplicacionCrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <AplicacionCrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
    </div>
  );
};
export default AplicacionCrudApp;