// 1
const donateButton = document.getElementById('addMoney');
const modal = document.getElementById('success-modal');
const closeModal = document.getElementById('close-modal');

donateButton.addEventListener('click', function(){
    const donation = parseFloat(document.getElementById('donate').value)

    if(donation > 0 || donation ==! 'number'){

        const donatedMoney= parseFloat(document.getElementById('donated-money').innerText)
    const totalMoney = parseFloat(document.getElementById('total-money').innerText)

    const donatedTotalMoney = donation + donatedMoney
    document.getElementById('donated-money').innerText = donatedTotalMoney

    const minusMoney = totalMoney-donatedMoney
    document.getElementById('total-money').innerText= minusMoney
     
    // show modal
    modal.showModal()
   
    console.log( minusMoney)

    }
    else{
        alert("Please enter a valid donation amount");
    }

    closeModal.addEventListener('click', function(){
        modal.close()
    })
    
})

// 2
const donateButton2 = document.getElementById('addMoney2');


donateButton2.addEventListener('click', function(){
    const donation2 = parseFloat(document.getElementById('donate2').value)
    if(donation2 > 0 || donation2 ==! 'number'){

        const donatedMoney2= parseFloat(document.getElementById('donated-money2').innerText)

        const totalMoney2 = parseFloat(document.getElementById('total-money').innerText)

        const donatedTotalMoney2 = donation2 + donatedMoney2
        document.getElementById('donated-money2').innerText = donatedTotalMoney2

        const minusMoney2 = totalMoney2-donatedMoney2
        document.getElementById('total-money').innerText= minusMoney2

        // show modal
    modal.showModal()

        console.log(minusMoney2 )
    }
    else{
        alert("Please enter a valid donation amount");
    }

    closeModal.addEventListener('click', function(){
        modal.close()
    })
   
})

// 3
const donateButton3 = document.getElementById('addMoney3');

donateButton3.addEventListener('click', function(){
    const donation3 = parseFloat(document.getElementById('donate3').value)

    if(donation3 > 0 || donation3 ==! 'number'){

        const donatedMoney3= parseFloat(document.getElementById('donated-money3').innerText)

        const totalMoney3 = parseFloat(document.getElementById('total-money').innerText)

    const donatedTotalMoney3 = donation3 + donatedMoney3
    document.getElementById('donated-money3').innerText = donatedTotalMoney3

    const minusMoney3 = totalMoney3-donatedMoney3
    document.getElementById('total-money').innerText= minusMoney3

    // show modal
modal.showModal()
    console.log( minusMoney3)
    }

    else{
        alert("Please enter a valid donation amount");
    }

    closeModal.addEventListener('click', function(){
        modal.close()
    })
    
})