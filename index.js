const fetch = require("node-fetch");
const CEPS = [59920000, 63430000, 63460000, 59930000, 63475000];
const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
}

async function getInformationCEP(CEP) {
    try {
        let response = await fetch(`https://viacep.com.br/ws/${CEP}/json/`, options);
        let CEPData = await response.json();
        return CEPData;
    } catch (error) {
        console.log("Erro" + error)
    }

}

async function writeInformationCEPs(listCEPs) {
    for (var i = 0; i < listCEPs.length; i++) {
        await delay(3);
        console.log(await getInformationCEP(listCEPs[i]));
    }
}

function delay(seconds) {
    return new Promise((resolve => {
        setTimeout(resolve, seconds * 1000)
    }))
}

writeInformationCEPs(CEPS);






