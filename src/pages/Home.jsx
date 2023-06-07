import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserName } from "../store/slices/UsersName.slice";
import Footer from "../components/Footer";

const Home = () => {

  const [name, setName] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = () => {
    dispatch(getUserName(name))
    navigate("/pokedex")
  }

  return (
    <>
    <div className="home">
      <div>
        <img src="/pokedex.png" alt="ash" className="pokedex-img"/>
      </div>

      <div className="home-intro">
        <h2>¡Hello trainer!</h2>
        <p>Give me your name to start</p>
      </div>
      
      <div className="home-form">
        <form onSubmit={ () => handleSubmit()} className="form-btn">
          
          <div className="form-input">
            <input 
            type="text" 
            name="userName"
            id="user-name"
            value={ name }
            onChange={ e => setName(e.target.value)}
            required
            placeholder="your name...."
            />
          </div>

          <button type="submit" className="form-button">Start</button>

        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Home;