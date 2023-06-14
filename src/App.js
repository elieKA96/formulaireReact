import { useState } from "react";

function App() {

  const [user, setUser] = useState({
    name: '',
    age: null
  });

  const [userList, setUserList] = useState([]);

  // deuxieme possibilite
  function handleClick(e){
    e.preventDefault();
    const newUserList = [ ...userList, { ...user}];
    setUserList(newUserList);
  }

  function handleInput(e){
    let value = e.target.value;
    let name = e.target.name;
    if( name === 'age'){
      value = +value;
    }
    setUser({
      ...user,
      [name]:value
    })
    /* les chiffre sont considerés comme des chaines de caracteres
    setUser({
      ...user,
      [e.target.name]:e.target.value
    });*/
  }

  function handleClickDeleteUser(index){
    //userList.splice(index,1);
    const newUserList = userList.filter( (u,i) => i !== index);
    setUserList(newUserList);
  }

  function handleClickSort(){
    const newUserList = [ ...userList];
    newUserList.sort((a,b) => a.name.localeCompare(b.name));
    setUserList(newUserList);
  }

  // la premiere possibilité
  /* 
  function handleClick(e){
    e.preventDefault();
    console.log(user);
  }

  function handleAge(e){
    const value = +e.target.value;
    setUser({
      ...user,
      age:value
    });

  }

  function handleName(e){
    const value = e.target.value;
    setUser({
      ...user,
      name:value
    });

  }
  
  <form className="d-flex flex-column card p-20">
      <input onInput={handleName} className="mb-20" type="text" placeholder="Nom"/>
      <input onInput={handleAge}  className="mb-20" type="number" />
      <button onClick={handleClick} className="btn btn-primary">Submit</button>
    </form>
  
  
  */

  return (
   <div className="d-flex flex-column justify-content-center align-items-center p-20">
    <form className="d-flex flex-column card p-20 mb-20">
      <input 
        onInput={handleInput} 
        className="mb-20" 
        name="name"
        type="text" 
        placeholder="Nom"/>
        
      <input 
        onInput={handleInput}  
        className="mb-20" 
        name="age"
        type="number" />
        
      <button onClick={handleClick} className="btn btn-primary">Submit</button>
    </form>
    <button onClick={handleClickSort} className="btn btn-reverse-primary mb-20">Trier La Liste</button>
    <ul className="d-flex flex-column card p-20">
      { userList.map( (u, index) => 
      <li className="mb-20 d-flex flex-row" key={u.id}>
        <span className="mr-5 flex-fill">{u.name }</span>
        <button onClick={ () => handleClickDeleteUser(index)} className="btn btn-primary">delete</button>
        </li>)}
    </ul>
   </div>
  );
}

export default App;
