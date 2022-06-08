import fetch from "node-fetch";
const CEPS = ['62980000', '63960000', '62900000', '63800000',
    '60025110', '62014102', '76870631', '53416420',
    '59084145', '60175551', '69104368', '51170901',
    '73005522', '76876702', '11702160'];

async function getInformationCEP(CEP) {
    try {
        let response = await fetch(`https://viacep.com.br/ws/${CEP}/json/`);
        if (!response.ok) { throw new Error(response.status); }
        let CEPsData = await response.json();
        return CEPsData;
    } catch (error) { console.error(error); }
}

function showInformationCEPs(CEPs) {
    console.time("time");
    try { CEPs.map(async cep => { console.log(await getInformationCEP(cep)); }) }
    catch (error) { console.error(error); }
    console.timeEnd("time");
}

showInformationCEPs(CEPS);






