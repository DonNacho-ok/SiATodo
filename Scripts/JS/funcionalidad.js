const listaSiATodo = [
    `Si a Todo`,
    `Yes to All`,
    `console.log("si a todo");`,
    `Sipi apa topodopo`,
    `var fraseRepetitiva = "Si a Todo";`,
    `Ewe kuyo yonke into`,
    `ใช่สำหรับทุกสิ่ง`,
    `No'nt a Nada'nt`,
    `Oui á tout`,
    `بله به همه چیز`,
    `Odot a is`,
    `Vocablo que denota conformidad y confirmación 
    hacia la totalidad variable y optativa 
    que el individuo contemple`,
    `Ja zu allem`,
    `Se a tutto`,
    `Ae ki nga mea jkatoa`,
    `Да за све!`,
    `Iva għal kollox`,
    `yes tuwu aww`,
    `... .. / .- / - --- -.. ---`,
    `എല്ലാത്തിനും അതെ`,
    `Gnihtyreve ot sey`,
    `Ναι σε όλα`,
    `모든 것에 예`,
    `はい、すべてに`,
    `U2kgYSBUb2Rv`
];

$(function(){
    rotaFrases();
    window.setInterval(rotaFrases, 5000);
});

function rotaFrases(){
    $('#texto_SiATodo').fadeOut('slow', function(){
        $('#texto_SiATodo').text(listaSiATodo[Math.floor(Math.random()*listaSiATodo.length)]);
        $('#texto_SiATodo').fadeIn('slow');
    })
    
};