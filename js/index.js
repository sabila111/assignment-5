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

    const minusMoney = totalMoney-donation
    document.getElementById('total-money').innerText= minusMoney
     
    // show modal
    modal.showModal()
   
    // history section
    const dt = new Date()
    const noakhali = document.getElementById('noakhali-flood').innerText
    const historyContainer = document.createElement('div')
    historyContainer.className=' drop-shadow-lg border-2 p-8 rounded-xl mb-4'
    historyContainer.innerHTML= `
    <h3 class="font-bold text-xl mb-2">${donation} BDT is donated for ${noakhali}  </h3>
    <p class="text-gray-500">Date: ${dt} </p>
    `
    document.getElementById('history-container').appendChild(historyContainer)
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

        const minusMoney2 = totalMoney2-donation2
        document.getElementById('total-money').innerText= minusMoney2

        // show modal
    modal.showModal()

       
 // history section
 const dt = new Date()
 const feni = document.getElementById('feni-flood').innerText
 const historyContainer2 = document.createElement('div')
 historyContainer2.className=' drop-shadow-lg border-2 p-8 rounded-xl mb-4'
 historyContainer2.innerHTML= `
 <h3 class="font-bold text-xl mb-2">${donation2} BDT is donated for ${feni}  </h3>
 <p class="text-gray-500">Date: ${dt} </p>
 `
 document.getElementById('history-container').appendChild(historyContainer2)

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

    const minusMoney3 = totalMoney3-donation3
    document.getElementById('total-money').innerText= minusMoney3

    // show modal
modal.showModal()
   
// history section
const dt = new Date()
const quota = document.getElementById('quota-movement').innerText
const historyContainer3 = document.createElement('div')
historyContainer3.className=' drop-shadow-lg border-2 p-8 rounded-xl mb-4'
historyContainer3.innerHTML= `
<h3 class="font-bold text-xl mb-2">${donation3} BDT is donated for ${quota}  </h3>
<p class="text-gray-500">Date: ${dt} </p>
`
document.getElementById('history-container').appendChild(historyContainer3)



    }

    else{
        alert("Please enter a valid donation amount");
    }

    closeModal.addEventListener('click', function(){
        modal.close()
    })
    
})


// history tab


const historyTab = document.getElementById('history-tab')
const donationTab = document.getElementById('donation-tab')
historyTab.addEventListener('click', function(){

    historyTab.classList.add('bg-lime-300')
    historyTab.classList.remove('border-2')

    donationTab.classList.remove('bg-lime-300')
    donationTab.classList.add('border-2')

    document.getElementById('donation-section').classList.add('hidden')
    document.getElementById('history-section').classList.remove('hidden')
    console.log("Donation section hidden, history section shown");
})

donationTab.addEventListener('click', function() {
    donationTab.classList.add('bg-lime-300');
    donationTab.classList.remove('border-2');

    historyTab.classList.remove('bg-lime-300');
    historyTab.classList.add('border-2');

    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
    console.log("Donation section shown, history section hidden");
});


