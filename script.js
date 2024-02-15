let titleContainers = document.querySelectorAll('.title-container');

titleContainers.forEach(function (element) {
    element.addEventListener('click', function () {
        let descriptionText = document.createElement('p');
        descriptionText.setAttribute('class', 'description');
        descriptionText.style.margin = '0';
        let descriptionContainers = document.querySelectorAll('.desc-container');
        let dropdownButtons = document.querySelectorAll('.dropdown-button');
        for (let i = 0; i < descriptionContainers.length; i++) {
           descriptionContainers[i].innerHTML = '';
           dropdownButtons[i].src = "assets/images/icon-plus.svg";
        }
        if(element.id === 'title-container1') {
           if(!descriptionContainers[0].hasChildNodes()) {
                descriptionText.textContent = `Frontend Mentor offers realistic coding challenges to help developers improve their 
                frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
                all levels and ideal for portfolio building.`;
                descriptionContainers[0].appendChild(descriptionText);
                dropdownButtons[0].src = "assets/images/icon-minus.svg";
            }
        }
        if(element.id === 'title-container2') {
            if(!descriptionContainers[1].hasChildNodes()) {
                 descriptionText.textContent = `Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
                 option providing access to a range of projects suitable for all skill levels.`;
                 descriptionContainers[1].appendChild(descriptionText);
                 dropdownButtons[1].src = "assets/images/icon-minus.svg";
             }
         }
         if(element.id === 'title-container3') {
            if(!descriptionContainers[2].hasChildNodes()) {
                 descriptionText.textContent = `  Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
                 way to showcase your skills to potential employers!`;
                 descriptionContainers[2].appendChild(descriptionText);
                 dropdownButtons[2].src = "assets/images/icon-minus.svg";
             }
         }
         if(element.id === 'title-container4') {
            if(!descriptionContainers[3].hasChildNodes()) {
                descriptionText.textContent = `The best place to get help is inside Frontend Mentor's Discord community. There's a help 
                channel where you can ask questions and seek support from other community members.`;
                descriptionContainers[3].appendChild(descriptionText);
                dropdownButtons[3].src = "assets/images/icon-minus.svg";
             }
        }
    });
});


