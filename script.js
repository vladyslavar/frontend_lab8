
function diappearing(item)
{
    item.style.animationName = "disappearingAnimation";
    item.style.animationDuration = "0.7s";
    item.style.animationFillMode = "forwards";
}
function appearing(person)
{
    person.style.display = "flex";
    person.style.animationName = "appearingAnimation";
    person.style.animationDuration = "0.7s";
    person.style.animationFillMode = "forwards";
}

window.addEventListener("load", main, false);
function main()
{
    var el1 = document.getElementsByClassName("scrolling-dot-first")[0];
    el1.onclick = func_first
    var el2 = document.getElementsByClassName("scrolling-dot-second")[0];
    el2.onclick = func_second
    var el3 = document.getElementsByClassName("scrolling-dot-third")[0];
    el3.onclick = func_third

    var allBut = document.getElementsByClassName("portfolio-menu-item-all")[0];
    allBut.onclick = func_all_portfolio;
    var popularBut = document.getElementsByClassName("portfolio-menu-item-popular")[0];
    popularBut.onclick = func_popular_portfolio;
    var latestBut = document.getElementsByClassName("portfolio-menu-item-latest")[0];
    latestBut.onclick = func_latest_portfolio;
    var folowingBut = document.getElementsByClassName("portfolio-menu-item-folowing")[0];
    folowingBut.onclick = func_folowing_portfolio;
    var upcomingBut = document.getElementsByClassName("portfolio-menu-item-upcoming")[0];
    upcomingBut.onclick = func_upcoming_portfolio;
}
function setColor(currentIndex)
{
    var allButtons = document.getElementsByClassName("portfolio-menu-item");

    for(var i = 0; i < allButtons.length; i++){
        allButtons[i].style.color = "#797979";
        allButtons[i].style.fontWeight = "normal";
        
    }
    var currentButton = document.getElementsByClassName("portfolio-menu-item")[currentIndex];
    currentButton.style.color = "#7146ff";
    currentButton.style.fontWeight = "bold";
    
}
function displaing(indexes)
{
    var allItems = document.getElementsByClassName("portfolio-item");
    for(var i = 0; i < allItems.length; i++){
        var isIndex = false;
        for(var j = 0; j < indexes.length; j++){
            if(i == indexes[j]){
                isIndex = true;
                break;
            }
        }
        if(isIndex){
            allItems[i].style.display = "none";
        }
        if(!isIndex){
            allItems[i].style.display = "flex";
        }
    }
}
function func_all_portfolio()
{
    var currentIndex = 0;
    displaing([]);
    setColor(currentIndex);
}
function func_popular_portfolio(){
    var currentIndex = 1;

    var indexes = [0, 4, 3];
    displaing(indexes);
    setColor(currentIndex);
}
function func_latest_portfolio(){
    var currentIndex = 2;
    var indexes = [2, 5]
    displaing(indexes)
    setColor(currentIndex);
}
function func_folowing_portfolio(){
    var currentIndex = 3;
    var indexes = [1, 3, 5]
    displaing(indexes);
    setColor(currentIndex);
}
function func_upcoming_portfolio(){
    var currentIndex = 4;
    var indexes = [0, 2, 3, 4]
    displaing(indexes)
    setColor(currentIndex);
}
function func_first()
    {
            //dots color
            var dot = document.getElementsByClassName("scrolling-dot-first")[0];
            dot.style.color = "#7146ff"; 
            var dot2 = document.getElementsByClassName("scrolling-dot-second")[0];
            var dot3 = document.getElementsByClassName("scrolling-dot-third")[0];
            dot2.style.color = "#707070"; 
            dot3.style.color = "#707070";

            //images
            var first_person_photo = document.getElementsByClassName("review-image-img1")[0];
            var second_person_photo = document.getElementsByClassName("review-image-img2")[0];
            var third_person_photo = document.getElementsByClassName("review-image-img3")[0];
            diappearing(second_person_photo);
            diappearing(third_person_photo);
            second_person_photo.style.display ="none";
            third_person_photo.style.display ="none";
            appearing(first_person_photo);
            
            //text
            var first_person_text = document.getElementsByClassName("review-text1")[0];
            var second_person_text = document.getElementsByClassName("review-text2")[0];
            var third_person_text = document.getElementsByClassName("review-text3")[0];
            
            diappearing(second_person_text);
            diappearing(third_person_text);
            second_person_text.style.display ="none";
            third_person_text.style.display ="none";
            appearing(first_person_text);
            
    }

function func_second()
    {
            //dots color
            var dot = document.getElementsByClassName("scrolling-dot-second")[0];
            dot.style.color = "#7146ff"; 
            var dot1 = document.getElementsByClassName("scrolling-dot-first")[0];
            var dot3 = document.getElementsByClassName("scrolling-dot-third")[0];
            dot1.style.color = "#707070"; 
            dot3.style.color = "#707070";

            //images
            var first_person_photo = document.getElementsByClassName("review-image-img1")[0];
            var second_person_photo = document.getElementsByClassName("review-image-img2")[0];
            var third_person_photo = document.getElementsByClassName("review-image-img3")[0];
            diappearing(first_person_photo);
            diappearing(third_person_photo);
            first_person_photo.style.display ="none";
            third_person_photo.style.display ="none";
            appearing(second_person_photo);

            //text
            
            var first_person_text = document.getElementsByClassName("review-text1")[0];
            var second_person_text = document.getElementsByClassName("review-text2")[0];
            var third_person_text = document.getElementsByClassName("review-text3")[0];
            
            diappearing(first_person_text);
            diappearing(third_person_text);
            first_person_text.style.display ="none";
            third_person_text.style.display ="none";
            appearing(second_person_text);
            

    }
    function func_third()
    {
            //dots color
            var dot = document.getElementsByClassName("scrolling-dot-third")[0];
            dot.style.color = "#7146ff"; 
            var dot1 = document.getElementsByClassName("scrolling-dot-first")[0];
            var dot2 = document.getElementsByClassName("scrolling-dot-second")[0];
            dot1.style.color = "#707070"; 
            dot2.style.color = "#707070";

            //images
            var first_person_photo = document.getElementsByClassName("review-image-img1")[0];
            var second_person_photo = document.getElementsByClassName("review-image-img2")[0];
            var third_person_photo = document.getElementsByClassName("review-image-img3")[0];
            diappearing(first_person_photo);
            diappearing(second_person_photo);
            first_person_photo.style.display ="none";
            second_person_photo.style.display ="none";
            appearing(third_person_photo);

            //text
            
            var first_person_text = document.getElementsByClassName("review-text1")[0];
            var second_person_text = document.getElementsByClassName("review-text2")[0];
            var third_person_text = document.getElementsByClassName("review-text3")[0];
            
            diappearing(first_person_text);
            diappearing(second_person_text);
            first_person_text.style.display ="none";
            second_person_text.style.display ="none";
            appearing(third_person_text);
            

    }
