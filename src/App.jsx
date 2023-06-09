import React,{useState} from "react"

const tabelaIMC=()=>{
  return(
    <table border='1' style={{borderCollapse:'collapse'}}>
      <thead>
        <tr>
          <th>
            Classificação
          </th>
          <th>
            IMC
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Abaixo do Peso</td>
          <td>Abaixo do 18,5</td>
        </tr>
        <tr>
          <td>Peso Normal</td>
          <td>Entre 18,5 e 24,9</td>
        </tr>
        <tr>
          <td>Sobrepeso</td>
          <td>Entre 25 e 29,9</td>
        </tr>
        <tr>
          <td>Obesidade Grau 1</td>
          <td>Entre 30 e 34,9</td>
        </tr>
        <tr>
          <td>Obesidade Grau 2</td>
          <td>Entre 35 e 39,9</td>
        </tr>
        <tr>
          <td>Obesidade Grau 3</td>
          <td>Maior que 40</td>
        </tr>
      </tbody>
    </table>
  )
}

const formpeso=(peso,setpeso)=>{
  return(
    <div>
      <label>
        Peso 
        <input type="text" value={peso} onChange={(e)=> {setpeso(e.target.value)}} />
      </label>
    </div>
  )
}

const formAltura=(altura,setAltura)=>{
  return(
    <div>
      <label>
        Altura
        <input type="text" value={altura} onChange={(e)=> {setAltura(e.target.value)}} />
      </label>
    </div>
  )
}

const calculaImc = (peso,altura,setCalculo) => {
  const calc = () => {
    setCalculo(peso/(altura*altura))
  }
  return(
    <div>
      <button onClick={calc}>Calcular</button>
    </div>
  )
}

const fresultado =(resultado)=> {
  return (
    <div>
      <p>
        Resultado: {resultado.toFixed(2)}
      </p>
    </div>
  )
}



function App() {

  const [peso, setPeso] = useState(0)
  const [altura,setAltura] = useState(0)
  const [resultado, setResultado] =useState(0)


  return (
    <>
      {formpeso(peso, setPeso)}
      {formAltura(altura, setAltura)}
      {calculaImc(peso, altura, setResultado)}
      {fresultado(resultado)}
      {tabelaIMC()}
      </>
  )
}

export default App
