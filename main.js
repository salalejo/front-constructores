const API_URL= "https://constructores-sas.herokuapp.com"

const HTMLResponse = document.querySelector("#app");


function imprimirDatos(){
    const constructionType = document.getElementById("inputGroupSelect01");
    const selectedConstruction = constructionType.options[constructionType.selectedIndex].text
    const xCoordinate = document.getElementById("coordenadaX").value;
    const yCoordinate = document.getElementById("coordenadaY").value;
    const data = {
        constructionType:selectedConstruction,
        xCoordinate:parseInt(xCoordinate),
        yCoordinate:parseInt(yCoordinate)
    }

    alert(JSON.stringify(data))
}

async function postData(event) {

    event.preventDefault()
    const constructionType = document.getElementById("inputGroupSelect01");
    const selectedConstruction = constructionType.options[constructionType.selectedIndex].text
    const xCoordinate = document.getElementById("coordenadaX").value;
    const yCoordinate = document.getElementById("coordenadaY").value;
    const data = {
        constructionType:selectedConstruction,
        xCoordinate:parseInt(xCoordinate),
        yCoordinate:parseInt(yCoordinate)
    }
    
    //    await fetch(`${API_URL}/api/createcr`, {
    //     method: 'POST', 
    //     body: JSON.stringify(data),
    //     headers:{
    //       'Content-Type': 'application/json'
    //     }
    //   }).then(res => console.log(res))
    //   .then(response => console.log(response));

    axios({
        method: 'POST',
        url:`${API_URL}/api/createcr`,
        data:data
    }).then(res=>alert(res.data))
  }

  async function showReport(){
    axios({
        method: 'GET',
        url:`${API_URL}/api/informe`
    }).then(res=>{
        document.getElementById("modalisimo").innerHTML = res.data
    })
  }

  async function finishDate(){
      axios({
          method: 'GET',
          url:`${API_URL}/api/fechafinal`
      }).then(res=>{
        alert(res.data)
    })
  }



