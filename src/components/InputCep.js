import React, {useState} from 'react';
import InputField from './Input';
import Titulo from "./Title";

function InputCep() {

    const [cep, setCep] = useState({});
    const [inputCep, setInputCep] = useState(0)

    function handleTextChange(e) {
        document.getElementById("searchCep").disabled = true;
        e.preventDefault();
        setInputCep(pState => e.target.value);
        if (inputCep.length === 7) {
            document.getElementById("searchCep").disabled = false;
        }
    }
    
    function buttonSubmit() {
        fetch(`https://viacep.com.br/ws/${inputCep}/json/`)
        .then(res => res.json())
        .then(res => setCep(res))
        
        console.log(cep)
    }
    
    return (
        <div>
            <Titulo />
            <div style={{marginBottom: "20px", alignItems: "center", display: "flex", justifyContent: "center"}}>
                <InputField 
                    type="text"
                    placeholder="Digite o seu CEP"
                    maxLength="8"
                    onChange={handleTextChange} 
                    />
                <button
                    id="searchCep"
                    onClick={buttonSubmit}
                    >
                    Pesquisar
                </button>
            </div>
            <div style={{backgroundColor:"#eee", width: "1000px", margin: "auto", borderRadius: "4px", paddingTop: "20px", paddingBottom: "20px"}}>
                <InputField placeholder="Cidade" value={cep.localidade} label={"Cidade"} />
                <InputField placeholder="Bairro" value={cep.bairro} label={"Bairro"} />
                <InputField placeholder="Endereço" value={cep.logradouro} label={"Endereço"} />
                <InputField placeholder="UF" value={cep.uf} label={"UF"} />
                <InputField placeholder="Complemento" value={cep.complemento} label={"Complemento"} />
            </div>

        </div>
    );
}

export default InputCep;